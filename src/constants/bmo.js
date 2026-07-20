import bmoFaceFigma from "../assets/bmo/bmoface_figma.png";
import bmoSetup from "../assets/bmo/setup.jpg";
import bmoSetup2 from "../assets/bmo/setup2.jpg";
import reelDay1 from "../assets/bmo/reel-DZD6Qiuvxx7.jpg";
import reelDay2 from "../assets/bmo/reel-DZJj6KtI95-.jpg";
import reelDay3 from "../assets/bmo/reel-DZaxoA7y41K.jpg";
import reelDay4 from "../assets/bmo/reel-DZdfR2jS2uS.jpg";
import reelDay5 from "../assets/bmo/reel-DZtTaWmI9Xn.jpg";
import reelDay6 from "../assets/bmo/reel-DaN4cD4IvwQ.jpg";
import reelDay7 from "../assets/bmo/reel-Dalin39y4NQ.jpg";
import reelDay8 from "../assets/bmo/reel-Da1B1MvS_Cc.jpg";
import reelDay9 from "../assets/bmo/reel-DbBzdSjylRC.jpg";

// The card/hero cover image, re-exported so pages can import it by a clear name.
export { default as bmoCover } from "../assets/bmo/cover.jpg";

// ── Hero ──────────────────────────────────────────────────────────────
export const bmoHero = {
  eyebrow: "Personal Build · Raspberry Pi · On-device AI",
  title: "BMO",
  role: "Solo project — product, hardware, ML, and design",
  tagline:
    "A voice-controlled BMO companion that thinks, talks, sees, and emotes — entirely on-device.",
  why: "I wanted to find out whether a genuinely useful voice assistant could run entirely on-device — and whether I could build one end to end, including training a custom voice, with no prior machine-learning experience.",
  blurb:
    'Say "Hey BMO" and it wakes up, listens to your command, thinks up a reply in BMO’s cheerful personality, speaks it aloud in a custom BMO voice, and reacts with animated facial expressions on its screen. It can even see — ask "what do you see?" and it looks through a camera to describe what’s in front of it — and it plays games on its touch screen, an endless runner and a logic puzzle, whenever you ask. Everything runs locally on a Raspberry Pi 5 — no cloud APIs, no accounts, no internet required at runtime.',
};

