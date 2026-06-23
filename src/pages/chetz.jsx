import { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  chetzlogo,
  group1,
  group2,
  workshop1,
  workshop2,
  workshop3,
  manabity1,
  manabity2,
  meeting1,
  meeting2,
  meeting3,
  langexch1,
  langexch2,
  seminar1,
  seminar2,
} from "../assets";
import { organizations, events } from "../constants/chetz";

const photoSlides = [
  {
    image: group1,
    alt: "Language exchange group session",
    caption: "Language Exchange Community",
  },
  {
    image: group2,
    alt: "chetz team group photo",
    caption: "Volunteer Team & Community",
  },
  {
    image: workshop2,
    alt: "Ikkadanan workshop session",
    caption: "Ikkadanan Workshop Series",
  },
  {
    image: workshop3,
    alt: "Ikkadanran workshop breakout",
    caption: "Small-Group Workshop Activities",
  },
  {
    image: manabity1,
    alt: "Manabity program session",
    caption: "Manabity Learning Support",
  },
  {
    image: manabity2,
    alt: "Manabity students collaborating",
    caption: "Students Learning Together",
  },
  {
    image: meeting1,
    alt: "Online planning meeting",
    caption: "Online Planning Meeting",
  },
  {
    image: meeting2,
    alt: "Program operations discussion",
    caption: "Program Operations & Coordination",
  },
  {
    image: meeting3,
    alt: "Casual team catch-up",
    caption: "Casual Team Catch-up",
  },
  {
    image: langexch1,
    alt: "Language exchange event",
    caption: "Language Exchange Event",
  },
  {
    image: langexch2,
    alt: "Language exchange event participants",
    caption: "Language Exchange Event",
  },
  {
    image: seminar1,
    alt: "chetz seminar session",
    caption: "Seminar Session",
  },
  {
    image: seminar2,
    alt: "chetz seminar discussion",
    caption: "Seminar Discussion",
  },
];

const PhotoSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photoSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = photoSlides[index];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-[4320/3042]">
        <img
          src={current.image}
          alt={current.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/55 text-white px-4 py-3 text-xs sm:text-sm">
          {current.caption}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {photoSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const TimelinePhase = ({ phase, title, date, children, highlight = false }) => {
  return (
    <div className={`relative flex gap-8`}>
      {/* Timeline Connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
            highlight ? "bg-orange-500" : "bg-blue-500"
          }`}
        >
          {phase}
        </div>
        <div className="w-1 flex-grow bg-gray-300 mt-4 min-h-[100px]"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        {/* Title and Date */}
        <div className="mb-4">
          <h3 className={`${styles.subHeadText} mb-2`}>{title}</h3>
          <p className="text-sm font-medium text-gray-500">{date}</p>
        </div>

        {/* Children Content */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            highlight ? "bg-blue-50 border-2 border-blue-200" : "bg-white"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const chetz = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-10`}
      >
        <p className={styles.sectionSubText}>
          Language exchange · Community
        </p>
        <div className="flex flex-col md:flex-row text-center items-start gap-8">
          <div className="flex-1 space-y-4">
            <h1 className={styles.sectionHeadText}>chetz</h1>

            <div className="max-w-6xl mx-auto bg-gray-50 px-6 py-6 md:px-10 md:py-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-1">
                  <p className={styles.bodyText}>
                    chetz is a student-led nonprofit organization founded in
                    October 2020 to connect Japanese students with diverse
                    cultures during the COVID-19 pandemic. Rooted in the belief
                    that global understanding starts with communication, chetz
                    creates online spaces where students can learn from each
                    other.
                  </p>
                </div>

                <div className="lg:w-48 w-full">
                  <img
                    src={chetzlogo}
                    alt="chetz logo"
                    className="w-[70%] h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${styles.subHeadText} mb-4`}>
            Our Vision
          </h2>

          <p className={styles.bodyText}>
            To{" "}
            <strong className="text-primary">
              serve as a bridge between Japan and the world
            </strong>
            , encouraging young people to expand their perspectives through
            cultural and language exchange.
          </p>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${styles.subHeadText} mb-4`}>
            Our Story
          </h2>

          <p className={styles.bodyText}>
            In 2020, the COVID-19 pandemic forced me to return to Japan from my
            high school in Canada, suddenly separating me from school, friends
            and the international environment that had shaped me. I thought
            about students around the world who were facing a similar
            disconnection.
            <br />
            Then I wondered: what if I created a virtual space where students
            could broaden their perspectives beyond their current restrictions?
            Within hours, I built a website offering English lessons and
            study-abroad consulting.
            <br />
            But soon, I realized I had it backwards. If I truly wanted students
            to broaden their perspectives, they needed to hear <i>many</i>{" "}
            stories, not just mine. So I pivoted and created a space where they
            could learn <i>with</i> each other. That became chetz: a
            peer-to-peer community where students connect across borders to
            share their cultures, languages, and lived experiences.
          </p>
        </div>
      </div>
      <div className={`${styles.padding} py-12`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${styles.subHeadText} mb-4`}>
            Our Impact
          </h2>

          <ul className={`list-disc list-inside space-y-2 ${styles.bodyText}`}>
            <li>
              Recruited <strong className="text-primary">20+ members</strong>{" "}
              from 6 countries
            </li>
            <li>
              Collaborated with{" "}
              <strong className="text-primary">10+ organizations</strong>{" "}
              worldwide
            </li>
            <li>
              <strong className="text-primary">40+ participants</strong> per
              event (started with ~10)
            </li>
            <li>
              <strong className="text-primary">5+ years</strong> sustained
              operation -{" "}
              <strong className="text-primary">still running today!</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${styles.subHeadText} mb-8`}>
            Our Collaborations
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-28 flex items-center justify-center p-3">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold text-center px-2">
                    {org.name}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center h-28 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 text-sm font-semibold bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              and more...
            </div>
          </div>
        </div>
        {/* THE JOURNEY - TIMELINE */}
        <section className="journey-section py-20">
          <div className="max-w-6xl mx-auto px-6 py-6 bg-gray-50">
            <h2 className={`${styles.subHeadText} text-center mb-12`}>
              The Journey
            </h2>

            <div className="space-y-16">
              <TimelinePhase
                phase="1"
                title="Beginning of chetz"
                date="October 2020"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  <ul className="list-disc list-inside text-gray-600 text-lg leading-7 lg:w-[70%]">
                    <li>Week 1: Created name, website and logo → pivot</li>
                    <li>Week 2-3: Recruited co-founder and first volunteers</li>
                    <li>
                      Week 4: First language exchange event with ~10 people
                      (friends + members)
                    </li>
                  </ul>

                  <img
                    src={langexch1}
                    alt="First language exchange event"
                    className="lg:w-[30%] w-full h-auto object-contain"
                  />
                </div>
              </TimelinePhase>

              {/* Phase 2 */}
              <TimelinePhase
                phase="2"
                title="Scaling the Organization"
                date="Nov 2020 - Feb 2021"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      Systems Built:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary text-[15px] leading-[24px]">
                      <li>Training materials & onboarding</li>{" "}
                      <li>Slack channels (internal + external)</li>
                      <li>Branding guide</li>
                      <li>CRM tracking system</li>
                      <li>Multi-platform marketing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      Growth Strategy:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary text-[15px] leading-[24px]">
                      <li>Strategic cold outreach</li>
                      <li>Partnerships with other social organizations</li>
                      <li>
                        Network effect → Organizations started reaching out to
                        us
                      </li>
                      <li>Recruited more students as the organization grew</li>
                    </ul>
                  </div>
                </div>
              </TimelinePhase>

              {/* Phase 3 */}
              <TimelinePhase
                phase="3"
                title="Cultural Transformation"
                date="March 2021"
                highlight={true}
              >
                <div className="space-y-6">
                  {/* The Problem */}
                  <p className="font-semibold text-lg mb-3 text-gray-900">
                    The Problem:
                  </p>
                  <ul className={`list-disc list-inside ${styles.bodyText}`}>
                    <li>Team commitment dropped as organization grew</li>
                    <li>
                      Members ghosting meetings, not delivering tasks, being
                      flaky
                    </li>
                    <li>More responsibilities fell on me</li>
                  </ul>
                  {/* The Solution */}
                  <p className="font-semibold text-lg mb-3 text-gray-900">
                    The Solution:
                  </p>
                  <ul className={`list-disc list-inside ${styles.bodyText}`}>
                    <li>
                      Conducted 1-on-1 conversations with every member. Asked:
                      What do you <em>want</em> to do?
                    </li>
                    <li>
                      Realigned team roles, set clear expectations and goals.
                    </li>
                  </ul>
                  <p className="font-semibold text-lg mb-3 text-gray-900">
                    Leadership Shift & Results:
                  </p>
                  <ul className={`list-disc list-inside ${styles.bodyText}`}>
                    <li>
                      Leadership shift from trying to teach/control to trusting
                      members and giving them real ownership.
                    </li>
                    <li>
                      Culture transformed overnight from formal and stressful to
                      collaborative and empowering.
                    </li>
                    <li>
                      Team became genuine friends (never met in person, but kept
                      a LINE group open all day).
                    </li>
                    <li>
                      Members began taking initiative: hosting programs
                      independently and suggesting new ideas.
                    </li>
                    <li>
                      Everyone could trust each other and no longer needed you
                      to finish tasks.
                    </li>
                  </ul>
                </div>
              </TimelinePhase>

              {/* Phase 4 */}
              <TimelinePhase
                phase="4"
                title="Sustainable Handoff"
                date="August 2021"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      Selection Process:
                    </h4>
                    <p className="text-gray-700">
                      Identified successor who took initiative - independently
                      recruiting new members without being asked. Taught through
                      shadowing, not instruction. Transferred knowledge, not
                      control.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      Most student-led organizations die when the founder
                      leaves.
                    </p>
                    <p className="text-xl font-bold text-blue-500">
                      chetz is still running 5 years later.
                    </p>
                  </div>
                </div>
              </TimelinePhase>
            </div>
          </div>
        </section>

        <div className={`${styles.padding} py-10`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${styles.subHeadText} mb-4 text-center`}>
              Programs
            </h2>

            <div className="text-center mb-8">
              <p className={`${styles.bodyText} max-w-4xl mx-auto`}>
                chetz provides a flexible space where volunteers design
                activities based on their own skills and experiences, enabling a
                wide range of volunteer-led events, including:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {events.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${styles.cardTitle} mb-2`}>
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 py-10 ">
              <h3 className={`${styles.subHeadText} mb-4 text-center`}>
                Gallery
              </h3>
              <p className="text-secondary text-[15px] leading-[26px] max-w-3xl mx-auto mb-6 text-center">
                A few snapshots from language exchanges, workshops, and fun
                moments!
              </p>
              <PhotoSlideshow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(chetz);
