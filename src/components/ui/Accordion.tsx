"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-amber-200/60 rounded-xl bg-white/80 overflow-hidden shadow-xs transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-left font-semibold text-amber-950 hover:text-amber-700 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4 text-base md:text-lg">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-5 md:px-5 text-slate-700 text-sm md:text-base border-t border-amber-100 pt-3 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
