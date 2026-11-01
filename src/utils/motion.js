// Framer Motion variants. Each one animates from "hidden" to "show".

// Drops text in from above.
export const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

// Slides in from the given direction ("left", "right", "up" or "down").
const offsets = {
  left: { x: 100, y: 0 },
  right: { x: -100, y: 0 },
  up: { x: 0, y: 100 },
  down: { x: 0, y: -100 },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: { ...(offsets[direction] ?? { x: 0, y: 0 }), opacity: 0 },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

// Lets a parent animate its children one after another.
export const staggerContainer = (staggerChildren, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
