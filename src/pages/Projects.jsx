import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { works, projectTags } from "../constants/projects";
import { fadeIn, textVariant } from "../utils/motion";

const ALL = "All";

const PostCard = ({ index, name, description, image, link, tags = [] }) => {
  return (
    // Each card animates itself in, so cards that reappear after a filter
    // change fade in too (the page-level stagger only runs once).
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      initial="hidden"
      animate="show"
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative bg-white p-4 md:p-5 rounded-2xl border border-gray-100 flex flex-col md:flex-row w-full shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full md:w-1/3 h-auto relative">
            <img
              src={image}
              alt={name}
              className="w-full h-48 md:h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-5 flex flex-col justify-between relative">
            <div>
              <h3 className={styles.cardTitle}>{name}</h3>
              {tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 text-secondary text-[15px]">{description}</p>
            </div>
            {/* The whole card is the link; this just looks like a button. */}
            <span className="mt-2 mb-2 bg-primary text-white text-center text-sm md:text-base py-2 rounded-full hover:bg-secondary transition-colors max-w-[200px]">
              Learn More →
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const TagFilter = ({ active, onChange }) => (
  <div
    role="group"
    aria-label="Filter projects by tag"
    className="mt-8 flex flex-wrap gap-2"
  >
    {[ALL, ...projectTags].map((tag) => {
      const selected = active === tag;
      const count =
        tag === ALL
          ? works.length
          : works.filter((w) => w.tags?.includes(tag)).length;
      return (
        <button
          key={tag}
          type="button"
          aria-pressed={selected}
          onClick={() => onChange(tag)}
          className={`text-sm font-medium rounded-full px-4 py-1.5 border transition-colors ${
            selected
              ? "bg-primary text-white border-primary"
              : "bg-white text-secondary border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          {tag} <span className="opacity-70">({count})</span>
        </button>
      );
    })}
  </div>
);

const Projects = () => {
  const [activeTag, setActiveTag] = useState(ALL);
  const visible =
    activeTag === ALL
      ? works
      : works.filter((w) => w.tags?.includes(activeTag));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I WORKED ON SO FAR...</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <TagFilter active={activeTag} onChange={setActiveTag} />

      <div className="mt-8 flex flex-col gap-8">
        {visible.map((work, index) => (
          // Keying on the tag too replays the entrance animation on each filter.
          <PostCard key={`${activeTag}-${work.link}`} index={index} {...work} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects);
