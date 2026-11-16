import designDesk from "../assets/rover/design-desk.jpg";
import moonDrive from "../assets/rover/moon-drive.jpg";
import marsDrive from "../assets/rover/mars-drive.jpg";
import titanDrive from "../assets/rover/titan-drive.jpg";
import dashboard from "../assets/rover/dashboard.jpg";
import demoVideo from "../assets/rover/demo.mp4";
import demoPoster from "../assets/rover/demo-poster.jpg";

export { default as roverCover } from "../assets/rover/cover.jpg";
// 4:3 crop of the cover, to match the other Home page highlight cards
export { default as roverHighlight } from "../assets/rover/highlight.jpg";
export { designDesk as roverDesignDesk, dashboard as roverDashboard };

export const roverHero = {
  eyebrow: "NASA Space Apps 2026 · 3D Browser Game · Hackathon",
  title: "Rover Engineer",
  role: "Co-designer and developer · Team ChocoCherry, with my teammate Alvin",
  tagline:
    "A free 3D browser game where you design a rover, buy it a seat on a launch, and drive it on the Moon, Mars and Titan.",
  blurb:
    "You are the newest engineer at REL, the Rover Exploration Laboratory, a fictional agency. On each mission you pick every part of a rover within a budget, buy it a launch ticket, and drive it in real time once it lands, on terrain built from real NASA data. Every part trades capability against mass and cost, and the mission has to earn back what the rover and its launch cost before you can move on to the next world.",
  challenge:
    "Create an interactive game for designing, managing, and simulating a complete space mission, with engineering decisions, limited resources, and visible consequences.",
};

export const roverLinks = [
  { label: "Play the game", href: "https://rover-engineer.vercel.app/", primary: true },
  { label: "View on GitHub", href: "https://github.com/chieri518/rover-engineer" },
  {
    label: "Space Apps project page",
    href: "https://www.spaceappschallenge.org/2026/find-a-team/chococherry/?tab=project",
  },
];

// ── Demo video: our own file, with the YouTube upload linked underneath
export const roverDemo = {
  src: demoVideo,
  poster: demoPoster,
  youtube: "https://www.youtube.com/watch?v=kdl5uFApLek",
  title: "Rover Engineer: Design a Rover for the Moon, Mars and Titan",
};

export const roverTldr = [
  {
    label: "What",
    text: "A rover design and driving game for high school learners, built for NASA's Space Mission Design Game challenge.",
  },
  {
    label: "How",
    text: "TypeScript, Three.js and Rapier physics in the browser, with real NASA terrain, imagery and solar flare data turned into game files by a Python pipeline.",
  },
  {
    label: "Status",
    text: "Submitted to NASA Space Apps Challenge 2026. All three worlds are playable end to end in the browser.",
  },
];

// ── One mission loop: design → ticket → land → drive → debrief → next world
export const roverPipeline = [
  { label: "Design", sub: "a part for each slot" },
  { label: "Launch ticket", sub: "set by mass and size" },
  { label: "Drive", sub: "on real NASA terrain" },
  { label: "Debrief", sub: "money earned and lessons" },
  { label: "Next world", sub: "Moon → Mars → Titan" },
];

export const roverTradeoffs = [
  {
    title: "Mass and size set the ticket",
    body: "A heavier or bulkier rover needs a pricier launch tier. Above the top tier, it can't launch at all.",
  },
  {
    title: "Mass changes the drive",
    body: "A heavier rover is slower, uses more energy per meter, sinks deeper in soft soil and can overload its frame.",
  },
  {
    title: "Instruments decide the science",
    body: "A camera photographs viewpoints, a drill takes samples, a neutron spectrometer senses hidden hydrogen. Without the right one, the rover drives past the reward.",
  },
];

