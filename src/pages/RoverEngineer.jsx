import { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  Pipeline,
  StackTable,
  Learnings,
  NextIdeas,
} from "../components/CaseStudy";
import {
  roverHero,
  roverLinks,
  roverDemo,
  roverTldr,
  roverPipeline,
  roverTradeoffs,
  roverDesignDesk,
  roverDashboard,
  roverWorlds,
  roverNasaData,
  roverMyWork,
  roverTeammateWork,
  roverDecisions,
  roverStack,
  roverLearnings,
  roverFutureIdeas,
} from "../constants/rover";

function LinkButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {roverLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-sm md:text-base px-6 py-2 rounded-full transition-colors ${
            link.primary
              ? "bg-primary text-white hover:bg-secondary"
              : "bg-white text-primary border border-primary hover:bg-tertiary"
          }`}
        >
          {link.label} →
        </a>
      ))}
    </div>
  );
}

function DemoVideo() {
  return (
    <figure className="max-w-4xl mx-auto space-y-3">
      <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-md">
        <video
          src={roverDemo.src}
          poster={roverDemo.poster}
          title={roverDemo.title}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto"
        />
      </div>
      <figcaption className="text-xs md:text-sm text-secondary text-center">
        <a
          href={roverDemo.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2"
        >
          Watch it on YouTube
        </a>
      </figcaption>
    </figure>
  );
}

// One large screenshot, with tabs to switch between the three worlds.
function WorldGallery() {
  const [selected, setSelected] = useState(0);
  const world = roverWorlds[selected];

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Worlds"
        className="flex justify-center gap-2 md:gap-3"
      >
        {roverWorlds.map((w, i) => (
          <button
            key={w.name}
            role="tab"
            aria-selected={i === selected}
            onClick={() => setSelected(i)}
            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              i === selected
                ? "bg-primary text-white"
                : "bg-white text-secondary border border-gray-200 hover:border-primary"
            }`}
          >
            <span className="opacity-70 mr-1">{i + 1}.</span>
            {w.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
        <figure className="lg:col-span-3 overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-md">
          <img
            src={world.image}
            alt={world.alt}
            className="w-full h-auto"
          />
        </figure>

        <div className="lg:col-span-2 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              The new constraint
            </p>
            <h3 className={`${styles.cardTitle} mt-1`}>{world.lesson}</h3>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[15px]">
            <dt className="font-semibold text-gray-900">Site</dt>
            <dd className="text-secondary">{world.site}</dd>
            <dt className="font-semibold text-gray-900">Play time</dt>
            <dd className="text-secondary">{world.time}</dd>
          </dl>
          <p className="text-secondary text-[16px] leading-[28px]">
            {world.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

function Screenshot({ src, alt, caption }) {
  return (
    <figure className="space-y-3">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-md"
      >
        <img src={src} alt={alt} className="w-full h-auto" />
      </a>
      <figcaption className="text-xs md:text-sm text-secondary text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

function RoverEngineer() {
  return (
    <>
      <section className={`relative w-full ${styles.paddingY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <p className={styles.sectionSubText}>{roverHero.eyebrow}</p>

          <div className="mt-6 max-w-4xl space-y-5">
            <h1 className={styles.sectionHeadText}>{roverHero.title}</h1>
            <p className="text-sm font-medium text-primary">{roverHero.role}</p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              {roverHero.tagline}
            </p>
            <p className={styles.bodyText}>{roverHero.blurb}</p>
            <div className="border-l-[3px] border-primary pl-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                The challenge from NASA
              </p>
              <p className="text-secondary text-[16px] leading-[26px] italic">
                “{roverHero.challenge}”
              </p>
            </div>
            <LinkButtons />
          </div>

          <div className="mt-12">
            <DemoVideo />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {roverTldr.map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
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

      <section className={`bg-gray-50 ${styles.sectionY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>How a mission plays</h2>
            <p className={`${styles.bodyText} mt-2`}>
              Every mission runs from the design desk to a debrief. To reach the
              next world, it has to earn back what the rover and its launch
              cost.
            </p>
          </div>
          <Pipeline steps={roverPipeline} arrowClassName="text-primary" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center pt-4">
            <div className="lg:col-span-3">
              <Screenshot
                src={roverDesignDesk}
                alt="The rover design desk: part cards on the left, a 3D preview of the rover in the middle, and a specification sheet with mass, launch tier, cost and range on the right"
                caption="The design desk. Tap to open it full size."
              />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <h3 className={styles.cardTitle}>Every part is a trade-off</h3>
              {roverTradeoffs.map((t) => (
                <div key={t.title}>
                  <p className="font-semibold text-gray-900 text-[16px]">
                    {t.title}
                  </p>
                  <p className="text-secondary text-[15px] leading-[24px]">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>Three worlds, three lessons</h2>
            <p className={`${styles.bodyText} mt-2`}>
              The same rover design desk, three very different places to drive.
              Each world adds one new engineering constraint.
            </p>
          </div>
          <WorldGallery />
        </div>
      </section>

      <section className={`bg-gray-50 ${styles.sectionY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>Built on real NASA data</h2>
            <p className={`${styles.bodyText} mt-2`}>
              The ground you drive on, the shadows you hide in and the solar
              flares you shelter from all come from NASA missions. Money values
              are game values, and the game says so.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roverNasaData.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                  {d.title}
                </p>
                <p className="text-secondary text-[15px] leading-[24px]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>How we split the work</h2>
            <p className={`${styles.bodyText} mt-2`}>
              Alvin and I designed the game together and split the work evenly.
              Either of us could build anything; each owned the decisions in
              their area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What I built
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-5 marker:text-primary">
                {roverMyWork.map((item) => (
                  <li
                    key={item}
                    className="text-secondary text-[15px] md:text-[16px] leading-[26px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                What Alvin built
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-5 marker:text-gray-400">
                {roverTeammateWork.map((item) => (
                  <li
                    key={item}
                    className="text-secondary text-[15px] md:text-[16px] leading-[26px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-10`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>Decisions that shaped it</h2>
            <p className={`${styles.bodyText} mt-2`}>
              Most of the work was in playtesting and fixing what felt wrong.
              Here are the problems I ran into, and how I solved them.
            </p>
          </div>

          <div className="space-y-6">
            {roverDecisions.map((d, i) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={`${styles.cardTitle} mt-1 mb-5`}>{d.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      The problem
                    </h4>
                    <p className="text-secondary text-[16px] leading-[28px]">
                      {d.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-primary mb-1">
                      What I did
                    </h4>
                    <p className="text-secondary text-[16px] leading-[28px]">
                      {d.decision}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto pt-4">
            <Screenshot
              src={roverDashboard}
              alt="The end-of-campaign dashboard, with headline stats, one card per mission, and balance and milestone charts"
              caption="The campaign ends on a stats dashboard that sums up all three missions."
            />
          </div>
        </div>
      </section>

      <StackTable
        rows={roverStack}
        headings={["Part", "Built with", "Notes"]}
        toggleClassName="text-primary"
      />

      <Learnings title="What this taught me" items={roverLearnings} />

      <NextIdeas ideas={roverFutureIdeas} />
    </>
  );
}

export default SectionWrapper(RoverEngineer);
