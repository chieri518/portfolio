import { group1, uif1, necx_group, youtubevid, jobhunt } from "../assets";
import { bmoCover } from "./bmo";
import { dailyPrintCover } from "./dailyprint";
import { roverCover } from "./rover";
import asahiCoaster from "../assets/cad/asahi.jpg";

const allWorks = [
  {
    name: "BMO Robot",
    description:
      "A voice-controlled BMO companion that runs fully on-device on a Raspberry Pi 5. It listens, replies in a custom voice, sees through a camera and makes faces, with no cloud. I took it from bare parts to a 3D-printed case and my first hand-soldered PCB.",

    image: bmoCover,
    link: "/bmo",
    tags: ["Hardware", "Software"],
  },
  {
    name: "Rover Engineer · NASA Space Apps 2026",
    description:
      "A free 3D browser game where you design a rover and drive it on the Moon, Mars and Titan, over terrain built from real NASA data. Built with my teammate Alvin for NASA Space Apps 2026.",

    image: roverCover,
    link: "/rover-engineer",
    tags: ["Software"],
  },
  {
    name: "Daily Print",
    description:
      "An AI editor that writes a personal newspaper, with your own sections, layout and tone, and a Raspberry Pi printer box that prints it at home every morning.",

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
    name: "Founder of chetz",
    description:
      "Founded an online volunteer organization connecting Japan and the world through free educational and cultural exchange. Grew the team to 20+ members across 6 countries, running 10+ events a month.",

    image: group1,
    link: "/chetz",
    tags: ["Entrepreneurship", "Community"],
  },
  {
    name: "NEC X",
    description:
      "Running program operations and events while leading marketing across social media, paid ads and community outreach.",

    image: necx_group,
    link: "/necx",
    tags: ["Entrepreneurship", "Marketing", "Community"],
  },
  {
    name: "University Innovation Fellows",
    description:
      "Selected by Stanford's d.school as a University Innovation Fellow. Trained in design thinking, then worked with students and faculty to improve the student experience on campus.",

    image: uif1,
    link: "/uif",
    tags: ["Entrepreneurship", "Community"],
  },
  {
    name: "Navigating the Tech Job Market in 2025",
    description:
      "A two-part LinkedIn series co-written with my mentor Frances Mann-Craik (Menlo College '76): her five-decade career alongside my view as a new graduate, with practical advice for a tight market.",

    image: jobhunt,
    link: "/jobhunt",
    tags: ["Community"],
  },
  {
    name: "Menlo College · Alumni Office",
    description:
      "Videos and social content for Menlo College's alumni office, from student stories to a 360° graduation day. Instagram impressions rose 57.5% and LinkedIn engagement 79%.",

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

export { works, projectTags };
