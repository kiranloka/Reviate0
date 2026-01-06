"use client";

import React, { useRef, useState } from "react";
import { Check, Info, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// --- Types ---
interface FeatureItem {
  text: string;
  tooltip?: string;
}

interface PricingCardProps {
  tier: string;
  price: string;
  inr: string;
  weeks: string;
  // Prop updated to allow simple strings OR detailed objects
  features: (string | FeatureItem)[];
  highlight?: boolean;
  onGetStarted?: () => void;
}

// --- Sub-Component: Magnetic Button ---
const MagneticButton = ({
  children,
  highlight,
  onClick,
}: {
  children: React.ReactNode;
  highlight?: boolean;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth return to center
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // Calculate distance from center
    const xOffset = e.clientX - (left + width / 2);
    const yOffset = e.clientY - (top + height / 2);
    // Move the button slightly (divide by factor to limit movement range)
    x.set(xOffset * 0.35);
    y.set(yOffset * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileTap={{ scale: 0.95 }}
      aria-label="Get Started with this plan"
      className={`relative w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 group overflow-hidden ${
        highlight
          ? "bg-[#00a493] text-white hover:bg-[#008c7e] shadow-lg shadow-[#00a493]/25"
          : "bg-slate-900 text-white hover:bg-black shadow-lg"
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      {/* Subtle shine effect on hover */}
      {highlight && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </motion.button>
  );
};

// --- Sub-Component: Feature Item with Tooltip ---
const FeatureRow = ({
  feature,
  highlight,
}: {
  feature: string | FeatureItem;
  highlight?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Normalize data
  const text = typeof feature === "string" ? feature : feature.text;
  const tooltip = typeof feature === "string" ? undefined : feature.tooltip;

  return (
    <li className="relative flex items-start gap-3 text-[15px] font-medium leading-tight">
      <div
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
          highlight
            ? "bg-[#00a493]/10 text-[#00a493]"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        <Check className="w-3 h-3" strokeWidth={3} />
      </div>

      <div className="flex-1 flex items-center gap-2 flex-wrap">
        <span className="text-slate-700">{text}</span>

        {tooltip && (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Info
              className="w-4 h-4 text-slate-400 hover:text-[#00a493] cursor-help transition-colors"
              aria-label="More info"
            />
            {/* Tooltip Popup */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-50 pointer-events-none"
              >
                {tooltip}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

// --- Main Component ---
export const PricingCard = ({
  tier,
  price,
  inr,
  weeks,
  features,
  highlight,
  onGetStarted,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={highlight ? { y: -10 } : { y: -5 }}
      transition={{ duration: 0.4 }}
      className={`relative p-8 rounded-[2rem] border flex flex-col h-full transition-all duration-300 group ${
        highlight
          ? "border-[#00a493] bg-white shadow-2xl shadow-[#00a493]/15 z-10 scale-105"
          : "border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300"
      }`}
    >
      {/* Animated Badge */}
      {highlight && (
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-5 left-1/2 -translate-x-1/2"
        >
          <div className="bg-[#00a493] text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#00a493]/30 flex items-center gap-1">
            <span>Most Popular</span>
            {/* Pulsing dot */}
            <span className="flex h-2 w-2 relative ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h3
          className={`text-sm font-bold uppercase tracking-widest mb-3 ${
            highlight ? "text-[#00a493]" : "text-slate-600"
          }`}
        >
          {tier}
        </h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
            {price}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm font-medium">
          <span className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-slate-700">
            {inr}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-[#00a493] font-bold flex items-center gap-1">
            {weeks} Delivery
          </span>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-slate-100 mb-8" />

      {/* Features List */}
      <ul className="space-y-5 mb-10 flex-grow">
        {features.map((f, i) => (
          <FeatureRow key={i} feature={f} highlight={highlight} />
        ))}
      </ul>

      {/* Magnetic CTA */}
      <div className="mt-auto">
        <MagneticButton highlight={highlight} onClick={onGetStarted}>
          Get Started
        </MagneticButton>
      </div>
    </motion.div>
  );
};
