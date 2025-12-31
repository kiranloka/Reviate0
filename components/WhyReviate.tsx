"use client";

import React from "react";
import { motion } from "motion/react";
import { Terminal, Activity, Server, Shield } from "lucide-react";

export function WhyReviate() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent  py-24 md:py-32 border-b border-slate-200">
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
                {/* Underline decoration */}
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

          {/* 3. Code/Dashboard Visual (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dashed Border Box */}
            <div className="absolute -inset-4 border border-dashed border-slate-300 rounded-xl -z-10" />

            {/* Main Window */}
            <div className="bg-[#0f172a] rounded-lg shadow-2xl border border-slate-800 overflow-hidden text-slate-300 font-mono text-xs md:text-sm">
              {/* Window Header */}
              <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-slate-500 text-xs">server_metrics.tsx</div>
                <div className="w-4" /> {/* Spacer */}
              </div>

              {/* Window Content */}
              <div className="p-6 space-y-6">
                {/* Metric 1: Uptime */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-[#00A493]" />
                    <span className="text-white">System Uptime</span>
                  </div>
                  <span className="text-[#00A493] font-bold">99.99%</span>
                </div>
                {/* Animated Progress Bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-[#00A493]"
                  />
                </div>

                {/* Metric 2: Security */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-white">Security Protocols</span>
                  </div>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <motion.div
                      key={n}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: n * 0.1 }}
                      className="h-1.5 w-full bg-purple-500/60 rounded-sm"
                    />
                  ))}
                </div>

                {/* Code Block Visual */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex gap-2 text-slate-500 mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>deployment_log</span>
                  </div>
                  <div className="space-y-1 opacity-80">
                    <p>
                      <span className="text-pink-400">import</span>{" "}
                      <span className="text-blue-300">{`{ Scale }`}</span>{" "}
                      <span className="text-pink-400">from</span>{" "}
                      <span className="text-orange-300">'@reviate/core'</span>;
                    </p>
                    <p className="pl-4 text-slate-400"></p>
                    <p className="flex gap-2">
                      <span className="text-purple-400">await</span>
                      <span className="text-blue-300">Scale.deploy</span>();
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-5 bg-[#00A493]"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HUD Element floating behind */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 border border-[#00A493]/20 rounded-full flex items-center justify-center -z-20">
              <div
                className="w-24 h-24 border border-[#00A493]/40 rounded-full border-t-transparent animate-spin"
                style={{ animationDuration: "10s" }}
              />
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
