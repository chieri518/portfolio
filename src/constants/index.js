import {
  click,
  target,
  plane,
  rocket,
  peoplemap,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  php,
  nodejs,
  figma,
  docker,
  premiere,
  photoshop,
  google,
  necx,
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
  capy,
  bery,
  metapyxl,
  hilton,
  owned,
  menlo,
  uif1,
  uif2,
  uif3,
  uif4,
  uif5,
  uif11,
  uif12,
  uif13,
  uif14,
  uif15,
  uif21,
  uif22,
  uif23,
  uif24,
  uif25,
  uif26,
  uif27,
  ellipsis,
  governormedal,
  honor,
  honor2,
  marketingconf,
  BGS,
  necx_group,
  email,
  github,
  linkedin,
  youtubevid,
  instareel,
  linkedinpost,
  bluebase,
  dawn,
  ikkadanran,
  langexch1,
  langexch2,
  manabity,
  group1,
  ownleg,
  pando,
  seminar1,
  seminar2,
  sisec,
  u18,
  uofa,
  warmhearts,
  wic,
  workshop1,
  chetzlogo,
  wsl,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Solutions Consultant",
    company_name: "Google (via Azaaki LLC)",
    icon: google,
    date: "September 2025 - Present",
    points: [
      "Analyzing feature data using visualization and AI tools to define problem areas, uncover systemic issues (63% from a single root cause), and deliver actionable insights that shaped next-quarter Product priorities and feature improvements.",
      "Onboarding APAC and EMEA merchants for Vehicle Ads by leading data quality reviews and hosting office hours.",
    ],
  },
  {
    title: "Marketing / Community Engagement Specialist",
    company_name: "NEC X",
    icon: necx,
    date: "Jun 2025 - Present",
    points: [
      " Managed logistics and marketing for 220-attendee event, including registration systems, paid ads, startup outreach, vendor coordination, and presentation materials.",
    ],
  },
  {
    title: "Business Development Representative",
    company_name: "Capy",
    icon: capy,
    date: "Feb 2025 - May 2025",
    points: [
      "Redefined KPIs and built a new dashboard to enhance data visibility and enable more informed decision-making.",
      "Implemented AI tools like Apollo and Genspark to automate the full sales cycle, saving 30+ hours per month.",
    ],
  },
  {
    title: "Senior Marketing Manager",
    company_name: "Metapyxl",
    icon: metapyxl,
    date: "Nov 2024 - Present",
    points: [
      "Developed and executed marketing strategies that drove brand awareness and user engagement, leveraging data-driven insights and innovative campaigns.",
    ],
  },

  {
    title: "Website Intern (Full-Time)",
    company_name: "Hilton",
    icon: hilton,
    date: "Oct 2023 - Jun 2024",
    points: [
      "Elevated the digital presence of all 21 Hilton managed hotels in Japan by leveraging Google Analytics insights and property feedback to develop highly engaging, user-friendly webpages across both owned and external platforms.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Web Engineering Intern",
    company_name: "Owned 株式会社",
    icon: owned,
    date: "Sep 2023 - Oct 2023",
    points: [
      "Developed a user management API using Next.js, Prisma, and TypeScript, incorporating validation schemas, handling user data updates based on form responses, and integrating a booking system with error handling and user information retrieval.",
      "Implemented a Stripe webhook using PHP in Google Cloud Functions to handle payment events, manage transaction records in MySQL, and send email notifications for payment failures, ensuring seamless financial operations and customer communication.",
    ],
  },
  {
    title: "Social Media and Marketing Intern",
    company_name: "Ellipsis Health",
    icon: ellipsis,
    date: "Jun 2023 - Aug 2023",
    points: [
      "Curated, monitored, and analyzed LinkedIn and Twitter content, refining social media strategy through engagement insights for stronger brand resonance, achieving 41.4% increase in LinkedIn followers since I joined.",
      "Devised a comprehensive social media editorial calendar, while staying attuned to developments within the healthcare industry and periodically sharing relevant updates.",
      "Managed and developed People Map and CRM system using Salesforce, optimizing client relationships.",
      "Executed precise annotation for medical studies, sourced and formatted citations for publications, and orchestrated logistics for CEO's trip to Japan.",
    ],
  },
  {
    title: "Digital Marketing Assistant",
    company_name: "Menlo College",
    icon: menlo,
    date: "Feb 2022 - Aug 2023",
    points: [
      "Boosted the College’s social media reach by increasing post impressions on Instagram by 57.5% and on Facebook by 23.4%, while improving post engagement rates on LinkedIn by 79%, and on Twitter by 66%, resulting in higher audience engagement and brand awareness.",
      "Curated and delivered personalized newsletters and check-ins monthly emails for a community of over 4500 alumni and 900 parents to drive consistent engagement, resulting in an average opening rate of 42%.",
      "Compiled and presented monthly reports to the Digital Marketing Manager and Director of Communications, providing data-driven insights to plan future campaigns.",
    ],
  },
  {
    title: "Library Co-Coordinator",
    company_name: "Bowman Library at Menlo College",
    icon: menlo,
    date: "Feb 2022 - Aug 2023",
    points: [
      "Served as Co-chair of the Library Student Advisory Council(LSAC) simultaneously.",
      "Supervised a team of student assistants, providing training and support on library processes and policies, resulting in increased efficiency and productivity.",
      "Spearhead campaigns on Instagram, increasing the library's brand awareness and engagement.",
      "Collaborate with library staff and student advisory council to plan and execute a wide range of events, programs, and services, enhancing library experience for users.",
    ],
  },
  {
    title: "Assistant to CEO",
    company_name: "Women's Startup Lab ",
    icon: wsl,
    date: "Dec 2021 - Feb 2022",
    points: [
      "Managed email prioritization, invoice tracking, and banking issue resolution for CEO of startup accelerator.",
    ],
  },
  {
    title: "Founder & President",
    company_name: "chetz",
    icon: chetzlogo,
    date: "Oct 2020 - Aug 2021",
    points: [
      "Founded and scaled international language exchange nonprofit from ~10 to 40+ participants per monthly event",
      "Built partnerships with major universities including University of Alberta, Sophia University, and Waseda University",
      "Organization sustained for 5+ years after founder departure; at least 5 students decided to study abroad because of participation",
    ],
  },
];

