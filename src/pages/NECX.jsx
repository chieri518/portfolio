import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { spinImages, lumaImages } from "../constants/necx";
import { necx, elevx } from "../assets";

function LumaGallery() {
  const ref = useRef();

  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className="w-[20%] py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        {lumaImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Luma Image"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

function NECX() {
  return (
    <>
      <section
        className={`relative w-full min-h-screen mx-auto bg-white ${styles.paddingY}`}
      >
        <div
          className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-10`}
        >
          <p className={styles.sectionSubText}>
            Venture Studio · Silicon Valley · Japan
          </p>
          <div className="flex flex-col md:flex-row text-center items-start gap-8">
            <div className="flex-1 space-y-4">
              <h1 className={styles.sectionHeadText}>NEC X</h1>

              <section className="overview">
                <div className="max-w-6xl mx-auto bg-gray-50 px-6 py-6 md:px-10 md:py-8">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="flex-1">
                      <p className={styles.bodyText}>
                        NEC X is a Silicon Valley-based venture studio backed by
                        NEC Corporation, running a multi-phase accelerator
                        program connecting early-stage startups with corporate
                        resources, mentorship, and investment opportunities.
                      </p>
                    </div>

                    <a
                      href="https://www.nec-x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={necx}
                        alt="NEC X logo"
                        className="w-[50%] h-auto object-contain drop-shadow-md"
                      />
                    </a>
                  </div>
                </div>
              </section>

              <div className="pt-10 space-y-4">
                <h2 className={`${styles.cardTitle} text-center`}>
                  Key Contributions
                </h2>
                <div className="max-w-3xl mx-auto border-l-[3px] border-gray-300 pl-8">
                  <ul className="space-y-3 text-[18px] leading-[24px] list-none text-left text-secondary">
                    <li className="flex items-start gap-3">
                      <a
                        href="#social-media-marketing"
                        className="hover:text-gray-900 hover:underline transition-colors"
                      >
                        1. Social Media Marketing - building program visibility
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <a
                        href="#event-management"
                        className="hover:text-gray-900 hover:underline transition-colors"
                      >
                        2. Event Management - converting interest into
                        applications
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <a
                        href="#program-coordination"
                        className="hover:text-gray-900 hover:underline transition-colors"
                      >
                        3. Program Coordination - supporting founder success
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social-media-marketing" className="py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-10`}>
          <div className="text-center max-w-6xl mx-auto">
            <h2 className={`${styles.subHeadText} mb-4`}>
              1. Social Media Marketing
            </h2>
            <p className={styles.bodyText}>
              Building Program Visibility
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Overview
              </h4>
              <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
                NEC X operates at the intersection of Japanese corporate
                innovation and Silicon Valley startup culture. When I joined,
                marketing focused solely on English content on LinkedIn, missing
                opportunities to engage Japanese stakeholders and showcase the
                program's unique corporate-startup bridge to NEC's parent
                company network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  Reactivating Facebook for Japanese Audience
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Translated and adapted LinkedIn content for Facebook,
                    creating a Japanese-language presence
                  </li>
                  <li>
                    Tailored content to cater for the Japanese audience while
                    maintaining startup energy
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  LinkedIn Content Strategy
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Designed graphics (examples below) and wrote copy
                    highlighting program value propositions
                  </li>
                  <li>
                    Created monthly content calendars with posts showcasing
                    program milestones, founder stories, and event announcements
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  Paid LinkedIn Ad Campaigns
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Launched ad campaigns targeting startup founders for events
                    and program applications
                  </li>

                  <li>
                    Managed budget allocation and optimized targeting based on
                    performance analytics
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Impact
              </h4>
              <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                <li>
                  Established <strong>active bilingual presence</strong> across
                  two platforms, reaching both Silicon Valley founders and
                  Japanese corporate stakeholders
                </li>
                <li>
                  Currently supporting <strong>Batch 15 applications</strong>{" "}
                  with a consistent content pipeline after managing multiple
                  successful cohorts
                </li>
                <li>
                  Created reusable <strong>content library</strong> from
                  workshop recordings for ongoing social proof and promotional
                  use
                </li>
              </ul>
              <LumaGallery />
            </div>
          </div>
        </div>
      </section>

      <section id="event-management" className="py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-10`}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className={`${styles.subHeadText} mb-4`}>
              2. Event Management
            </h3>
            <p className={styles.bodyText}>
              Converting Interest into Applications
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 items-start">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  Overview
                </h4>
                <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
                  Events serve as the primary touchpoint for potential
                  applicants to experience NEC X's ecosystem. Success requires
                  coordinating promotion, registration, outreach, logistics, and
                  day-of execution while maintaining a professional experience
                  that reflects the program's quality.
                </p>
              </div>

              <div className="space-y-6">
                <div className="work-detail space-y-2">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Full-Cycle Event Promotion
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                    <li>
                      Created registration pages with approval workflows to
                      qualify attendees
                    </li>
                    <li>
                      Cold-outreached startups aligned with event themes to
                      invite them to pitch or attend
                    </li>
                    <li>
                      Designed promotional graphics and messaging for
                      cross-channel distribution (refer to Section 1)
                    </li>
                  </ul>
                </div>

                <div className="work-detail space-y-2">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Logistics Management
                  </h5>
                  <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                    <li>
                      Coordinated venue setup, catering, and equipment needs for
                      in-person events
                    </li>
                    <li>
                      Created presentation materials, day-of schedules, and
                      registration check-in systems
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  Impact
                </h4>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Successfully delivered <strong>220-person event</strong>{" "}
                    on-budget execution, and positive feedback
                  </li>
                  <li>
                    Enabled meaningful connections between founders and NEC's
                    corporate network, translating event attendance into program
                    applications
                  </li>
                </ul>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {spinImages.map(({ src, alt }) => (
                    <div
                      key={alt}
                      className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program-coordination" className="py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-10`}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className={`${styles.subHeadText} mb-4`}>
              3. Program Coordination
            </h3>
            <p className={styles.bodyText}>
              Supporting Founder Success
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-8">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Overview
              </h4>
              <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
                NEC X runs a three-phase program twice yearly, supporting
                early-stage startups through workshops, mentorship, equity
                funding, and more. Quality delivery requires coordinating
                distributed stakeholders and maintaining clear documentation
                that supports founders’ learning and mentors’ ability to track
                progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  Application &amp; Selection Coordination
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Managed application pipeline: reviewed submissions and
                    organized materials for selection committees
                  </li>
                  <li>
                    Built Calendly scheduling systems for initial pitch sessions
                    with multiple stakeholders
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  Workshop &amp; Session Management
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Attended design thinking, customer discovery, and ICP
                    interview workshops alongside founders
                  </li>
                  <li>
                    Observed VC pitch evaluations to understand evaluation
                    criteria and better support founders
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-gray-900">
                  Documentation &amp; Knowledge Management
                </h5>
                <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                  <li>
                    Managed video platform: invited founders, uploaded session
                    recordings with session summaries
                  </li>
                  <li>
                    Created searchable library of 50+ workshop recordings,
                    slides, and mentor feedback
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Impact
              </h4>
              <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
                <li>
                  <strong>Supported 15+ startups per cohort</strong> through
                  multi-month program journeys with consistent operational
                  quality
                </li>
                <li>
                  <strong>Enabled scalable mentorship:</strong> documentation
                  systems allowed mentors to stay informed without attending
                  every workshop
                </li>
                <li>
                  <strong>Created operational consistency:</strong> standardized
                  scheduling, communication, and documentation processes freed
                  program leadership to focus on strategic relationships and
                  founder coaching
                </li>
                <li>
                  <strong>Bridged cultural contexts:</strong> translated not
                  just language but business norms between Japanese corporate
                  stakeholders and the Silicon Valley startup ecosystem
                </li>
              </ul>

              <div className="flex flex-col items-center gap-3">
                <div className="w-[60%] rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 flex justify-center">
                  <img
                    src={elevx}
                    alt="Phase 1 workshop at NEC X accelerator"
                    className="w-full object-cover"
                  />
                </div>

                <p className="text-xs md:text-sm text-secondary text-center max-w-sm">
                  Batch 14 Kickoff Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <h3 className={`${styles.subHeadText} text-center mb-10`}>
            What This Experience Taught Me
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="learning-item bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Operations excellence creates capacity for strategic work
              </h4>
              <p className="text-secondary text-[15px] leading-[24px]">
                By systematizing documentation, scheduling, and communication, I
                freed up program leadership to focus on high-value activities:
                founder coaching, mentor relationship development, and corporate
                partnership strategy. Good operations make good strategy
                possible.
              </p>
            </div>

            <div className="learning-item bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Community building is relationship infrastructure
              </h4>
              <p className="text-secondary text-[15px] leading-[24px]">
                The accelerator's value came from both structured learning and
                network access. My role was creating the infrastructure—
                documentation systems, scheduling coordination, and
                communication channels—that let meaningful relationships form
                between founders, mentors, and investors.
              </p>
            </div>
            <div className="learning-item bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing requires cultural fluency, not just translation
              </h4>
              <p className="text-secondary text-[15px] leading-[24px]">
                Managing bilingual content showed me that effective marketing
                understands what resonates in each cultural context. Japanese
                stakeholders needed different framing than Silicon Valley
                founders, even when discussing the same program benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(NECX);
