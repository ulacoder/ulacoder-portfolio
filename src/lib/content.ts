// All site text lives here. Edit freely — EN and RU are kept side by side.

export type Lang = "en" | "ru";
type T = Record<Lang, string>;

export const site = {
  handle: "ulacoder",
  name: { en: "ULAGAT NURTAS", ru: "УЛАГАТ НУРТАС" },
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
    "/gallery/07-jas-aqmola.jpg",
    "/gallery/08-aqmola-power.jpg",
  ] as string[],
};

export const ui = {
  hi: { en: "Hi, I am", ru: "Привет, я" },
  role: { en: "Embedded AI & Robotics", ru: "Embedded AI и робототехника" },
  quote: {
    en: "Work it. Larp it. Repeat it.",
    ru: "Work it. Larp it. Repeat it.",
  },
  bio: {
    en: "I'm **Ulagat**, 16, from **Kokshetau, Kazakhstan**. Came to code through **robotics**, now I build **AI** products and **startups**. Main thing right now is **Veya**.",
    ru: "Я **Улагат**, мне 16, я из **Кокшетау**. В код пришёл через **робототехнику**, сейчас делаю **AI**-продукты и **стартапы**. Главное сейчас — **Veya**.",
  },
  resume: { en: "Resume", ru: "Резюме" },
  now: { en: "Now building", ru: "Сейчас делаю" },
  nowText: {
    en: "Veya: AI eye screening from a smartphone",
    ru: "Veya: AI-скрининг глаз со смартфона",
  },
  progress: { en: "Progress", ru: "Прогресс" },
  open: { en: "Open", ru: "Открыть" },
  recognized: { en: "Recognized by", ru: "Награды" },
  story: { en: "Story", ru: "История" },
  projects: { en: "Projects", ru: "Проекты" },
  stack: { en: "Stack", ru: "Стек" },
  work: { en: "Work", ru: "Опыт" },
  field: { en: "Life", ru: "Жизнь" },
  live: { en: "live", ru: "live" },
  write: { en: "Write me", ru: "Написать" },
  tagline: { en: "WORK IT. LARP IT. REPEAT IT.", ru: "WORK IT. LARP IT. REPEAT IT." },
  labelA: { en: "builder", ru: "builder" },
  labelB: { en: "footballer", ru: "footballer" },
  labelC: { en: "coder", ru: "coder" },
} satisfies Record<string, T>;

export const numbers: { value: string | T; label: T }[] = [
  { value: "16", label: { en: "Years old, Kokshetau", ru: "Лет, Кокшетау" } },
  { value: { en: "since 4", ru: "с 4 лет" }, label: { en: "Playing football", ru: "Играю в футбол" } },
  {
    value: { en: "675K ₸", ru: "675 тыс ₸" },
    label: { en: "Earned from a project in one school term", ru: "Заработал на проекте за одну учебную четверть" },
  },
  { value: "$600", label: { en: "Earned freelancing", ru: "Заработал на фрилансе" } },
];

export const awards: T[] = [
  { en: "Aqmola Power 2026, 1st", ru: "Aqmola Power 2026, 1 место" },
  { en: "Future Minds Hackathon 2026, 1st", ru: "Future Minds Hackathon 2026, 1 место" },
  { en: "Jas Aqmola, «Zamannan ozgan» winner", ru: "Jas Aqmola, победа в номинации «Заманнан озған»" },
  { en: "National Founder Cup Astana, 4th", ru: "National Founder Cup Astana, 4 место" },
  { en: "StartUp Orda by Astana Hub", ru: "StartUp Orda by Astana Hub" },
  { en: "WRO 2026 Regional, 2nd", ru: "WRO 2026, регион, 2 место" },
  { en: "WRO 2025, 3rd", ru: "WRO 2025, 3 место" },
];

// Paragraphs. **bold** is highlighted.
export const story: Record<Lang, string[]> = {
  en: [
    "Lived in the village of **Ainakol** until I was six, then moved to **Astana**. Now I study at **NIS Kokshetau** and live in the dorm.",
    "Started with **robotics**: Arduino, sensors, motors. Then I got pulled into **software and AI**. Placed at **WRO** two years in a row, then came hackathons and startup competitions.",
    "These days most of my time goes into **Veya**.",
  ],
  ru: [
    "До шести лет жил в селе **Айнаколь**, потом переехали в **Астану**. Сейчас учусь в **НИШ Кокшетау** и живу в общаге.",
    "Начинал с **робототехники**: Arduino, датчики, моторы. Потом затянуло в **софт и AI**. Два года подряд брал призовые на **WRO**, потом пошли хакатоны и стартап-конкурсы.",
    "Сейчас почти всё время уходит на **Veya**.",
  ],
};

export type Project = { name: string; desc: T; href?: string; live?: boolean; tag?: T };

export const projects: Project[] = [
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
    meta: { en: "Restaurants & local businesses · $600", ru: "Рестораны и местный бизнес · $600" },
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

// Veya block.
export const veya = {
  href: "https://veyaai.vercel.app",
  pitch: {
    en: "A $80 attachment turns an iPhone into a retinal camera. Our model flags **retinopathy, glaucoma and cataract** in ~15 seconds, so clinics without an ophthalmologist or a $15K+ fundus camera can still screen patients. The doctor makes the final call.",
    ru: "Насадка за $80 превращает iPhone в камеру для сетчатки. Наша модель за ~15 секунд находит риск **ретинопатии, глаукомы и катаракты**, и клиники без офтальмолога и фундус-камеры за $15K+ тоже могут проводить скрининг. Финальное решение за врачом.",
  } as T,
  stats: [
    { value: "87%", label: { en: "Test accuracy", ru: "Точность на тесте" } },
    { value: "12,000", label: { en: "Fundus images", ru: "Снимков глазного дна" } },
    { value: "$80", label: { en: "Build cost", ru: "Себестоимость" } },
    { value: { en: "~15 s", ru: "~15 сек" }, label: { en: "Per screening", ru: "На один скрининг" } },
  ] as { value: string | T; label: T }[],
  progress: [
    { status: "done", when: "Q3 2026", text: { en: "MVP, v0.4 attachment, doctor interviews", ru: "MVP, насадка v0.4, интервью с врачами" } },
    { status: "done", when: "09.2026", text: { en: "Prototype validation and testing", ru: "Валидация и тестирование прототипа" } },
    { status: "now", when: "Q4 2026", text: { en: "Ophthalmologist review, private clinic pilots in Akmola", ru: "Проверка офтальмологом, пилоты в частных клиниках Акмолы" } },
    { status: "next", when: "Q1 2027", text: { en: "First paid contracts", ru: "Первые платные контракты" } },
    { status: "next", when: "Q4 2027", text: { en: "20 private clinics across Kazakhstan", ru: "20 частных клиник по Казахстану" } },
  ] as { status: "done" | "now" | "next"; when: string; text: T }[],
  meta: {
    en: "Incubated by StartUp Orda (Astana Hub) and NIS Incubator · Team: Ulagat Nurtas (software, AI), Abilmansur Tolendi (optics)",
    ru: "Инкубация: StartUp Orda (Astana Hub) и NIS Incubator · Команда: Улагат Нуртас (софт, AI), Абилмансур Толенди (оптика)",
  } as T,
};