const references = [
  {
    reference:
      "Chieri consistently brought innovative perspectives, often challenging traditional methods to improve our processes.",
    name: "Noriko Liu",
    designation: "Regional Head of Marketing - Japan, Korea and Micronesia",
    company: "Hilton",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQGRuqHlvy0NSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1571407166369?e=1750291200&v=beta&t=MLiaSw6RmQowBPgp00kZLHK2DfZ4JJ7XtWA_0oIcVcg",
  },
  {
    reference:
      "Abe is an innovative entrepreneur with strong leadership acumen and achieves quality results in her work.",
    name: "Dariush Rafinejad, Ph.D.",
    designation: "CEO",
    company: "Blue Dome Consulting for Sustainability",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHwBM6Q06QeJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566161085065?e=1750291200&v=beta&t=DMtqQVteQ7SMDXom4chqx2kC80CjESyZ2S1pKCnCUx4",
  },
  {
    reference:
      "Chieri is an all-around superstar with the ability to adapt to any situation she's asked to step into.",
    name: "Austin Bumpus",
    designation: "Digital Marketing Manager",
    company: "Menlo College",
    image:
      "https://media.licdn.com/dms/image/v2/D4E35AQFj9iiryFEdFw/profile-framedphoto-shrink_400_400/B4EZVxRoatHcAc-/0/1741362202528?e=1750438800&v=beta&t=JU6TB9fxDZiqoCEmuKqRVqQyr5w_zBTZEXMvGYBTwN8",
  },
  {
    reference:
      "Chieri brings enthusiasm and a positive attitude to the workplace, while maintaining a high level of professionalism and skill.",
    name: "Robert Hayashi",
    designation: "Senior Manager - eCommerce Japan",
    company: "Hilton",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEvg5w0ez-IGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635905199834?e=1750291200&v=beta&t=wfrYVu-VC4FlzKv9ATpz6T0IeMJw2p3ckonaNWRvcII",
  },
  {
    reference:
      "She is truly interested in entrepreneurship and innovation and - beside all of this - a great person. Whoever has the opportunity to work with Chieri: Do it!",
    name: "Fabian Eggers",
    designation: "Professor",
    company: "Menlo College",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQF4BrU_fqMjNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662771913064?e=1750291200&v=beta&t=A0vEK0VJKXZ10ECBfO2sPtMpa2bGJJX99hDGyEQ2ZUc",
  },
  {
    reference:
      "Her dedication, communication skills, and work ethic make her an invaluable team member. I highly recommend her for any future opportunities!",
    name: "Nina Roth, MPH",
    designation: "Director of Client Services",
    company: "Ellipsis Health",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQFqTxSckyV3-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1539568387007?e=1750291200&v=beta&t=SmEs_d_Bq1g6Kocf2rSPizFL3Dk18s3w-0zxdg5Cx64",
  },
  {
    reference:
      "She thrives in ambiguity, quickly adapting to new projects and continuously seeking ways to improve our strategies and processes.",
    name: "Saybah Biawogi",
    designation: "Director of Marketing and Communications",
    company: "Menlo College",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH4Dj_gWI8sUA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692732734910?e=1750291200&v=beta&t=yCQnh3gjQnc10wjK5w9_-qCpZ5HBi656FJsCBUbYmJs",
  },
];