// ── TL;DR — the 15-second version for a busy reader ───────────────────
export const bmoTldr = [
  {
    label: "What",
    text: 'A voice companion that wakes to "Hey BMO," replies in character, looks through a camera to describe what it sees, emotes on a little screen, and plays touch-screen games on request.',
  },
  {
    label: "How",
    text: "Wake word → speech-to-text → local LLM (or a vision model when you ask it to look) → custom text-to-speech → animated face, all on a Raspberry Pi 5.",
  },
  {
    label: "Status",
    text: "Working end to end and fully offline. A metrics-driven speed pass cut a typical vision reply by ~30% — down to the model's honest hardware floor.",
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
    versions: [
      {
        label: "Version 1",
        dates: "Jun 1 – Jul 6, 2026",
        photo: bmoSetup,
        caption:
          "The first build — Raspberry Pi 5, speakers, and the touch display, wired up on the bench.",
      },
      {
        label: "Version 2",
        dates: "Jul 7, 2026 – present",
        photo: bmoSetup2,
        caption:
          "The current build — everything tucked into a 3D-printed case, plus an active cooler and a camera.",
      },
    ],
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
  {
    id: "sight",
    eyebrow: "Phase 5",
    title: "Sight",
    subtitle: "Letting BMO see and describe the world",
    problem:
      "BMO could hear and talk, but it couldn’t perceive anything around it. I wanted to be able to ask “what do you see?” and have it actually look — still fully on-device, with no cloud vision APIs.",
    decision:
      "I added a Raspberry Pi Camera and route vision-style commands (like “what do you see,” “look at,” or “describe”) to a small local vision model — moondream, run through Ollama. BMO shows a live camera preview on its screen, captures a frame with Picamera2, and describes what it sees aloud.",
    result: [
      'Ask "what do you see?" and BMO looks through its camera and describes the scene in character.',
      "A simple keyword trigger decides between a normal chat reply and a look-and-describe response — and it all still runs locally.",
    ],
    decisions: [
      {
        topic: "Vision model",
        considered: "A cloud vision API vs. a local model",
        chose: "moondream on Ollama",
        why: "Small enough to run on the Pi and keeps BMO fully offline, just like the rest of the stack.",
      },
      {
        topic: "When to look",
        considered: "Always analyzing the camera vs. only on request",
        chose: "Trigger on vision keywords",
        why: "Saves compute and stays private — the camera only fires when you ask BMO to look.",
      },
    ],
  },
  {
    id: "speed",
    eyebrow: "Phase 6",
    title: "Speed",
    subtitle: "Making it fast enough to feel like a real conversation",
    problem:
      "Everything worked, but asking BMO “what do you see?” could take 60–90 seconds end to end — slow enough to break the feeling of talking to it. Before trying to fix that, I wanted to know exactly where the time was going.",
    decision:
      "I built per-stage metrics logging so every interaction records how long speech-to-text, the model, and speech synthesis each take, then replayed a fixed set of prompts and images so changes could be measured cleanly. The data showed vision was ~15× slower than chat — and, crucially, that prefilling the prompt is compute-bound (a faster CPU helps) while generating tokens is memory-bandwidth-bound (it doesn’t). That one distinction told me which fixes were even worth trying.",
    result: [
      "A typical mid-conversation vision query dropped from ~66–69s to ~46s — about a 30% cut — mostly by keeping both models resident so switching between chat and vision no longer pays a ~12s reload every time.",
      "I logged the dead ends too (client-side image resizing, thread tuning, flash attention on this CPU) so I wouldn’t retry them — and pinned down the honest remaining floor (~44s), which only a smaller vision model would move.",
    ],
    decisions: [
      {
        topic: "The biggest everyday win",
        considered:
          "Let the runtime reload each model on demand vs. keep both resident",
        chose: "Keep the chat and vision models in memory together",
        why: "Every switch between talking and “what do you see?” was silently paying a ~12s model reload; keeping both resident cut that to ~0.1s, for about 3GB of the Pi’s spare RAM.",
      },
      {
        topic: "CPU clock",
        considered: "Stay at stock 2.4GHz vs. overclock with the new cooler",
        chose: "Overclock to 2.8GHz",
        why: "Shaved ~10% off vision prefill with no throttling — installing the active cooler first is what made pushing the clock safe.",
      },
      {
        topic: "Vision verbosity",
        considered: "Let the vision model describe freely vs. cap the reply",
        chose: "Cap it to a short answer",
        why: "The model wrote 300–450-character paragraphs — trimming them to a sentence dropped generation from ~7–9s to ~2s and left far less audio to speak back.",
      },
      {
        topic: "Knowing when to stop",
        considered:
          "Keep chasing CPU-level tricks vs. accept the model’s floor",
        chose: "Accept ~44s as the honest floor",
        why: "What’s left is the model prefilling ~740 image tokens — no tuning moves it, so the only real lever is a smaller vision model, which I’ve deferred on quality grounds rather than pretend the number can go lower.",
      },
    ],
  },
  {
    id: "play",
    eyebrow: "Phase 7",
    title: "Play",
    subtitle: "Turning BMO into something you play with, not just talk to",
    problem:
      "BMO could hear, talk, see, and emote — but it was still purely conversational. I wanted it to be something you’d pick up and play with on its touch screen, not just speak to — without breaking the voice loop or the fully-offline rule.",
    decision:
      "I built two touch-screen games that BMO launches by voice — say “let’s play” and it asks which one. Finn Runner is an endless runner with a pixel Finn I drew myself: tap to jump, with the jump tuned so he reliably clears the trees. Jake-doku is a Star Battle / “Queens” logic puzzle generated fresh on the Pi, so the boards are effectively infinite. While you play, the voice loop pauses and picks back up when you exit.",
    result: [
      'Say "let’s play" and BMO launches a game on its screen — an endless runner or a logic puzzle — then goes back to listening when you exit.',
      "Jake-doku shipped feeling broken — even the easiest boards were nearly impossible — so I dug into why, found the real flaw, and fixed it: every puzzle BMO generates is now guaranteed solvable by pure logic, with no guessing.",
    ],
    decisions: [
      {
        topic: "The flaw that wasn’t obvious",
        considered:
          "Only guaranteeing each puzzle has one solution vs. guaranteeing it can be reasoned out",
        chose: "Gate generation on a no-guessing solver",
        why: "Every board was already unique — but I measured that only ~28% of easy boards (and ~10% of hard ones) could actually be reached by logic; the rest secretly required guessing, which is why even “easy” felt impossible. Accepting a board only if a human-technique solver can crack it took that to 100%.",
      },
      {
        topic: "The cost of “always solvable”",
        considered: "Instant generation vs. guaranteed-solvable generation",
        chose: "Guaranteed-solvable, masked by a “Generating…” screen",
        why: "Only about 1 in 10 hard boards passes the solver, so making one can take a couple of seconds — a brief loading screen keeps that from looking like a freeze instead of dropping the guarantee.",
      },
      {
        topic: "Launching a game",
        considered: "A physical button or menu vs. a voice command",
        chose: "Voice trigger that pauses the loop",
        why: "Keeps the whole experience hands-free and consistent with how you talk to BMO — and listening picks back up the moment you exit.",
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
    body: "Getting to a working end-to-end loop first — even a slow one — gave me something real to measure. Per-stage timing turned “vision feels slow” into exact numbers, which pointed straight at the fix that mattered most (a hidden model-reload tax) and kept me from chasing tuning that couldn’t have helped.",
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
    stage: "Vision",
    engine: "Ollama + Picamera2",
    notes: "moondream:v2 describes camera frames",
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
  {
    url: "https://www.instagram.com/p/DaN4cD4IvwQ/",
    poster: reelDay6,
    caption: "Day 6 — giving BMO a camera and a vision model so it can see",
  },
  {
    url: "https://www.instagram.com/p/Dalin39y4NQ/",
    poster: reelDay7,
    caption: "Day 7 — 3D printing a custom case for the Pi and display",
  },
  {
    url: "https://www.instagram.com/reel/Da1B1MvS_Cc/",
    poster: reelDay8,
    caption:
      "Day 8 — adding an active cooler, then using real metrics to cut BMO's response time",
  },
  {
    url: "https://www.instagram.com/reel/DbBzdSjylRC/",
    poster: reelDay9,
    caption: "Day 9 — developing games: Finn Runner and Jake Doku",
  },
];

// ── Future plans ──────────────────────────────────────────────────────
export const bmoFutureIdeas = [
  "Design custom BMO faces with more expressions",
  "Add more touch-screen minigames, and pre-generate hard Jake-doku boards so they appear instantly",
  "Save and print the photos BMO takes",
];

export const bmoRepoUrl = null;
