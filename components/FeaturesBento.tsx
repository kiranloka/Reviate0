"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

// Theme constants for the Light Mode
const theme = {
  primary: "#00A493", // Persian Green (Brand)
  lightBg: "#FFFFFF", // Clean White
  cardBg: "#F9FAFB", // Slate 50 (Very light gray for cards)
  textMain: "#171717", // Neutral 900
  textSub: "#525252", // Neutral 600
  borderSubtle: "#E5E5E5", // Light gray border
};

export function FeaturesDemo() {
  // Reusable classes for the Light Mode cards
  const lightCardClasses =
    "bg-gray-50/50 hover:bg-white border border-gray-200 hover:border-[#00A493]/50 shadow-[0px_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0px_10px_30px_rgba(0,164,147,0.1)] group relative overflow-hidden transition-all duration-300";

  // Animation variants with explicit TypeScript types
  const cardContentVariants: Variants = {
    rest: { y: 0 },
    hover: { y: -6, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const learnMoreVariants: Variants = {
    rest: { opacity: 0, x: -10 },
    hover: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    // Main container background set to White
    <div className="w-full p-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* -------------------------------------------------------------------------- */
        /* Feature 1: From 0 to 1 (MVP)                                                */
        /* -------------------------------------------------------------------------- */}
        <WobbleCard
          containerClassName={`col-span-1 lg:col-span-2 min-h-[400px] lg:min-h-[350px] ${lightCardClasses}`}
          className="px-6 py-8 md:px-10 md:py-10 relative"
        >
          <motion.div initial="rest" whileHover="hover" className="h-full">
            <motion.div
              variants={cardContentVariants}
              className="max-w-md relative z-20 flex flex-col h-full justify-center"
            >
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
                From 0 to 1: We Build Your MVP
              </h2>
              <p className="mt-4 text-left text-base md:text-lg font-medium text-neutral-600">
                We specialize in taking startups from concept to launch. Rapid
                iteration and finding product-market fit is in our DNA.
              </p>

              {/* The reveal link */}
              <motion.div
                variants={learnMoreVariants}
                className="flex items-center gap-2 mt-6 text-[#00A493] font-bold uppercase tracking-wider text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Graphic Container */}
            <div className="absolute -right-4 lg:-right-[5%] -bottom-10 w-[300px] h-[300px] pointer-events-none">
              <RocketGraphic />
            </div>
          </motion.div>
        </WobbleCard>

        {/* -------------------------------------------------------------------------- */
        /* Feature 2: Super Sleek Design                                               */
        /* -------------------------------------------------------------------------- */}
        <WobbleCard
          containerClassName={`col-span-1 min-h-[350px] ${lightCardClasses}`}
          className="px-6 py-8 md:px-8 md:py-10"
        >
          <motion.div initial="rest" whileHover="hover" className="h-full">
            <motion.div
              variants={cardContentVariants}
              className="relative z-20 flex flex-col h-full justify-center"
            >
              <h2 className="max-w-64 text-left text-balance text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                Super Sleek Design
              </h2>
              <p className="mt-4 max-w-[20rem] text-left text-base font-medium text-neutral-600">
                Pixel-perfect UI that feels magical. We prioritize aesthetics
                and UX equally.
              </p>
              <motion.div
                variants={learnMoreVariants}
                className="flex items-center gap-2 mt-6 text-[#00A493] font-bold uppercase tracking-wider text-sm"
              >
                See Portfolio <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
            <div className="absolute -right-6 -bottom-6 w-[220px] h-[220px] pointer-events-none">
              <DesignGraphic />
            </div>
          </motion.div>
        </WobbleCard>

        {/* -------------------------------------------------------------------------- */
        /* Feature 3: Production Grade                                                 */
        /* -------------------------------------------------------------------------- */}
        <WobbleCard
          containerClassName={`col-span-1 min-h-[350px] ${lightCardClasses}`}
          className="px-6 py-8 md:px-8 md:py-10"
        >
          <motion.div initial="rest" whileHover="hover" className="h-full">
            <motion.div
              variants={cardContentVariants}
              className="relative z-20 flex flex-col h-full justify-center"
            >
              <h2 className="max-w-64 text-left text-balance text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                Production Grade Architecture
              </h2>
              <p className="mt-4 max-w-[20rem] text-left text-base font-medium text-neutral-600">
                Scalable systems built to handle millions of requests without
                breaking a sweat.
              </p>
              <motion.div
                variants={learnMoreVariants}
                className="flex items-center gap-2 mt-6 text-[#00A493] font-bold uppercase tracking-wider text-sm"
              >
                View Stack <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
            <div className="absolute -right-4 -bottom-4 w-[200px] h-[200px] pointer-events-none">
              <ScalabilityGraphic />
            </div>
          </motion.div>
        </WobbleCard>

        {/* -------------------------------------------------------------------------- */
        /* Feature 4: SEO Optimisation                                                 */
        /* -------------------------------------------------------------------------- */}
        <WobbleCard
          containerClassName={`col-span-1 lg:col-span-2 min-h-[400px] lg:min-h-[350px] ${lightCardClasses}`}
          className="px-6 py-8 md:px-10 md:py-10 relative"
        >
          <motion.div initial="rest" whileHover="hover" className="h-full">
            <motion.div
              variants={cardContentVariants}
              className="max-w-md relative z-20 flex flex-col h-full justify-center"
            >
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
                Technical SEO Built-In
              </h2>
              <p className="mt-4 text-left text-base md:text-lg font-medium text-neutral-600">
                We architect for visibility. High performance, semantic markup,
                and optimal web vitals ensure you rank at the top.
              </p>
              <motion.div
                variants={learnMoreVariants}
                className="flex items-center gap-2 mt-6 text-[#00A493] font-bold uppercase tracking-wider text-sm"
              >
                Audit Process <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
            <div className="absolute -right-10 -bottom-10 w-[350px] h-[350px] opacity-100 lg:right-0 pointer-events-none">
              <SeoGraphic />
            </div>
          </motion.div>
        </WobbleCard>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* REFACTORED SVG ANIMATION COMPONENTS (Light Mode)         */
/* -------------------------------------------------------------------------- */

// Helper for blueprint stroke style (Dark Gray for Light Mode)
const blueprintStroke = {
  stroke: "#94a3b8", // Slate 400
  strokeWidth: "1.5",
  strokeOpacity: "0.8",
  fill: "transparent",
};

const RocketGraphic = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(4)].map((_, i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="150"
          r={3 + i}
          fill={theme.primary}
          variants={{
            rest: { opacity: 0, y: 0 },
            hover: {
              opacity: [0, 0.6, 0],
              y: [0, 40 + i * 10],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1,
              },
            },
          }}
        />
      ))}

      <motion.g
        variants={{
          rest: { y: 0, rotate: 0 },
          hover: {
            y: [-1, 1, -1],
            rotate: [-0.5, 0.5, -0.5],
            transition: { duration: 0.2, repeat: Infinity, ease: "linear" },
          },
        }}
      >
        {/* Main Body */}
        <motion.path
          d="M100 40 C 100 40, 70 90, 70 130 Q 70 150, 100 150 Q 130 150, 130 130 C 130 90, 100 40, 100 40 Z"
          variants={{
            rest: { ...blueprintStroke },
            hover: {
              fill: theme.primary,
              stroke: theme.primary,
              strokeOpacity: 1,
              fillOpacity: 0.1, // Subtle tint fill
            },
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.circle
          cx="100"
          cy="90"
          r="12"
          variants={{
            rest: { ...blueprintStroke },
            hover: { stroke: theme.primary },
          }}
        />
        <motion.path
          d="M70 130 L 50 160 L 75 150 Z"
          variants={{
            rest: { ...blueprintStroke },
            hover: { stroke: theme.primary, fill: "transparent" },
          }}
        />
        <motion.path
          d="M130 130 L 150 160 L 125 150 Z"
          variants={{
            rest: { ...blueprintStroke },
            hover: { stroke: theme.primary, fill: "transparent" },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};

const DesignGraphic = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="50"
        y="50"
        width="90"
        height="110"
        rx="12"
        {...blueprintStroke}
        strokeOpacity="0.3"
      />
      <motion.rect
        x="80"
        y="80"
        width="90"
        height="110"
        rx="12"
        variants={{
          rest: { ...blueprintStroke, y: 0, rotate: 0 },
          hover: {
            stroke: theme.primary,
            fill: theme.primary,
            fillOpacity: 0.05,
            y: -10,
            rotate: -2,
            transition: { duration: 0.5, ease: "backOut" },
          },
        }}
      />
      <motion.circle
        cx="160"
        cy="60"
        r="6"
        fill={theme.primary}
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          },
        }}
      />
    </motion.svg>
  );
};

