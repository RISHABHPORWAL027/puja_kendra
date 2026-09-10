"use client";

import React from "react";
import Link from "next/link";
import { PujaSearch } from "@/components/puja/PujaSearch";
import { Flame, CheckCircle } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const Hero: React.FC = () => {
  return (
    <section className="relative text-white min-h-[calc(100dvh-70px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 border-b border-amber-900/60 overflow-hidden bg-black">
      {/* Background Video (Only Background) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 scale-100"
        >
          <source src="/images/puja_bg.mp4" type="video/mp4" />
        </video>
        {/* Soft dark gradient overlay for crystal clear text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 text-amber-200 text-xs md:text-sm font-bold border border-amber-500/40 backdrop-blur-md shadow-md">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>Puja • Panditji • Kundli • Muhurat</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-tight drop-shadow-md">
            Authentic Vedic Puja &amp; Panditji Services <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 block sm:inline mt-1 sm:mt-0">
              Made Simple &amp; Easy
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-xl text-amber-100/90 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-xs">
            Book degree-certified Veda-Shastri Pandits &amp; Pujaris for Home &amp; Online Pujas Worldwide.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl bg-amber-600 active:bg-amber-700 hover:bg-amber-500 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Book a Puja
            </a>
            <Link
              href="/puja"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 text-amber-100 font-bold text-sm sm:text-base border border-amber-400/40 backdrop-blur-md shadow-sm transition-all duration-200 flex items-center justify-center"
            >
              Explore Pujas
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-amber-100">
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              Verified Veda-Shastri Degree Pandits &amp; Pujaris
            </span>
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              Complete Samagri Options
            </span>
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              Home &amp; Online Worldwide (Zoom / Call)
            </span>
          </div>
        </div>

        {/* Integrated Search Box */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl mx-auto">
          <PujaSearch />
        </div>
      </div>
    </section>
  );
};
