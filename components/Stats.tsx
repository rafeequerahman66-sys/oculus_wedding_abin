"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/home";

// Count-up on scroll: 0 → target over 1700ms, easeOutCubic, fires once.
// Comma formatting via toLocaleString. Respects prefers-reduced-motion.
const DURATION = 1700;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function StatNum({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(() =>
    (0).toLocaleString("en-US") + suffix,
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const settle = () => setDisplay(target.toLocaleString("en-US") + suffix);

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      settle();
      return;
    }

    let raf = 0;
    let ran = false;
    const run = () => {
      if (ran) return;
      ran = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / DURATION);
        const val = Math.round(target * easeOutCubic(p));
        setDisplay(val.toLocaleString("en-US") + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
        else settle();
      };
      raf = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix]);

  return (
    <div ref={ref} className="stats__num">
      {display}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s) => (
          <div key={s.label}>
            <StatNum target={s.target} suffix={s.suffix} />
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
