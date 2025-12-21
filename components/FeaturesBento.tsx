"use client";

import React from "react";

import { WobbleCard } from "./ui/wobble-card";
import { motion } from "motion/react";

export function FeaturesDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full p-4">
      {/* -------------------------------------------------------------------------- */
      /*  Feature 1: From 0 to 1 (MVP)                                               */
      /*  Theme: CLEAN WHITE (Uniform with others)                                   */
      /* -------------------------------------------------------------------------- */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 min-h-[400px] lg:min-h-[350px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.03)]"
        className="px-6 py-8 md:px-10 md:py-10"
      >
        <div className="max-w-md relative z-20">
          <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
            From 0 to 1: We Build Your MVP
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-neutral-600">
            We specialize in taking startups from concept to launch. Rapid
            iteration and finding product-market fit is in our DNA.
          </p>
        </div>
        <div className="absolute -right-4 lg:-right-[5%] -bottom-10 w-[300px] h-[300px]">
          <RocketGraphic />
        </div>
      </WobbleCard>

      {/* -------------------------------------------------------------------------- */
      /*  Feature 2: Super Sleek Design                                              */
      /*  Theme: CLEAN WHITE                                                         */
      /* -------------------------------------------------------------------------- */}
      <WobbleCard
        containerClassName="col-span-1 min-h-[350px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.03)]"
        className="px-6 py-8 md:px-8 md:py-10"
      >
        <div className="relative z-20">
          <h2 className="max-w-64 text-left text-balance text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
            Super Sleek Design
          </h2>
          <p className="mt-4 max-w-[20rem] text-left text-base text-neutral-600">
            Pixel-perfect UI that feels magical. We prioritize aesthetics and UX
            equally.
          </p>
        </div>
        <div className="absolute -right-6 -bottom-6 w-[220px] h-[220px]">
          <DesignGraphic />
        </div>
      </WobbleCard>

      {/* -------------------------------------------------------------------------- */
      /*  Feature 3: Production Grade                                                */
      /*  Theme: CLEAN WHITE                                                         */
      /* -------------------------------------------------------------------------- */}
      <WobbleCard
        containerClassName="col-span-1 min-h-[350px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.03)]"
        className="px-6 py-8 md:px-8 md:py-10"
      >
        <div className="relative z-20">
          <h2 className="max-w-64 text-left text-balance text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
            Production Grade
          </h2>
          <p className="mt-4 max-w-[20rem] text-left text-base text-neutral-600">
            Scalable architecture built to handle millions of requests without
            breaking a sweat.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 w-[200px] h-[200px]">
          <ScalabilityGraphic />
        </div>
      </WobbleCard>

      {/* -------------------------------------------------------------------------- */
      /*  Feature 4: SEO Optimisation                                                */
      /*  Theme: CLEAN WHITE                                                         */
      /* -------------------------------------------------------------------------- */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 min-h-[400px] lg:min-h-[350px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.03)]"
        className="px-6 py-8 md:px-10 md:py-10"
      >
        <div className="max-w-md relative z-20">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
            SEO Optimisation Built-In
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-neutral-600">
            We architect your site for visibility. High performance, semantic
            markup, and optimal web vitals ensure you rank at the top.
          </p>
        </div>
        <div className="absolute -right-10 -bottom-10 w-[350px] h-[350px] opacity-100 lg:right-0">
          <SeoGraphic />
        </div>
      </WobbleCard>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SVG Animation Components                        */
/* -------------------------------------------------------------------------- */

const RocketGraphic = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient: Brand Color to Slightly Darker Brand Color */}
        <linearGradient id="rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A493" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>

      {/* Exhaust Particles (Subtle Gray/Teal mix) */}
      {[...Array(4)].map((_, i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="150"
          r={3 + i}
          fill="rgba(0, 164, 147, 0.3)"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, 50 + i * 15],
            scale: [1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Rocket Body */}
      <motion.g
        animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main Body */}
        <path
          d="M100 40 C 100 40, 70 90, 70 130 Q 70 150, 100 150 Q 130 150, 130 130 C 130 90, 100 40, 100 40 Z"
          fill="url(#rocket-grad)"
          stroke="none"
        />
        {/* Window */}
        <circle
          cx="100"
          cy="90"
          r="12"
          fill="white"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
        />
        {/* Fins (Darker) */}
        <path d="M70 130 L 50 160 L 75 150 Z" fill="#115E59" />
        <path d="M130 130 L 150 160 L 125 150 Z" fill="#115E59" />
      </motion.g>
    </svg>
  );
};

const DesignGraphic = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract UI Cards */}
      <motion.rect
        x="50"
        y="50"
        width="90"
        height="110"
        rx="12"
        fill="#00A493" // Brand Color
        opacity="0.1"
        stroke="#00A493"
        strokeWidth="2"
        animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="80"
        y="80"
        width="90"
        height="110"
        rx="12"
        fill="#fcfcf9"
        stroke="#171717"
        strokeWidth="2"
        animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.circle
        cx="160"
        cy="60"
        r="8"
        fill="#00A493"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
};

const ScalabilityGraphic = () => {
  return (
    <svg
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
          fill={i === 2 ? "#00A493" : "transparent"}
          stroke="#00A493"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          style={{ opacity: 0.4 + i * 0.2 }}
        />
      ))}
    </svg>
  );
};

const SeoGraphic = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Browser Window - Light Mode */}
      <rect
        x="20"
        y="45"
        width="160"
        height="110"
        rx="6"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      <circle cx="35" cy="60" r="3" fill="#ef4444" />
      <circle cx="45" cy="60" r="3" fill="#f59e0b" />
      <circle cx="55" cy="60" r="3" fill="#22c55e" />

      {/* Graph Bars using Brand Color */}
      <motion.rect
        x="45"
        y="125"
        width="20"
        height="0"
        fill="#00A493"
        opacity="0.5"
        animate={{ height: 30, y: 95 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.rect
        x="75"
        y="125"
        width="20"
        height="0"
        fill="#00A493"
        opacity="0.7"
        animate={{ height: 50, y: 75 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.rect
        x="105"
        y="125"
        width="20"
        height="0"
        fill="#00A493"
        animate={{ height: 70, y: 55 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Search Icon - Dark Stroke for Light Background */}
      <motion.g
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 10, scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <circle
          cx="145"
          cy="95"
          r="24"
          stroke="#d1d5db"
          strokeWidth="3"
          fill="rgba(255,255,255,0.9)"
        />
        <line
          x1="162"
          y1="112"
          x2="175"
          y2="125"
          stroke="#9ca3af"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
};
