import morningEdition from "../assets/dailyprint/morning-edition.jpg";
import kitchenTable from "../assets/dailyprint/kitchen-table.jpg";
import valleyLedger from "../assets/dailyprint/valley-ledger.jpg";
import dailyVibeCheck from "../assets/dailyprint/daily-vibe-check.jpg";
import camdenCourier from "../assets/dailyprint/camden-courier.jpg";
import demoVideo from "../assets/dailyprint/demo.mp4";
import demoPoster from "../assets/dailyprint/demo-poster.jpg";

export { default as dailyPrintCover } from "../assets/dailyprint/cover.jpg";

export const dailyPrintHero = {
  eyebrow: "Personal Build · AI Agent · Web App",
  title: "Daily Print",
  role: "Product, design and engineering",
  tagline:
    "An AI editor that puts together your own newspaper and prints it at home every morning.",
  blurb:
    "Daily Print is a personal newspaper, not a news feed. You design your paper — its name, sections, page layouts, typeface, tone and location — and an AI editor fills it each morning: it researches the news on the web, decides what makes the front page, writes every story to fit its spot, and adds the weather, puzzles, a word of the day and a comic strip drawn for you. The finished edition is a print-ready PDF, and a small printer box at home prints it before you wake up.",
  why: "News apps never end. A newspaper does: it has a fixed number of pages, a layout, and an editor who decides what matters and what gets cut. I wanted that experience back, made just for one reader, and on real paper.",
};

export const dailyPrintTldr = [
  {
    label: "What",
    text: "A web app where you design your own newspaper, and an AI editor writes, lays out and prints a fresh edition of it every day.",
  },
  {
    label: "How",
    text: "Claude researches and writes each section, code lays out the pages and prints a PDF, and a Raspberry Pi printer box prints it at home.",
  },
  {
    label: "Status",
    text: "Working end to end: editions are written, printed to PDF and scheduled for the printer box. Next, deploying it so the paper prints by itself every morning.",
  },
];

// ── Sample editions: same day, same news, five different papers ─────
export const dailyPrintSamples = [
  {
    name: "The Morning Edition",
    reader: "San Francisco · Straight news",
    image: morningEdition,
    caption:
      "The default paper: a lead story with an illustration, a five-day forecast, quote of the day, a four-panel comic starring a skeptical cat and an over-excited pigeon, and the word of the day.",
  },
  {
    name: "The Kitchen Table",
    reader: "Oakland · A family paper",
    image: kitchenTable,
    caption:
      "Local news first, in a plain, friendly voice. Birthdays come from the reader's Google Calendar and appear under the masthead, only on days that have them.",
  },
  {
    name: "The Valley Ledger",
    reader: "Palo Alto · Startups and markets",
    image: valleyLedger,
    caption:
      "Sections renamed to suit the reader (Capital, Markets, The Cap Table) and a comic cast of their own: hopeful hamster founders and a skeptical owl investor.",
  },
  {
    name: "The Daily Vibe Check",
    reader: "Brooklyn · Gen Z tone",
    image: dailyVibeCheck,
    caption:
      'The same news, rewritten in a Gen Z voice: "The Tea", "Tech Drama" and "Comic (lowkey iconic)", with a wide comic strip across the bottom of the page.',
  },
  {
    name: "The Camden Courier",
    reader: "London · A4 and Celsius",
    image: camdenCourier,
    caption:
      "A4 paper, Celsius, British spelling and a dry wit. On This Day looks back at Agincourt and Balaclava, both fought on 25 October.",
  },
];

// ── Demo video: { embed: "https://www.youtube.com/embed/..." } or { src, poster }
export const dailyPrintDemo = { src: demoVideo, poster: demoPoster };

// ── Pipeline diagram (settings → research → write → draw → PDF → print) ───
export const dailyPrintPipeline = [
  { label: "Your paper", sub: "Customize page" },
  { label: "Research", sub: "Claude + web search" },
  { label: "Write", sub: "stories + extras" },
  { label: "Draw", sub: "illustration + comic" },
  { label: "Lay out", sub: "print-ready PDF" },
  { label: "Print", sub: "printer box at home" },
];

