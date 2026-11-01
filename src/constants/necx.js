import {
  spin1,
  spin2,
  spin3,
  spin4,
  luma1,
  luma2,
  luma3,
  luma4,
  luma5,
  luma6,
} from "../assets";

const spinImages = [
  { src: spin1, alt: "Group photo from NEC X flagship event" },
  { src: spin2, alt: "Conversation with founder at NEC X event" },
  { src: spin3, alt: "Group photo from NEC X event session" },
  { src: spin4, alt: "Closing group photo at NEC X event" },
];

const lumaImages = [luma1, luma2, luma3, luma4, luma5, luma6];

const necxLearnings = [
  {
    title: "Operations excellence creates capacity for strategic work",
    body: "By systematizing documentation, scheduling, and communication, I freed up program leadership to focus on high-value activities: founder coaching, mentor relationship development, and corporate partnership strategy. Good operations make good strategy possible.",
  },
  {
    title: "Community building is relationship infrastructure",
    body: "The accelerator's value came from both structured learning and network access. My role was creating the infrastructure— documentation systems, scheduling coordination, and communication channels—that let meaningful relationships form between founders, mentors, and investors.",
  },
  {
    title: "Marketing requires cultural fluency, not just translation",
    body: "Managing bilingual content showed me that effective marketing understands what resonates in each cultural context. Japanese stakeholders needed different framing than Silicon Valley founders, even when discussing the same program benefits.",
  },
];

export { spinImages, lumaImages, necxLearnings };
