import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { styles } from "../styles";
import { experiences, educations, awards } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TimelineCard = ({
  date,
  icon,
  iconAlt,
  iconSize = "65%",
  title,
  subtitle,
  points,
  footer,
}) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#eafbff", color: "#000000" }}
    contentArrowStyle={{ borderRight: "7px solid #77ddf9" }}
    date={date}
    iconStyle={{ background: "#E6DEDD" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={icon}
          alt={iconAlt}
          className="object-contain"
          style={{ width: iconSize, height: iconSize }}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-[24px] font-bold">{title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {subtitle}
      </p>
    </div>
    <ul className="mt-5 list-disc c-5 space-y-2">
      {points.map((point, index) => (
        <li
          key={`point-${index}`}
          className="text-black text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    {footer}
  </VerticalTimelineElement>
);

const ExperienceCard = ({ experience }) => {
  const detailRoute =
    experience.company_name === "NEC X"
      ? "/necx"
      : experience.company_name === "chetz"
        ? "/chetz"
        : null;

  return (
    <TimelineCard
      date={experience.date}
      icon={experience.icon}
      iconAlt={experience.company_name}
      title={experience.title}
      subtitle={experience.company_name}
      points={experience.points}
      footer={
        detailRoute && (
          <div className="mt-3">
            <Link
              to={detailRoute}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary hover:underline transition-colors duration-200"
            >
              <span>Read more</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )
      }
    />
  );
};

const EducationCard = ({ education }) => (
  <TimelineCard
    date={education.date}
    icon={education.icon}
    iconAlt={education.school}
    iconSize="60%"
    title={education.degree}
    subtitle={education.school}
    points={education.points}
  />
);

const AwardCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transform transition-transform hover:scale-105">
        <div className="relative h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-center items-center inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-0 hover:opacity-100">
            <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-[14px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Experience = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 3);

  return (
    <section className={`${styles.padding} w-full mx-auto mt-10`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far...</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {visibleExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
        {experiences.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllExperiences((prev) => !prev)}
              className="px-5 py-2 rounded-full border border-secondary/60 text-sm font-medium text-primary bg-white/80 hover:bg-secondary hover:text-white transition-colors duration-200 shadow-sm"
            >
              {showAllExperiences
                ? "Show less experience"
                : "Show full experience"}
            </button>
          </div>
        )}
      </div>
      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Awards</h2>
      </motion.div>
      <div className="mt-10">
        <Slider {...sliderSettings}>
          {awards.map((award, index) => (
            <AwardCard key={`award-${index}`} index={index} {...award} />
          ))}
        </Slider>
      </div>
      <div className="h-20" />
    </section>
  );
};

export default Experience;
