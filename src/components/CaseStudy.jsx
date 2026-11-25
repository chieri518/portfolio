import { Fragment } from "react";
import { styles } from "../styles";

// Building blocks shared by the project case-study pages (BMO, Daily Print,
// NECX, Alumni). Each page passes its own data and accent color.

// A row of steps joined by arrows. From `lg` up the steps share one row (they
// shrink to fit, so it never wraps); below that they stack with down arrows.
// Each arrow is drawn to touch both boxes, so the flow reads as one chain.
function Connector({ className }) {
  return (
    <span aria-hidden="true" className={`flex shrink-0 ${className}`}>
      {/* down arrow (stacked) */}
      <span className="flex lg:hidden flex-col items-center h-8">
        <span className="w-0.5 flex-1 bg-current" />
        <svg width="10" height="8" viewBox="0 0 10 8" className="fill-current">
          <path d="M0 0h10L5 8z" />
        </svg>
      </span>
      {/* right arrow (one row) */}
      <span className="hidden lg:flex items-center w-8">
        <span className="h-0.5 flex-1 bg-current" />
        <svg width="8" height="10" viewBox="0 0 8 10" className="fill-current">
          <path d="M0 0l8 5-8 5z" />
        </svg>
      </span>
    </span>
  );
}

export function Pipeline({ steps, arrowClassName }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          {i > 0 && <Connector className={arrowClassName} />}
          <div className="w-56 lg:w-auto lg:flex-1 lg:min-w-0 flex flex-col justify-center text-center bg-white rounded-2xl shadow-md border border-gray-100 px-4 lg:px-3 xl:px-4 py-4">
            <p className="font-bold text-gray-900 text-[15px] xl:text-[16px] leading-snug">
              {step.label}
            </p>
            <p className="text-secondary text-[12px] xl:text-[13px] mt-1">
              {step.sub}
            </p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

// A collapsible "Technical stack" table. Rows are { stage, engine, notes }.
export function StackTable({ rows, headings, toggleClassName }) {
  return (
    <section className={`${styles.sectionY} bg-gray-50`}>
      <div className={styles.containerNarrow}>
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
      <div className={styles.container}>
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
      <div className={`${styles.containerNarrow} space-y-8`}>
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
