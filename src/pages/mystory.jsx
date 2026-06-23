import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { storyIntro, storyChapters } from "../constants/mystory";

const ACCENT = "#cf5b6e"; // readable cherry tone for labels/accents

// Short label for the chapter nav (the country/phase before the first " · ").
const navLabel = (chapter) => chapter.age.split(" · ")[0];

function Polaroid({ photo, index, featured = false }) {
  const tilt = featured ? "" : index % 2 === 0 ? "-rotate-2" : "rotate-2";
  return (
    <figure
      className={`bg-white p-3 pb-2 rounded-md shadow-md transition-transform duration-300 hover:rotate-0 ${tilt} ${
        featured ? "max-w-[240px] mx-auto" : ""
      }`}
    >
      <div className="overflow-hidden rounded-sm bg-gray-50">
        <img
          src={photo.src}
          alt={photo.caption || "Story photo"}
          className={`w-full object-cover ${
            featured
              ? "h-auto object-contain"
              : photo.wide
              ? "aspect-[3/2]"
              : "aspect-square"
          }`}
        />
      </div>
      {photo.caption && (
        <figcaption className="mt-3 text-center text-[13px] md:text-sm text-secondary">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

function Chapter({ chapter, index }) {
  const featured = chapter.photos.filter((p) => p.feature);
  const rest = chapter.photos.filter((p) => !p.feature);

  return (
    <section
      id={chapter.id}
      className={`scroll-mt-32 rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10 ${
        index % 2 === 0 ? "bg-white" : "bg-[#fff5f5]"
      }`}
    >
      <p
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: ACCENT }}
      >
        {chapter.chapter} · {chapter.age}
      </p>
      <h2 className={`${styles.subHeadText} mt-2`}>
        {chapter.title}
      </h2>

      <div
        className={`mt-6 ${
          featured.length > 0 ? "lg:flex lg:gap-10 lg:items-start" : ""
        }`}
      >
        <div className="max-w-2xl space-y-4 lg:flex-1">
          {chapter.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]"
            >
              {p}
            </p>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="mt-8 lg:mt-0 lg:w-60 shrink-0 space-y-6">
            {featured.map((photo, i) => (
              <Polaroid key={i} photo={photo} index={i} featured />
            ))}
          </div>
        )}
      </div>

      {rest.length > 0 && (
        <div
          className={`mt-8 grid gap-6 ${
            rest.length === 1
              ? "max-w-sm mx-auto"
              : rest.length === 2
              ? "grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-2 md:grid-cols-3"
          }`}
        >
          {rest.map((photo, i) => (
            <Polaroid key={i} photo={photo} index={i} />
          ))}
        </div>
      )}

      {chapter.links?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {chapter.links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="inline-block bg-primary text-white text-sm px-5 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

// Desktop: sticky vertical chapter list beside the story.
function ChapterNav({ activeId, onJump }) {
  return (
    <nav className="hidden lg:block w-48 shrink-0 sticky top-24 self-start">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 pl-4"
        style={{ color: ACCENT }}
      >
        Chapters
      </p>
      <ul className="border-l border-gray-200">
        {storyChapters.map((c, i) => {
          const active = c.id === activeId;
          return (
            <li key={c.id}>
              <button
                onClick={() => onJump(c.id)}
                className={`block w-full text-left pl-4 -ml-px border-l-2 border-transparent py-1.5 text-sm transition-colors ${
                  active
                    ? "font-semibold text-gray-900"
                    : "text-secondary hover:text-gray-900"
                }`}
                style={active ? { borderColor: ACCENT } : undefined}
              >
                <span className="tabular-nums opacity-50 mr-2">{i + 1}</span>
                {navLabel(c)}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Mobile: sticky horizontal pill strip.
function MobileChapterNav({ activeId, onJump }) {
  return (
    <div className="lg:hidden sticky top-20 z-10 py-2 -mt-2">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide rounded-full bg-white/95 backdrop-blur border border-gray-100 shadow-sm p-1.5">
        {storyChapters.map((c, i) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => onJump(c.id)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs whitespace-nowrap transition-colors ${
                active
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-gray-100"
              }`}
            >
              {i + 1}. {navLabel(c)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MyStory() {
  const [activeId, setActiveId] = useState(storyChapters[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    const els = storyChapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jump = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="overflow-x-clip">
      <div className="text-center max-w-3xl mx-auto">
        <p className={styles.sectionSubText}>{storyIntro.eyebrow}</p>
        <h1 className={styles.sectionHeadText}>{storyIntro.title}</h1>
        <p className={`${styles.bodyText} mt-4`}>{storyIntro.lede}</p>
      </div>

      <MobileChapterNav activeId={activeId} onJump={jump} />

      <div className="mt-8 lg:mt-10 lg:flex lg:gap-10 lg:items-start">
        <ChapterNav activeId={activeId} onJump={jump} />
        <div className="flex-1 min-w-0 space-y-10">
          {storyChapters.map((chapter, index) => (
            <Chapter key={chapter.id} chapter={chapter} index={index} />
          ))}
          <p className="text-center text-sm text-secondary italic">
            …and the story's still being written.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(MyStory);
