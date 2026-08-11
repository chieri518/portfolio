import { useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { menlo } from "../assets";
import {
  alumniIntro,
  alumniStats,
  alumniWork,
  alumniLearnings,
} from "../constants/alumni";

// Renders a self-contained email (public/newsletter/index.html) in a sandboxed
// iframe, auto-sizing its height to the content so the outer frame can scroll.
function NewsletterFrame({ src, title }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(700);

  const handleLoad = () => {
    try {
      const doc = ref.current?.contentDocument;
      const measured = Math.max(
        doc?.documentElement?.scrollHeight || 0,
        doc?.body?.scrollHeight || 0
      );
      if (measured) setHeight(measured);
    } catch {
      // Keep the default height if the document can't be measured.
    }
  };

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      onLoad={handleLoad}
      sandbox="allow-same-origin"
      loading="lazy"
      className="w-full block"
      style={{ height }}
    />
  );
}

function Alumni() {
  return (
    <>
      <section
        className={`relative w-full min-h-screen mx-auto bg-ground ${styles.paddingY}`}
      >
        <div
          className={`${styles.paddingX} max-w-6xl mx-auto flex flex-col gap-10`}
        >
          <p className={styles.sectionSubText}>{alumniIntro.eyebrow}</p>
          <div className="flex flex-col md:flex-row text-center items-start gap-8">
            <div className="flex-1 space-y-4">
              <h1 className={styles.sectionHeadText}>{alumniIntro.title}</h1>

              <section className="overview">
                <div className="max-w-6xl mx-auto bg-gray-50 px-6 py-6 md:px-10 md:py-8">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="flex-1 text-left">
                      <p className={styles.bodyText}>{alumniIntro.overview}</p>
                    </div>

                    <a
                      href="https://www.menlo.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={menlo}
                        alt="Menlo College logo"
                        className="w-[50%] mx-auto h-auto object-contain drop-shadow-md"
                      />
                    </a>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {alumniStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-black text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-secondary text-[14px] leading-[20px] mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-10 space-y-4">
                <h2 className={`${styles.cardTitle} text-center`}>
                  Featured Work
                </h2>
                <div className="max-w-3xl mx-auto border-l-[3px] border-gray-300 pl-8">
                  <ul className="space-y-3 text-[18px] leading-[24px] list-none text-left text-secondary">
                    {alumniWork.map((work, index) => (
                      <li key={work.id} className="flex items-start gap-3">
                        <a
                          href={`#${work.id}`}
                          className="hover:text-gray-900 hover:underline transition-colors"
                        >
                          {index + 1}. {work.title} — {work.kind}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {alumniWork.map((work) => (
        <section key={work.id} id={work.id} className={styles.sectionY}>
          <div className={`${styles.paddingX} max-w-6xl mx-auto space-y-8`}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary uppercase tracking-wider text-[13px] mb-2">
                {work.kind}
              </p>
              <h3 className={styles.subHeadText}>{work.title}</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-6">
              {work.embed ? (
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-gray-50"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <iframe
                    src={work.embed}
                    title={work.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : work.iframeSrc ? (
                <figure className="space-y-2">
                  <div className="max-h-[560px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50">
                    <NewsletterFrame src={work.iframeSrc} title={work.title} />
                  </div>
                  {work.caption && (
                    <figcaption className="text-center text-secondary text-[13px]">
                      {work.caption}
                    </figcaption>
                  )}
                </figure>
              ) : work.thumbnail ? (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full max-h-[440px] object-contain rounded-xl bg-gray-50"
                  />
                </a>
              ) : (
                <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">
                  <p className="text-secondary text-[14px]">
                    {work.note || "Coming soon"}
                  </p>
                </div>
              )}

              <p className="text-secondary text-[16px] leading-[28px] md:text-[17px] md:leading-[30px]">
                {work.description}
              </p>

              {work.link && (
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-md text-[15px] font-medium hover:bg-gray-700 transition-colors">
                    {work.cta} →
                  </span>
                </a>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className={`bg-ground ${styles.sectionY}`}>
        <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
          <h3 className={`${styles.subHeadText} text-center mb-10`}>
            What This Experience Taught Me
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniLearnings.map((learning) => (
              <div
                key={learning.title}
                className="learning-item bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {learning.title}
                </h4>
                <p className="text-secondary text-[15px] leading-[24px]">
                  {learning.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Alumni);
