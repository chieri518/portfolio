import { group1, uif1, necx_group, youtubevid, jobhunt } from "../assets";
import { bmoCover } from "./bmo";
import { dailyPrintCover } from "./dailyprint";
import { roverCover } from "./rover";
import asahiCoaster from "../assets/cad/asahi.jpg";

const allWorks = [
  {
    name: "BMO Robot",
    description:
      "Fully local, multimodal agentic robot (with Raspberry Pi) that mimics BMO from Adventure Time.",

    image: bmoCover,
    link: "/bmo",
    tags: ["Hardware", "Software"],
  },
  {
    name: "Rover Engineer",
    description:
      "3D rover-engineering game built on NASA datasets to teach players mission design trade-offs.",

    image: roverCover,
    link: "/rover-engineer",
    tags: ["Software"],
  },
  {
    name: "Daily Print",
    description:
      "Personal newspaper generator that curates daily editions tailored to interests, location, and reading history.",

    image: dailyPrintCover,
    link: "/dailyprint",
    tags: ["Hardware", "Software"],
  },
  {
    name: "Designed & Printed · CAD + 3D printing",
    description:
      "Things I design in Fusion 360 and print on my Bambu Lab A1 at home, starting with coasters I modeled from scratch. It's also how BMO got its case.",

    image: asahiCoaster,
    link: "/cad",
    // Hidden from the Projects list until it's ready; /cad still works by URL.
    hidden: true,
    tags: ["Hardware"],
  },
  {
    name: "NEC X",
    description:
      "Program and event operations while leading marketing across social media, paid ads and community outreach.",

    image: necx_group,
    link: "/necx",
    tags: ["Entrepreneurship", "Marketing", "Community"],
  },
  {
    name: "Stanford d.school's Innovation Fellow",
    description:
      "Trained in design thinking, then worked with students and faculty to improve the student experience on campus.",

    image: uif1,
    link: "/uif",
    tags: ["Entrepreneurship", "Community"],
  },

  {
    name: "Founder of chetz",
    description:
      "Student-led non-profit organization connecting Japan and the world through language/cultural exchange.",

    image: group1,
    link: "/chetz",
    tags: ["Entrepreneurship", "Community"],
  },
  {
    name: "Navigating the Tech Job Market in 2025",
    description:
      "A two-part series co-written with my mentor Frances Mann-Craik: her five-decade career alongside my view as a new graduate.",

    image: jobhunt,
    link: "/jobhunt",
    tags: ["Community"],
  },
  {
    name: "Alumni Engagement @ Menlo College",
    description:
      "Videos and social content for Menlo College's alumni office, from student stories to a 360° graduation day.",

    image: youtubevid,
    link: "/alumni",
    tags: ["Marketing", "Community"],
  },
];

// Filter chips on the Projects page, in display order. Every tag used above
// should appear here, or it can't be filtered on.
const projectTags = [
  "Hardware",
  "Software",
  "Entrepreneurship",
  "Marketing",
  "Community",
];

const works = allWorks.filter((work) => !work.hidden);

// A project page opens with the same title, one-line summary and cover photo
// as its card above, looked up by the page's link (hidden projects included).
const getProject = (link) => allWorks.find((work) => work.link === link);

export { works, projectTags, getProject };
