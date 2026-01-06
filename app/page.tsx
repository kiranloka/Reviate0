"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Clock,
  FileCode,
  Layers,
  Sparkles,
  Code2,
  Rocket,
  Zap,
} from "lucide-react";

// Components
import { WhyReviate } from "@/components/WhyReviate";
import { AboutUs } from "@/components/AboutUs";
import { FeaturesDemo } from "@/components/FeaturesBento";
import { PricingCard } from "@/components/PricingCard";
import { QASection } from "@/components/QASection";
import { Footer } from "@/components/Footer";
import { ReviateLogo } from "@/components/Logo";
import { ContactModal } from "@/components/ContactModal";

// --- NEW COMPONENT: Background Grid & Floating Icons ---
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 2. Floating "Doodles" (Icons) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] text-[#00a493]/10"
      >
        <Code2 size={120} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-[5%] text-[#00a493]/10"
      >
        <Rocket size={100} />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[20%] text-slate-200"
      >
        <Zap size={60} />
      </motion.div>

      {/* 3. Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00a493] opacity-[0.08] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-teal-400 opacity-[0.05] blur-[100px] rounded-full" />
    </div>
  );
};

const ReviateLanding = () => {
  // Parallax effect for Hero Text
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Text Animation State
  const words = ["Startups", "Founders", "Believers", "Businesses"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

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

  const handleBookACall = ()=>{
    window.open("https://cal.com/kiran-kumar-loka-hnsgo4", "_blank");
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
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
            <div className="relative h-16 w-16 flex items-center justify-center text-[#00a493]">
              <ReviateLogo className="w-full h-full" />
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
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* UPDATED: Active Background */}
        <HeroBackground />

        <motion.div
          style={{ y: y1 }}
          className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
        >
          {/* Badge with Shine Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00a493]/30 bg-[#00a493]/5 text-[#00a493] rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden"
          >
            <span className="w-2 h-2 rounded-full bg-[#00a493] animate-pulse shadow-[0_0_10px_#00a493]" />
            <span className="relative z-10">Production Ready in Weeks</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-slate-900 drop-shadow-sm"
          >
            Ideas to Reality, <br />
            <span className="block mt-2">
              Build for{" "}
              <span className="inline-block relative min-w-[300px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-[#00a493] to-teal-400 italic pr-2"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">{words[0]}.</span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We transform startup visions into scalable realities. Premium code,
            rapid deployment, and 100% source code ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="relative px-10 py-4 bg-[#00a493] text-white rounded-2xl font-bold text-lg hover:bg-[#008c7e] transition-all shadow-xl shadow-[#00a493]/20 hover:scale-105 active:scale-95 group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Pricing <Sparkles className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
            <button className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 active:scale-95"
            onClick={handleBookACall}>
              Book a Call
            </button>
          </motion.div>

          {/* --- FEATURE STRIP (Glassmorphism Added) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-6xl mx-auto border border-white/50 bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-dashed divide-slate-300/50">
              {/* Box 1 */}
              <div className="flex items-center justify-center gap-4 px-4 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#00a493] group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-700 text-left">
                  MVP Delivery in <br /> 2-4 Weeks
                </span>
              </div>

              {/* Box 2 */}
              <div className="flex items-center justify-center gap-4 px-4 pt-8 md:pt-0 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#00a493] group-hover:scale-110 transition-transform duration-300">
                  <FileCode className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-700 text-left">
                  100% Source Code <br /> Ownership
                </span>
              </div>

              {/* Box 3 */}
              <div className="flex items-center justify-center gap-4 px-4 pt-8 md:pt-0 group cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#00a493] group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-700 text-left">
                  Scalable & Clean <br /> Architecture
                </span>
              </div>
            </div>
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
          {/* Tier 1: Frontend Only */}
          <PricingCard
            onGetStarted={() => openModal("Starter")}
            tier="Starter"
            price="$1,200"
            inr="₹1,02,000"
            weeks="1-2 weeks"
            features={[
              "Figma to React/Next.js",
              "Pixel-Perfect Responsive",
              "Tailwind CSS Styling",
              "Basic SEO & Meta Tags",
              "Up to 5 Static Pages",
            ]}
          />

          {/* Tier 2: The SaaS Engine (Most Popular) */}
          <PricingCard
            onGetStarted={() => openModal("Professional")}
            highlight
            tier="Professional"
            price="$4,500"
            inr="₹3,82,500"
            weeks="4-6 weeks"
            features={[
              "SaaS Core Infrastructure",
              "User Auth (Clerk/NextAuth)",
              "Stripe/Payment Integration",
              "Database & User Dashboard",
              "Protected API Routes",
              "30 Days Support",
            ]}
          />

          {/* Tier 3: Full Custom Product */}
          <PricingCard
            onGetStarted={() => openModal("Enterprise")}
            tier="Enterprise"
            price="$9,500"
            inr="₹8,07,500"
            weeks="8-12 weeks"
            features={[
              "Full MVP Launch",
              "Admin Dashboard & Analytics",
              "Real-time Features / Sockets",
              "File Uploads & Email System",
              "Advanced Search/Filtering",
              "Unlimited Revisions (Dev Phase)",
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

      {/* 7. Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </div>
  );
};

export default ReviateLanding;
