"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowTopRightIcon, CheckIcon, CopyIcon } from "@radix-ui/react-icons";

const ease = [0.22, 0.7, 0.2, 1] as const;

/** Fades + slides a block up when it scrolls into view (once). */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

/** Card surface that lifts a little on hover. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`card h-full transition-[border-color] duration-300 hover:border-[#2c2c33] ${className}`}
      whileHover={{ y: -3, boxShadow: "0 14px 40px -12px rgba(0,0,0,0.55)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/** Name that types itself in letter by letter. */
export function LetterReveal({ text, className }: { text: string; className?: string }) {
  let k = 0;
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(word).map((ch) => {
            const i = k++;
            return (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.035, ease }}
              >
                {ch}
              </motion.span>
            );
          })}
          {(k++, w < text.split(" ").length - 1) && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/** Element that fades in after the name finishes. */
export function After({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function parse(v: string) {
  const m = v.match(/^([^0-9]*)([0-9][0-9,.\s ]*)(.*)$/);
  if (!m) return null;
  const n = parseFloat(m[2].replace(/[,\s ]/g, ""));
  if (isNaN(n)) return null;
  return { prefix: m[1], n, suffix: m[3], grouped: /[,\s ]/.test(m[2].trim()) };
}

/** Number that counts up from 0 when it scrolls into view, then a shimmer runs across it. */
export function CountUp({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [shown, setShown] = useState(value);
  const [shine, setShine] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    // language switch after the animation: just show the new value
    if (started.current) setShown(value);
  }, [value]);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const p = parse(value);
    if (!p) {
      const t = setTimeout(() => setShine(true), delay + 100);
      return () => clearTimeout(t);
    }
    let ctrl: { stop: () => void } | undefined;
    const t = setTimeout(() => {
      ctrl = animate(0, p.n, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (x) => {
          const r = Math.round(x);
          setShown(p.prefix + (p.grouped ? r.toLocaleString("en-US") : String(r)) + p.suffix);
        },
        onComplete: () => {
          setShown(value);
          setShine(true);
        },
      });
    }, delay);
    return () => {
      clearTimeout(t);
      ctrl?.stop();
    };
  }, [inView, value, delay]);

  return (
    <div ref={ref}>
      <div className="relative overflow-hidden">
        <div className="text-3xl font-semibold tracking-tight tabular-nums md:text-4xl">{shown}</div>
        {shine && <div aria-hidden className="counter-shimmer pointer-events-none absolute inset-0" />}
      </div>
      <div className="label mt-1.5 leading-snug">{label}</div>
    </div>
  );
}

/** Link that is pulled toward the cursor. */
export function Magnetic({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!window.matchMedia("(hover: hover)").matches || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

/** Social icon that grows on hover and shows a small tooltip. */
export function SocialIcon({ href, label, sub, children }: { href: string; label: string; sub: string; children: ReactNode }) {
  const [hover, setHover] = useState(false);
  const external = href.startsWith("http");
  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={label}
        className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-fg"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-[#18181b] px-2 py-1 font-mono text-[11px] text-fg"
          >
            {label} · {sub}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Email that copies itself to the clipboard. */
export function CopyEmail({ email, copied }: { email: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(email).catch(() => {});
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      }}
      className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
      aria-label={`Copy ${email}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.span
            key="ok"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-emerald-400"
          >
            {copied} <CheckIcon className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="mail"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            {email} <CopyIcon className="size-3.5 text-dim" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/** One row in the projects list with the hover choreography. */
export function ProjectRow({
  index,
  name,
  desc,
  href,
  badges,
  last,
}: {
  index: string;
  name: string;
  desc: string;
  href?: string;
  badges?: ReactNode;
  last?: boolean;
}) {
  const [h, setH] = useState(false);
  const Tag = href ? motion.a : motion.div;
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      onHoverStart={() => setH(true)}
      onHoverEnd={() => setH(false)}
      animate={{ backgroundColor: h ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`-mx-3 flex items-start justify-between gap-6 rounded-lg px-3 py-5 ${href ? "cursor-pointer" : "cursor-default"} ${
        last ? "" : "border-b border-line"
      }`}
    >
      <div className="flex min-w-0 items-start gap-4">
        <motion.span
          className="w-7 shrink-0 pt-1 font-mono text-sm"
          animate={{ color: h ? "#ff6a2b" : "#5c5c64" }}
          transition={{ duration: 0.25 }}
        >
          {index}
        </motion.span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="relative inline-block">
              <motion.span
                className="inline-block text-lg font-medium text-fg md:text-xl"
                animate={{ x: h ? 4 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {name}
              </motion.span>
              <motion.span
                className="absolute -bottom-0.5 left-1 block h-px bg-accent"
                initial={{ width: 0 }}
                animate={{ width: h ? "100%" : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </span>
            {badges}
          </div>
          <motion.p
            className="mt-1.5 max-w-xl text-[15px] leading-relaxed"
            animate={{ color: h ? "#e4e4e7" : "#8b8b93" }}
            transition={{ duration: 0.25 }}
          >
            {desc}
          </motion.p>
        </div>
      </div>
      {href && (
        <motion.span
          className="mt-1 shrink-0 text-accent"
          initial={{ opacity: 0, x: -4, rotate: -45 }}
          animate={{ opacity: h ? 1 : 0, x: h ? 0 : -4, rotate: h ? 0 : -45 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowTopRightIcon className="size-5" />
        </motion.span>
      )}
    </Tag>
  );
}

/** Sticky top bar that gains a blurred background once you scroll; plus a thin load bar. */
export function StickyHeader({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["rgba(11,11,12,0)", "rgba(11,11,12,0.72)"]);
  const border = useTransform(scrollY, [0, 100], ["rgba(31,31,35,0)", "rgba(31,31,35,1)"]);
  const pad = useTransform(scrollY, [0, 100], [26, 14]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(14px)"]);
  const [bar, setBar] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBar(false), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      {bar && (
        <div className="fixed inset-x-0 top-0 z-[100] h-[2px]">
          <div className="load-bar h-full bg-accent" />
        </div>
      )}
      <motion.header
        className="sticky top-0 z-50 border-b px-5 sm:px-8"
        style={{ backgroundColor: bg, borderBottomColor: border, paddingTop: pad, paddingBottom: pad, backdropFilter: blur }}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">{children}</div>
      </motion.header>
    </>
  );
}
