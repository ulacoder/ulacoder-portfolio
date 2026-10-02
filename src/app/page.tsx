"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import {
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import FlowField from "@/components/FlowField";
import TiltPhoto from "@/components/TiltPhoto";
import {
  After,
  Card,
  CopyEmail,
  CountUp,
  LetterReveal,
  Magnetic,
  ProjectRow,
  Reveal,
  SocialIcon,
  StickyHeader,
} from "@/components/motion";
import { awards, numbers, projects, site, stack, story, ui, work, type Lang } from "@/lib/content";

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

const socials = [
  { href: site.github, label: "GitHub", sub: "@ulacoder", Icon: GitHubLogoIcon },
  { href: site.linkedin, label: "LinkedIn", sub: "Ulagat Nurtas", Icon: LinkedInLogoIcon },
  { href: site.telegram, label: "Telegram", sub: "@ulacoder", Icon: PaperPlaneIcon },
  { href: `mailto:${site.email}`, label: "Email", sub: site.email, Icon: EnvelopeClosedIcon },
];

function Socials() {
  return (
    <div className="flex items-center gap-1">
      {socials.map(({ href, label, sub, Icon }) => (
        <SocialIcon key={label} href={href} label={label} sub={sub}>
          <Icon className="size-[18px]" />
        </SocialIcon>
      ))}
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!go) return;
    setN(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      setN(i);
      if (i >= text.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, [go, text]);

  return (
    <span ref={ref} aria-label={text} className="font-pixel text-4xl tracking-wide text-fg sm:text-5xl">
      <span aria-hidden>{go ? text.slice(0, n) : " "}</span>
      <span aria-hidden className="cursor ml-1 inline-block h-[0.8em] w-[0.5em] translate-y-[0.08em] bg-accent" />
    </span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "ru") setLang(saved);
      else if (navigator.language.startsWith("ru") || navigator.language.startsWith("kk")) setLang("ru");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = (v: Record<Lang, string>) => v[lang];
  const nameDone = 0.15 + site.name.length * 0.035 + 0.3;

  return (
    <MotionConfig reducedMotion="user">
      <StickyHeader>
        <a href="#" className="font-mono text-sm tracking-wider text-muted transition-colors hover:text-fg">
          <span className="text-accent">[u]</span> {site.handle}.dev
        </a>
        <motion.div
          className="flex items-center gap-1 font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {(["en", "ru"] as const).map((l, i) => (
            <Fragment key={l}>
              {i > 0 && <span className="text-dim">/</span>}
              <button
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`cursor-pointer px-1 uppercase transition-colors duration-200 ${lang === l ? "text-fg" : "text-dim hover:text-muted"}`}
              >
                {l}
              </button>
            </Fragment>
          ))}
        </motion.div>
      </StickyHeader>

      <main className="mx-auto max-w-[1280px] px-5 pb-12 pt-8 sm:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* intro */}
          <Reveal className="md:col-span-2 lg:col-span-5">
            <Card className="flex flex-col p-7 sm:p-9">
              <p className="label">{t(ui.hi)}</p>
              <h1 className="mt-5 font-pixel text-[44px] font-medium leading-[0.95] tracking-tight sm:text-[52px]">
                <LetterReveal text={site.name} />
              </h1>
              <After delay={nameDone - 0.15}>
                <p className="mt-3 font-mono text-sm text-accent">
                  @{site.handle} · {t(ui.role)}
                </p>
              </After>
              <After delay={nameDone}>
                <p className="mt-6 inline-block rounded-md border border-line bg-white/[0.04] px-4 py-2.5 text-base font-medium text-fg">
                  {t(ui.quote)}
                </p>
              </After>
              <After delay={nameDone + 0.1}>
                <p className="rich mt-5 text-[17px] leading-relaxed text-muted">
                  <Rich text={t(ui.bio)} />
                </p>
              </After>
              <After delay={nameDone + 0.25} className="mt-auto pt-8">
                <div className="flex items-start gap-3 rounded-lg border border-dashed border-line px-4 py-3">
                  <span className="relative mt-1.5 flex size-2 shrink-0">
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                    <span className="relative size-2 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="label">{t(ui.now)}</p>
                    <p className="mt-1 text-[15px] leading-snug text-fg">{t(ui.nowText)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
                  <Socials />
                  <Magnetic
                    href={site.resume}
                    external
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    <FileTextIcon className="size-4" /> {t(ui.resume)}
                  </Magnetic>
                </div>
              </After>
            </Card>
          </Reveal>

          {/* photo */}
          <Reveal delay={100} className="relative min-h-[520px] lg:col-span-4 lg:min-h-[620px]">
            {site.photo ? (
              <div className="absolute inset-0">
                <TiltPhoto
                  src={site.photo}
                  alt={site.name}
                  labels={[
                    { text: t(ui.labelA), className: "left-6 top-6", rot: -10 },
                    { text: t(ui.labelB), className: "right-6 top-8", rot: 6 },
                    { text: t(ui.labelC), className: "bottom-14 left-6", rot: -5 },
                  ]}
                  footer={
                    <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[11px] uppercase tracking-widest text-white/75">
                      <span>
                        <span className="text-accent">●</span> @{site.handle}
                      </span>
                      <span>2026</span>
                    </div>
                  }
                />
              </div>
            ) : (
              <div className="card absolute inset-0 overflow-hidden">
                <FlowField />
              </div>
            )}
          </Reveal>

          {/* numbers */}
          <Reveal delay={200} className="lg:col-span-3">
            <Card className="p-7 sm:p-8">
              <p className="label">{t(ui.numbers)}</p>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-1 lg:gap-y-5">
                {numbers.map((n, i) => (
                  <CountUp
                    key={n.label.en}
                    value={typeof n.value === "string" ? n.value : t(n.value)}
                    label={t(n.label)}
                    delay={i * 120}
                  />
                ))}
              </div>
              <div className="mt-7 border-t border-line pt-5">
                <p className="label">{t(ui.recognized)}</p>
                <ul className="mt-3 space-y-2">
                  {awards.map((a, i) => (
                    <motion.li
                      key={a.en}
                      className="font-mono text-xs uppercase leading-snug tracking-wide text-muted"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    >
                      <span className="mr-1.5 text-accent">▸</span>
                      {t(a)}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          {/* left column: story + work + stack */}
          <div className="grid gap-4 md:col-span-2 lg:col-span-5 lg:flex lg:flex-col">
            <Reveal className="md:col-span-2">
              <Card className="p-7 sm:p-9">
                <p className="label">{t(ui.story)}</p>
                <div className="rich mt-5 space-y-4 text-[16px] leading-relaxed text-muted">
                  {story[lang].map((p, i) => (
                    <p key={i}>
                      <Rich text={p} />
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={80} className="lg:flex-1">
              <Card className="p-7 sm:p-9">
                <p className="label">{t(ui.work)}</p>
                <div className="mt-5 space-y-6">
                  {work.map((w) => (
                    <div key={w.title.en}>
                      <p className="text-lg font-medium">{t(w.title)}</p>
                      <p className="font-mono text-xs text-dim">{t(w.meta)}</p>
                      <ul className="mt-2.5 space-y-1.5 text-[15px] text-muted">
                        {w.points.map((pt) => (
                          <li key={pt.en} className="flex gap-2">
                            <span className="text-accent">›</span>
                            {t(pt)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

          </div>

          {/* projects */}
          <Reveal delay={100} className="md:col-span-2 lg:col-span-7">
            <Card className="p-7 sm:p-9">
              <div className="flex items-baseline justify-between">
                <p className="label">{t(ui.projects)}</p>
                <p className="label">2025 — {lang === "ru" ? "сейчас" : "present"}</p>
              </div>
              <div className="mt-4">
                {projects.map((p, i) => (
                  <Reveal key={p.name} delay={i * 70} y={12}>
                    <ProjectRow
                      index={String(i + 1).padStart(2, "0")}
                      name={p.name}
                      desc={t(p.desc)}
                      href={p.href}
                      last={i === projects.length - 1}
                      badges={
                        <>
                          {p.live && (
                            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                              <span className="status-pulse size-1.5 rounded-full bg-emerald-400" /> {t(ui.live)}
                            </span>
                          )}
                          {p.tag && (
                            <span className="rounded border border-accent/40 px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                              {t(p.tag)}
                            </span>
                          )}
                        </>
                      }
                    />
                  </Reveal>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* stack */}
          <Reveal className="md:col-span-2 lg:col-span-12">
            <Card className="p-7 sm:p-9">
              <p className="label">{t(ui.stack)}</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-3 lg:gap-10">
                {stack.map((g) => (
                  <div key={g.group.en}>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">{t(g.group)}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <motion.li
                          key={s}
                          whileHover={{ y: -2, borderColor: "#ff6a2b", color: "#ededed" }}
                          transition={{ duration: 0.15 }}
                          className="rounded-md border border-line bg-white/[0.02] px-2.5 py-1 text-[13px] text-muted"
                        >
                          {s}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* gallery */}
          {site.gallery.length > 0 && (
            <Reveal className="md:col-span-2 lg:col-span-12">
              <Card className="p-7 sm:p-9">
                <p className="label">{t(ui.field)}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {site.gallery.map((src, i) => (
                    <Reveal key={src} delay={i * 100}>
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-line transition-all duration-500 hover:scale-[1.02] hover:ring-[#3a3a42] active:scale-[1.04]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Card>
            </Reveal>
          )}
        </div>

        <Reveal>
          <footer className="mt-16 flex flex-col gap-7 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
            <Typewriter text={t(ui.tagline)} />
            <div className="flex flex-col items-start gap-4 md:items-end">
              <Socials />
              <div className="flex flex-wrap items-center gap-4">
                <CopyEmail email={site.email} copied={lang === "ru" ? "Скопировано" : "Copied"} />
                <Magnetic
                  href={site.telegram}
                  external
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-accent"
                >
                  <PaperPlaneIcon className="size-4" /> {t(ui.write)}
                </Magnetic>
              </div>
            </div>
          </footer>
        </Reveal>
      </main>
    </MotionConfig>
  );
}
