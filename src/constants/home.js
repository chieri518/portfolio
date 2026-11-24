import {
  googleWordmark,
  fenrir,
  hilton,
  necx,
  ellipsis,
  owned,
  capy,
  metapyxl,
  wsl,
  menlo,
  noriko,
  dariush,
  austin,
  robert,
  fabian,
  nina,
  saybah,
  sang,
} from "../assets";
import { bmoCover } from "./bmo";
import { roverHighlight } from "./rover";
import { dailyPrintCover } from "./dailyprint";

const heroTexts = [
  "Hardware Tinkerer",
  500,
  "Product Manager",
  500,
  "Maker & 3D Printer",
  500,
  "Solutions Consultant",
  500,
  "Website Developer",
  500,
  "Global Citizen",
  500,
  "Founder",
  500,
];

const highlights = [
  {
    name: "Building a robot that thinks, talks & sees",
    description:
      "Solo build — Raspberry Pi 5, 3D-printed case, my own soldered PCB, and fully on-device AI",
    image: bmoCover,
    redirect_link: "/bmo",
  },
  {
    name: "A newspaper that prints itself every morning",
    description:
      "An AI editor in the cloud + a Raspberry Pi Zero printer box at home",
    image: dailyPrintCover,
    redirect_link: "/dailyprint",
  },
  {
    name: "Designing rovers for the Moon, Mars & Titan",
    description:
      "NASA Space Apps 2026 — a 3D browser game built on real NASA data",
    image: roverHighlight,
    redirect_link: "/rover-engineer",
  },
];

// Logo strip under the intro ("Where I've worked"), in display order.
const companyLogos = [
  // A wide wordmark, so it is a little shorter than the others to match.
  { name: "Google", logo: googleWordmark, height: "h-8" },
  { name: "Hilton", logo: hilton },
  { name: "Fenrir", logo: fenrir },
  { name: "NEC X", logo: necx },
  { name: "Ellipsis Health", logo: ellipsis },
  { name: "Owned", logo: owned },
  // Capy's image is mostly padding, so it is drawn larger to match the rest.
  { name: "Capy", logo: capy, scale: 1.9 },
  { name: "Metapyxl", logo: metapyxl },
  { name: "Women's Startup Lab", logo: wsl },
  { name: "Menlo College", logo: menlo },
];

const references = [
  {
    reference:
      "Chieri consistently brought innovative perspectives, often challenging traditional methods to improve our processes.",
    name: "Noriko Liu",
    designation: "Regional Head of Marketing - Japan, Korea and Micronesia",
    company: "Hilton",
    image: noriko,
  },
  {
    reference:
      "Abe is an innovative entrepreneur with strong leadership acumen and achieves quality results in her work.",
    name: "Dariush Rafinejad, Ph.D.",
    designation: "CEO",
    company: "Blue Dome Consulting for Sustainability",
    image: dariush,
  },
  {
    reference:
      "Chieri is an all-around superstar with the ability to adapt to any situation she's asked to step into.",
    name: "Austin Bumpus",
    designation: "Digital Marketing Manager",
    company: "Menlo College",
    image: austin,
  },
  {
    reference:
      "Chieri brings enthusiasm and a positive attitude to the workplace, while maintaining a high level of professionalism and skill.",
    name: "Robert Hayashi",
    designation: "Senior Manager - eCommerce Japan",
    company: "Hilton",
    image: robert,
  },
  {
    reference:
      "She is truly interested in entrepreneurship and innovation and - beside all of this - a great person. Whoever has the opportunity to work with Chieri: Do it!",
    name: "Fabian Eggers",
    designation: "Professor",
    company: "Menlo College",
    image: fabian,
  },
  {
    reference:
      "Her dedication, communication skills, and work ethic make her an invaluable team member. I highly recommend her for any future opportunities!",
    name: "Nina Roth, MPH",
    designation: "Director of Client Services",
    company: "Ellipsis Health",
    image: nina,
  },
  {
    reference:
      "She thrives in ambiguity, quickly adapting to new projects and continuously seeking ways to improve our strategies and processes.",
    name: "Saybah Biawogi",
    designation: "Director of Marketing and Communications",
    company: "Menlo College",
    image: saybah,
  },
  {
    reference:
      "She is driven, coachable, and consistently follows through on every action we set together.",
    name: "Sang Kim",
    designation: "Career Coach",
    company: "Hithere.co",
    image: sang,
  },
];

const linkedinhighlight = [
  {
    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7496731889517346816?collapsed=1" height="603" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7228960122385932288?collapsed=1" height="603" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7315226371083890688?collapsed=1" height="603" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7269845603864449024?collapsed=1" height="656" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    embed: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7207923860057313282?collapsed=1" height="656" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
];

export { heroTexts, highlights, companyLogos, references, linkedinhighlight };
