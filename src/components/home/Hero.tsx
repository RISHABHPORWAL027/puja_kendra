"use client";

import React from "react";
import Link from "next/link";
import { PujaSearch } from "@/components/puja/PujaSearch";
import { Flame, CheckCircle } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-100/70 via-amber-50/50 to-white pt-8 pb-14 md:pt-14 md:pb-20 border-b border-amber-200/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/70 text-amber-950 text-xs md:text-sm font-bold border border-amber-300/80 shadow-xs">
            <Flame className="w-4 h-4 text-amber-700 fill-amber-500" />
            <span>Puja • Panditji • Kundli • Muhurat (पूजा • पंडित जी • कुंडली • मुहूर्त)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-amber-950 tracking-tight leading-tight">
            Puja &amp; Panditji Services <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-800 to-rose-900">
              Made Simple &amp; Easy
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Ghar par ya Online (Zoom, Google Meet, Call Worldwide) Puja aur Astrology Consultation ke liye experienced Veda-Shastri Panditji book karein.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Book a Puja (पूजा बुक करें)
            </a>
            <Link
              href="/puja"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-amber-100/60 text-amber-950 font-bold text-base border-2 border-amber-300 shadow-sm transition-all duration-200 flex items-center justify-center"
            >
              Explore Pujas (पूजा देखें)
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-900">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Verified Degree Panditji, Pujari &amp; Purohit (Veda-Shastri Certified)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Complete Samagri Options (सामग्री विकल्प)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Worldwide via Zoom, Meet &amp; Call
            </span>
          </div>
        </div>

        {/* Integrated Search Box */}
        <div className="mt-8 md:mt-10 max-w-2xl mx-auto">
          <PujaSearch />
        </div>
      </div>
    </section>
  );
};
