import {
  group1,
  necx_group,
  email,
  github,
  linkedin,
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

const heroTexts = [
  "Solutions Consultant",
  500,
  "Global Citizen",
  500,
  "Website Developer",
  500,
  "Digital Marketer",
  500,
  "Founder",
  500,
];

const socials = [
  {
    id: "email",
    icon: email,
    link: "mailto:chieriabe518@gmail.com",
  },
  {
    id: "github",
    icon: github,
    link: "https://github.com/chieri518",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/chieriabe/",
  },
];

const highlights = [
  {
    name: "Designing a Global Community",
    description: "Founder @ chetz",
    image: group1,
    redirect_link: "/chetz",
  },
  {
    name: "Building a robot that thinks, talks & sees",
    description: "Solo project — a voice-controlled BMO on a Raspberry Pi",
    image: bmoCover,
    redirect_link: "/bmo",
  },
  {
    name: "Empowering early-stage founders",
    description: "Marketing and Community Engagement Specialist @ NEC X",
    image: necx_group,
    redirect_link: "/necx",
  },
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

export { heroTexts, socials, highlights, references, linkedinhighlight };
