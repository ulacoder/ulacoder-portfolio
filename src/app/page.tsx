"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowTopRightIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import FlowField from "@/components/FlowField";
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
  { href: site.github, label: "GitHub", Icon: GitHubLogoIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInLogoIcon },
  { href: site.telegram, label: "Telegram", Icon: PaperPlaneIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: EnvelopeClosedIcon },
];

function Socials() {
  return (
    <div className="flex items-center gap-1">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:bg-white/5 hover:text-fg"
        >
          <Icon className="size-4" />
        </a>
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
    <span ref={ref} aria-label={text} className="font-pixel text-3xl tracking-wide text-fg sm:text-4xl">
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

  return (
    <div className="mx-auto max-w-[1180px] px-4 pb-10 sm:px-6">
      {/* top bar */}
      <header className="flex items-center justify-between py-6">
        <a href="#" className="font-mono text-xs text-muted transition-colors hover:text-fg">
          <span className="text-accent">[u]</span> {site.handle}.dev
        </a>
        <div className="flex items-center gap-1 font-mono text-[11px]">
          {(["en", "ru"] as const).map((l, i) => (
            <Fragment key={l}>
              {i > 0 && <span className="text-dim">/</span>}
              <button
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-1 uppercase transition-colors ${lang === l ? "text-fg" : "text-dim hover:text-muted"}`}
              >
                {l}
              </button>
            </Fragment>
          ))}
        </div>
      </header>

      <main className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
        {/* intro */}
        <section className="card rise flex flex-col p-6 sm:p-7 md:col-span-2 lg:col-span-5">
          <p className="label">{t(ui.hi)}</p>
          <h1 className="mt-4 font-pixel text-[2.6rem] font-medium leading-[0.95] tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 font-mono text-xs text-accent">
            @{site.handle} · {t(ui.role)}
          </p>
          <p className="mt-5 rounded-md border border-line bg-white/[0.03] px-3 py-2.5 text-sm font-medium leading-snug text-fg">
            {t(ui.quote)}
          </p>
          <p className="rich mt-4 text-[14px] leading-relaxed text-muted">
            <Rich text={t(ui.bio)} />
          </p>
          <div className="mt-auto pt-6">
            <div className="flex items-start gap-3 rounded-md border border-dashed border-line px-3 py-2.5">
              <span className="relative mt-1.5 flex size-2 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              <div>
                <p className="label">{t(ui.now)}</p>
                <p className="mt-0.5 text-[13px] text-fg">{t(ui.nowText)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
            <Socials />
            <a
              href={site.resume}
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-fg"
            >
              <FileTextIcon className="size-3.5" /> {t(ui.resume)}
            </a>
          </div>
        </section>

        {/* visual */}
        <section
          className="card rise relative min-h-[420px] overflow-hidden lg:col-span-4"
          style={{ animationDelay: "80ms" }}
        >
          {site.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.photo} alt={site.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <FlowField />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
          <span className="pointer-events-none absolute left-4 top-4 -rotate-6 font-mono text-sm italic text-accent">
            {t(ui.labelA)}
          </span>
          <span className="pointer-events-none absolute right-4 top-6 rotate-6 font-mono text-sm italic text-accent">
            {t(ui.labelB)}
          </span>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
            <span>
              cam_01 <span className="text-accent">●</span> rec
            </span>
            <span>embedded.ai</span>
          </div>
        </section>

        {/* numbers */}
        <section className="card rise p-6 lg:col-span-3" style={{ animationDelay: "160ms" }}>
          <p className="label">{t(ui.numbers)}</p>
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-1 lg:gap-y-3.5">
            {numbers.map((n) => (
              <div key={n.label.en}>
                <dt className="text-2xl font-semibold tracking-tight">
                  {typeof n.value === "string" ? n.value : t(n.value)}
                </dt>
                <dd className="label mt-0.5 leading-snug">{t(n.label)}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 border-t border-line pt-4">
            <p className="label">{t(ui.recognized)}</p>
            <ul className="mt-3 space-y-1.5">
              {awards.map((a) => (
                <li key={a.en} className="font-mono text-[11px] uppercase leading-snug tracking-wide text-muted">
                  {t(a)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid gap-3 md:col-span-2 md:grid-cols-2 lg:col-span-5 lg:flex lg:flex-col">
        {/* story */}
        <section className="card p-6 sm:p-7 md:col-span-1">
          <p className="label">{t(ui.story)}</p>
          <div className="rich mt-4 space-y-4 text-[14px] leading-relaxed text-muted">
            {story[lang].map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </section>

        {/* work */}
        <section className="card flex-1 p-6 sm:p-7 md:col-span-1">
          <p className="label">{t(ui.work)}</p>
          <div className="mt-4 space-y-5">
            {work.map((w) => (
              <div key={w.title.en}>
                <p className="font-semibold">{t(w.title)}</p>
                <p className="font-mono text-[11px] text-dim">{t(w.meta)}</p>
                <ul className="mt-2 space-y-1 text-[13px] text-muted">
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
        </section>

        </div>

        {/* projects */}
        <section className="card p-6 sm:p-7 md:col-span-2 lg:col-span-7">
          <div className="flex items-baseline justify-between">
            <p className="label">{t(ui.projects)}</p>
            <p className="label">2024 — {lang === "ru" ? "сейчас" : "present"}</p>
          </div>
          <ol className="mt-3 divide-y divide-line">
            {projects.map((p, i) => {
              const inner = (
                <>
                  <span className="w-6 shrink-0 pt-0.5 font-mono text-[11px] text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-fg">{p.name}</span>
                      {p.live && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-400" /> {t(ui.live)}
                        </span>
                      )}
                      {p.tag && (
                        <span className="rounded border border-accent/40 px-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                          {t(p.tag)}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-muted">{t(p.desc)}</span>
                  </span>
                  {p.href && (
                    <ArrowTopRightIcon className="mt-0.5 size-4 shrink-0 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  )}
                </>
              );
              return (
                <li key={p.name}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group -mx-2 flex gap-3 rounded-md px-2 py-3.5 transition-colors hover:bg-white/[0.03]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="-mx-2 flex gap-3 px-2 py-3.5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* stack */}
        <section className="card p-6 sm:p-7 md:col-span-2 lg:col-span-12">
          <p className="label">{t(ui.stack)}</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-3 lg:gap-10">
            {stack.map((g) => (
              <div key={g.group.en}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{t(g.group)}</p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-md border border-line bg-white/[0.02] px-2 py-1 text-[12px] text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* gallery (only when photos are listed in content.ts) */}
        {site.gallery.length > 0 && (
          <section className="card p-6 sm:p-7 md:col-span-2 lg:col-span-12">
            <p className="label">{t(ui.field)}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {site.gallery.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-lg object-cover grayscale-[30%] transition hover:grayscale-0"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Typewriter text={t(ui.tagline)} />
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <Socials />
          <div className="flex items-center gap-3">
            <a href={`mailto:${site.email}`} className="font-mono text-[11px] text-muted hover:text-fg">
              {site.email}
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-fg px-3.5 py-1.5 text-[12px] font-medium text-black transition-colors hover:bg-accent"
            >
              <PaperPlaneIcon className="size-3.5" /> {t(ui.write)}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
