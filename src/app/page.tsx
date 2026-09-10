import React from "react";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { OccasionGrid } from "@/components/home/OccasionGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { PujaCard } from "@/components/puja/PujaCard";
import { FestivalCard } from "@/components/festivals/FestivalCard";
import { pujasData } from "@/data/pujas";
import { festivalsData } from "@/data/festivals";
import { astrologyData } from "@/data/astrology";
import { muhuratData } from "@/data/muhurat";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, Video, Sparkles, MessageSquare } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const popularPujas = pujasData.filter((p) => p.popular).slice(0, 6);
  const featuredFestivals = festivalsData.slice(0, 3);
  const featuredAstrology = astrologyData.slice(0, 4);
  const featuredMuhurat = muhuratData.slice(0, 4);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Puja Kendra",
    "url": "https://pujakendra.com",
    "description": "Your place for Puja, Panditji & Vedic Services. Book Pandits for Home & Online Pujas.",
    "areaServed": "Indore, Madhya Pradesh & Online Worldwide"
  };

  return (
    <>
      <JsonLd data={orgJsonLd} />

      {/* 1. Hero Section & Integrated Search */}
      <Hero />

      {/* 2. Book By Occasion */}
      <OccasionGrid />

      {/* 3. Popular Pujas Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                Most Requested
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950 mt-2">
                Popular Puja &amp; Havan Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Frequently performed sacred rituals for prosperity, housewarming, and family health.
              </p>
            </div>
            <Link
              href="/puja"
              className="inline-flex items-center gap-1.5 font-bold text-amber-800 hover:text-amber-950 text-sm hover:underline shrink-0"
            >
              View All 60+ Pujas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPujas.map((puja) => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Online Puja Section */}
      <section className="py-14 md:py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Video className="w-3.5 h-3.5 text-emerald-400" />
                Live Video Session (Google Meet)
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-100 leading-tight">
                Online Puja from the Comfort of Your Home
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                Cannot invite Panditji physically due to distance or schedule? Connect live on Google Meet and participate in sacred Mantras and Abhishek rituals remotely.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/online-puja"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  Explore Online Pujas
                </Link>
                <a
                  href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I want to inquire about Online Puja on Google Meet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-500/30 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold font-serif text-amber-200 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Popular Online Services
              </h3>
              <ul className="space-y-2 text-sm text-slate-300 divide-y divide-white/10">
                <li className="pt-2 flex justify-between items-center">
                  <span>Satyanarayan Vrat Katha</span>
                  <span className="text-amber-400 font-semibold">Starting ₹1500</span>
                </li>
                <li className="pt-2 flex justify-between items-center">
                  <span>Rudrabhishek Puja</span>
                  <span className="text-amber-400 font-semibold">Starting ₹2100</span>
                </li>
                <li className="pt-2 flex justify-between items-center">
                  <span>Mahamrityunjaya Jaap</span>
                  <span className="text-amber-400 font-semibold">Starting ₹3100</span>
                </li>
                <li className="pt-2 flex justify-between items-center">
                  <span>Ganesh &amp; Lakshmi Puja</span>
                  <span className="text-amber-400 font-semibold">Starting ₹1500</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Upcoming Pujas / Festivals */}
      <section className="py-14 md:py-20 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                Festival Calendar
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950 mt-2">
                Upcoming Festival Pujas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Plan ahead for Ganesh Chaturthi, Navratri, Diwali Mahalakshmi Pujan, and Shivratri.
              </p>
            </div>
            <Link
              href="/upcoming-pujas"
              className="inline-flex items-center gap-1.5 font-bold text-amber-800 hover:text-amber-950 text-sm hover:underline shrink-0"
            >
              View Full Festival Calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFestivals.map((fest) => (
              <FestivalCard key={fest.id} festival={fest} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Kundli & Astrology Preview */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
                Vedic Astrology
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950">
                Kundli &amp; Astrology Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get expert guidance on Kundli matching, Mangal Dosh, Kaal Sarp Dosh, career planetary periods, and prescribed Vedic remedies.
              </p>
              <div className="pt-2">
                <Link
                  href="/kundli-astrology"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all"
                >
                  Explore Kundli Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredAstrology.map((ast) => (
                <div
                  key={ast.id}
                  className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 hover:border-amber-400 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                    {ast.category}
                  </span>
                  <h3 className="text-base font-bold font-serif text-amber-950 mt-2">
                    {ast.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {ast.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">
                      Starting ₹{ast.startingPrice}
                    </span>
                    <Link
                      href="/kundli-astrology"
                      className="text-xs font-semibold text-amber-800 hover:underline"
                    >
                      Inquire →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Muhurat Preview */}
      <section className="py-14 md:py-16 bg-amber-100/50 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
            Auspicious Timing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-950 mt-3">
            Panchang &amp; Muhurat Guidance
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-2">
            Looking for Griha Pravesh, Vivah, Vehicle delivery, or Shop inauguration Muhurat? Ask Panditji on WhatsApp for accurate Panchang timings.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 text-left">
            {featuredMuhurat.map((m) => (
              <div
                key={m.id}
                className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-xs"
              >
                <h4 className="text-xs font-bold font-serif text-amber-950">
                  {m.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {m.hindiName}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/muhurat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all"
          >
            Check All Muhurats
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. FAQ Section */}
      <FAQSection />

      {/* 11. Final WhatsApp CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-white text-center border-t border-amber-800/50">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-100">
            Ready to Book Your Puja or Consult Panditji?
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base max-w-xl mx-auto">
            Contact us directly on WhatsApp with your preferred date and requirements. No advance payment required.
          </p>
          <div>
            <a
              href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I want to book a Puja.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-current text-emerald-200" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
