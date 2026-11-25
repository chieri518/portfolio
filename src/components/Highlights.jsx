import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { highlights } from "../constants/home";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, redirect_link }) => {
  return (
    // Cards in a row stretch to the tallest one, and every image is cropped
    // to the same 4:3 shape, so the row lines up.
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex sm:w-[360px] w-full"
    >
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md w-full flex flex-col transform transition-transform hover:scale-105">
        <a href={redirect_link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={name}
            className="w-full aspect-[4/3] object-cover"
          />

          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </a>
        <div className="mt-auto pt-3">
          <a
            href={redirect_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition duration-200 hover:text-secondary"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Highlights = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I&apos;m building</p>
        <h2 className={styles.sectionHeadText}>Highlights</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {highlights.map((highlight, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...highlight} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Highlights, undefined, { stacked: true });
