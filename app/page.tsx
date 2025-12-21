"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Check,
  Zap,
  Shield,
  Code,
  Rocket,
  ChevronDown,
  Plus,
  Home,
  Briefcase,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { PricingCard } from "@/components/PricingCard";
// Import your FloatingNav component (ensure the path matches your project structure)
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FeaturesDemo } from "@/components/FeaturesBento";
import { QASection } from "@/components/QASection";

// --- Types ---

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}

// interface PricingCardProps {
//   tier: string;
//   price: string;
//   inr: string;
//   weeks: string;
//   features: string[];
//   highlight?: boolean;
// }

// --- Components ---

const ServiceCard = ({
  icon,
  title,
  desc,
  className = "",
}: ServiceCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl ${className}`}
  >
    <div className="mb-4 p-3 w-fit rounded-2xl bg-slate-50">{icon}</div>
    <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// --- Main Page ---

const ReviateLanding = () => {
  // Navigation Items for the Floating Navbar
  const navItems = [
    { name: "Home", link: "#", icon: <Home className="h-4 w-4" /> },
    {
      name: "Services",
      link: "#services",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "mailto:hello@reviate.com",
      icon: <MessageCircle className="h-4 w-4" />,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#13343B] selection:bg-teal-100 relative">
      {/* FLOATING NAVBAR - Appears on Scroll */}
      {/* <FloatingNav navItems={navItems} /> */}

      {/* STATIC NAVBAR - Initial view */}
      <nav className="absolute top-0 w-full z-40 border-b sticky border-slate-200/50 bg-[#FCFCF9]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Image
              src="/reviate_logo.png"
              alt="Reviate Logo"
              width={48}
              height={56}
              priority
            />
            {/*  <span className="text-2xl font-black">Reviate</span>
             */}{" "}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a
              href="#services"
              className="hover:text-teal-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-teal-600 transition-colors"
            >
              Pricing
            </a>
            <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-500/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-48 pb-24 px-6 relative h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-200 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Built for Modern Founders
          </motion.div>
          <motion.h1
            {...fadeInUp}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] text-slate-900"
          >
            Production-Ready <br />
            <span className="text-teal-500 italic">TypeScript MVPs</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We transform startup visions into scalable realities. Premium code,
            rapid deployment, and 100% source code ownership.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold text-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/30">
              View Pricing
            </button>
            <button className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* BENTO GRID SERVICES */}
      <section
        id="services"
        className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Features</h2>
          <p className="text-slate-500 font-medium">
            Not just code but helping clients bounce ahead of their competition
          </p>
        </div>

        <FeaturesDemo />
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing"
        className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-slate-500 font-medium">
            No hidden fees. Full IP ownership included.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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

      {/*QA SECTION*/}
      <section>
        <QASection />
      </section>
    </div>
  );
};

export default ReviateLanding;
