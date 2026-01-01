"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, CreditCard, Database, Lock } from "lucide-react";

export function WhyReviate() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-24 md:py-32 border-b border-slate-200">
      {/* 1. Technical Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.6]"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blueprint Markers (Corners) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00A493] z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#00A493] z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#00A493] z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#00A493] z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* 2. Engineering Text Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Technical Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#00A493]" />
              <span className="font-mono text-xs font-bold text-[#00A493] tracking-widest uppercase">
                System Architecture v2.0
              </span>
              <span className="h-px w-20 bg-[#00A493]/30" />
            </div>

            <h2 className="text-slate-900 font-bold leading-tight text-5xl md:text-6xl mb-8 tracking-tighter">
              Engineered for <br />
              <span className="relative inline-block text-[#00A493]">
                Scale & Stability.
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-[#00A493] opacity-40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-medium">
              We don't just write code; we architect systems. Our methodology
              prioritizes type safety, database integrity, and scalable
              infrastructure from day one.
            </p>

            <div className="space-y-6">
              {[
                "Production-Ready Architecture",
                "Type-Safe Development",
                "100% IP Ownership",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <AnimatedCheckIcon delay={i * 0.2} />
                  <span className="text-slate-800 font-bold text-base group-hover:text-[#00A493] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. BUSINESS VISUAL (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#00A493] opacity-20 blur-[80px] rounded-full pointer-events-none" />

            {/* Main "Venture Card" */}
            <div className="relative w-full max-w-md bg-[#0f172a] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Card Header: Live Status */}
              <div className="px-6 py-4 border-b border-slate-700/50 flex items-center justify-between bg-[#1e293b]/50">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-bold text-slate-200 tracking-wide">
                    MARKET ENTRY: LIVE
                  </span>
                </div>
                <span className="text-xs font-mono text-[#00A493]">
                  DEPLOYED: 21 DAYS AGO
                </span>
              </div>

              {/* Card Body: Traction Graph */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#00A493]" />
                    <span className="text-slate-400 text-sm font-medium">
                      User Traction
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-white">+1,240%</span>
                </div>

                {/* Animated Graph Area */}
                <div className="h-32 w-full relative mt-4">
                  <svg
                    viewBox="0 0 100 40"
                    className="w-full h-full overflow-visible"
                  >
                    {/* Gradient Fill */}
                    <defs>
                      <linearGradient
                        id="tractionGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#00A493"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#00A493"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 40 Q 20 35 40 20 T 100 5 V 40 H 0 Z"
                      fill="url(#tractionGradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    {/* Line Path */}
                    <motion.path
                      d="M0 40 Q 20 35 40 20 T 100 5"
                      fill="none"
                      stroke="#00A493"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  {/* Floating Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-0 right-0 bg-white text-[#0f172a] text-xs font-bold px-2 py-1 rounded shadow-lg"
                  >
                    10k Users
                  </motion.div>
                </div>
              </div>

              {/* Card Footer: Modules Ready */}
              <div className="bg-[#1e293b] px-6 py-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Core Infrastructure Ready
                </p>
                <div className="flex gap-4">
                  {/* Module 1: Auth */}
                  <div className="flex flex-col items-center gap-1 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-[#00A493] transition-colors">
                      <Lock className="w-5 h-5 text-slate-400 group-hover:text-[#00A493]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Auth
                    </span>
                  </div>
                  {/* Module 2: Payments */}
                  <div className="flex flex-col items-center gap-1 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-[#00A493] transition-colors">
                      <CreditCard className="w-5 h-5 text-slate-400 group-hover:text-[#00A493]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Billing
                    </span>
                  </div>
                  {/* Module 3: DB */}
                  <div className="flex flex-col items-center gap-1 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-[#00A493] transition-colors">
                      <Database className="w-5 h-5 text-slate-400 group-hover:text-[#00A493]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Data
                    </span>
                  </div>
                  {/* Status Indicator */}
                  <div className="ml-auto flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-xs text-slate-400">
                        System Health
                      </div>
                      <div className="text-xs text-[#00A493] font-bold">
                        100%
                      </div>
                    </div>
                    <Users className="w-8 h-8 text-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Self-Drawing Check Icon                           */
/* -------------------------------------------------------------------------- */

function AnimatedCheckIcon({ delay }: { delay: number }) {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* Outer Circle (Fade In) */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#00A493]"
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay, duration: 0.3 }}
        />
        {/* Checkmark (Draws Path) */}
        <motion.path
          d="M8 12L11 15L16 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.4, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
