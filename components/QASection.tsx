"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Typically, we go from concept to launch in 4-8 weeks. We focus on core features first to help you find product-market fit rapidly, without sacrificing code quality or scalability.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We are a full-cycle agency. We start with pixel-perfect UX/UI design to ensure a sleek interface, then move to rigorous development using modern frameworks to bring that vision to life.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We build for the future. Our standard stack includes Next.js for SEO-optimized frontends, Node.js or Python for robust backends, and PostgreSQL. This ensures your app is production-grade from day one.",
  },
  {
    question: "Will my website be optimized for SEO?",
    answer:
      "Absolutely. Technical SEO is baked into our development process. We ensure semantic HTML, fast load times (Core Web Vitals), and proper meta-tag architecture so you rank high automatically.",
  },
];

export function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
          Common Questions
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          Everything you need to know about working with Reviate.
        </p>
      </div>

      {/* Accordion Grid */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Sub-Components                               */
/* -------------------------------------------------------------------------- */

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 1)",
      }}
      className={cn(
        "group border rounded-2xl overflow-hidden bg-white cursor-pointer",
        // Sleek shadow for depth
        "shadow-[0px_2px_10px_rgba(0,0,0,0.03)]",
        // Border transition: Neutral normally, Brand Color when open/hover
        "transition-all duration-300",
        isOpen
          ? "border-[#00A493] ring-1 ring-[#00A493]/20"
          : "border-neutral-200 hover:border-[#00A493]/40"
      )}
      onClick={onClick}
    >
      {/* Question Header */}
      <div className="p-6 flex items-center justify-between">
        <h3
          className={cn(
            "text-lg font-semibold transition-colors duration-200 text-left",
            isOpen
              ? "text-[#00A493]"
              : "text-neutral-900 group-hover:text-neutral-700"
          )}
        >
          {question}
        </h3>

        {/* Animated Icon */}
        <div
          className={cn(
            "relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300",
            isOpen
              ? "bg-[#00A493]/10"
              : "bg-neutral-100 group-hover:bg-[#00A493]/10"
          )}
        >
          <PlusIcon isOpen={isOpen} />
        </div>
      </div>

      {/* Expandable Answer Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base leading-relaxed text-neutral-600"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Icons                                        */
/* -------------------------------------------------------------------------- */

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isOpen ? "text-[#00A493]" : "text-neutral-500"}
      animate={{ rotate: isOpen ? 135 : 0 }} // Rotate 45deg + 90 to turn plus into X nicely
      transition={{ duration: 0.3, ease: "backOut" }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </motion.svg>
  );
};
