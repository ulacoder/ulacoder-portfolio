// All site text lives here. Edit freely — EN and RU are kept side by side.

export type Lang = "en" | "ru";
type T = Record<Lang, string>;

export const site = {
  handle: "ulacoder",
  name: "ULAGAT NURTAS",
  email: "nurtasulagat@gmail.com",
  telegram: "https://t.me/ulacoder",
  github: "https://github.com/ulacoder",
  linkedin: "https://www.linkedin.com/in/ulagat-nurtas-395017393/",
  resume: "/resume.pdf",
  // Main photo (set to null to show the animated particle card instead).
  photo: "/me.jpg" as string | null,
  // Gallery photos from /public/gallery.
  gallery: [
    "/gallery/01-hackathon.jpg",
    "/gallery/02-code.jpg",
    "/gallery/03-suit.jpg",
    "/gallery/04-football.jpg",
    "/gallery/05-football.jpg",
    "/gallery/06-sunset.jpg",
  ] as string[],
};

export const ui = {
  hi: { en: "Hi, I am", ru: "Привет, я" },
  role: { en: "Embedded AI & Robotics", ru: "Embedded AI и робототехника" },
  quote: {
    en: "Work. Eat. Repeat.",
    ru: "Work. Eat. Repeat.",
  },
  bio: {
    en: "Coding for **a year**, playing football since **I was 4**. Building with AI, robotics and the web.",
    ru: "**Год** в коде, в футболе **с 4 лет**. Делаю проекты на AI, робототехнике и вебе.",
  },
  resume: { en: "Resume", ru: "Резюме" },
  now: { en: "Now building", ru: "Сейчас делаю" },
  nowText: {
    en: "Veya: smart attachment, web platform and AI model for eye screening",
    ru: "Veya: умная насадка, веб-платформа и ИИ-модель для скрининга глаз",
  },
  numbers: { en: "Numbers", ru: "Цифры" },
  recognized: { en: "Recognized by", ru: "Награды" },
  story: { en: "Story", ru: "История" },
  projects: { en: "Projects", ru: "Проекты" },
  stack: { en: "Stack", ru: "Стек" },
  work: { en: "Work", ru: "Опыт" },
  field: { en: "Life", ru: "Жизнь" },
  live: { en: "live", ru: "live" },
  write: { en: "Write me", ru: "Написать" },
  tagline: { en: "CODE. PLAY. REPEAT.", ru: "CODE. PLAY. REPEAT." },
  labelA: { en: "builder", ru: "builder" },
  labelB: { en: "footballer", ru: "footballer" },
  labelC: { en: "coder", ru: "coder" },
} satisfies Record<string, T>;

export const numbers: { value: string | T; label: T }[] = [
  { value: { en: "since 4", ru: "с 4 лет" }, label: { en: "Playing football", ru: "Играю в футбол" } },
  { value: { en: "1 year", ru: "1 год" }, label: { en: "Writing code", ru: "Пишу код" } },
  { value: "150,000 ₸", label: { en: "Hackathon prize, Team Jacket", ru: "Приз хакатона, Team Jacket" } },
  { value: "10", label: { en: "Projects on this page", ru: "Проектов на этой странице" } },
];

export const awards: T[] = [
  { en: "Future Minds Hackathon 2026, 1st", ru: "Future Minds Hackathon 2026, 1 место" },
  { en: "WRO 2026 Regional, 2nd", ru: "WRO 2026, регион, 2 место" },
];

// Paragraphs. **bold** is highlighted.
export const story: Record<Lang, string[]> = {
  en: [
    "Football has been my thing since **I was 4**: I play it, watch it and follow everything around it.",
    "I started coding **a year ago**. I wanted to build my own **2GIS alternative**, and that one project pulled me into the whole environment: web, AI, hardware, hackathons.",
    "Since then: **1st place and 150,000 ₸** at the Future Minds hackathon with **Team Jacket**, and the projects you see here.",
  ],
  ru: [
    "Футбол — моя тема **с 4 лет**: играю, смотрю и слежу за всем, что вокруг него происходит.",
    "Кодить начал **год назад**. Хотел сделать свой **аналог 2ГИС** — и этот проект затянул меня во всё это окружение: веб, AI, железо, хакатоны.",
    "С тех пор — **1 место и 150 000 ₸** на хакатоне Future Minds с командой **Team Jacket** и проекты, которые ты видишь здесь.",
  ],
};

export type Project = { name: string; desc: T; href?: string; live?: boolean; tag?: T };

