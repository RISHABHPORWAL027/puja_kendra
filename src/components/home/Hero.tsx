"use client";

import React from "react";
import Link from "next/link";
import { PujaSearch } from "@/components/puja/PujaSearch";
import { Flame, CheckCircle } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-amber-950 text-white min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-10 md:py-16 border-b border-amber-900 overflow-hidden">
      {/* Background Video - Fully Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75 scale-100"
        >
          <source src="/images/puja_bg.mp4" type="video/mp4" />
        </video>
        {/* Rich warm gradient tint overlay for contrast and full video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-amber-950/40 to-amber-950/70 backdrop-xs" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 text-amber-200 text-xs md:text-sm font-bold border border-amber-500/40 shadow-lg backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-500 animate-pulse" />
            <span>Puja • Panditji • Kundli • Muhurat (पूजा • पंडित जी • कुंडली • मुहूर्त)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-tight drop-shadow-md">
            Puja &amp; Panditji Services <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-rose-300 drop-shadow-sm">
              Made Simple &amp; Easy
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-amber-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Ghar par ya Online (Zoom, Google Meet, Call Worldwide) Puja aur Astrology Consultation ke liye experienced Veda-Shastri Panditji book karein.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 border border-amber-400/40"
            >
              Book a Puja (पूजा बुक करें)
            </a>
            <Link
              href="/puja"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-950/80 hover:bg-amber-900/90 text-amber-100 font-bold text-base border-2 border-amber-400/60 shadow-sm transition-all duration-200 flex items-center justify-center backdrop-blur-md"
            >
              Explore Pujas (पूजा देखें)
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-200">
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Verified Degree Panditji, Pujari &amp; Purohit (Veda-Shastri Certified)
            </span>
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Complete Samagri Options (सामग्री विकल्प)
            </span>
            <span className="flex items-center gap-1.5 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
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
