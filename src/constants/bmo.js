import cover from "../assets/bmo/cover.svg";
import bmoFaceFigma from "../assets/bmo/bmoface_figma.png";
import bmoSetup from "../assets/bmo/setup.jpg";
import reelDay1 from "../assets/bmo/reel-DZD6Qiuvxx7.jpg";
import reelDay2 from "../assets/bmo/reel-DZJj6KtI95-.jpg";
import reelDay3 from "../assets/bmo/reel-DZaxoA7y41K.jpg";
import reelDay4 from "../assets/bmo/reel-DZdfR2jS2uS.jpg";
import reelDay5 from "../assets/bmo/reel-DZtTaWmI9Xn.jpg";

export const bmoCover = cover;

// ── Hero ──────────────────────────────────────────────────────────────
export const bmoHero = {
  eyebrow: "Personal Build · Raspberry Pi · On-device AI",
  title: "BMO",
  role: "Solo project — product, hardware, ML, and design",
  tagline:
    "A voice-controlled BMO companion that thinks, talks, and emotes — entirely on-device.",
  why: "I wanted to find out whether a genuinely useful voice assistant could run entirely on-device — and whether I could build one end to end, including training a custom voice, with no prior machine-learning experience.",
  blurb:
    'Say "Hey BMO" and it wakes up, listens to your command, thinks up a reply in BMO’s cheerful personality, speaks it aloud in a custom BMO voice, and reacts with animated facial expressions on its screen. Everything runs locally on a Raspberry Pi 5 — no cloud APIs, no accounts, no internet required at runtime.',
};

// ── TL;DR — the 15-second version for a busy reader ───────────────────
export const bmoTldr = [
  {
    label: "What",
    text: 'A voice companion that wakes to "Hey BMO," replies in character, and emotes on a little screen.',
  },
  {
    label: "How",
    text: "Wake word → speech-to-text → local LLM → custom text-to-speech → animated face, all on a Raspberry Pi 5.",
  },
  {
    label: "Status",
    text: "Working end to end and fully offline; now focused on cutting response time.",
  },
];

// ── Pipeline diagram (mic → wake → STT → LLM → TTS → speaker + face) ───
export const bmoPipeline = [
  { label: "Mic", sub: "you speak" },
  { label: "Wake word", sub: "openWakeWord" },
  { label: "Speech-to-text", sub: "faster-whisper" },
  { label: "Language model", sub: "Ollama" },
  { label: "Text-to-speech", sub: "Piper" },
  { label: "Speaker + Face", sub: "voice + emotion" },
];

// ── Build phases (problem → decision → result) ────────────────────────
export const bmoPhases = [
  {
    id: "hardware",
    eyebrow: "Phase 1",
    title: "Hardware",
    subtitle: "Making it a real, self-contained device",
    problem:
      "I wanted a BMO that actually works anywhere — something I could power on and talk to without setting up an account, signing into a cloud service, or even being online. That meant the entire experience had to fit on one small machine.",
    decision:
      "I built it around a Raspberry Pi 5 with a USB microphone, a speaker, and the Raspberry Pi Touch Display 2 for BMO’s face. The software auto-prefers USB / reSpeaker mics so it picks the right input on boot without manual configuration.",
    result: [
      "A single, portable device that runs the whole interaction loop locally.",
      "No internet, accounts, or cloud calls at runtime — it just turns on and works.",
    ],
    photo: bmoSetup,
    photoCaption:
      "The Raspberry Pi 5 build with speaker, mic, and touch display.",
    decisions: [
      {
        topic: "Microphone",
        considered: "A separate USB mic alongside the speaker",
        chose: "The speaker’s built-in mic",
        why: "The speaker already captured audio cleanly, so dropping the extra mic simplified the hardware and the wiring.",
      },
    ],
  },
  {
    id: "voice",
    eyebrow: "Phase 2",
    title: "Voice",
    subtitle: "Hearing the wake word, understanding, and speaking back",
    problem:
      "For it to feel like talking to BMO, it needed to wake on “Hey BMO,” understand whatever I said, and reply out loud — fast enough to feel conversational, and all on the Pi’s CPU with no GPU to lean on.",
    decision:
      "I split the voice loop into three local engines: openWakeWord (a custom hey_bmo model) listens for the wake phrase, faster-whisper (tiny.en, int8) transcribes the command on CPU, and Piper speaks the reply through a custom BMO voice.",
    result: [
      'Say "Hey BMO" and it wakes, transcribes your request, and answers in a voice trained to sound like BMO.',
      "Wake-word threshold, silence detection, and timeouts are tunable so it stays responsive without false triggers.",
    ],
    decisions: [
      {
        topic: "Speech-to-text engine",
        considered: "Whisper vs. Faster-Whisper",
        chose: "Faster-Whisper",
        why: "Light enough to transcribe on the Pi’s CPU, with no GPU to lean on.",
      },
      {
        topic: "Text-to-speech engine",
        considered: "Coqui vs. Piper",
        chose: "Piper",
        why: "Ran efficiently on-device and paired cleanly with a custom-trained voice.",
      },
      {
        topic: "BMO’s voice",
        considered: "A generic robot voice vs. training a custom one",
        chose: "Trained my own — despite no ML experience",
        why: "A stock voice wouldn’t feel like BMO. I generated ~200 samples via Fish Audio ($1) and trained the model overnight on my gaming PC’s GPU.",
      },
      {
        topic: "Cloud vs. on-device",
        considered: "Cloud speech APIs vs. running fully local",
        chose: "Fully local",
        why: "Keeps BMO private, offline, and instant to start — no accounts or network required.",
      },
    ],
  },
  {
    id: "personality",
    eyebrow: "Phase 3",
    title: "Personality",
    subtitle: "Thinking and replying in character",
    problem:
      "A working voice assistant isn’t BMO. The replies had to sound cheerful and playful like the character — not like a generic assistant — and the model still had to be small enough to run locally on the Pi.",
    decision:
      "I run a small language model (llama3.2:1b) locally through Ollama, steered by a BMO persona prompt that sets the character’s voice, tone, and quirks.",
    result: [
      "BMO replies in-character and fully offline.",
      "Swapping the persona prompt changes BMO’s personality without touching the rest of the system.",
    ],
    decisions: [
      {
        topic: "Personality approach",
        considered: "Fine-tuning a model vs. prompt-steering a stock one",
        chose: "A BMO persona prompt on a small local model",
        why: "Got an in-character voice without the cost and complexity of fine-tuning — and the personality stays editable in one place.",
      },
      {
        topic: "Model size",
        considered: "A larger, smarter model vs. a tiny one",
        chose: "llama3.2:1b",
        why: "Small enough to run locally on the Pi while still holding a playful conversation.",
      },
    ],
  },
  {
    id: "face",
    eyebrow: "Phase 4",
    title: "Face",
    subtitle: "Showing emotion on screen",
    problem:
      "Voice alone still isn’t BMO — the expressive little face is half of what makes the character. It needed to react visibly to what was happening in the conversation.",
    decision:
      "A fullscreen pygame app maps emotional states to face images via a faces.json config and renders them on the Pi’s touch display, so BMO’s expression changes with the moment.",
    result: [
      "BMO reacts with animated facial expressions per emotional state.",
      "New expressions are added by dropping in an image and mapping it in faces.json — no code changes.",
    ],
    photo: bmoFaceFigma,
    photoCaption: "BMO’s face, designed in Figma.",
    decisions: [
      {
        topic: "Rendering the face",
        considered: "An animation engine vs. swapping static images",
        chose: "Fullscreen images mapped per emotion (pygame + faces.json)",
        why: "Simple, fast on the Pi, and adding a new expression is just an image plus one line of config.",
      },
    ],
  },
];

