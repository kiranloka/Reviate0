"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";

// --- Main Component ---

export function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax hook for background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to vertical movement for the background text
  // This moves the text from y: 100 to y: -100 as you scroll past
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // Stagger configurations for text reveal
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textReveal = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00a493] selection:text-white"
    >
      {/* 1. Visual Polish: Noise Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- BACKGROUND OVERLAY TEXT (Reviate) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: bgTextY }}
          className="font-black text-[15vw] md:text-[20vw] leading-none text-white opacity-[0.05] select-none tracking-tighter"
        >
          Reviate
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a493] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 flex flex-col justify-center min-h-screen">
        {/* Header Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-12"
        >
          <div className="h-[1px] w-12 bg-[#00a493]"></div>
          <h4 className="text-[#00a493] font-bold tracking-[0.2em] uppercase text-xs">
            About Reviate
          </h4>
        </motion.div>

        {/* 2. Scroll & Text Animations: The 'Reveal' */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mb-24"
        >
          <h2 className="font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
            <motion.span variants={textReveal} className="block">
              We help businesses
            </motion.span>
            <motion.span variants={textReveal} className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a493] via-teal-400 to-[#00a493] bg-[length:200%_auto] animate-gradient">
                Kick Start
              </span>{" "}
              their
            </motion.span>
            <motion.span variants={textReveal} className="block text-white/90">
              journey to market.
            </motion.span>
          </h2>
        </motion.div>

        {/* 3. Micro-Interactions: Magnetic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-16">
          <MagneticCard
            number="01"
            title="Discovery"
            desc="We analyze your target market and identify unique opportunities for growth before writing a single line of code."
            delay={0}
          />
          <MagneticCard
            number="02"
            title="Strategy"
            desc="Custom go-to-market strategies tailored to your specific business goals, ensuring every move counts."
            delay={0.1}
          />
          <MagneticCard
            number="03"
            title="Execution"
            desc="We help you launch with confidence and scale efficiently, turning early traction into long-term success."
            delay={0.2}
          />
        </div>
      </div>
    </div>
  );
}

// --- Sub-Component: Magnetic 3D Card ---

interface CardProps {
  number: string;
  title: string;
  desc: string;
  delay: number;
}

const MagneticCard = ({ number, title, desc, delay }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (percentage -0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, type: "spring" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full perspective-1000"
    >
      {/* Card Container */}
      <div className="relative h-full p-8 rounded-xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-colors duration-500 group-hover:border-[#00a493]/30">
        {/* Spotlight Effect (Radial Gradient following mouse) */}
        <SpotlightOverlay />

        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          {/* Number */}
          <div className="flex justify-between items-start mb-12">
            <span className="text-4xl font-bold text-white/10 font-mono transition-colors duration-300 group-hover:text-[#00a493]/20">
              {number}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00a493] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00a493]" />
          </div>

          {/* Title with Slide Interaction */}
          <h5 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-[#00a493] group-hover:translate-x-2">
            {title}
          </h5>

          {/* Description */}
          <p className="text-white/40 leading-relaxed text-sm transition-colors duration-300 group-hover:text-white/70">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sub-Component: Spotlight Overlay ---

const SpotlightOverlay = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="absolute inset-0 z-0 group"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 164, 147, 0.1),
              transparent 80%
            )
          `,
        }}
      />
    </motion.div>
  );
};
