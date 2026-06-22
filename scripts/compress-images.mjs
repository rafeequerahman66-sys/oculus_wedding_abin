// One-off image compressor. Run: node scripts/compress-images.mjs
// - Caps the longest edge at MAX_EDGE (these images never render larger than
//   ~760px CSS px; 1600 keeps retina/2x crisp while shedding weight).
// - Re-encodes JPEG/WebP in place at QUALITY.
// - Converts photographic PNGs to WebP (reports renames so code refs can update).
//
// Writes bytes in memory then overwrites with fs.writeFile + retry — avoids the
// Windows EPERM/"Invalid argument" issues seen with sharp.toFile / fs.rename when
// Defender or the Search indexer transiently locks freshly written files.
import { readdir, stat, unlink, writeFile, readFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MAX_EDGE = 1600;
const QUALITY = 80;
const PNG_TO_WEBP = new Set([
  "fact-film-digital.png",
  "vintage-cameras.png",
  "photographer-at-work.png",
]);

const resize = { width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Retry a write/unlink against transient Windows file locks (AV/indexer).
async function retry(fn, label) {
  for (let i = 0; ; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i >= 12) throw new Error(`${label} failed after retries: ${e.code || e.message}`);
      await sleep(250);
    }
  }
}

const files = await readdir(DIR);
let before = 0;
let after = 0;
const renames = [];

for (const file of files) {
  if (file.endsWith(".tmp")) {
    await unlink(join(DIR, file)).catch(() => {});
    continue;
  }
  const ext = extname(file).toLowerCase();
  const src = join(DIR, file);
  // Read into a buffer first so sharp/libvips never holds the file path open
  // (that handle is what collided with the in-place write on Windows).
  const input = await readFile(src);
  before += input.length;

  if (ext === ".jpg" || ext === ".jpeg") {
    const buf = await sharp(input).rotate().resize(resize).jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    await retry(() => writeFile(src, buf), file);
    after += buf.length;
  } else if (ext === ".webp") {
    const buf = await sharp(input).rotate().resize(resize).webp({ quality: QUALITY }).toBuffer();
    await retry(() => writeFile(src, buf), file);
    after += buf.length;
  } else if (ext === ".png" && PNG_TO_WEBP.has(file)) {
    const buf = await sharp(input).rotate().resize(resize).webp({ quality: QUALITY }).toBuffer();
    const out = join(DIR, basename(file, ".png") + ".webp");
    await retry(() => writeFile(out, buf), out);
    await retry(() => unlink(src), `unlink ${file}`);
    after += buf.length;
    renames.push([file, basename(out)]);
  } else if (ext === ".png") {
    const buf = await sharp(input).resize(resize).png({ compressionLevel: 9, palette: true }).toBuffer();
    await retry(() => writeFile(src, buf), file);
    after += buf.length;
  } else {
    after += input.length; // leave anything else untouched
  }
  process.stdout.write(".");
}

const mb = (n) => (n / 1024 / 1024).toFixed(2) + " MB";
console.log(`\nBefore: ${mb(before)}\nAfter:  ${mb(after)}\nSaved:  ${mb(before - after)} (${Math.round((1 - after / before) * 100)}%)`);
if (renames.length) {
  console.log("\nRenamed (update code references):");
  for (const [a, b] of renames) console.log(`  ${a} -> ${b}`);
}