export const projects: Project[] = [
  {
    name: "Veya",
    live: true,
    href: "https://veya-web-zeta.vercel.app",
    desc: {
      en: "Eye-disease screening: a smart attachment, a web platform and our own AI model.",
      ru: "Скрининг болезней глаз: умная насадка, веб-платформа и своя ИИ-модель.",
    },
  },
  {
    name: "KozbenSal",
    href: "https://github.com/ulacoder/KozbenSal",
    tag: { en: "WRO 2nd", ru: "WRO 2 место" },
    desc: {
      en: "Assistive eye-tracking glasses: draw, type and control a PC with your eyes and blinks. ~$50 build.",
      ru: "Очки с трекингом глаз: рисуй, печатай и управляй ПК взглядом и морганием. Сборка ~$50.",
    },
  },
  {
    name: "FMEdu",
    href: "https://github.com/ulacoder/FM-Edu",
    tag: { en: "1st place", ru: "1 место" },
    desc: {
      en: "AI platform for personalized learning, grades 7–12. Won the republican Future Minds hackathon.",
      ru: "AI-платформа персонального обучения для 7–12 классов. Победа на республиканском Future Minds.",
    },
  },
  {
    name: "Путь печатей",
    live: true,
    href: "https://shinobi-motion.vercel.app",
    desc: {
      en: "Browser game where hand signs in front of a webcam are the controller. Built for Admit Hackathon 2026.",
      ru: "Браузерная игра, где геймпад — печати руками перед веб-камерой. Сделана на Admit Hackathon 2026.",
    },
  },
  {
    name: "SaqDrone",
    desc: {
      en: "Autonomous rescue drone: detects a drowning person, navigates to them and deploys help.",
      ru: "Автономный дрон-спасатель: находит тонущего, летит к нему и сбрасывает помощь.",
    },
  },
  {
    name: "NAZAR",
    href: "https://github.com/ulacoder/nazar",
    desc: {
      en: "Local, anonymous classroom observation: pose, action and head-direction models on a webcam feed.",
      ru: "Локальное анонимное наблюдение за классом: модели позы, действий и направления головы на видео.",
    },
  },
  {
    name: "Isida AI",
    href: "https://github.com/ulacoder/isida-ai",
    desc: {
      en: "Voice assistant with memory and vision on Gemini 2.0 Flash. Works on iOS and Android.",
      ru: "Голосовой ассистент с памятью и зрением на Gemini 2.0 Flash. Работает на iOS и Android.",
    },
  },
  {
    name: "Mentoria Hub",
    live: true,
    href: "https://mentoria-hub-hazel.vercel.app",
    desc: {
      en: "Scholarships, olympiads and summer programs in one place, plus self-paced courses and a Telegram bot.",
      ru: "Стипендии, олимпиады и летние программы в одном месте, плюс курсы и Telegram-бот.",
    },
  },
  {
    name: "GRBL 28BYJ-48",
    href: "https://github.com/ulacoder/GRBL-28byj-48",
    desc: {
      en: "CNC pen-plotter firmware for $2 stepper motors on an Arduino Nano. SVG → G-code → paper.",
      ru: "Прошивка пен-плоттера на шаговиках за $2 и Arduino Nano. SVG → G-code → бумага.",
    },
  },
  {
    name: "EcoSayahat",
    live: true,
    href: "https://frontend-sandy-three-60.vercel.app",
    desc: {
      en: "Eco-tourism platform for Kazakhstan: 360° tours, eco-taxis and EcoCoins for cleaning up nature.",
      ru: "Платформа экотуризма по Казахстану: 360° туры, эко-такси и EcoCoins за заботу о природе.",
    },
  },
];

export const stack: { group: T; items: string[] }[] = [
  { group: { en: "Hardware", ru: "Железо" }, items: ["Raspberry Pi", "Arduino", "Stepper motors", "ULN2003", "Cameras", "G-code"] },
  { group: { en: "AI / Vision", ru: "AI / Зрение" }, items: ["Python", "PyTorch", "TensorFlow", "OpenCV", "MediaPipe", "Gemini API"] },
  { group: { en: "Web", ru: "Веб" }, items: ["TypeScript", "Next.js", "React", "Tailwind", "FastAPI", "PostgreSQL"] },
];

export const work: { title: T; meta: T; points: T[] }[] = [
  {
    title: { en: "Freelance web developer", ru: "Веб-разработчик, фриланс" },
    meta: { en: "Restaurants & local businesses · $300", ru: "Рестораны и местный бизнес · $300" },
    points: [
      { en: "Built and deployed sites from first call to launch", ru: "Делал и запускал сайты — от первого созвона до деплоя" },
      { en: "Responsive layouts that owners can actually use", ru: "Адаптивные сайты, которыми владельцам удобно пользоваться" },
    ],
  },
  {
    title: { en: "AI agents", ru: "AI-агенты" },
    meta: { en: "Independent projects", ru: "Свои проекты" },
    points: [
      { en: "Agents for automation and task handling", ru: "Агенты для автоматизации и рутинных задач" },
      { en: "ML models wired into practical tools", ru: "ML-модели внутри практичных инструментов" },
    ],
  },
];
