import { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  dailyPrintHero,
  dailyPrintTldr,
  dailyPrintSamples,
  dailyPrintDemo,
  dailyPrintPipeline,
  dailyPrintDecisions,
  dailyPrintStack,
  dailyPrintLearnings,
  dailyPrintFutureIdeas,
} from "../constants/dailyprint";

function Pipeline() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-stretch justify-center gap-3 md:gap-2">
      {dailyPrintPipeline.map((step, i) => (
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
          {i < dailyPrintPipeline.length - 1 && (
            <span
              aria-hidden="true"
              className="text-primary text-2xl font-bold px-1 md:px-2 rotate-90 md:rotate-0"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// One large front page, with a row of thumbnails to switch between editions.
function SampleGallery() {
  const [selected, setSelected] = useState(0);
  const sample = dailyPrintSamples[selected];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
      <figure className="w-full max-w-xs mx-auto lg:mx-0 lg:w-[40%] space-y-3">
        <a
          href={sample.image}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
        >
          <img
            src={sample.image}
            alt={`Front page of ${sample.name}`}
            className="w-full h-auto"
          />
        </a>
        <figcaption className="text-xs md:text-sm text-secondary text-center">
          Tap the page to open it full size.
        </figcaption>
      </figure>

      <div className="w-full lg:flex-1 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {sample.reader}
          </p>
          <h3 className={`${styles.cardTitle} mt-1`}>{sample.name}</h3>
          <p className="text-secondary text-[16px] leading-[28px] mt-3">
            {sample.caption}
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {dailyPrintSamples.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setSelected(i)}
              aria-label={`Show ${s.name}`}
              aria-pressed={i === selected}
              className={`overflow-hidden rounded-xl border bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                i === selected
                  ? "border-primary ring-2 ring-primary"
                  : "border-gray-200 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={s.image}
                alt=""
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DemoVideo() {
  if (!dailyPrintDemo) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl px-6 py-12">
        <p className="text-secondary text-[16px]">
          A demo video is on the way — from designing a paper to the printer
          box printing it.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl bg-gray-900 shadow-md">
      {dailyPrintDemo.embed ? (
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={dailyPrintDemo.embed}
            title="Daily Print demo"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <video
          src={dailyPrintDemo.src}
          poster={dailyPrintDemo.poster}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto"
        />
      )}
    </div>
  );
}

function DailyPrint() {
  return (
    <>
      <section className={`relative w-full ${styles.paddingY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <p className={styles.sectionSubText}>{dailyPrintHero.eyebrow}</p>

          <div className="mt-6 max-w-4xl space-y-5">
            <h1 className={styles.sectionHeadText}>{dailyPrintHero.title}</h1>
            <p className="text-sm font-medium text-primary">
              {dailyPrintHero.role}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              {dailyPrintHero.tagline}
            </p>
            <p className={styles.bodyText}>{dailyPrintHero.blurb}</p>
            <div className="border-l-[3px] border-primary pl-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Why I built it
              </p>
              <p className="text-secondary text-[16px] leading-[26px] italic">
                {dailyPrintHero.why}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DemoVideo />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyPrintTldr.map((item) => (
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
        <div className={`${styles.paddingX} max-w-4xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>Same news, five papers</h2>
            <p className={`${styles.bodyText} mt-2`}>
              All five editions below were made on the same day. Each reader
              chose their own name, sections, layout, typeface, tone and
              location — and got a paper that reads like it was made for them.
            </p>
          </div>
          <SampleGallery />
        </div>
      </section>

      <section className={`bg-gray-50 ${styles.sectionY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>How it works</h2>
            <p className={`${styles.bodyText} mt-2`}>
              Each edition takes about three minutes, from the reader's
              settings to a PDF waiting for the printer.
            </p>
          </div>
          <Pipeline />
          <p className="text-sm md:text-[15px] text-secondary text-center max-w-2xl mx-auto leading-[24px]">
            <span className="font-semibold text-primary">Every morning:</span>{" "}
            readers set a print time. Their next paper is scheduled, written 20
            minutes before that time, and picked up by the printer box at home.
          </p>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-10`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={styles.subHeadText}>Decisions that shaped it</h2>
            <p className={`${styles.bodyText} mt-2`}>
              Most of the work was in the details that make a paper feel
              edited. Here are the problems I ran into, and how I solved them.
            </p>
          </div>

          <div className="space-y-6">
            {dailyPrintDecisions.map((d, i) => (
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
        </div>
      </section>

      <section className={`${styles.sectionY} bg-gray-50`}>
        <div className={`${styles.paddingX} max-w-4xl mx-auto`}>
          <details className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-xl md:text-2xl font-semibold text-gray-900">
                Technical stack
              </span>
              <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 text-sm font-semibold text-gray-900">
                      Part
                    </th>
                    <th className="py-2 pr-4 text-sm font-semibold text-gray-900">
                      Built with
                    </th>
                    <th className="py-2 text-sm font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dailyPrintStack.map((row) => (
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

      <section className={`${styles.sectionY} bg-gray-50`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <h2 className={`${styles.subHeadText} text-center mb-10`}>
            What this taught me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyPrintLearnings.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <h3 className={`${styles.cardTitle} mb-3`}>{item.title}</h3>
                <p className="text-secondary text-[15px] leading-[24px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionY}>
        <div className={`${styles.paddingX} max-w-4xl mx-auto space-y-8`}>
          <div className="text-center">
            <h2 className={styles.subHeadText}>What's next</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyPrintFutureIdeas.map((idea, i) => (
              <li
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-secondary text-[15px] leading-[24px]"
              >
                {idea}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(DailyPrint);
