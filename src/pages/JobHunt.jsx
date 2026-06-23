import { styles } from "../styles";
import { jobhunt } from "../assets";

const PART1_URL =
  "https://www.linkedin.com/pulse/navigating-tech-job-market-2025-five-decade-perspective-chieri-abe-66crc/";
const PART2_URL =
  "https://www.linkedin.com/pulse/part-2-navigating-tech-job-market-2025-five-decade-perspective-abe-nenfc/";

const takeaways = [
  {
    title: "Relationships beat applications",
    body: "A warm referral or a direct note to a decision-maker consistently outperforms being one of thousands of online applicants.",
  },
  {
    title: "Careers aren't linear",
    body: "Adjacent roles and industries — healthcare, retail, professional services — are legitimate stepping stones, not detours off the path.",
  },
  {
    title: "Tech moves in cycles",
    body: "The industry has long run in roughly three-year boom-and-bust waves; the 2010s were the exception. Downturns are temporary, so position yourself now to benefit when hiring rebounds.",
  },
  {
    title: "Keep learning — especially AI",
    body: "Staying current with emerging tools is what keeps you adaptable, and adaptability is the real key to long-term success.",
  },
  {
    title: "Build a brand that stands out",
    body: "A polished portfolio, a resume tailored to each role, and quantified, action-oriented achievements make you both findable and memorable.",
  },
  {
    title: "Persistence compounds",
    body: "Preparation during the slow stretches pays off later — success tends to find the people who refuse to give up.",
  },
];

const linkButton =
  "inline-block bg-primary text-white text-sm px-5 py-2.5 rounded-full hover:bg-secondary transition-colors";

const JobHunt = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.padding} max-w-3xl mx-auto`}>
        <p className={styles.sectionSubText}>Co-authored article</p>
        <h1 className={styles.sectionHeadText}>
          Navigating the Tech Job Market in 2025
        </h1>
        <p className="mt-3 text-secondary text-[15px] md:text-[16px] italic">
          A two-part series with Frances Mann-Craik (Menlo College &rsquo;76) —
          a five-decade career perspective meets a new graduate&rsquo;s view.
        </p>

        <img
          src={jobhunt}
          alt="Navigating the Tech Job Market in 2025 — article cover"
          className="mt-6 w-full rounded-2xl shadow-sm"
        />

        <div className="mt-6 space-y-4">
          <p className={styles.bodyText}>
            During my own job search after graduating, I teamed up with my
            mentor Frances Mann-Craik — who has navigated five recessions across
            a five-decade career — to write about what actually works when the
            tech market tightens. We paired her long view with what I was
            learning in real time as a new graduate and turned it into a
            two-part series.
          </p>
          <p className={styles.bodyText}>
            I brought the recent-graduate side: networking through event
            volunteering, leaning on international experience, and navigating a
            search that included visa sponsorship. Co-writing it pushed me to
            synthesize a senior perspective with my own and distill it into
            advice others could actually use.
          </p>
        </div>

        <h2 className={`${styles.subHeadText} mt-10 mb-4`}>Key takeaways</h2>
        <ol className="space-y-4">
          {takeaways.map((t, i) => (
            <li
              key={t.title}
              className="rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4"
            >
              <span className="text-primary font-bold text-lg tabular-nums shrink-0">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-[17px] md:text-[18px]">
                  {t.title}
                </h3>
                <p className="mt-1 text-secondary text-[15px] md:text-[16px] leading-[26px]">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={`${styles.subHeadText} mt-10 mb-3`}>
          Read the full series
        </h2>
        <p className={styles.bodyText}>
          The complete two-part article — including the cross-generational
          stories behind these lessons — lives on LinkedIn:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={PART1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButton}
          >
            Read Part 1 on LinkedIn →
          </a>
          <a
            href={PART2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButton}
          >
            Read Part 2 on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobHunt;
