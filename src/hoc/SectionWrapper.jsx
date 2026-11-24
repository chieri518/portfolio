import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Wraps a page (or a home-page section) in the standard box: the site-wide
// side edge, max width and top/bottom padding (see the rules in styles.js).
// Full-bleed pages pass { fullBleed: true } and lay out their own bands with
// `styles.container`, so coloured backgrounds can run edge to edge.
// The home hero passes { hero: true } for a shorter top, so the first screen
// is balanced between the navbar and the Resume button. The sections stacked
// below it pass { stacked: true } so the gaps between them follow rule 3.
const SectionWrapper = (
  Component,
  idName,
  { fullBleed = false, hero = false, stacked = false } = {},
) =>
  function HOC() {
    const padding = hero
      ? styles.heroPadding
      : stacked
      ? styles.stackedPadding
      : styles.padding;
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className={
          fullBleed
            ? "relative z-10 pb-2 sm:pb-4"
            : `${padding} max-w-7xl mx-auto relative z-10`
        }
      >
        {idName && <span className="hash-span" id={idName} />}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
