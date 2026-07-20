import { styles } from "../styles";
import { cadHero, cadPrints, cadWorkflow, cadProfile } from "../constants/cad";

const linkButton =
  "inline-block bg-primary text-white text-sm px-5 py-2.5 rounded-full hover:bg-secondary transition-colors";

const Variant = ({ name, note, image, link }) => {
  const hasLink = link && link.url;
  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {image ? (
        <img src={image} alt={name} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-44 bg-gray-50 flex items-center justify-center text-gray-300 text-sm">
          Photo coming soon
        </div>
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h4 className="font-bold text-gray-900 text-[16px]">{name}</h4>
        {note && (
          <p className="text-secondary text-[14px] leading-[22px]">{note}</p>
        )}
        {hasLink && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-primary text-sm font-semibold hover:underline"
          >
            {link.label || "View post →"}
          </a>
        )}
      </div>
    </div>
  );
};

// One "thing I printed" — either a single model or a set of variants.
const Print = ({ title, status, blurb, tags, image, link, variants }) => {
  const hasLink = link && link.url;
  return (
    <article className="rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
      <div className="flex items-center gap-3 flex-wrap">
        <h3 className={styles.cardTitle}>{title}</h3>
        {status && (
          <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full px-3 py-1">
            {status}
          </span>
        )}
      </div>

      {blurb && (
        <p className="mt-2 text-secondary text-[15px] md:text-[16px] leading-[26px]">
          {blurb}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs text-secondary bg-gray-100 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 w-full rounded-xl object-cover"
        />
      )}

      {variants && variants.length > 0 && (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {variants.map((v, i) => (
            <Variant key={v.name || i} {...v} />
          ))}
        </div>
      )}

      {hasLink && (
        <div className="mt-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButton}
          >
            {link.label || "View post →"}
          </a>
        </div>
      )}
    </article>
  );
};

const CAD = () => {
  const hasProfile = cadProfile && cadProfile.url;

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.padding} max-w-4xl mx-auto`}>
        <p className={styles.sectionSubText}>{cadHero.eyebrow}</p>
        <h1 className={styles.sectionHeadText}>{cadHero.title}</h1>
        <p className="mt-3 text-secondary text-[15px] md:text-[16px] italic">
          {cadHero.tagline}
        </p>

        {cadHero.intro && (
          <p className={`${styles.bodyText} mt-6`}>{cadHero.intro}</p>
        )}

        <h2 className={`${styles.subHeadText} mt-10 mb-4`}>
          What I&rsquo;ve printed
        </h2>
        <div className="flex flex-col gap-6">
          {cadPrints.map((print) => (
            <Print key={print.id} {...print} />
          ))}
        </div>

        {cadWorkflow && (
          <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Tools &amp; workflow
            </p>
            <p className="mt-2 text-gray-900 text-[15px] md:text-[16px]">
              Modeled in{" "}
              <span className="font-semibold">{cadWorkflow.cad}</span> · Printed
              on a <span className="font-semibold">{cadWorkflow.printer}</span>
            </p>
            {cadWorkflow.note && (
              <p className="mt-1 text-secondary text-[14px]">
                {cadWorkflow.note}
              </p>
            )}
          </div>
        )}

        {hasProfile && (
          <div className="mt-10">
            <a
              href={cadProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButton}
            >
              {cadProfile.label ||
                `See more on ${cadProfile.platform || "my profile"} →`}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CAD;