const ScalabilityGraphic = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M40 ${140 - i * 35} L 100 ${170 - i * 35} L 160 ${
            140 - i * 35
          } L 100 ${110 - i * 35} Z`}
          variants={{
            rest: {
              fill: "transparent",
              stroke: "#94a3b8",
              strokeOpacity: 0.5,
              y: 0,
            },
            hover: {
              stroke: theme.primary,
              strokeOpacity: 1,
              fill: theme.primary,
              fillOpacity: 0.05 + i * 0.05,
              y: -5 * i,
              transition: { duration: 0.3, delay: i * 0.1 },
            },
          }}
          strokeWidth="1.5"
        />
      ))}
    </motion.svg>
  );
};

const SeoGraphic = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="45"
        width="160"
        height="110"
        rx="6"
        fill="transparent"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      <circle cx="35" cy="60" r="3" fill="#cbd5e1" />
      <circle cx="45" cy="60" r="3" fill="#cbd5e1" />
      <circle cx="55" cy="60" r="3" fill="#cbd5e1" />

      {[0, 1, 2].map((i) => {
        const heights = [30, 50, 70];
        const yPos = [95, 75, 55];
        return (
          <motion.rect
            key={i}
            x={45 + i * 30}
            y={125}
            width="20"
            fill={theme.primary}
            variants={{
              rest: { height: 2, y: 123, opacity: 0.2 },
              hover: {
                height: heights[i],
                y: yPos[i],
                opacity: 0.8,
                transition: { duration: 0.4, delay: i * 0.1, ease: "backOut" },
              },
            }}
          />
        );
      })}

      <motion.g
        variants={{
          rest: { opacity: 0, scale: 0.8, rotate: -10, x: -20, y: 20 },
          hover: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
            transition: { type: "spring", delay: 0.3 },
          },
        }}
      >
        <circle
          cx="145"
          cy="95"
          r="24"
          stroke="#94a3b8"
          strokeWidth="3"
          fill="rgba(255, 255, 255, 0.9)"
        />
        <line
          x1="162"
          y1="112"
          x2="175"
          y2="125"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.path
          d="M135 95 L 142 102 L 155 85"
          fill="transparent"
          stroke={theme.primary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            rest: { pathLength: 0 },
            hover: { pathLength: 1, transition: { delay: 0.5, duration: 0.3 } },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
