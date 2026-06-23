import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { works } from "../constants/projects";
import { fadeIn, textVariant } from "../utils/motion";

const PostCard = ({ index, name, description, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative bg-tertiary p-4 md:p-5 rounded-2xl flex flex-col md:flex-row w-full my-5 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full md:w-1/3 h-auto relative">
            <img
              src={image}
              alt={name}
              className="w-full h-48 md:h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-5 flex flex-col justify-between relative">
            <div>
              <h3 className={styles.cardTitle}>
                {name}
              </h3>
              <p className="mt-2 text-secondary text-[15px]">{description}</p>
            </div>
            <button
              onClick={() => window.open(link, "_blank")}
              className="mt-2 mb-2 bg-primary text-white text-sm md:text-base py-2 rounded-full hover:bg-secondary transition-colors max-w-[200px]"
            >
              Learn More →
            </button>
          </div>
        </div>{" "}
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I WORKED ON SO FAR...</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="p-3 md:p-5 gap-5 md:gap-7 flex flex-col mt-6">
        {works.map((highlight, index) => (
          <PostCard key={`post-${index}`} index={index} {...highlight} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects);