// ── What I learned (product reflection) ───────────────────────────────
export const bmoLearnings = [
  {
    title: "Constraints are a design tool, not a limitation",
    body: "Forcing everything to run on-device on a Pi CPU made every decision sharper. It ruled out the easy cloud answers and pushed me toward lighter, faster, more private choices I’m now glad I made.",
  },
  {
    title: "Scope ruthlessly, then go deep where it matters",
    body: "I kept most of the stack off-the-shelf so I could spend real effort on the one thing that makes it feel like BMO — a custom-trained voice. Knowing where to spend versus save was the whole game.",
  },
  {
    title: "Ship the rough version, then measure",
    body: "Getting to a working end-to-end loop first — even a slow one — gave me something real to evaluate and a clear next priority (latency), instead of polishing in the dark.",
  },
];

export const bmoStack = [
  {
    stage: "Wake word",
    engine: "openWakeWord",
    notes: "Custom hey_bmo.onnx model",
  },
  {
    stage: "Speech-to-text",
    engine: "faster-whisper",
    notes: "tiny.en, CPU / int8",
  },
  {
    stage: "Language model",
    engine: "Ollama",
    notes: "llama3.2:1b with a BMO persona prompt",
  },
  {
    stage: "Text-to-speech",
    engine: "Piper",
    notes: "Custom bmo_voice.onnx voice",
  },
  {
    stage: "Face",
    engine: "pygame",
    notes: "Fullscreen image per emotional state",
  },
];

// ── Instagram reels (featured latest + carousel of past) ───────────────
// List CHRONOLOGICALLY (oldest first). Append each new reel to the BOTTOM —
// the last entry is automatically featured as the "Latest episode", and the
// rest appear in the past-episodes carousel (most-recent first).
// `url` is the public reel link; `poster` is the cover image you provide.
export const bmoReels = [
  {
    url: "https://www.instagram.com/p/DZD6Qiuvxx7/",
    poster: reelDay1,
    caption: "Day 1 — unboxing the Pi and first boot",
  },
  {
    url: "https://www.instagram.com/p/DZJj6KtI95-/",
    poster: reelDay2,
    caption: "Day 2 — getting wake-word detection working",
  },
  {
    url: "https://www.instagram.com/p/DZaxoA7y41K/",
    poster: reelDay3,
    caption: "Day 3 — teaching BMO to listen: speech-to-text on the Pi",
  },
  {
    url: "https://www.instagram.com/p/DZdfR2jS2uS/",
    poster: reelDay4,
    caption: "Day 4 — training a custom BMO voice that runs fully on-device",
  },
  {
    url: "https://www.instagram.com/p/DZtTaWmI9Xn/",
    poster: reelDay5,
    caption: "Day 5 — wiring it all together for BMO's first conversation",
  },
];

// ── Future plans ──────────────────────────────────────────────────────
export const bmoFutureIdeas = [
  "Design custom BMO faces with more expressions",
  "Connect to a console for playing games",
  "Take pictures — and maybe print them",
];

// Flip to a real URL when you're ready to make the repo public.
export const bmoRepoUrl = null;
