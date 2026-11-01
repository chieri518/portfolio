import { styles } from "../styles";

// Building blocks shared by the project case-study pages (BMO, Daily Print,
// NECX, Alumni). Each page passes its own data and accent color.

// A row of steps joined by arrows; the arrows turn downward on mobile.
export function Pipeline({ steps, arrowClassName }) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-stretch justify-center gap-3 md:gap-2">
      {steps.map((step, i) => (
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
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className={`${arrowClassName} text-2xl font-bold px-1 md:px-2 rotate-90 md:rotate-0`}
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// A collapsible "Technical stack" table. Rows are { stage, engine, notes }.
export function StackTable({ rows, headings, toggleClassName }) {
  return (
    <section className={`${styles.sectionY} bg-gray-50`}>
      <div className={`${styles.paddingX} max-w-4xl mx-auto`}>
        <details className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
          <summary className="cursor-pointer list-none flex items-center justify-between">
            <span className="text-xl md:text-2xl font-semibold text-gray-900">
              Technical stack
            </span>
            <span
              className={`${toggleClassName} text-2xl group-open:rotate-45 transition-transform`}
            >
              +
            </span>
          </summary>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  {headings.map((heading, i) => (
                    <th
                      key={heading}
                      className={`py-2 text-sm font-semibold text-gray-900 ${
                        i < headings.length - 1 ? "pr-4" : ""
                      }`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
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
  );
}

// Three "what I learned" cards. Items are { title, body }.
// "build" sits on a gray band with white cards (BMO, Daily Print);
// "experience" sits on the page background with gray cards (NECX, Alumni).
const learningsLooks = {
  build: {
    section: "bg-gray-50",
    grid: "gap-6",
    card: "bg-white",
    title: `${styles.cardTitle} mb-3`,
  },
  experience: {
    section: "bg-ground",
    grid: "gap-8",
    card: "bg-gray-50",
    title: "text-xl font-semibold text-gray-900 mb-3",
  },
};

export function Learnings({ title, items, look = "build" }) {
  const l = learningsLooks[look];
  return (
    <section className={`${styles.sectionY} ${l.section}`}>
      <div className={`${styles.paddingX} max-w-6xl mx-auto`}>
        <h2 className={`${styles.subHeadText} text-center mb-10`}>{title}</h2>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${l.grid}`}>
          {items.map((item) => (
            <div
              key={item.title}
              className={`${l.card} rounded-2xl shadow-md border border-gray-100 p-6`}
            >
              <h3 className={l.title}>{item.title}</h3>
              <p className="text-secondary text-[15px] leading-[24px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "What's next": a heading and up to three short ideas. Extra content
// (like a footnote) can be passed as children.
export function NextIdeas({ ideas, children }) {
  return (
    <section className={styles.sectionY}>
      <div className={`${styles.paddingX} max-w-4xl mx-auto space-y-8`}>
        <h2 className={`${styles.subHeadText} text-center`}>What’s next</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ideas.map((idea) => (
            <li
              key={idea}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 text-secondary text-[15px] leading-[24px]"
            >
              {idea}
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}
