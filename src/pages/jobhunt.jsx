import React from "react";
import { styles } from "../styles";

const JobHunt = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.padding} max-w-4xl mx-auto text-gray-800`}>
        <h1 className={styles.sectionHeadText}>
          Navigating the Tech Job Market in 2025: A Five-Decade Perspective
        </h1>
        <p className="italic mb-4 text-secondary text-[14px] sm:text-[15px]">
          By Chieri Abe, Menlo College 2025 with Frances Mann-Craik, Menlo
          College 1976
        </p>

        <h2
          className={`${styles.subHeadText} mt-8 mb-3`}
          id="introduction"
        >
          Introduction: Resilience in a Shifting Job Market
        </h2>
        <p className={`mb-4 ${styles.bodyText}`}>
          The tech industry is no stranger to cycles of boom and bust...
        </p>

        <h2 className={`${styles.cardTitle} mt-6 mb-2`}>
          Table of Contents
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-secondary text-[15px] leading-[24px]">
          <li>
            <a href="#part1" className="text-blue-600 hover:underline">
              Part 1: Lessons from the Job Market
            </a>
          </li>
          <li>
            <a href="#network" className="text-blue-600 hover:underline">
              1. Network with Everyone
            </a>
          </li>
          <li>
            <a href="#adaptable" className="text-blue-600 hover:underline">
              2. Stay Adaptable, and Don’t Be Afraid to Take a Detour
            </a>
          </li>
          <li>
            <a href="#learning" className="text-blue-600 hover:underline">
              3. Keep Learning Lean Into Hot Trends
            </a>
          </li>
          <li>
            <a href="#brand" className="text-blue-600 hover:underline">
              4. Brand Yourself – Stand Out from Other Job Seekers
            </a>
          </li>
          <li>
            <a href="#summary" className="text-blue-600 hover:underline">
              Summary: Turning Challenges into Opportunities
            </a>
          </li>
          <li>
            <a href="#part2" className="text-blue-600 hover:underline">
              Part 2: Job Market Cycles: Learning from History
            </a>
          </li>
        </ul>

        <h2
          className={`${styles.subHeadText} mt-8 mb-3`}
          id="part1"
        >
          Part 1: Lessons from the Job Market
        </h2>

        <h3
          className={`${styles.cardTitle} mt-6 mb-1`}
          id="network"
        >
          1. Network with Everyone
        </h3>
        <p className={`mb-4 ${styles.bodyText}`}>
          Back in the ‘70s, Frances interviewed a Harvard MBA student...
        </p>

        <h3
          className={`${styles.cardTitle} mt-6 mb-1`}
          id="adaptable"
        >
          2. Stay Adaptable, and Don’t Be Afraid to Take a Detour
        </h3>
        <p className={`mb-4 ${styles.bodyText}`}>
          One of the reasons the job market is tight right now...
        </p>

        <h3
          className={`${styles.cardTitle} mt-6 mb-1`}
          id="learning"
        >
          3. Keep Learning Lean Into Hot Trends
        </h3>
        <p className={`mb-4 ${styles.bodyText}`}>
          (You can insert the content here)
        </p>

        <h3
          className={`${styles.cardTitle} mt-6 mb-1`}
          id="brand"
        >
          4. Brand Yourself – Stand Out from Other Job Seekers
        </h3>
        <p className={`mb-4 ${styles.bodyText}`}>
          (You can insert the content here)
        </p>

        <h3
          className={`${styles.cardTitle} mt-6 mb-1`}
          id="summary"
        >
          Summary: Turning Challenges into Opportunities
        </h3>
        <p className={`mb-4 ${styles.bodyText}`}>
          (You can insert the content here)
        </p>

        <h2
          className={`${styles.subHeadText} mt-8 mb-3`}
          id="part2"
        >
          Part 2: Job Market Cycles: Learning from History
        </h2>
        <p className={`mb-4 ${styles.bodyText}`}>
          (You can insert the content here)
        </p>
      </div>
    </section>
  );
};

export default JobHunt;
