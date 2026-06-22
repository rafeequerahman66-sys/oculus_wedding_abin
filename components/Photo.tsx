// Simple cover-fitting image. Photos are pre-sized (~1080px wide) so a plain
// <img> is plenty; the parent container supplies the box + clips overflow.

export default function Photo({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <img
      className="ph"
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
