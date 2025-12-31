"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

interface PricingCardProps {
  tier: string;
  price: string;
  inr: string;
  weeks: string;
  features: string[];
  highlight?: boolean;
}

export const PricingCard = ({
  tier,
  price,
  inr,
  weeks,
  features,
  highlight,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className={`relative p-8 rounded-[2rem] border flex flex-col h-full transition-all duration-300 ${
        highlight
          ? "border-[#00a493] bg-white shadow-2xl shadow-[#00a493]/10 z-10 scale-105"
          : "border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00a493] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-sm font-bold uppercase tracking-widest mb-3 ${
            highlight ? "text-[#00a493]" : "text-slate-500"
          }`}
        >
          {tier}
        </h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
            {price}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
          <span className="bg-slate-100 px-2 py-1 rounded-md text-slate-600">
            {inr}
          </span>
          <span>•</span>
          <span className="text-[#00a493] font-semibold">{weeks}</span>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-slate-100 mb-8" />

      <ul className="space-y-5 mb-8 flex-grow">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[15px] text-slate-600 font-medium leading-tight"
          >
            <div
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                highlight
                  ? "bg-[#00a493]/10 text-[#00a493]"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${
          highlight
            ? "bg-[#00a493] text-white hover:bg-[#008c7e] shadow-lg shadow-[#00a493]/25"
            : "bg-slate-900 text-white hover:bg-black"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};
