import { group1, uif1, necx_group, youtubevid, jobhunt } from "../assets";
import { bmoCover } from "./bmo";
import { dailyPrintCover } from "./dailyprint";
import { roverCover } from "./rover";
import asahiCoaster from "../assets/cad/asahi.jpg";

const allWorks = [
  {
    name: "BMO Robot",
    description:
      'A voice-controlled BMO companion (from Adventure Time) that runs entirely on-device on a Raspberry Pi 5. Say "Hey BMO" and it wakes up, listens, thinks up a reply in BMO\'s cheerful personality, speaks it aloud in a custom voice, and reacts with animated facial expressions — it can even look through a camera to describe what it sees, all locally, with no cloud, accounts, or internet at runtime. I took it from parts on a bench to a self-contained device: a 3D-printed case, a camera and active cooler, and my first custom PCB, designed in KiCad and soldered by hand. Documented step by step.',

    image: bmoCover,
    link: "/bmo",
    tags: ["Hardware", "Software"],
  },
  {
    name: "Rover Engineer · NASA Space Apps 2026",
    description:
      "A free 3D browser game where you design a rover, buy it a seat on a launch, and drive it on the Moon, Mars and Titan. Every part trades capability against mass and cost, and the terrain, shadows and solar flares come from real NASA data. Built with my teammate Alvin for NASA's Space Mission Design Game challenge: I built the Moon mission end to end, then the Mars and Titan missions.",

    image: roverCover,
    link: "/rover-engineer",
    tags: ["Software"],
  },
  {
    name: "Daily Print",
    description:
      "An AI editor that puts together a personal newspaper and prints it at home every morning. Readers design their own paper — sections, page layouts, typeface, tone and location — and the editor researches the news, writes each story to fit its spot, and adds the weather, puzzles and a comic drawn for them. The finished edition is a print-ready PDF that a Raspberry Pi printer box prints before breakfast.",

    image: dailyPrintCover,
    link: "/dailyprint",
    tags: ["Hardware", "Software"],
  },
  {
    name: "Designed & Printed · CAD + 3D printing",
    description:
      "Things I design in Fusion 360 and bring to life on my Bambu Lab A1 at home, starting with an original set of coasters I modeled from scratch and shared on MakerWorld. Design → slice → print, all in-house — it's also how BMO got its case.",

    image: asahiCoaster,
    link: "/cad",
    // Hidden from the Projects list until it's ready; /cad still works by URL.
    hidden: true,
    tags: ["Hardware"],
  },
  {
    name: "Founder of chetz",
    description:
      "Founded chetz, a fully online volunteer organization connecting Japan and the world through free educational and cultural exchange programs. Launched during the COVID-19 pandemic to promote global awareness and youth empowerment. Led outreach, recruitment, and operations, growing the team to 20+ members across 6 countries and organizing over 10 monthly events in collaboration with schools, senior homes, and other organizations.",

    image: group1,
    link: "/chetz",
    tags: ["Entrepreneurship", "Community"],
  },
  {
    name: "NEC X",
    description:
      "Managing program operations and events while leading their marketing strategy across social media, paid ads, and community outreach.",

    image: necx_group,
    link: "/necx",
    tags: ["Entrepreneurship", "Marketing", "Community"],
  },
  {
    name: "University Innovation Fellows",
    description:
      "Selected as a University Innovation Fellow by Stanford University's d.school. Completed a 6-week intensive training focused on design thinking, entrepreneurship, and institutional change. Collaborated with students and faculty to identify challenges and implement innovative solutions that enhance the student experience and promote a culture of innovation on campus.",

    image: uif1,
    link: "/uif",
    tags: ["Entrepreneurship", "Community"],
  },
  {
    name: "Navigating the Tech Job Market in 2025",
    description:
      "Co-authored a two-part LinkedIn series with my mentor Frances Mann-Craik (Menlo College '76), pairing her five-decade, five-recession career perspective with my view as a new graduate. I brought the recent-graduate side — networking through event volunteering, leaning on international experience, and navigating a search with visa sponsorship — and distilled it all into practical advice for job seekers when the tech market tightens.",

    image: jobhunt,
    link: "/jobhunt",
    tags: ["Community"],
  },
  {
    name: "Menlo College · Alumni Office",
    description:
      "As a Digital Marketing Assistant in Menlo College's alumni office, I produced content that kept thousands of alumni, parents, and students connected to campus — editing student-story videos, capturing graduation day with a 360° camera, and adapting each piece for social. The work helped lift Instagram post impressions by 57.5% and LinkedIn engagement by 79%.",

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
