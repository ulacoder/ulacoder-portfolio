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
  // Put a photo at /public/me.jpg and set this to "/me.jpg" to replace the animated card.
  photo: null as string | null,
  // Drop images into /public/gallery and list them here to show the "Field" gallery.
  gallery: [] as string[],
};

export const ui = {
  hi: { en: "Hi, I am", ru: "Привет, я" },
  role: { en: "Embedded AI & Robotics", ru: "Embedded AI и робототехника" },
  quote: {
    en: "If it has a camera, a sensor or a motor, I want to make it smarter.",
    ru: "Если у штуки есть камера, датчик или мотор — я хочу сделать её умнее.",
  },
  bio: {
    en: "NIS student, class of 2028. I build where code meets hardware: eye-tracking glasses, an autonomous rescue drone, computer-vision apps and the web around them. **1st at Future Minds**, **2nd at WRO 2026 regional**, and a few dozen repos of things I wanted to exist.",
    ru: "Ученик НИШ, выпуск 2028. Делаю то, где код встречается с железом: очки с трекингом глаз, автономный дрон-спасатель, приложения на компьютерном зрении и веб вокруг них. **1 место на Future Minds**, **2 место на региональном WRO 2026** и пара десятков репозиториев с тем, чего мне не хватало.",
  },
  resume: { en: "Resume", ru: "Резюме" },
  now: { en: "Now building", ru: "Сейчас делаю" },
  nowText: {
    en: "Veya: AI eye-disease screening that runs on smart glasses",
    ru: "Veya: AI-скрининг болезней глаз прямо на умных очках",
  },
  numbers: { en: "Numbers", ru: "Цифры" },
  recognized: { en: "Recognized by", ru: "Награды" },
  story: { en: "Story", ru: "История" },
  projects: { en: "Projects", ru: "Проекты" },
  stack: { en: "Stack", ru: "Стек" },
  work: { en: "Work", ru: "Опыт" },
  field: { en: "Field", ru: "Фото" },
  live: { en: "live", ru: "live" },
  write: { en: "Write me", ru: "Написать" },
  tagline: { en: "BUILD. TEST. SHIP.", ru: "BUILD. TEST. SHIP." },
  labelA: { en: "builder", ru: "builder" },
  labelB: { en: "robotics", ru: "robotics" },
} satisfies Record<string, T>;

export const numbers: { value: string | T; label: T }[] = [
  { value: { en: "1st", ru: "1 место" }, label: { en: "Future Minds hackathon, republican level", ru: "Хакатон Future Minds, республика" } },
  { value: "150,000 ₸", label: { en: "Hackathon prize money", ru: "Призовые за хакатон" } },
  { value: { en: "2nd", ru: "2 место" }, label: { en: "WRO 2026 regional", ru: "WRO 2026, регион" } },
  { value: "$50", label: { en: "KozbenSal vs $15k+ commercial", ru: "KozbenSal против $15k+ аналогов" } },
  { value: "81%", label: { en: "Veya model test accuracy", ru: "Точность модели Veya" } },
  { value: "30+", label: { en: "Public repos on GitHub", ru: "Публичных репо на GitHub" } },
];

export const awards: T[] = [
  { en: "Future Minds Hackathon 2026, 1st", ru: "Future Minds Hackathon 2026, 1 место" },
  { en: "WRO 2026 Regional, 2nd", ru: "WRO 2026, регион, 2 место" },
  { en: "Admit Hackathon 2026", ru: "Admit Hackathon 2026" },
  { en: "BAITC Hacks 2026", ru: "BAITC Hacks 2026" },
];

// Paragraphs. **bold** is highlighted.
export const story: Record<Lang, string[]> = {
  en: [
    "I'm a student at **Nazarbayev Intellectual School**, graduating in 2028. The projects I like most are the ones where software has to deal with the physical world: a camera that has to find a pupil, a drone that has to find a person in the water, a 28BYJ-48 stepper that has to draw a straight line.",
    "That's how **KozbenSal** happened: eye-tracking glasses that let people with limited mobility draw, type and control a computer — for about **$50 instead of $15,000+**. It took **2nd at the WRO 2026 regional**. **Veya** is the next step: smart glasses with a neural network that screens for eye diseases, **81% test accuracy** on four classes.",
    "On the software side, **EduAI.kz** won **1st place at the republican Future Minds hackathon** (150,000 ₸). For Admit Hackathon 2026 I turned a webcam into a game controller with **Путь печатей**. And I've built websites for restaurants and local businesses as a freelancer.",
    "Right now: **embedded AI** — getting models to run on the hardware that actually needs them.",
  ],
  ru: [
    "Учусь в **Назарбаев Интеллектуальной школе**, выпуск в 2028. Больше всего люблю проекты, где софт сталкивается с физическим миром: камера должна найти зрачок, дрон — человека в воде, шаговик 28BYJ-48 — нарисовать ровную линию.",
    "Так появился **KozbenSal**: очки с трекингом глаз, с которыми люди с ограниченной подвижностью могут рисовать, печатать и управлять компьютером — примерно за **$50 вместо $15 000+**. Проект взял **2 место на региональном WRO 2026**. **Veya** — следующий шаг: умные очки с нейросетью, которая выявляет болезни глаз, **81% точности** на четырёх классах.",
    "Со стороны софта: **EduAI.kz** взял **1 место на республиканском хакатоне Future Minds** (150 000 ₸). Для Admit Hackathon 2026 я превратил веб-камеру в геймпад в игре **Путь печатей**. А ещё делал сайты для ресторанов и местного бизнеса на фрилансе.",
    "Сейчас: **embedded AI** — запускаю модели прямо на том железе, которому они нужны.",
  ],
};

export type Project = { name: string; desc: T; href?: string; live?: boolean; tag?: T };

export const projects: Project[] = [
  {
    name: "Veya",
    live: true,
    href: "https://veya-web-zeta.vercel.app",
    desc: {
      en: "AI eye-disease screening for smart glasses. MobileNetV2, 81% accuracy, 93% AUC, results in 2–3 s.",
      ru: "AI-скрининг болезней глаз для умных очков. MobileNetV2, 81% точности, AUC 93%, ответ за 2–3 с.",
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
    name: "EduAI.kz",
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
