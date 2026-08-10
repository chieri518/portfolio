import { youtubevid, instareel, linkedinpost } from "../assets";
import yearInReview from "../assets/alumni/year-in-review.jpg";

export const alumniIntro = {
  eyebrow: "Menlo College · Alumni Relations · Digital Marketing",
  title: "Alumni Office",
  overview:
    "As a Digital Marketing Assistant in Menlo College's alumni office, I produced content that kept a community of thousands of alumni, parents, and students connected to campus — writing and publishing stories on the college's website, editing student-feature videos, capturing campus moments, and curating the monthly newsletter that drove engagement across every channel.",
};

export const alumniStats = [
  { value: "+57.5%", label: "Instagram post impressions" },
  { value: "+79%", label: "LinkedIn engagement rate" },
  { value: "42%", label: "Open rate across 4,500+ alumni newsletters" },
];

export const alumniWork = [
  {
    id: "year-in-review-article",
    title: "2022–23 Year in Review",
    kind: "Article · Published on menlo.edu",
    thumbnail: yearInReview,
    link: "https://www.menlo.edu/2022-23-year-in-review-menlo-college-students-create-community-and-energize-for-the-future/",
    cta: "Read the article",
    description:
      "I authored and published this year-in-review feature on Menlo College's official website, telling the story of how students created new community groups and advocated for innovation across the 2022–23 academic year. I gathered the stories, wrote the piece, and produced it for the college's live site.",
  },
  {
    id: "student-feature-video",
    title: "Student Feature Video",
    kind: "Video · YouTube",
    thumbnail: youtubevid,
    link: "https://youtu.be/U3l9ExJTvOk",
    embed: "https://www.youtube.com/embed/U3l9ExJTvOk",
    cta: "Watch on YouTube",
    description:
      "I edited a feature video of recent graduate Catherine Batang sharing her Menlo experience. I layered in B-roll to deepen the narrative and hold the viewer's attention, cleaned up the audio by cutting background noise, and trimmed the dead air into a polished final piece celebrating our community.",
  },
  {
    id: "graduation-celebration-reel",
    title: "Graduation Celebration Reel",
    kind: "Reel · Instagram",
    thumbnail: instareel,
    link: "https://www.instagram.com/reel/CsfHVGigWhI",
    cta: "View on Instagram",
    description:
      "Using a 360° camera, I captured an immersive view of graduation day — the energy and joy shared by graduates, families, and faculty. In the edit I used dynamic transitions and directed focus to the key moments, bringing the commencement experience to life for everyone who couldn't be in the room.",
  },
  {
    id: "senior-spotlight-post",
    title: "Senior Spotlight Post",
    kind: "Post · LinkedIn",
    thumbnail: linkedinpost,
    link: "https://www.linkedin.com/posts/menlo-college_celebrating-seniors-raymond-juballa-23-activity-7054948106827689984-619v",
    cta: "View on LinkedIn",
    description:
      "I edited a video celebrating the achievements of graduating seniors, then adapted it for social — cutting a shorter, punchier version that captured the core message for the feed while driving viewers to the full-length story on YouTube. One narrative, tailored to each platform's audience.",
  },
  {
    id: "alumni-newsletter",
    title: "Alumni Newsletter",
    kind: "Email · Monthly · July 2023",
    iframeSrc: "/newsletter/index.html",
    caption: "The July 2023 edition — scroll to read the full newsletter.",
    description:
      "I curated and wrote the alumni office's monthly newsletter, keeping a community of 4,500+ alumni and 900+ parents connected to campus news, events, and student stories. I planned each edition's content, wrote the copy, and tracked performance — sustaining an average 42% open rate.",
  },
];

export const alumniLearnings = [
  {
    title: "The story comes before the software",
    body: "Every edit — the B-roll, the transitions, the cuts — served one goal: making someone's real experience land with an audience. The tools only mattered in service of the story.",
  },
  {
    title: "One story, tailored to many platforms",
    body: "The same footage lived as a long-form YouTube feature, a punchy social clip, and an immersive reel. Reshaping a single narrative for each platform's audience made every piece work harder.",
  },
  {
    title: "Polish is the difference",
    body: "Reducing background noise, trimming dead air, and directing the viewer's eye go unnoticed when done well — but they're exactly what separates a rough cut from something a community is proud to share.",
  },
];
