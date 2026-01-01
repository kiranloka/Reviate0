"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Text Hover Effect Section */}
        <div className="h-[40vh] flex items-center justify-center opacity-20 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <TextHoverEffect text="REVIATE" duration={0.5} />
        </div>

        {/* Copyright and Privacy Policy Line */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <span>© {currentYear} Reviate. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#00A493] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub-Components                               */
/* -------------------------------------------------------------------------- */

const ReviateLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M64.8584 85.3672C64.8584 85.3672 58.3716 88.8058 53.4427 94.3547C48.5137 99.9037 40.0152 114.639 40.0152 114.639L66.5537 132.417C66.5537 132.417 74.3561 121.54 78.1399 117.225C82.5155 112.235 90.4414 109.146 90.4414 109.146V97.9443L74.8598 88.1636L64.8584 85.3672Z"
      fill="currentColor"
    />
    <path
      d="M115.252 59.9837L72.5674 60.7411L61.8601 64.2413L53.096 70.6394L60.2172 79.9036L67.2779 82.1615L76.6865 84.8257L95.522 95.7185V108.365C95.522 108.365 105.679 111.399 111.015 117.225C116.35 123.05 119.265 133.199 119.265 133.199H143.752C143.752 133.199 139.38 114.12 128.417 106.281C117.455 98.4432 106.273 98.0413 106.273 98.0413L105.516 83.8519L133.659 67.5107L133.899 60.4832L115.252 59.9837Z"
      fill="currentColor"
    />
  </svg>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link href={href} className="group flex items-center gap-2 w-fit">
        <motion.span
          className="text-neutral-500 text-sm group-hover:text-[#00A493] transition-colors duration-200"
          whileHover={{ x: 2 }}
        >
          {children}
        </motion.span>
      </Link>
    </li>
  );
};

const SocialIconLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-600 hover:text-[#00A493] transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/* Icons                                   */
/* -------------------------------------------------------------------------- */

const TwitterIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);
