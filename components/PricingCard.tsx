import { Check } from "lucide-react";

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
}: PricingCardProps) => (
  <div
    className={`p-8 rounded-3xl border-2 flex flex-col h-full transition-all ${
      highlight
        ? "border-teal-500 bg-teal-50/30 scale-105"
        : "border-slate-100 bg-white"
    }`}
  >
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-2">
        {tier}
      </h3>
      <div className="text-4xl font-bold mb-1">{price}</div>
      <div className="text-xs text-slate-400 font-medium">
        {inr} • {weeks}
      </div>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
          <Check className="w-4 h-4 text-teal-500 shrink-0" /> {f}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-4 rounded-xl font-bold transition-all ${
        highlight
          ? "bg-teal-600 text-white hover:bg-teal-700"
          : "bg-slate-900 text-white hover:bg-slate-800"
      }`}
    >
      Get Started
    </button>
  </div>
);
