const ICONS = {
  chart: `<path class="s" d="M18 102 H104 M18 102 V18"/>
    <rect class="s bar" x="28" y="62" width="12" height="40" rx="2"/><rect class="s bar" x="48" y="46" width="12" height="56" rx="2"/>
    <rect class="s bar" x="68" y="70" width="12" height="32" rx="2"/><rect class="s bar" x="88" y="36" width="12" height="66" rx="2"/>
    <path class="a draw" d="M24 78 L44 56 L64 66 L96 24"/><path class="a" d="M84 24 H96 V36"/>`,
  ocr: `<rect class="s" x="30" y="16" width="60" height="88" rx="8"/>
    <path class="s" d="M42 36 H78 M42 48 H72 M42 60 H78 M42 72 H62 M42 84 H70"/>
    <path class="a" d="M18 28 V18 H28 M92 18 H102 V28 M18 92 V102 H28 M92 102 H102 V92"/>
    <path class="a scan" d="M14 26 H106"/>`,
  house: `<g class="roof"><path class="s" d="M60 16 L102 38 L60 60 L18 38 Z"/><path class="a" d="M60 16 L60 60"/></g>
    <path class="s" d="M18 44 V82 L60 104 V66 M102 44 V82 L60 104"/>
    <path class="s" d="M70 98 V82 L82 76 V92"/><path class="af" d="M30 64 L44 71 V82 L30 75 Z"/>`,
  ball: `<g class="ball"><circle class="s" cx="60" cy="60" r="34"/>
    <path class="cf" d="M60 45 L74 55 L69 71 L51 71 L46 55 Z"/>
    <path class="s" d="M60 45 V26 M74 55 L92 49 M69 71 L80 88 M51 71 L40 88 M46 55 L28 49"/></g>
    <path class="a" d="M4 46 H18 M0 60 H16 M4 74 H18"/>`,
  web: `<rect class="s" x="12" y="18" width="96" height="84" rx="8"/><path class="s" d="M12 34 H108"/>
    <circle class="af" cx="22" cy="26" r="3"/><circle class="cf" cx="32" cy="26" r="3"/><circle class="cf" cx="42" cy="26" r="3"/>
    <circle class="af float" cx="84" cy="54" r="9"/>
    <path class="s" d="M30 94 V62 L52 48 L74 62 V94 M42 94 V80 H62 V94 M40 66 H46 M58 66 H64"/>`,
  sign: `<path class="s" d="M14 94 H106"/><path class="s" d="M16 86 L24 78 M16 78 L24 86"/>
    <path class="a draw" d="M30 84 C38 48 50 46 48 72 C46 92 60 58 68 64 C76 70 72 84 84 70 C90 62 96 66 102 60"/>
    <path class="s" d="M82 18 L100 36 L72 64 L58 68 L62 54 Z M76 24 L94 42"/>`,
  tasks: `<rect class="s" x="16" y="20" width="18" height="18" rx="4"/><rect class="s" x="16" y="51" width="18" height="18" rx="4"/><rect class="s" x="16" y="82" width="18" height="18" rx="4"/>
    <path class="a draw" d="M20 29 L24 34 L31 24"/><path class="a draw" d="M20 60 L24 65 L31 55"/>
    <path class="s" d="M46 29 H102 M46 60 H94 M46 91 H80"/>`,
  radar: `<circle class="s" cx="60" cy="60" r="42"/><circle class="s" cx="60" cy="60" r="27" opacity=".6"/><circle class="s" cx="60" cy="60" r="12" opacity=".4"/>
    <path class="s" d="M60 14 V106 M14 60 H106" opacity=".35"/>
    <path class="sweep af" d="M60 60 L60 18 A42 42 0 0 1 96 39 Z" opacity=".45"/>
    <circle class="af" cx="80" cy="42" r="4"/><circle class="a ping" cx="80" cy="42" r="4"/>
    <circle class="af" cx="42" cy="78" r="3"/>`,
  pc: `<rect class="s" x="12" y="22" width="68" height="50" rx="5"/><path class="s" d="M46 72 V86 M32 88 H60"/>
    <rect class="s" x="88" y="28" width="22" height="60" rx="4"/><path class="s" d="M94 40 H104 M94 48 H104"/>
    <circle class="af blink" cx="99" cy="76" r="3.5"/>
    <path class="a" d="M22 36 L30 42 L22 48"/><path class="s" d="M34 50 H50"/><path class="a draw" d="M22 60 H64"/>`,
  target: `<circle class="s" cx="60" cy="60" r="40"/><circle class="s" cx="60" cy="60" r="25"/>
    <circle class="af" cx="60" cy="60" r="9"/><circle class="a ping" cx="60" cy="60" r="9"/>
    <path class="s" d="M60 10 V26 M60 94 V110 M10 60 H26 M94 60 H110"/>`,
  hook: `<g class="hook"><circle class="s" cx="70" cy="14" r="5"/><path class="s" d="M70 19 V70 C70 94 38 94 38 72 L48 64"/></g>
    <rect class="af" x="16" y="72" width="34" height="30" rx="6"/><path class="a" d="M23 72 V63 C23 51 43 51 43 63 V72"/>
    <circle cx="33" cy="86" r="3.5" fill="#0b0b0b"/>`,
  bot: `<path class="af bubble" d="M74 12 H108 V38 H92 L84 46 V38 H74 Z"/>
    <circle cx="84" cy="25" r="2.5" fill="#0b0b0b"/><circle cx="91" cy="25" r="2.5" fill="#0b0b0b"/><circle cx="98" cy="25" r="2.5" fill="#0b0b0b"/>
    <rect class="s" x="16" y="46" width="66" height="52" rx="14"/><path class="s" d="M49 46 V32"/><circle class="af" cx="49" cy="28" r="5"/>
    <g class="eyes"><circle class="cf" cx="37" cy="68" r="6"/><circle class="cf" cx="61" cy="68" r="6"/></g>
    <path class="s" d="M38 84 H60 M8 66 V78 M90 66 V78"/>`,
};
const PROJECTS = [
  { name: "BuildScan", lang: "Python", icon: "house", desc: "Classifies Minecraft schematics as house / not house: RandomForest (88.6%) vs PyTorch 3D CNN on 32³ voxels (94.4%), FastAPI + Three.js viewer.", tags: ["AI", "Deep learning", "Featured"], url: "https://github.com/TomGlv/minecraft-house-ai" },
  { name: "AI PDF Sorter", lang: "Python", icon: "ocr", desc: "Reads handwritten scanned PDFs with an LLM vision model, extracts fields as validated JSON, human-review queue, cache, CSV audit.", tags: ["AI", "LLM", "Document AI"], url: "https://github.com/TomGlv/ai-pdf-sorter" },
  { name: "Voltaire OCR + LLM", lang: "C++", icon: "ocr", desc: "Screen capture → Tesseract OCR (Leptonica preprocessing) → Groq and Gemini queried in parallel to spot and explain French grammar mistakes.", tags: ["AI", "OCR", "LLM"], url: "https://github.com/TomGlv/voltaire-ocr-llm" },
  { name: "AI Lore Video Generator", lang: "Python", icon: "bot", desc: "End-to-end generative pipeline: Llama 3.3 script (Groq), AI images, AI voice-over, video assembled with OpenCV.", tags: ["AI", "GenAI"], url: "https://github.com/TomGlv/ai-lore-video-generator" },
  { name: "ML with scikit-learn", lang: "Python", icon: "chart", desc: "KNN, decision tree, linear & logistic regression on Iris and an e-learning dataset, auto-generated PDF report.", tags: ["AI", "ML"], url: "https://github.com/TomGlv/ml-scikit-learn-basics" },
  { name: "CineDeck", lang: "Web", icon: "web", desc: "Full-stack movie trading-card game on the TMDB API: auth, auction market with bid escrow, trades, cron jobs. Next.js, Prisma, Postgres.", tags: ["Full-stack"], url: "https://github.com/TomGlv/cinedeck" },
  { name: "archidia-web", lang: "Web", icon: "web", desc: "Client website for the ArchidiA architecture studio: Astro, Sanity CMS, Netlify forms. Lighthouse 99/100.", tags: ["Client", "Front-end"], url: "https://github.com/TomGlv/archidia-web" },
  { name: "Numerical simulation", lang: "Python", icon: "chart", desc: "RC circuit solved by Euler, RK4 and analytically in a CustomTkinter GUI; damped pendulum model.", tags: ["Maths"], url: "https://github.com/TomGlv/numerical-simulation" },
  { name: "LoL Match Notifier", lang: "Python", icon: "radar", desc: "GitHub Actions cron + Riot API: every new game posted to Discord with KDA, kill participation, LP and distance to Master.", tags: ["Bot", "API"], url: "https://github.com/TomGlv/lol-match-notifier" },
  { name: "Tesseract OCR test", lang: "C++", icon: "ocr", desc: "Win32 screen capture → OpenCV EAST text detection → OCR → LLM over REST. Prototype of the Voltaire tool.", tags: ["AI", "OCR"], url: "https://github.com/TomGlv/tesseract-ocr-test" },
  { name: "WorldCupStats", lang: "C#", icon: "ball", desc: "Statistics application crunching World Cup data — teams, matches and numbers, in .NET.", tags: ["Data", ".NET"], url: "https://github.com/TomGlv/WorldCupStats" },
  { name: "Advanced SQL", lang: "Python", icon: "tasks", desc: "MySQL 8 labs: joins, GROUP BY / HAVING, CTEs, views, with Python scripts that run them and build the report.", tags: ["Data", "SQL"], url: "https://github.com/TomGlv/mysql-advanced-sql" },
  { name: "SoWeSign", lang: "Java", icon: "sign", desc: "Team electronic-attendance app in JavaFX + MySQL, with admin, teacher and student sides.", tags: ["OOP"], url: "https://github.com/TomGlv/SoWeSign" },
  { name: "TaskFlow", lang: "Web", icon: "tasks", desc: "A clean web-based task manager. Organise, track and flow through your to-dos.", tags: ["UI"], url: "https://github.com/TomGlv/TaskFlow" },
  { name: "Quoridor", lang: "C", icon: "target", desc: "Quoridor board game in C: solo console version and the ING1 team project with an AI opponent.", tags: ["Game"], url: "https://github.com/TomGlv/quoridor" },
  { name: "ECE Cooked", lang: "C", icon: "pc", desc: "Two-player co-op cooking game with Allegro 4: menu, music, collision map, timer.", tags: ["Game"], url: "https://github.com/TomGlv/ece-cooked" },
  { name: "Computer inventory", lang: "Java", icon: "pc", desc: "Java app to manage an organisation's computer fleet: add, edit, delete and track machines.", tags: ["Desktop"], url: "https://github.com/TomGlv/computer-inventory-java" },
  { name: "Tournament manager", lang: "Python", icon: "ball", desc: "Standings, insertion sort, linear vs binary search with comparison counts, round-robin fixtures.", tags: ["Algorithms"], url: "https://github.com/TomGlv/tournament-manager" },
  { name: "C data structures", lang: "C", icon: "chart", desc: "Queue, stack and max-heap implemented in C on real exercises (ticket office, containers, ski stations).", tags: ["Algorithms"], url: "https://github.com/TomGlv/c-data-structures" },
  { name: "Deezer Discord RPC", lang: "Python", icon: "radar", desc: "Shows the Deezer track you're playing as Discord Rich Presence, through Last.fm now-playing.", tags: ["Tool"], url: "https://github.com/TomGlv/deezer-discord-rpc" },
];
window.ICONS=ICONS;window.PROJECTS=PROJECTS;