import { motion } from "framer-motion";
import { styles } from "../styles";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.padding} min-h-screen flex flex-col items-center justify-center text-center`}
    >
      <h1 className={`${styles.sectionHeadText} text-primary`}>404</h1>
      <h2 className="text-xl sm:text-2xl mt-4 mb-2 text-black">
        Page Not Found 😢
      </h2>
      <p className="text-secondary mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-primary text-black px-6 py-2 rounded-md font-semibold hover:scale-105 transition-transform"
      >
        Go Home
      </a>
    </motion.div>
  );
};

export default NotFound;
