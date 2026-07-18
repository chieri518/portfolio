import {
  group1,
  uif1,
  necx_group,
  youtubevid,
  instareel,
  linkedinpost,
  jobhunt,
} from "../assets";
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
    name: "Student Feature Video",
    description:
      "Had the privilege of editing a video featuring Catherine Batang, a recent graduate who passionately shared her experiences at Menlo College. In my editing process, I applied my digital marketing expertise by strategically incorporating B-roll footage to enhance visual engagement and narrative depth. I also focused on improving audio quality by reducing background noise and meticulously cutting pauses to ensure a polished final product. I am proud to contribute to a piece that celebrates the strength of our community.",

    image: youtubevid,
    link: "https://youtu.be/U3l9ExJTvOk?si=CXvnUglL9hM56aQB",
  },
  {
    name: "Graduation Celebration Reel",
    description:
      "Employed a 360 camera to create an immersive view of graduation day, highlighting the energy and joy shared by the graduates, families, and faculty. During the editing process, I carefully selected dynamic transitions and strategically directed viewer focus to key scenes, enhancing the visual flow and impact. This project showcased my ability to leverage advanced filming techniques and edit creatively to convey a compelling narrative, effectively bringing the commencement experience to life for all viewers.",

    image: instareel,
    link: "https://www.instagram.com/reel/CsfHVGigWhI",
  },
  {
    name: "Senior Spotlight Post",
    description:
      "Edited a compelling video that highlighted the achievements and stories of graduating seniors. I tailored the content to maximize engagement on social media, creating a shorter version that captured the essential moments and core message while resonating with the platform's audience. This condensed version was carefully crafted to pique interest and encourage viewers to watch the full-length video on YouTube, where they could experience the full scope of each student’s journey. This project demonstrated my ability to adapt content for multiple platforms, maintain key messaging, and strategically drive traffic across media channels.",

    image: linkedinpost,
    link: "https://www.linkedin.com/posts/menlo-college_celebrating-seniors-raymond-juballa-23-activity-7054948106827689984-619v",
  },
];

export { works };
