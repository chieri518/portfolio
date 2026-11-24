import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroTexts, companyLogos } from "../constants/home";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile, resume } from "../assets";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Name = ({ loading }) => {
  return (
    <section className="relative w-full mx-auto">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h1 className={`${styles.heroHeadText} text-secondary`}>
          Hi, I'm <span className="pink-text-gradient">Chieri</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2`}>
          <TypeAnimation
            sequence={heroTexts}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>
      </motion.div>
    </section>
  );
};

const linkClass =
  "animate-text bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent font-black";

const About = () => {
  return (
    <>
      <Name />
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <ul className="list-disc pl-5 space-y-3 marker:text-accent">
            <li>
              I&apos;ve called four countries home and gotten to know Silicon
              Valley through working at startups, an incubator, and big tech.
            </li>
            <li>
              I thrive on connecting dots (people, ideas, and resources) to make
              things happen. At Google, I loved being a bridge between the Japan
              and US teams.
            </li>
            <li>
              On weekends, I&apos;m busy bringing my childhood imagination to
              life, like{" "}
              <Link to="/bmo" className={linkClass}>
                BMO
              </Link>
              , the talking robot I wanted as a kid.
            </li>
          </ul>
          <p className="mt-6">
            Read{" "}
            <Link to="/story" className={linkClass}>
              my story
            </Link>
            , explore{" "}
            <Link to="/projects" className={linkClass}>
              my projects
            </Link>
            , or{" "}
            <a href="mailto:chieriabe518@gmail.com" className={linkClass}>
              say hello
            </a>
            . 🌍
          </p>
        </motion.div>
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className="w-[260px] h-[260px] m-auto max-[1000px]:my-10"
        >
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-[260px] green-pink-gradient p-[1px] rounded-[20px]"
          >
            <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 mb-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Where I&apos;ve worked
        </p>
        <Link
          to="/experience"
          aria-label="Where I've worked: see my experience"
          className="group mt-4 flex flex-wrap items-center gap-x-8 gap-y-5"
        >
          {companyLogos.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              title={company.name}
              loading="lazy"
              style={
                company.scale
                  ? {
                      transform: `scale(${company.scale})`,
                      // A transform doesn't take up space; pad it to match.
                      marginInline: (company.scale - 1) * 20,
                    }
                  : undefined
              }
              className={`${
                company.height || "h-10"
              } w-auto max-w-[110px] object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100`}
            />
          ))}
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-black text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <a href={resume} target="_blank" rel="noreferrer" className="w-fit">
          <div className="btn w-fit bg-tertiary text-primary px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, undefined, { hero: true });
