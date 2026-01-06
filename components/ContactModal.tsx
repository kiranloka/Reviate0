"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export const ContactModal = ({ isOpen, onClose, planName }: ContactModalProps) => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Formspree Integration (using the user's requirement details)
      const response = await fetch("https://formspree.io/f/xvgzgeea", { // Placeholder or provided ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          plan: planName,
          _subject: `New Project Inquiry: ${formData.projectName} (${planName})`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", email: "", company: "", projectName: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Get Started</h2>
                  <p className="text-slate-500 mt-1">
                    Tell us about your project for the <span className="text-[#00a493] font-semibold">{planName}</span> plan.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-8 py-12 text-center"
                >
                  <div className="w-16 h-16 bg-teal-50 text-[#00a493] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">
                    Thanks for reaching out. We'll get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00a493] focus:ring-2 focus:ring-[#00a493]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00a493] focus:ring-2 focus:ring-[#00a493]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-semibold text-slate-700 ml-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00a493] focus:ring-2 focus:ring-[#00a493]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="projectName" className="text-sm font-semibold text-slate-700 ml-1">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="projectName"
                      id="projectName"
                      rows={3}
                      value={formData.projectName}
                      onChange={handleChange}
                      placeholder="Tell us what you're building..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00a493] focus:ring-2 focus:ring-[#00a493]/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    disabled={status === "sending"}
                    type="submit"
                    className="w-full bg-[#00a493] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#008c7e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#00a493]/20"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send size={18} />
                        </motion.div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Request <Send size={18} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
