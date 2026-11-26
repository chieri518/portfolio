import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
import { dailyPrintCover } from "../constants/dailyprint";
import {
  ProjectHero,
  Pipeline,
  StackTable,
  NextIdeas,
} from "../components/CaseStudy";
import {
  bmoHero,
  bmoPipeline,
  bmoPhases,
  bmoStack,
  bmoReels,
  bmoFutureIdeas,
  bmoRepoUrl,
} from "../constants/bmo";

// Day number → build video, so each phase can link to the videos it covers.
const reelsByDay = Object.fromEntries(bmoReels.map((r) => [r.day, r]));

// "Day 1 — unboxing the Pi…" → "Unboxing the Pi…"
const reelTopic = (caption) => {
  const topic = caption.replace(/^Day \d+\s*—\s*/, "");
  return topic.charAt(0).toUpperCase() + topic.slice(1);
};

function PhaseVideos({ days }) {
  const reels = days.map((d) => reelsByDay[d]).filter(Boolean);
  if (reels.length === 0) return null;
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-bmo-deep mb-3">
        Watch the build
      </h4>
      <ul className="grid sm:grid-cols-2 gap-3">
        {reels.map((reel) => (
          <li key={reel.day}>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2 pr-3 hover:border-bmo hover:bg-white transition-colors"
            >
              <span className="relative shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={reel.poster}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-black/25 text-white text-xs"
                >
                  ▶
                </span>
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-bmo-deep">
                  Day {reel.day}
                </span>
                <span className="block text-[14px] leading-[20px] text-gray-900 group-hover:text-bmo-deep">
                  {reelTopic(reel.caption)}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// End of the page: the code, and the next hardware build to look at.
function KeepExploring() {
  return (
    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
      <a
        href={bmoRepoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col justify-center rounded-2xl border border-gray-100 bg-white shadow-md p-6 hover:border-bmo transition-colors"
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-bmo-deep">
          The code
        </span>
        <span className="mt-1 text-xl font-bold text-gray-900">
          BMO on GitHub
          <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
        <span className="mt-1 text-[14px] text-secondary">
          Source for the voice loop, faces and games.
        </span>
      </a>
      <Link
        to="/dailyprint"
        className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white shadow-md p-4 hover:border-bmo transition-colors"
      >
        <img
          src={dailyPrintCover}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-24 h-24 rounded-xl object-cover shrink-0"
        />
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide text-bmo-deep">
            Next project
          </span>
          <span className="block mt-1 text-xl font-bold text-gray-900">
            Daily Print
            <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
          <span className="block mt-1 text-[14px] text-secondary">
            A newspaper that a Raspberry Pi printer box prints at home every
            morning.
          </span>
        </span>
      </Link>
    </div>
  );
}

// Sticky menu of the build phases; highlights the one on screen.
function PhaseNav() {
  const [active, setActive] = useState(bmoPhases[0].id);
  const stripRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    bmoPhases.forEach((phase) => {
      const el = document.getElementById(phase.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // On phones the strip scrolls sideways: keep the current phase in view.
  useEffect(() => {
    const strip = stripRef.current;
    const pill = strip?.querySelector(`[data-phase="${active}"]`);
    if (strip && pill && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({
        left: pill.offsetLeft - (strip.clientWidth - pill.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  const jump = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Build phases"
      className="sticky top-[77px] z-10 bg-ground/95 backdrop-blur border-y border-gray-200"
    >
      <div className={styles.container}>
        <ul
          ref={stripRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide py-3 lg:justify-center"
        >
          {bmoPhases.map((phase, i) => {
            const current = phase.id === active;
            return (
              <li key={phase.id} className="shrink-0">
                <a
                  href={`#${phase.id}`}
                  data-phase={phase.id}
                  onClick={(e) => jump(e, phase.id)}
                  aria-current={current ? "true" : undefined}
                  className={`block rounded-full px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
                    current
                      ? "bg-bmo-deep text-white"
                      : "text-secondary hover:bg-gray-100"
                  }`}
                >
                  <span className="tabular-nums opacity-60 mr-1.5">
                    {i + 1}
                  </span>
                  {phase.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function PhaseSection({ phase, index }) {
  const hasVersions = phase.versions?.length > 0;
  const hasMedia = Boolean(phase.photo) || hasVersions;
  const mediaLeft = index % 2 === 1;

  const media = hasVersions ? (
    <div className="flex-1 space-y-6">
      {phase.versions.map((v) => (
        <figure key={v.label} className="space-y-2">
          <div className="flex items-baseline justify-between gap-2 px-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-bmo-deep">
              {v.label}
            </span>
            <span className="text-xs text-secondary">{v.dates}</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-md">
            <img
              src={v.photo}
              alt={v.caption || `${phase.title} ${v.label}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
          {v.caption && (
            <figcaption className="text-xs md:text-sm text-secondary text-center">
              {v.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  ) : (
    hasMedia && (
      <div className="flex-1 space-y-5">
        <figure className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-md">
            <img
              src={phase.photo}
              alt={phase.photoCaption || `${phase.title} build photo`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
          {phase.photoCaption && (
            <figcaption className="text-xs md:text-sm text-secondary text-center">
              {phase.photoCaption}
            </figcaption>
          )}
        </figure>
      </div>
    )
  );

  const text = (
    <div className="flex-1 space-y-6">
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-bmo-deep mb-1">
          The challenge
        </h4>
        <p className={styles.bodyText}>{phase.problem}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-bmo-deep mb-1">
          What I built
        </h4>
        <p className={styles.bodyText}>{phase.decision}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-bmo-deep mb-1">
          The result
        </h4>
        <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
          {phase.result.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {phase.decisions?.length > 0 && (
        <details className="group/decisions">
          <summary className="cursor-pointer list-none flex items-baseline gap-2 flex-wrap [&::-webkit-details-marker]:hidden">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-bmo-deep">
              Key decisions
            </h4>
            <span className="text-[13px] text-secondary">
              {phase.decisions.map((d) => d.topic).join(" · ")}
            </span>
            <span
              aria-hidden="true"
              className="ml-auto text-bmo-deep text-lg leading-none transition-transform group-open/decisions:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="space-y-3 mt-3">
            {phase.decisions.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {d.topic}
                </p>
                <p className="text-[15px] text-gray-900 mt-1">
                  <span className="text-secondary">{d.considered}</span>
                  <span className="mx-1.5 text-bmo-deep">→</span>
                  <span className="font-semibold">{d.chose}</span>
                </p>
                <p className="text-[14px] text-secondary leading-[22px] mt-1">
                  {d.why}
                </p>
              </div>
            ))}
          </div>
        </details>
      )}

      {phase.videos?.length > 0 && <PhaseVideos days={phase.videos} />}
    </div>
  );

  return (
    <section id={phase.id} className={`${styles.sectionY} scroll-mt-[135px]`}>
      <div className={`${styles.container} space-y-8`}>
        <div className="text-center max-w-3xl mx-auto">
          <p className={styles.sectionSubText}>{phase.eyebrow}</p>
          <h3 className={`${styles.subHeadText} mt-2`}>{phase.title}</h3>
          <p className={`${styles.bodyText} mt-2`}>{phase.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {!hasMedia ? (
              text
            ) : mediaLeft ? (
              <>
                {media}
                {text}
              </>
            ) : (
              <>
                {text}
                {media}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, featured = false }) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-bmo rounded-2xl"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-900 shadow-md aspect-[9/16] ${
          featured ? "ring-2 ring-bmo ring-offset-2" : "border border-gray-100"
        }`}
      >
        <img
          src={reel.poster}
          alt={reel.caption || "BMO build reel"}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-300"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span
            className={`flex items-center justify-center rounded-full bg-black/45 backdrop-blur-sm group-hover:bg-black/60 transition ${
              featured ? "w-16 h-16" : "w-12 h-12"
            }`}
          >
            <span
              className={`ml-1 border-y-transparent border-l-white ${
                featured
                  ? "border-y-[11px] border-l-[18px]"
                  : "border-y-[9px] border-l-[15px]"
              }`}
            />
          </span>
          <span
            className={`text-white font-medium opacity-0 group-hover:opacity-100 transition ${
              featured ? "text-[13px]" : "text-[11px]"
            }`}
          >
            Watch on Instagram
          </span>
        </span>
      </div>
      {reel.caption && (
        <p
          className={`mt-2 px-1 text-gray-900 font-medium leading-snug ${
            featured ? "text-[15px]" : "text-[13px]"
          }`}
        >
          {reel.caption}
        </p>
      )}
    </a>
  );
}

function ReelsCarousel() {
  const trackRef = useRef(null);

  if (!bmoReels.length) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl px-6 py-12">
        <p className="text-secondary text-[16px]">
          Reels are on the way — I’m documenting the build on Instagram. They’ll
          appear here as a tap-to-play gallery.
        </p>
      </div>
    );
  }

  const latest = bmoReels[bmoReels.length - 1];
  const past = bmoReels.slice(0, -1).reverse(); // most-recent past first

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-reel-card]");
    const amount = card ? card.offsetWidth + 16 : 200;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
      {/* Featured - most recent, always highlighted */}
      <div className="w-full max-w-[260px] mx-auto lg:mx-0 lg:w-64 shrink-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bmo-deep mb-3 text-center lg:text-left">
          Latest episode
        </p>
        <ReelCard reel={latest} featured />
      </div>

      {/* Past episodes */}
      {past.length > 0 && (
        <div className="w-full min-w-0 flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Past episodes
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByCard(-1)}
                aria-label="Previous reels"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-bmo transition"
              >
                ←
              </button>
              <button
                onClick={() => scrollByCard(1)}
                aria-label="More reels"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-bmo transition"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-1 px-1"
          >
            {past.map((reel, i) => (
              <div
                key={reel.url ? `${reel.url}-${i}` : i}
                data-reel-card
                className="snap-start shrink-0 w-36 sm:w-40 md:w-44"
              >
                <ReelCard reel={reel} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BMO() {
  return (
    <>
      <ProjectHero link="/bmo" eyebrow={bmoHero.eyebrow}>
        <p className={styles.bodyText}>{bmoHero.about}</p>
        <p className={styles.bodyText}>{bmoHero.blurb}</p>
        {bmoRepoUrl && (
          <a
            href={bmoRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white text-sm md:text-base px-6 py-2 rounded-full hover:bg-secondary transition-colors"
          >
            View on GitHub →
          </a>
        )}
      </ProjectHero>

      <section className={`bg-gray-50 ${styles.sectionY}`}>
        <div className={`${styles.container} space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>How it works</h2>
            <p className={`${styles.bodyText} mt-2`}>
              One local loop runs the whole interaction — from hearing the wake
              word to speaking back and reacting on screen.
            </p>
          </div>
          <Pipeline steps={bmoPipeline} arrowClassName="text-bmo" />
          <p className="text-sm md:text-[15px] text-secondary text-center max-w-2xl mx-auto leading-[24px]">
            <span className="font-semibold text-bmo-deep">Vision branch:</span>{" "}
            when a command sounds like “what do you see?”, BMO takes a different
            path — it shows a live camera preview, snaps a frame, and asks a
            local vision model to describe what’s in front of it.
          </p>
          <p className="text-sm md:text-[15px] text-secondary text-center max-w-2xl mx-auto leading-[24px]">
            <span className="font-semibold text-bmo-deep">Games branch:</span>{" "}
            say “let’s play” and BMO launches a touch-screen game — an endless
            runner or an on-device logic puzzle — pausing the voice loop until
            you exit.
          </p>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.container} space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>The build, in motion</h2>
            <p className={`${styles.bodyText} mt-2`}>
              I’m documenting the whole journey as short reels. Tap any clip to
              play it.
            </p>
          </div>
          <ReelsCarousel />
        </div>
      </section>

      {/* The phase menu stays stuck while any phase is on screen. */}
      <div>
        <section className="pt-8 pb-6">
          <div className={`${styles.container} text-center`}>
            <h2 className={styles.subHeadText}>Building it, piece by piece</h2>
            <p className={`${styles.bodyText} mt-2 max-w-2xl mx-auto`}>
              Each part of BMO came with its own constraint. Here’s how the
              build came together.
            </p>
          </div>
        </section>

        <PhaseNav />

        {bmoPhases.map((phase, index) => (
          <PhaseSection key={phase.id} phase={phase} index={index} />
        ))}
      </div>

      <StackTable
        rows={bmoStack}
        headings={["Stage", "Engine", "Notes"]}
        toggleClassName="text-bmo"
      />

      <NextIdeas ideas={bmoFutureIdeas}>
        <KeepExploring />
        <p className="text-xs md:text-sm text-secondary text-center max-w-2xl mx-auto pt-4">
          BMO is a character from <em>Adventure Time</em> (Cartoon Network).
          This is a non-commercial fan project for personal and educational use.
        </p>
      </NextIdeas>
    </>
  );
}

export default SectionWrapper(BMO, undefined, { fullBleed: true });
