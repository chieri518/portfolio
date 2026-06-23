import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { linkedinhighlight } from "../constants/home";
import { fadeIn, textVariant } from "../utils/motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const LinkedInCard = ({ index = [], embed = "" }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-white p-5 rounded-2xl sm:w-[500px] w-full"
  >
    <div
      className="w-full h-[400px] overflow-hidden rounded-xl"
      dangerouslySetInnerHTML={{ __html: embed }}
    />
  </motion.div>
);

const PrevArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={`arrow ${className}`}>
    <AiOutlineArrowLeft />
  </div>
);

const NextArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={`arrow ${className}`}>
    <AiOutlineArrowRight />
  </div>
);

const LinkedIn = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="mt-10 bg-tertiary rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Reflections & Milestones</p>
          <h2 className={styles.sectionHeadText}>LinkedIn Highlights</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <Slider {...settings}>
          {linkedinhighlight.map((highlight, index) => (
            <LinkedInCard key={index} index={index} {...highlight} />
          ))}
        </Slider>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="btn px-6 py-2 overflow-hidden relative cursor-pointer w-fit mx-auto mt-10"
        >
          <a
            href="https://www.linkedin.com/in/chieriabe/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-primary text-black px-6 py-2 font-medium rounded-md">
              Let's Connect on LinkedIn!
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(LinkedIn);
