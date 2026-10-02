"use client";

import { useEffect, useRef } from "react";

// Hero photo card: 3D tilt toward the cursor, parallax zoom, a holographic sheen
// that follows the pointer, and a glare sweep on hover. Pure CSS variables + rAF.
export default function TiltPhoto({
  src,
  alt,
  labels,
  footer,
}: {
  src: string;
  alt: string;
  labels: { text: string; className: string; rot: number }[];
  footer?: React.ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0.5, y: 0.5, h: 0 };
    const cur = { x: 0.5, y: 0.5, h: 0 };
    let raf = 0;
    let t0 = performance.now();
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const tick = (now: number) => {
      // touch screens: drift slowly on their own so the sheen still moves
      if (coarse && target.h === 0) {
        const t = (now - t0) / 1000;
        target.x = 0.5 + Math.sin(t * 0.7) * 0.35;
        target.y = 0.5 + Math.cos(t * 0.5) * 0.3;
        target.h = 0;
      }
      const k = 0.12;
      cur.x += (target.x - cur.x) * k;
      cur.y += (target.y - cur.y) * k;
      cur.h += (target.h - cur.h) * 0.1;
      const s = el.style;
      s.setProperty("--mx", cur.x.toFixed(4));
      s.setProperty("--my", cur.y.toFixed(4));
      s.setProperty("--h", cur.h.toFixed(4));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      target.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    };
    const enter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      target.h = 1;
      el.classList.remove("sweep");
      void el.offsetWidth;
      el.classList.add("sweep");
    };
    const leave = () => {
      target.h = 0;
      target.x = 0.5;
      target.y = 0.5;
      t0 = performance.now();
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="tilt-stage h-full w-full">
      <div ref={wrap} className="tilt-card relative h-full w-full overflow-hidden rounded-[13px]">
        <div className="tilt-img absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover object-[50%_35%]" draggable={false} />
        </div>
        {/* readability + colour tints */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/25" />
        <div className="tilt-tint pointer-events-none absolute inset-0" />
        {/* holographic sheen that follows the cursor */}
        <div className="tilt-holo pointer-events-none absolute inset-0" />
        <div className="tilt-spot pointer-events-none absolute inset-0" />
        {/* one-shot glare sweep on hover */}
        <div className="tilt-glare pointer-events-none absolute inset-0" />

        {labels.map((l) => (
          <span
            key={l.text}
            className={`tilt-label pointer-events-none absolute select-none font-hand text-[26px] leading-none text-accent ${l.className}`}
            style={{ ["--r" as string]: `${l.rot}deg` }}
          >
            {l.text}
          </span>
        ))}
        {footer}
      </div>
    </div>
  );
}
