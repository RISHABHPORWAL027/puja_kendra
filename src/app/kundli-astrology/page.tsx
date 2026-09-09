import React from "react";
import dynamic from "next/dynamic";
import { astrologyData } from "@/data/astrology";
import { Sparkles, ArrowRight, ShieldAlert, BookOpen } from "lucide-react";

const KundliInquiryForm = dynamic(
  () => import("@/components/astrology/KundliInquiryForm").then((mod) => mod.KundliInquiryForm),
  { ssr: true }
);

export const metadata = {
  title: "Kundli & Astrology Services | Puja Kendra",
  description: "Get guidance on Janam Kundli, Gun Milan Kundli Matching, Mangal Dosh, Kaal Sarp Dosh, Career Astrology, and Vedic Shanti Remedies."
};

export default function KundliAstrologyPage() {
  const kundliServices = astrologyData.filter((a) => a.category === "Kundli");
  const consultationServices = astrologyData.filter((a) => a.category === "Astrology Consultation");
  const doshaServices = astrologyData.filter((a) => a.category === "Dosha & Remedies");

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-rose-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl mb-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Authentic Vedic Jyotish Guidance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-amber-100 leading-tight">
              Kundli &amp; Astrology Services
            </h1>
            <p className="text-amber-200/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Get guidance on Kundli, Marriage Compatibility, Career, Business, Muhurat and Vedic Remedies from experienced Acharyas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content: Services List */}
          <div className="lg:col-span-7 space-y-10">
            {/* Cross Selling Guidance Banner */}
            <div className="bg-gradient-to-r from-amber-100/90 to-amber-50 border border-amber-300 rounded-2xl p-5 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                Vedic Remedial Pathway
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold flex flex-wrap items-center gap-2">
                <span>Kundli Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Identify Planetary Concern</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Recommended Shanti Remedy</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                <span>Book Panditji</span>
              </p>
            </div>

            {/* Section 1: Kundli Services */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-amber-950 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-700" />
                Janam Kundli &amp; Matching
              </h2>
              <div className="space-y-4">
                {kundliServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-xs hover:border-amber-400 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold font-serif text-amber-950">
                          {service.name}
                        </h3>
                        {service.hindiName && (
                          <span className="text-xs text-amber-800 font-semibold block">
                            {service.hindiName}
                          </span>
                        )}
                        <p className="text-slate-600 text-sm mt-1">
                          {service.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.benefits.map((b, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-md font-medium"
                            >
                              ✓ {b}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-slate-400 uppercase font-semibold block">
                          Fee
                        </span>
                        <span className="text-lg font-extrabold text-amber-950">
                          ₹{service.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Dosha & Remedies */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-amber-950 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-700" />
                Dosha Analysis &amp; Vedic Remedies
              </h2>
              <div className="space-y-4">
                {doshaServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-xs hover:border-amber-400 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold font-serif text-amber-950">
                          {service.name}
                        </h3>
                        {service.hindiName && (
                          <span className="text-xs text-amber-800 font-semibold block">
                            {service.hindiName}
                          </span>
                        )}
                        <p className="text-slate-600 text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-slate-400 uppercase font-semibold block">
                          Fee
                        </span>
                        <span className="text-lg font-extrabold text-amber-950">
                          ₹{service.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Astrology Consultation */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-amber-950 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-700" />
                Specialized Astrology Consultations
              </h2>
              <div className="space-y-4">
                {consultationServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-xs hover:border-amber-400 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold font-serif text-amber-950">
                          {service.name}
                        </h3>
                        <p className="text-slate-600 text-sm mt-1">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-slate-400 uppercase font-semibold block">
                          Fee
                        </span>
                        <span className="text-lg font-extrabold text-amber-950">
                          ₹{service.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Kundli Inquiry Form */}
          <div className="lg:col-span-5 sticky top-24">
            <KundliInquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