const educations = [
  {
    degree: "Bachelor of Science in Entrepreneurship and Innovation",
    school: "Menlo College",
    icon: menlo,
    date: "Aug 2021 - May 2025",
    points: ["Minor in Business Analytics", "GPA: 3.85/4.00"],
  },
];

const awards = [
  {
    name: "The Governor General’s Academic Medal",
    description:
      "Honors a student graduating with the highest grade point average from a high school.",
    image: governormedal,
  },
  {
    name: "Richard F. O’Brien Award",
    description:
      "Honors two students per class who exemplify the true spirit of Menlo through all-around excellence.",
    image: honor,
  },
  {
    name: "The Young Leadership Award",
    description:
      "Honors a few brands and pioneers who are relentlessly pushing the frontiers of innovation in the marketing industry.",
    image: marketingconf,
  },
  {
    name: "Richard F. O’Brien Award",
    description:
      "Honors two students per class who exemplify the true spirit of Menlo through all-around excellence.",
    image: honor2,
  },
  {
    name: "Beta Gamma Sigma",
    description:
      "Honors the top 10% of undergraduates in AACSB-accredited schools, the top 5% of business programs worldwide.",
    image: BGS,
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
    name: "Building a Sustainable Makerspace",
    description: "University Innovation Fellowship run by Stanford d.school",
    image: uif1,
    redirect_link: "/uif",
  },
  {
    name: "Empowering early-stage founders",
    description: "Marketing and Community Engagement Specialist @ NEC X",
    image: necx_group,
    redirect_link: "/necx",
  },
];