export const dailyPrintDecisions = [
  {
    title: "Customization without a blank canvas",
    problem:
      "My first Customize page let readers build free columns and pick Short, Medium or Long for each story. It hid its own rules: a column could look full but still offer a + button, and sizes changed behind the reader's back.",
    decision:
      "I replaced it with 8 ready-made page layouts on a 3-column grid. Readers drag sections into spots, the spots a section fits light up while it's dragged, and each spot shows about how many words it holds. Every page looks designed, whatever the reader picks.",
  },
  {
    title: "Writing to fit the page",
    problem:
      "The first real edition wrote 40% more than the page could hold, and stories were cut off mid-sentence. Fixed word counts went the other way, leaving gaps whenever a story came in short.",
    decision:
      "Each story's word limit now comes from the size of its spot in print. Text that still runs long shrinks slightly to fit, and small fillers — a quote of the day, a fun fact — fill space left at the bottom of a section, the way real papers do.",
  },
  {
    title: "Fast, resumable and stoppable",
    problem:
      "One long research call took 3 minutes, and a whole edition is too long for a web request. If the server restarted midway, it would start over and pay for the AI calls again.",
    decision:
      "Research now runs as one call per section, all at once, taking about 80 seconds. Each edition runs as a background workflow whose steps save as they finish, so a restart carries on where it left off. Stop works by changing the edition's status, which the workflow checks before each costly step.",
  },
  {
    title: "Pictures that are safe to print",
    problem:
      "News photos are copyrighted, and an illustration of a tragic story on a cheerful morning paper would feel wrong.",
    decision:
      "Every picture is AI-drawn in black-and-white pen and ink. The editor only illustrates a light or neutral story, and skips the illustration on a heavy news day. The comic is a gentle, non-partisan joke starring a cast the reader describes, never real people.",
  },
  {
    title: "Printing at home, with nothing exposed",
    problem:
      "The paper has to be made while my computer sleeps, and printed on an old laser printer at home without opening my home network to the internet.",
    decision:
      "Editions are made in the cloud and wait for their print time. A Raspberry Pi Zero next to the printer asks every 2 minutes whether a paper is ready, prints it and reports back. It proves who it belongs to with a secret key that's stored only as a hash, and a paper that can't print within an hour is skipped.",
  },
];

export const dailyPrintStack = [
  {
    stage: "Web app",
    engine: "Next.js on Vercel",
    notes: "Landing, Customize and Editions pages",
  },
  {
    stage: "Accounts and data",
    engine: "Supabase",
    notes: "Google sign-in, Postgres with row-level security, PDF storage",
  },
  {
    stage: "Background jobs",
    engine: "Workflow SDK",
    notes: "Resumable, step-by-step edition runs and scheduled papers",
  },
  {
    stage: "Research and writing",
    engine: "Claude (Opus + Sonnet)",
    notes: "Web search per section; Opus writes stories, Sonnet the extras",
  },
  {
    stage: "Pictures",
    engine: "OpenAI image model",
    notes: "Front-page illustration and the comic strip",
  },
  {
    stage: "Weather and birthdays",
    engine: "Open-Meteo, Google Calendar",
    notes: "Five-day forecast and almanac; birthdays never go to the AI",
  },
  {
    stage: "Puzzles",
    engine: "Code-generated grids",
    notes: "Sudoku, mini crossword, word search, jumble, news quiz",
  },
  {
    stage: "Layout and PDF",
    engine: "Headless Chromium",
    notes: "US Letter or A4, black and white",
  },
  {
    stage: "Printer box",
    engine: "Raspberry Pi Zero W + CUPS",
    notes: "HP LaserJet P1102w over USB",
  },
];

export const dailyPrintLearnings = [
  {
    title: "Give people structure, not a blank canvas",
    body: "Total freedom made the Customize page harder to use, not easier. Ready-made layouts with clear rules let readers make a paper that looks good every time, and still feel like it's theirs.",
  },
  {
    title: "Test on the real output",
    body: "The first printed edition showed problems no screen preview did: stories cut off, gaps, a comic too small to read. Checking actual pages, then fixing the cause, shaped most of the layout system.",
  },
  {
    title: "Design for cost and failure from the start",
    body: "Every edition costs money in AI calls. Running research in parallel, saving each step, retrying only once and making Stop always work kept it fast, cheap and predictable.",
  },
];

export const dailyPrintFutureIdeas = [
  "Deploy it so the paper is made in the cloud and prints by itself every morning",
  "Let readers rate stories, so feedback shapes future editions",
  "New sections from real newspapers: horoscope, your sports teams, a markets watchlist and today's agenda",
];
