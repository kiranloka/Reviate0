"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I really own the source code?",
    answer:
      "100% Yes. Unlike agencies that hold your IP hostage, we transfer the full GitHub repository to you upon completion. You own every line of code, design asset, and database schema. No vendor lock-in, ever.",
  },
  {
    question: "How is this different from No-Code tools?",
    answer:
      "No-code tools are great for prototypes but fail at scale. We build production-ready applications using TypeScript and Next.js. This means your platform is fast, secure, and ready to handle thousands of users from day one without hitting 'ceiling' limits.",
  },
  {
    question: "What happens after the MVP is launched?",
    answer:
      "We don't just disappear. All our plans include a dedicated support period (30-60 days) to squash bugs and ensure stability. Since we use standard, clean architecture, your future in-house team can easily pick up where we left off.",
  },
  {
    question: "Can you help with the design as well?",
    answer:
      "Absolutely. We aren't just coders; we are product builders. We handle the entire UI/UX process, creating high-fidelity designs in Figma before development begins to ensure your product looks as good as it functions.",
  },
  {
    question: "How quickly can we go to market?",
    answer:
      "Speed is our specialty. For most MVPs, we target a 2-4 week delivery window. We achieve this by utilizing our pre-built, battle-tested boilerplate modules for common features (auth, payments, mailers) so we can focus entirely on your unique business logic.",
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
          Everything you need to know about building with Reviate.
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
