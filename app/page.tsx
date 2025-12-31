"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, DollarSign, Home, MessageCircle } from "lucide-react";

// Components
import { WhyReviate } from "@/components/WhyReviate";
import { AboutUs } from "@/components/AboutUs";
import { FeaturesDemo } from "@/components/FeaturesBento"; // Ensure this matches your file name
import { PricingCard } from "@/components/PricingCard";
import { QASection } from "@/components/QASection";
import { Footer } from "@/components/Footer";
// import { FloatingNav } from "@/components/ui/floating-navbar"; // Optional

const ReviateLanding = () => {
  // Parallax effect for Hero Text
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#13343B] selection:bg-[#00a493] selection:text-white relative overflow-x-hidden font-sans">
      {/* --- NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-[#FCFCF9]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#FCFCF9]/60"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative h-10 w-10 overflow-hidden">
              {/* Replace with your actual logo path */}
              <Image
                src="/reviate_logo.png"
                alt="Reviate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Reviate
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {["Services", "Process", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00a493] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a493] transition-all group-hover:w-full" />
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00a493] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-[#00a493]/20 hover:shadow-[#00a493]/40 transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00a493] opacity-[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />

        <motion.div
          style={{ y: y1 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00a493]/30 bg-[#00a493]/5 text-[#00a493] rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-[#00a493] animate-pulse shadow-[0_0_10px_#00a493]" />
            Production Ready in Weeks
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-slate-900"
          >
            Production-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a493] to-teal-400 italic pr-2">
              TypeScript MVPs.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We transform startup visions into scalable realities. Premium code,
            rapid deployment, and 100% source code ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-10 py-4 bg-[#00a493] text-white rounded-2xl font-bold text-lg hover:bg-[#008c7e] transition-all shadow-xl shadow-[#00a493]/20 hover:scale-105 active:scale-95">
              View Pricing
            </button>
            <button className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 active:scale-95">
              Book a Call
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTIONS --- */}

      {/* 1. Why Reviate (Dark Contrast Section) */}
      <section className="relative z-20">
        <WhyReviate />
      </section>

      {/* 2. Services / Features (Grid) */}
      <section
        id="services"
        className="py-32 max-w-7xl mx-auto px-6 scroll-mt-20"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-slate-900"
          >
            Beyond Just Code
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-500 font-medium text-lg max-w-2xl mx-auto"
          >
            We don't just write software; we engineer competitive advantages.
          </motion.p>
        </motion.div>
        <FeaturesDemo />
      </section>

      {/* 3. About Us (Full Screen / Dark) */}
      <section id="process">
        <AboutUs />
      </section>

      {/* 4. Pricing */}
      <section
        id="pricing"
        className="py-32 max-w-7xl mx-auto px-6 scroll-mt-20 relative"
      >
        <div className="text-center mb-20">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-lg"
          >
            No hidden fees. Full IP ownership included.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard
            tier="Starter"
            price="$1,999"
            inr="₹1,66,900"
            weeks="2-3 weeks"
            features={[
              "Landing pages",
              "UI/UX Design",
              "SEO Optimized",
              "30 Days Support",
            ]}
          />
          <PricingCard
            highlight
            tier="Professional"
            price="$4,999"
            inr="₹4,16,900"
            weeks="4-5 weeks"
            features={[
              "SaaS MVP",
              "User Auth",
              "Stripe Payments",
              "Admin Dashboard",
              "60 Days Support",
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="$12,999"
            inr="₹10,84,900"
            weeks="8-10 weeks"
            features={[
              "Full Platforms",
              "Real-time Features",
              "Advanced Dashboards",
              "Unlimited Revisions",
            ]}
          />
        </div>
      </section>

      {/* 5. QA Section */}
      <section className="bg-slate-50/50 border-t border-slate-200">
        <QASection />
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default ReviateLanding;