// ── Three worlds, each adding one new constraint ─────────────────────
export const roverWorlds = [
  {
    name: "The Moon",
    site: "de Gerlache crater rim, near the south pole",
    time: "5 min · one lunar day (14 Earth days)",
    lesson: "Mass versus cost",
    image: moonDrive,
    alt: "The rover driving on the Moon at the de Gerlache crater rim",
    caption:
      "The low Sun circles the horizon, so shadows sweep across the land and a good charging spot can go dark. Permanently shadowed craters hide water ice in deep cold, but only a rover with lights and a heater can go in for it.",
  },
  {
    name: "Mars",
    site: "Jezero crater floor",
    time: "10 min · 10 sols",
    lesson: "Energy through day and night",
    image: marsDrive,
    alt: "The rover driving on Mars in Jezero crater under a butterscotch sky",
    caption:
      "The terrain is real Jezero crater, landing about 500 m from Perseverance's 2021 site. Each sol ends in a cold night: keep the lights on and drain the battery, or sleep until dawn. Without a heater, the rover freezes on the first night, and a forecast dust storm cuts solar power to a third.",
  },
  {
    name: "Titan",
    site: "Shangri-La dunes near Selk crater",
    time: "15 min · one Titan day (about 16 Earth days)",
    lesson: "A fixed power budget in deep cold",
    image: titanDrive,
    alt: "The rover driving through Titan's Shangri-La dunes in orange haze",
    caption:
      "Sunlight is too weak for solar panels, so the battery is the whole energy budget, and the goal is to survive the long night. Methane raindrops fall about six times slower than rain on Earth, the ground darkens when wet, and rounded water-ice pebbles lie on the firm ground, like the ones Huygens photographed in 2005.",
  },
];

export const roverNasaData = [
  {
    title: "Terrain",
    body: "The drivable 8 km × 8 km Moon map is the real de Gerlache rim from LRO's laser altimeter (LOLA), with real mountains on the horizon. Mars uses a 1 m HiRISE elevation model of Jezero crater.",
  },
  {
    title: "Light and cold",
    body: "Shadows are computed from the real topography and checked against LOLA illumination maps, with a mean error of 1.5 percentage points. The permanent-shadow map places the cold zones and the hidden ice.",
  },
  {
    title: "Imagery",
    body: "The Moon's ground is an LROC Narrow Angle Camera mosaic, and Mars uses HiRISE imagery.",
  },
  {
    title: "Solar flares",
    body: "Each flare is one of the 20 strongest X-class events from 2010 to 2026 in NASA's DONKI database, named by class and date. Power down or hide in shadow.",
  },
  {
    title: "Soil",
    body: "Wheel sinkage, slip and getting stuck follow the Apollo 15 Lunar Roving Vehicle results (NASA TR R-401).",
  },
  {
    title: "History",
    body: "Optional facts on milestones and in the debrief cite NASA sources. A failed mission is compared with a real rover that met a similar fate.",
  },
];

// ── Who built what (from the merged pull requests) ───────────────────
export const roverMyWork = [
  "Took the game from an empty repo to a full, playable Moon mission: the design desk, the NASA terrain pipeline, driving physics, hazards, solar flares, milestones and the debrief",
  "Built the Mars mission on real Jezero crater terrain, with day and night, cold nights and dust storms",
  "Built the Titan mission, its survival goal and the end-of-campaign stats dashboard",
  "Made Titan's look: methane rain, wet ground, clouds, ice pebbles and headlight beams in the haze",
  "Modeled the rover in code, with a live 3D preview on the design desk, and the explore-to-reveal minimap",
];

export const roverTeammateWork = [
  "The payload bay, part relationships and the engineering notebook",
  "The Welcome to REL story intro and site context for each world",
  "New Moon sites and instrument milestones, plus a balance pass after playtesting",
];

