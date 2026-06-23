import {
  google,
  necx,
  capy,
  metapyxl,
  hilton,
  owned,
  ellipsis,
  menlo,
  cmu,
  wsl,
  chetzlogo,
  governormedal,
  honor,
  honor2,
  marketingconf,
  BGS,
} from "../assets";

const experiences = [
  {
    title: "Solutions Consultant",
    company_name: "Google (via Azaaki LLC)",
    icon: google,
    date: "Sep 2025 - Apr 2026",
    points: [
      "Analyzed feature data using visualization and AI tools to define problem areas, uncover systemic issues (63% from a single root cause), and deliver actionable insights that shaped next-quarter Product priorities and feature improvements.",
      "Onboarded APAC and EMEA merchants for Vehicle Ads by leading data quality reviews and hosting office hours.",
    ],
  },
  {
    title: "Marketing / Community Engagement Specialist",
    company_name: "NEC X",
    icon: necx,
    date: "Jun 2025 - Mar 2026",
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

const educations = [
  {
    degree: "Master of Science in Software Management",
    school: "Carnegie Mellon University",
    icon: cmu,
    date: "Aug 2026 - Dec 2027",
    points: [""],
  },
  {
    degree: "Bachelor of Science in Entrepreneurship and Innovation",
    school: "Menlo College",
    icon: menlo,
    date: "Aug 2021 - May 2025",
    points: [
      "Minor in Business Analytics",
      "Beta Gamma Sigma",
      "GPA: 3.85/4.00",
    ],
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

export { experiences, educations, awards };
