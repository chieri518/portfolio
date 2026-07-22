import { useRef } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  bmoHero,
  bmoCover,
  bmoTldr,
  bmoPipeline,
  bmoPhases,
  bmoStack,
  bmoReels,
  bmoLearnings,
  bmoFutureIdeas,
  bmoRepoUrl,
} from "../constants/bmo";

function Pipeline() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-stretch justify-center gap-3 md:gap-2">
      {bmoPipeline.map((step, i) => (
        <div
          key={step.label}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="w-44 md:w-36 lg:w-40 text-center bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-4">
            <p className="font-bold text-gray-900 text-[15px] md:text-[16px]">
              {step.label}
            </p>
            <p className="text-secondary text-[12px] md:text-[13px] mt-1">
              {step.sub}
            </p>
          </div>
          {i < bmoPipeline.length - 1 && (
            <span
              aria-hidden="true"
              className="text-[#5fc6a8] text-2xl font-bold px-1 md:px-2 rotate-90 md:rotate-0"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
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
            <span className="text-xs font-semibold uppercase tracking-wide text-[#3da789]">
              {v.label}
            </span>
            <span className="text-xs text-secondary">{v.dates}</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-md">
            <img
              src={v.photo}
              alt={v.caption || `${phase.title} ${v.label}`}
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
        <h4 className="text-sm font-semibold uppercase tracking-wide text-[#3da789] mb-1">
          The challenge
        </h4>
        <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
          {phase.problem}
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-[#3da789] mb-1">
          What I built
        </h4>
        <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
          {phase.decision}
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-[#3da789] mb-1">
          The result
        </h4>
        <ul className="space-y-2 text-secondary text-[15px] leading-[24px] list-disc list-inside">
          {phase.result.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {phase.decisions?.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#3da789] mb-3">
            Key decisions
          </h4>
          <div className="space-y-3">
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
                  <span className="mx-1.5 text-[#3da789]">→</span>
                  <span className="font-semibold">{d.chose}</span>
                </p>
                <p className="text-[14px] text-secondary leading-[22px] mt-1">
                  {d.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id={phase.id} className="py-12 md:py-16">
      <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
        <div className="text-center max-w-3xl mx-auto">
          <p className={styles.sectionSubText}>
            {phase.eyebrow}
          </p>
          <h3 className={`${styles.subHeadText} mt-2`}>
            {phase.title}
          </h3>
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
      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5fc6a8] rounded-2xl"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-900 shadow-md aspect-[9/16] ${
          featured
            ? "ring-2 ring-[#5fc6a8] ring-offset-2"
            : "border border-gray-100"
        }`}
      >
        <img
          src={reel.poster}
          alt={reel.caption || "BMO build reel"}
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3da789] mb-3 text-center lg:text-left">
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
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#5fc6a8] transition"
              >
                ←
              </button>
              <button
                onClick={() => scrollByCard(1)}
                aria-label="More reels"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#5fc6a8] transition"
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
      <section className={`relative w-full ${styles.paddingY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <p className={styles.sectionSubText}>
            {bmoHero.eyebrow}
          </p>
          <div className="mt-6 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              <h1 className={styles.sectionHeadText}>{bmoHero.title}</h1>
              {bmoHero.role && (
                <p className="text-sm font-medium text-[#3da789]">
                  {bmoHero.role}
                </p>
              )}
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                {bmoHero.tagline}
              </p>
              <p className={styles.bodyText}>{bmoHero.blurb}</p>
              {bmoHero.why && (
                <div className="border-l-[3px] border-[#5fc6a8] pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Why I built it
                  </p>
                  <p className="text-secondary text-[16px] leading-[26px] italic">
                    {bmoHero.why}
                  </p>
                </div>
              )}
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
            </div>
            <div className="flex-1 w-full max-w-md">
              <img
                src={bmoCover}
                alt="BMO robot"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {bmoTldr.map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3da789] mb-2">
                  {item.label}
                </p>
                <p className="text-secondary text-[15px] leading-[23px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>
              How it works
            </h2>
            <p className={`${styles.bodyText} mt-2`}>
              One local loop runs the whole interaction — from hearing the wake
              word to speaking back and reacting on screen.
            </p>
          </div>
          <Pipeline />
          <p className="text-sm md:text-[15px] text-secondary text-center max-w-2xl mx-auto leading-[24px]">
            <span className="font-semibold text-[#3da789]">Vision branch:</span>{" "}
            when a command sounds like “what do you see?”, BMO takes a different
            path — it shows a live camera preview, snaps a frame, and asks a
            local vision model to describe what’s in front of it.
          </p>
          <p className="text-sm md:text-[15px] text-secondary text-center max-w-2xl mx-auto leading-[24px]">
            <span className="font-semibold text-[#3da789]">Games branch:</span>{" "}
            say “let’s play” and BMO launches a touch-screen game — an endless
            runner or an on-device logic puzzle — pausing the voice loop until
            you exit.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>
              The build, in motion
            </h2>
            <p className={`${styles.bodyText} mt-2`}>
              I’m documenting the whole journey as short reels. Tap any clip to
              play it.
            </p>
          </div>
          <ReelsCarousel />
        </div>
      </section>

      <section className="pt-8">
        <div className={`${styles.paddingX} max-w-6xl mx-auto text-center`}>
          <h2 className={styles.subHeadText}>
            Building it, piece by piece
          </h2>
          <p className={`${styles.bodyText} mt-2 max-w-2xl mx-auto`}>
            Each part of BMO came with its own constraint. Here’s how the build
            came together.
          </p>
        </div>
      </section>

      {bmoPhases.map((phase, index) => (
        <PhaseSection key={phase.id} phase={phase} index={index} />
      ))}

      <section className="py-12 md:py-16 bg-gray-50">
        <div className={`${styles.paddingX} max-w-4xl mx-auto`}>
          <details className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-xl md:text-2xl font-semibold text-gray-900">
                Technical stack
              </span>
              <span className="text-[#5fc6a8] text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 text-sm font-semibold text-gray-900">
                      Stage
                    </th>
                    <th className="py-2 pr-4 text-sm font-semibold text-gray-900">
                      Engine
                    </th>
                    <th className="py-2 text-sm font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bmoStack.map((row) => (
                    <tr key={row.stage} className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-secondary text-[15px] font-medium">
                        {row.stage}
                      </td>
                      <td className="py-3 pr-4 text-secondary text-[15px]">
                        {row.engine}
                      </td>
                      <td className="py-3 text-secondary text-[15px]">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-gray-50">
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <h2 className={`${styles.subHeadText} text-center mb-10`}>
            What this taught me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bmoLearnings.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <h3 className={`${styles.cardTitle} mb-3`}>
                  {item.title}
                </h3>
                <p className="text-secondary text-[15px] leading-[24px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className={`${styles.paddingX} max-w-4xl mx-auto space-y-8`}>
          <div className="text-center">
            <h2 className={styles.subHeadText}>
              What’s next
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bmoFutureIdeas.map((idea, i) => (
              <li
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-secondary text-[15px] leading-[24px]"
              >
                {idea}
              </li>
            ))}
          </ul>
          <p className="text-xs md:text-sm text-secondary text-center max-w-2xl mx-auto pt-4">
            BMO is a character from <em>Adventure Time</em> (Cartoon Network).
            This is a non-commercial fan project for personal and educational
            use.
          </p>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(BMO);
