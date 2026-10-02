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
    "/gallery/04-football.jpg",
    "/gallery/02-code.jpg",
    "/gallery/03-suit.jpg",
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
    en: "**16**, from **Kokshetau**. Came to programming through **robotics**: Arduino, WRO, then AI, software and startups. Playing football **since 4**.",
    ru: "**16 лет**, из **Кокшетау**. Пришёл в программирование через **робототехнику**: Arduino, WRO, потом AI, софт и стартапы. В футболе **с 4 лет**.",
  },
  resume: { en: "Resume", ru: "Резюме" },
  now: { en: "Now building", ru: "Сейчас делаю" },
  nowText: {
    en: "Veya: affordable AI eye screening that turns a smartphone into a retinal camera",
    ru: "Veya: доступный AI-скрининг глаз, который превращает смартфон в камеру для сетчатки",
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
  { value: "16", label: { en: "Years old, Kokshetau", ru: "Лет, Кокшетау" } },
  { value: { en: "since 4", ru: "с 4 лет" }, label: { en: "Playing football", ru: "Играю в футбол" } },
  { value: { en: "1 year", ru: "1 год" }, label: { en: "Writing code", ru: "Пишу код" } },
  { value: "$700+", label: { en: "Earned freelancing", ru: "Заработал на фрилансе" } },
];

export const awards: T[] = [
  { en: "StartUp Orda by Astana Hub", ru: "StartUp Orda by Astana Hub" },
  { en: "Future Minds Hackathon 2026, 1st", ru: "Future Minds Hackathon 2026, 1 место" },
  { en: "WRO 2026 Regional, 2nd", ru: "WRO 2026, регион, 2 место" },
  { en: "WRO 2025, 3rd", ru: "WRO 2025, 3 место" },
];

// Paragraphs. **bold** is highlighted.
export const story: Record<Lang, string[]> = {
  en: [
    "I'm **Nurtas Ulagat**, 16, from **Kokshetau, Kazakhstan**. I got into programming through **robotics** and my passion for building things.",
    "What started with **Arduino** and **robotics competitions** gradually turned into **AI**, software development and **startups**. I've built several projects and earned placements at **WRO** and hackathons.",
    "My biggest focus right now is **Veya**, an affordable AI-powered eye screening system that turns a **smartphone into a portable retinal camera**. I built the prototype, trained an AI model and conducted customer interviews.",
    "I'm now working on turning Veya into a **real startup** while preparing for international competitions and opportunities in **AI and engineering**.",
  ],
  ru: [
    "Я **Nurtas Ulagat**, мне 16, я из **Кокшетау, Казахстан**. В программирование пришёл через **робототехнику** и любовь собирать что-то своими руками.",
    "Всё началось с **Arduino** и **соревнований по робототехнике**, а потом постепенно переросло в **AI**, разработку софта и **стартапы**. Сделал несколько проектов, брал призовые места на **WRO** и хакатонах.",
    "Главное, чем я сейчас занят, — **Veya**: доступная система скрининга глаз на AI, которая превращает **смартфон в портативную камеру для сетчатки**. Я собрал прототип, обучил AI-модель и провёл интервью с клиентами.",
    "Сейчас превращаю Veya в **настоящий стартап** и параллельно готовлюсь к международным соревнованиям и возможностям в **AI и инженерии**.",
  ],
};

export type Project = { name: string; desc: T; href?: string; live?: boolean; tag?: T };

export const projects: Project[] = [
  {
    name: "Veya",
    live: true,
    href: "https://veya-web-zeta.vercel.app",
    desc: {
      en: "Affordable AI eye screening: a smart attachment turns a smartphone into a portable retinal camera, plus a web platform and our own AI model.",
      ru: "Доступный AI-скрининг глаз: умная насадка превращает смартфон в портативную камеру для сетчатки, плюс веб-платформа и своя AI-модель.",
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
    name: "Mentoria Hub",
    live: true,
    href: "https://mentoria-hub-hazel.vercel.app",
    desc: {
      en: "Scholarships, olympiads and summer programs in one place, plus self-paced courses and a Telegram bot.",
      ru: "Стипендии, олимпиады и летние программы в одном месте, плюс курсы и Telegram-бот.",
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
    meta: { en: "Restaurants & local businesses · $700+", ru: "Рестораны и местный бизнес · $700+" },
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
