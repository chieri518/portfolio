import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";

// A burst of 🍒 that flies out from a point on screen, arcs, and falls away.
//
//   const [burst, cherries] = useCherryBurst();
//   <button onClick={burst}>…</button>
//   {cherries}
//
// `burst` takes a click event (or {clientX, clientY}). Keyboard clicks have no
// pointer position, so they burst from the centre of the clicked element.

const COUNT = 14;
const LIFETIME_MS = 1400;

const rand = (min, max) => min + Math.random() * (max - min);

const makeCherries = (count, still) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + rand(-0.3, 0.3);
    const distance = still ? 0 : rand(70, 170);
    return {
      dx: Math.cos(angle) * distance,
      // Bias upward so the burst "pops" before gravity pulls it down.
      dy: Math.sin(angle) * distance - (still ? 0 : 40),
      fall: still ? 0 : rand(90, 160),
      rotate: still ? 0 : rand(-200, 200),
      size: rand(20, 34),
      delay: rand(0, 0.08),
    };
  });

export function useCherryBurst() {
  const [bursts, setBursts] = useState([]);
  const reduceMotion = useReducedMotion();
  const nextId = useRef(0);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const burst = useCallback(
    (event) => {
      let x = event?.clientX;
      let y = event?.clientY;
      if (!x && !y && event?.currentTarget?.getBoundingClientRect) {
        const r = event.currentTarget.getBoundingClientRect();
        x = r.left + r.width / 2;
        y = r.top + r.height / 2;
      }
      const id = nextId.current++;
      const cherries = makeCherries(reduceMotion ? 5 : COUNT, reduceMotion);
      setBursts((all) => [...all, { id, x, y, cherries }]);
      timers.current.push(
        setTimeout(
          () => setBursts((all) => all.filter((b) => b.id !== id)),
          LIFETIME_MS,
        ),
      );
    },
    [reduceMotion],
  );

  const layer =
    bursts.length > 0
      ? createPortal(
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          >
            {bursts.map((b) =>
              b.cherries.map((c, i) => (
                <motion.span
                  key={`${b.id}-${i}`}
                  className="absolute select-none leading-none"
                  style={{
                    left: b.x - c.size / 2,
                    top: b.y - c.size / 2,
                    fontSize: c.size,
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                  animate={{
                    x: [0, c.dx * 0.8, c.dx],
                    y: [0, c.dy, c.dy + c.fall],
                    scale: [0, 1.25, 1],
                    opacity: [1, 1, 0],
                    rotate: [0, c.rotate * 0.5, c.rotate],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: c.delay,
                    ease: "easeOut",
                    times: [0, 0.4, 1],
                  }}
                >
                  🍒
                </motion.span>
              )),
            )}
          </div>,
          document.body,
        )
      : null;

  return [burst, layer];
}