export const roverDecisions = [
  {
    title: "Exploring, not reading a map of answers",
    problem:
      "The minimap showed the whole 8 km map from the start, so players could see every site and drive straight to it. There was nothing left to explore.",
    decision:
      "The minimap now starts about 700 m across around the lander and widens as the rover explores. Sites appear only once the rover gets within 250 m, and the ice is never marked. The landing briefing gives three orbital-survey leads, with only a rough direction and distance, taken from real LOLA and LROC data.",
  },
  {
    title: "A fast game without a bouncy rover",
    problem:
      "Driving runs about four times faster than real, so the mission fits in minutes. At that speed, small bumps threw the rover into the air, with hops of up to 2.7 m.",
    decision:
      "Speeding time up by 4× means accelerations go up by 16×. So while wheels are off the ground, the rover now falls at 16× gravity, while ground gravity stays at 4× so climbing, grip and rollover don't change. Over 18 km of test driving, air time dropped from 13.7 s to 2.5 s.",
  },
  {
    title: "No single best rover",
    problem:
      "If one build beat all the others, the design desk would stop being a puzzle. Players would find it once and never think about trade-offs again.",
    decision:
      "An automated balance check scores a set of builds against the Moon mission. A light camera scout, a drill geologist and a cold-proofed ice hunter all pass, each doing a different job. A random build, or a rover that stays by the lander, fails.",
  },
  {
    title: "One new lesson per world",
    problem:
      "Mars and Titan had to feel different from the Moon, not just look different, without burying high school players in new rules.",
    decision:
      "Each world adds one constraint. Mars adds night: lights on or sleep, and a heater or freeze. Titan takes solar power away, so the battery is the whole budget. Both reuse the Moon's design desk, so players carry what they learned forward.",
  },
  {
    title: "A rover that shows your design",
    problem:
      "The rover should look like a real lunar rover and show every part the player picked, but the game had no 3D artist and no model files.",
    decision:
      "The rover is built in code from simple 3D shapes, modeled on the Apollo rover, VIPER, Lunokhod and Yutu. Titanium is a light tube frame, steel is bolted beams, and a heater adds gold thermal foil. It's about 2% of the scene, with no noticeable change in frame rate.",
  },
];

export const roverStack = [
  {
    stage: "Game",
    engine: "TypeScript + Vite",
    notes: "Game numbers and text live in JSON; the rules have no rendering code",
  },
  {
    stage: "3D rendering",
    engine: "Three.js",
    notes: "Terrain chunks load as the rover drives; the rover is modeled in code",
  },
  {
    stage: "Physics",
    engine: "Rapier",
    notes: "Wheels, suspension, slopes, sinkage and rollover",
  },
  {
    stage: "NASA data pipeline",
    engine: "Python (rasterio, NumPy)",
    notes: "Turns LOLA, LROC, HiRISE and DONKI data into game files",
  },
  {
    stage: "Tests",
    engine: "Vitest",
    notes: "Nearly 500 tests on the game rules",
  },
  {
    stage: "AI coding assistant",
    engine: "Claude Code",
    notes: "Used alongside our own design, review and playtesting",
  },
  {
    stage: "Hosting",
    engine: "Vercel",
    notes: "rover-engineer.vercel.app",
  },
];

export const roverLearnings = [
  {
    title: "Code wasn't the bottleneck",
    body: "The slow parts were deciding what the game should be, judging whether it felt right, and playtesting. So we split ownership by decisions, the engineer's desk and the field, not by files.",
  },
  {
    title: "Turn “feels wrong” into numbers",
    body: "A bouncy rover or an unfair build is easy to notice and hard to fix by eye. Measuring air time, hop height and each build's final balance showed whether a fix actually worked.",
  },
  {
    title: "Real data teaches the lesson",
    body: "Because shadows come from the real terrain, players learn on their own why a south pole charging spot can go dark, and why real landing sites are chosen for sunlight.",
  },
];

export const roverFutureIdeas = [
  "Parts, instruments and milestones made for Mars and Titan, not borrowed from the Moon",
  "An unlock tree, so research points earned by doing science unlock new parts",
  "A richer design desk, with a preview of each part while you choose it",
];
