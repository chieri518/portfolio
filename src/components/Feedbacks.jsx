import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { references } from "../constants/home";

const FeedbackCard = ({
  index,
  reference,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-secondary font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{reference}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const settings = {
    accessibility: true,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-12 bg-white rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say...</p>
          <h2 className={styles.sectionHeadText}>References</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 gap-7`}>
        <Slider {...settings}>
          {references.map((reference, index) => (
            <FeedbackCard key={reference.name} index={index} {...reference} />
          ))}
        </Slider>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="btn px-6 py-2 overflow-hidden relative cursor-pointer w-fit mx-auto"
      >
        <a
          href="https://www.linkedin.com/in/chieriabe/details/recommendations/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-primary text-black px-6 py-2 font-medium rounded-md">
            Read More
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks);
