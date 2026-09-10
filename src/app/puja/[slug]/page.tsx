import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { pujasData } from "@/data/pujas";
import { SamagriChecklist } from "@/components/puja/SamagriChecklist";
import { Accordion } from "@/components/ui/Accordion";
import { PujaCard } from "@/components/puja/PujaCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { DetailPageClientActions } from "./DetailPageClientActions";
import { MapPin, Video, Clock, Flame, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pujasData.map((puja) => ({
    slug: puja.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const puja = pujasData.find((p) => p.slug === resolvedParams.slug);

  if (!puja) {
    return {
      title: "Puja Not Found | Puja Kendra"
    };
  }

  return {
    title: `${puja.name} - Book Panditji | Puja Kendra`,
    description: puja.shortDescription,
    openGraph: {
      title: `${puja.name} - Book Panditji at Home or Online`,
      description: puja.description,
      type: "website"
    }
  };
}

export default async function PujaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const puja = pujasData.find((p) => p.slug === resolvedParams.slug);

  if (!puja) {
    notFound();
  }

  // Related Pujas in same category
  const relatedPujas = pujasData
    .filter((p) => p.category === puja.category && p.slug !== puja.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": puja.name,
    "description": puja.description,
    "provider": {
      "@type": "Organization",
      "name": "Puja Kendra"
    },
    "offers": puja.startingPrice
      ? {
          "@type": "Offer",
          "price": puja.startingPrice,
          "priceCurrency": "INR"
        }
      : undefined
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <div className="pb-16 pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Card Container */}
          <div className="bg-white border border-amber-200/90 rounded-3xl overflow-hidden shadow-md mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Image Banner */}
              <div className="lg:col-span-5 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 relative min-h-[300px] lg:min-h-full flex items-center justify-center p-6">
                <img
                  src={puja.image}
                  alt={puja.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl opacity-85 shadow-lg max-h-[360px]"
                />
              </div>

              {/* Right Column: Hero Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                      {puja.category}
                    </span>
                    {puja.popular && (
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-950 bg-amber-300 px-3 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 fill-amber-950" />
                        Popular Service
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-amber-950 tracking-tight">
                    {puja.name}
                  </h1>
                  {puja.hindiName && (
                    <span className="text-sm font-semibold text-amber-800 block mt-1">
                      {puja.hindiName}
                    </span>
                  )}

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                    {puja.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">
                        Duration
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        {puja.duration || "2 - 3 Hours"}
                      </span>
                    </div>

                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">
                        Deity / Devata
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-950 truncate block mt-0.5">
                        {puja.deity || "Universal Deities"}
                      </span>
                    </div>

                    <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">
                        Modes Available
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {puja.modes.includes("home") && (
                          <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-700" /> Home
                          </span>
                        )}
                        {puja.modes.includes("online") && (
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                            <Video className="w-3 h-3 text-emerald-600" /> Online
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Primary CTA */}
                <div className="pt-4 border-t border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">
                      Starting Price
                    </span>
                    {puja.startingPrice ? (
                      <span className="text-2xl sm:text-3xl font-extrabold text-amber-950">
                        ₹{puja.startingPrice.toLocaleString("en-IN")}
                      </span>
                    ) : (
                      <span className="text-xl font-bold text-slate-800">
                        Price on Inquiry
                      </span>
                    )}
                  </div>

                  <DetailPageClientActions puja={puja} />
                </div>
              </div>
            </div>
          </div>

          {/* About & General Process */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-amber-200/90 rounded-2xl p-6 shadow-xs">
                <h2 className="text-xl font-bold font-serif text-amber-950 mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-700" />
                  About {puja.name}
                </h2>
                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>{puja.description}</p>
                  <h3 className="text-base font-bold font-serif text-amber-900 pt-2">
                    Common Occasions for Performing This Puja:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {puja.occasions.map((occ, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100/70 text-amber-900 font-medium text-xs px-3 py-1 rounded-lg border border-amber-200"
                      >
                        ✓ {occ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Samagri Checklist Component */}
              <SamagriChecklist samagriList={puja.samagri} />

              {/* FAQs */}
              {puja.faqs && puja.faqs.length > 0 && (
                <div className="bg-white border border-amber-200/90 rounded-2xl p-6 shadow-xs">
                  <h2 className="text-xl font-bold font-serif text-amber-950 mb-4">
                    Frequently Asked Questions about {puja.name}
                  </h2>
                  <Accordion items={puja.faqs} />
                </div>
              )}
            </div>

            {/* Sidebar Trust & Details */}
            <div className="space-y-6">
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold font-serif text-amber-950 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  What is Included in Booking?
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Experienced Vedic Panditji fluent in Hindi &amp; Mantras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete step-by-step Pujan &amp; Havan guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete Samagri option available on request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Auspicious timing &amp; Muhurat guidance on WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Pujas */}
          {relatedPujas.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold font-serif text-amber-950 mb-6">
                Similar Services in {puja.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPujas.map((rel) => (
                  <PujaCard key={rel.id} puja={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
