import { group1, uif1, necx_group, youtubevid, jobhunt } from "../assets";
import { bmoCover } from "./bmo";

const works = [
  {
    name: "BMO Robot",
    description:
      'A voice-controlled BMO companion (from Adventure Time) that runs entirely on-device on a Raspberry Pi 5. Say "Hey BMO" and it wakes up, listens, thinks up a reply in BMO\'s cheerful personality, speaks it aloud in a custom voice, and reacts with animated facial expressions — it can even look through a camera to describe what it sees, all locally, with no cloud, accounts, or internet at runtime. A personal build documented step by step.',

    image: bmoCover,
    link: "/bmo",
  },
  {
    name: "NEC X",
    description:
      "Managing program operations and events while leading their marketing strategy across social media, paid ads, and community outreach.",

    image: necx_group,
    link: "/necx",
  },
  {
    name: "Founder of chetz",
    description:
      "Founded chetz, a fully online volunteer organization connecting Japan and the world through free educational and cultural exchange programs. Launched during the COVID-19 pandemic to promote global awareness and youth empowerment. Led outreach, recruitment, and operations, growing the team to 20+ members across 6 countries and organizing over 10 monthly events in collaboration with schools, senior homes, and other organizations.",

    image: group1,
    link: "/chetz",
  },
  {
    name: "University Innovation Fellows",
    description:
      "Selected as a University Innovation Fellow by Stanford University's d.school. Completed a 6-week intensive training focused on design thinking, entrepreneurship, and institutional change. Collaborated with students and faculty to identify challenges and implement innovative solutions that enhance the student experience and promote a culture of innovation on campus.",

    image: uif1,
    link: "/uif",
  },
  {
    name: "Navigating the Tech Job Market in 2025",
    description:
      "Co-authored a two-part LinkedIn series with my mentor Frances Mann-Craik (Menlo College '76), pairing her five-decade, five-recession career perspective with my view as a new graduate. I brought the recent-graduate side — networking through event volunteering, leaning on international experience, and navigating a search with visa sponsorship — and distilled it all into practical advice for job seekers when the tech market tightens.",

    image: jobhunt,
    link: "/jobhunt",
  },
  {
    name: "Menlo College · Alumni Office",
    description:
      "As a Digital Marketing Assistant in Menlo College's alumni office, I produced content that kept thousands of alumni, parents, and students connected to campus — editing student-story videos, capturing graduation day with a 360° camera, and adapting each piece for social. The work helped lift Instagram post impressions by 57.5% and LinkedIn engagement by 79%.",

    image: youtubevid,
    link: "/alumni",
  },
];

export { works };