const works = [
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
    name: "NEC X",
    description:
      "Managing program operations and events while leading their marketing strategy across social media, paid ads, and community outreach.",

    image: necx_group,
    link: "/necx",
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

const uif = [
  {
    src: uif1,
  },
  {
    src: uif2,
  },
  {
    src: uif3,
  },
  {
    src: uif4,
  },
  {
    src: uif5,
  },
];

const steamhouse = [
  {
    src: uif11,
  },
  {
    src: uif12,
  },
  {
    src: uif13,
  },
  {
    src: uif14,
  },
  {
    src: uif15,
  },
];

const meetup = [
  {
    src: uif21,
  },
  {
    src: uif22,
  },
  {
    src: uif23,
  },
  {
    src: uif24,
  },
  {
    src: uif25,
  },
  {
    src: uif26,
  },
  {
    src: uif27,
  },
];

const spinImages = [
  { src: spin1, alt: "Group photo from NEC X flagship event" },
  { src: spin2, alt: "Conversation with founder at NEC X event" },
  { src: spin3, alt: "Group photo from NEC X event session" },
  { src: spin4, alt: "Closing group photo at NEC X event" },
];

const lumaImages = [luma1, luma2, luma3, luma4, luma5, luma6];

const uiftimeline = [
  {
    week: "Week One",
    title: "Wayfinding",
    color: "#DCD6FF",
    paragraph:
      "We kicked off our training journey by playing UIF Monopoly to learn the tools, platforms, and techniques that would guide us throughout the program and beyond. We explored different aspects of innovation and entrepreneurship. ",
  },
  {
    week: "Week Two",
    title: "Design Thinking",
    color: "#D6F0FF",
    paragraph:
      "We explored design thinking as a human-centered approach to innovation.  We practiced empathizing with users, brainstorming ideas, and prototyping. This session taught us the importance of listening to the needs of the community and approaching problems with creativity and curiosity.",
  },
  {
    week: "Week Three",
    title: "Landscape Canvas",
    color: "#DFFFEF",
    paragraph:
      "We mapped assets and identified gaps within our campus innovation and entrepreneurship (I&E) ecosystem. Using the Landscape Canvas, we synthesized our findings to understand existing resources and areas for improvement. This session built a foundation for future projects.",
  },
  {
    week: "Week Four",
    title: "Strategic Priorities",
    color: "#FFFAF0",
    paragraph:
      "We narrowed our focus to 3 projects that have the potential to significantly enhance the I&E ecosystem on campus. We began prototyping and refining our ideas, using insights to shape more effective solutions. This session pushed us to move from research to action.",
  },
  {
    week: "Week Five",
    title: "Lean Startup",
    color: "#FFEDED",
    paragraph:
      "We met one-on-one with stakeholders to understand their needs, success metrics, and perspectives to ensure our projects align with broader institutional goals. This session emphasized the importance of collaboration, empathy, and alignment in creating initiatives that are both impactful and sustainable.",
  },
  {
    week: "Week Six",
    title: "Storytelling",
    color: "#FFDEDE",
    paragraph:
      "We focused on using strategic storytelling to share our vision for change on campus. We outlined, prototyped, and produced storytelling artifacts that communicated the purpose and impact of our projects. This session emphasized the power of storytelling as a tool to inspire action, build support, and bring our ideas to life.",
  },
  {
    week: "Stakeholder Meeting",
    title: "Vision to Action",
    color: "#FFDEDE",
    paragraph:
      "To gain broader campus support, we held a stakeholder meeting where we presented our initiatives and gathered feedback. ",
  },
];

const uifprojects = [
  {
    title: "STEAM House",
    color: "#DCD6FF",
    paragraph:
      "The strategic plan emerged from the challenge of sustaining the Innovation Center—originally launched by Menlo College’s inaugural UIF cohort in 2017—beyond the tenure of its founders.",
  },
  {
    title: "Project Management Class",
    color: "#D6F0FF",
    paragraph:
      "We explored design thinking as a human-centered approach to innovation by tackling the challenge: “How might universities support students’ social and emotional well-being?” Through this process, we practiced empathizing with users, brainstorming diverse ideas, and identifying surprising insights that emerged along the way. This session helped us understand how thoughtful, student-focused solutions can be developed by truly listening to the needs of the community and approaching problems with creativity and curiosity.",
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

const organizations = [
  {
    name: "Japanese Conversation Club at University of Alberta",
    logo: uofa,
  },
  {
    name: "SISEC at Sophia University",
    logo: sisec,
  },
  {
    name: "Waseda International Club at Waseda University",
    logo: wic,
  },
  {
    name: "OWNLEG",
    logo: ownleg,
  },
  {
    name: "Blue Base",
    logo: bluebase,
  },
  {
    name: "manabity",
    logo: manabity,
  },
  {
    name: "Ikkadanran",
    logo: ikkadanran,
  },
  {
    name: "U18 career summit",
    logo: u18,
  },
  {
    name: "Dawn Community",
    logo: dawn,
  },
  {
    name: "Warm Hearts Coffee",
    logo: warmhearts,
  },
  {
    name: "Pando",
    logo: pando,
  },
];

const events = [
  {
    name: "Language Exchange",
    description:
      "Hosted events that facilitated mutual language learning and cultural exchange among participants from diverse backgrounds.",
    image: langexch2,
  },
  {
    name: " English Workshops",
    description:
      "Partnered with local Japanese communities (senior homes, children’s centers, etc.) to conduct engaging English workshops.",
    image: workshop1,
  },
  {
    name: "Online Seminars",
    description:
      "Collaborated with various organizations to give talks about studying abroad, cross-cultural understanding, and youth leadership.",
    image: seminar1,
  },
];

export {
  technologies,
  experiences,
  educations,
  references,
  awards,
  highlights,
  works,
  heroTexts,
  socials,
  uif,
  steamhouse,
  spinImages,
  lumaImages,
  uiftimeline,
  uifprojects,
  meetup,
  linkedinhighlight,
  organizations,
  events,
};
