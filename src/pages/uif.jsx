import { memo, useState, useEffect, useRef } from "react";
import cn from "classnames";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { uif, steamhouse, uiftimeline, meetup } from "../constants";
import {
  uiflogo,
  steamhousewide,
  uif1,
  uif_week1,
  uif_week2,
  uif_week3,
  uif_week4,
  uif_week5,
  uif_week6,
  steamhouse_mindmap,
} from "../assets";

const MarqueeImages = memo(function MarqueeImages({ images }) {
  const doubled = [...images, ...images];
  return (
    <>
      {doubled.map(({ src }, i) => (
        <div
          key={i}
          className="group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative"
        >
          <div
            className={cn(
              "h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300",
              i % 2 === 0
                ? "rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl"
                : "group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]"
            )}
          >
            <img
              src={src}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
            />
          </div>
        </div>
      ))}
    </>
  );
});

function MarqueeGallery({ images }) {
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
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <MarqueeImages images={images} />
      </div>
    </div>
  );
}

const weekImages = [
  uif_week1,
  uif_week2,
  uif_week3,
  uif_week4,
  uif_week5,
  uif_week6,
  uif1,
];

const UIFCard = ({ experience, index }) => {
  const image = weekImages[index] || null;

  return (
    <div
      className="min-w-[280px] max-w-xs flex-shrink-0 rounded-2xl p-4 flex flex-col gap-3"
      style={{ background: experience.color }}
    >
      {image && (
        <div className="w-full h-40 rounded-xl overflow-hidden mb-1">
          <img
            src={image}
            alt={experience.week}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div>
        <p className="text-secondary text-[16px] font-semibold mb-1">
          {experience.week}
        </p>
        <h3 className="text-black text-[20px] font-bold leading-snug">
          {experience.title}
        </h3>
      </div>
      <p className="text-black text-[14px] tracking-wider">
        {experience.paragraph}
      </p>
    </div>
  );
};

const UIF = () => {
  const [isMindmapOpen, setIsMindmapOpen] = useState(false);
  const [mindmapZoom, setMindmapZoom] = useState(1);

  const openMindmap = () => {
    setMindmapZoom(1);
    setIsMindmapOpen(true);
  };

  const closeMindmap = () => {
    setIsMindmapOpen(false);
    setMindmapZoom(1);
  };

  const zoomInMindmap = () =>
    setMindmapZoom((z) => Math.min(2, Math.round((z + 0.25) * 100) / 100));
  const zoomOutMindmap = () =>
    setMindmapZoom((z) => Math.max(0.75, Math.round((z - 0.25) * 100) / 100));
  const resetMindmapZoom = () => setMindmapZoom(1);

  return (
    <div className="relative w-full min-h-screen mx-auto">
      <h1 className={styles.sectionHeadText}>
        University Innovation Fellowship
      </h1>
      <p className={styles.sectionSubText}>
        @ Hasso Plattner Institute of Design at Stanford University
      </p>
      <div className="max-w-6xl mx-auto">
        <MarqueeGallery images={uif} />
      </div>

      {/* About UIF */}
      <div className={`${styles.padding} bg-gray-50 py-12`}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-1">
            <p className={styles.bodyText}>
              The University Innovation Fellows (UIF) is a global program that
              empowers university students to become change agents at their
              schools by fostering innovation, entrepreneurship, creativity, and
              design thinking. Supported by Stanford University&apos;s d.school,
              Fellows collaborate with faculty, peers, and campus leaders to
              improve learning experiences and drive institutional change.
            </p>
          </div>
          <a
            href="https://universityinnovationfellows.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:w-56 w-full flex justify-center"
          >
            <img
              src={uiflogo}
              alt="University Innovation Fellows logo"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      <div className={`${styles.padding} py-12`}>
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            "How might we inspire innovation on campus?"
          </h2>

          {/* The Opportunity + Mindmap side by side */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                The Challenge
              </h3>
              <p className={styles.bodyText}>
                The Innovation Center (a space designed by 2017 UIF cohort)
                existed as a classroom with movable furniture and a Mac monitor,
                but was cluttered, had no clear ownership, and saw minimal
                student engagement.
              </p>
              <br />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                The Opportunity
              </h3>
              <p className={`${styles.bodyText} mb-2`}>
                Our cohort identified that students lacked hands-on skill
                development opportunities. We chose to focus on the Innovation
                Center specifically because:
              </p>
              <ul className={`list-disc list-inside space-y-2 ${styles.bodyText}`}>
                <li>The infrastructure already existed.</li>

                <li>
                  It addressed the core problem of giving students prototyping
                  skills.
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-[30%] max-w-sm mx-auto lg:mx-0">
              <button
                type="button"
                onClick={openMindmap}
                className="w-full focus:outline-none group"
              >
                <img
                  src={steamhouse_mindmap}
                  alt="STEAMhouse mindmap"
                  className="w-full h-auto object-contain rounded-2xl shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Key Design Decisions
            </h3>
            <ul className={`list-disc list-inside space-y-2 ${styles.bodyText}`}>
              <li>
                <strong>Sustainability over novelty:</strong> Focused on
                long-term infrastructure rather than one-off events.
              </li>
              <li>
                <strong>Phased implementation:</strong> (1) Budget approval (2)
                Equipment acquisition &amp; installation (3) Space redesign
                &amp; re-opening (4) Promotion (5) Operational role creation for
                ongoing oversight.
              </li>
              <li>
                <strong>Space redesign:</strong> Decluttered the room,
                reorganized storage, and created zones for different types of
                making.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.padding} py-12 bg-gray-50`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Six-Week Training Overview
          </h2>
          <div className="mt-4">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {uiftimeline.map((experience, index) => (
                <div key={index} className="snap-start">
                  <UIFCard experience={experience} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mindmap Lightbox */}
      {isMindmapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeMindmap}
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] bg-black/40 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-black/60 text-white text-sm">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOutMindmap}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={resetMindmapZoom}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  100%
                </button>
                <button
                  type="button"
                  onClick={zoomInMindmap}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  +
                </button>
                <span className="ml-2 opacity-80">
                  {Math.round(mindmapZoom * 100)}%
                </span>
              </div>
              <button
                type="button"
                onClick={closeMindmap}
                className="px-2 py-1 rounded bg-white text-gray-800 text-xs font-semibold hover:bg-gray-100"
              >
                Close
              </button>
            </div>
            <div className="w-full h-full overflow-auto p-4 flex items-center justify-center">
              <div
                className="inline-block"
                style={{
                  transform: `scale(${mindmapZoom})`,
                  transformOrigin: "center center",
                }}
              >
                <img
                  src={steamhouse_mindmap}
                  alt="STEAMhouse mindmap enlarged"
                  className="max-w-full max-h-[70vh] h-auto object-contain rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`${styles.padding} py-12`}>
        <div className={`max-w-6xl mx-auto space-y-10 ${styles.bodyText}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Outcomes
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Secured{" "}
                <strong className="text-primary">$6,000+ in funding</strong>{" "}
                through pitching to key stakeholders.
              </li>
              <li>
                Sourced and installed
                <strong className="text-primary">
                  {" "}
                  $10,000+ worth of equipment
                </strong>{" "}
                through a mix of funding, donations, and vendor discounts (3D
                printers, laser cutter, VR sets, sewing machines, etc.).
              </li>
              <li>
                Hosted{" "}
                <strong className="text-primary">Grand Re-Opening</strong> event
                with strong student/faculty turnout; attendees received custom
                3D-printed tokens.
              </li>
              <li>
                Designed a multi-year strategic plan intentionally aligned with
                Menlo&apos;s institutional goals to ensure sustainability beyond
                our cohort&apos;s graduation.
              </li>
              <li>
                Created the proposal for an operations oversight role to ensure
                governance and prevent misuse.
              </li>
            </ul>
          </div>
        </div>
        {/* STEAMhouse Gallery */}
        <div className="py-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <img
              loading="lazy"
              src={steamhousewide}
              alt="STEAMhouse makerspace"
              className="w-full h-auto object-contain rounded-2xl shadow-md"
            />
            <MarqueeGallery images={steamhouse} />
          </div>
        </div>
        <div className={`max-w-6xl mx-auto space-y-10 ${styles.bodyText}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What I Learned
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Design for inheritance, not heroics
                </span>
                <span className="block">
                  Sustainable impact requires systems that outlive their
                  creators. Infrastructure matters more than single events, and
                  clear ownership and handoff plans matter more than the
                  short-term excitement of launch.
                </span>
              </li>
              <li>
                <span className="font-semibold">Systems need stewards</span>
                <span className="block">
                  Even well-designed spaces drift without governance. I learned
                  the importance of designing not just the space but the
                  operational roles that maintain it.
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  Stakeholder alignment is emotional and political work
                </span>
                <span className="block">
                  Winning resources in zero-sum environments required reframing
                  the project as a shared asset. UIF&apos;s credibility and
                  alignment with Menlo&apos;s strategic plan were key in
                  shifting attitudes.
                </span>
              </li>
            </ol>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              UIF Silicon Valley Meetup
            </h2>
            <MarqueeGallery images={meetup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(UIF);
