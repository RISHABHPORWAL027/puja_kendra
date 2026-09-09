import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { festivalsData } from "@/data/festivals";
import { pujasData } from "@/data/pujas";
import { Accordion } from "@/components/ui/Accordion";
import { SamagriChecklist } from "@/components/puja/SamagriChecklist";
import { JsonLd } from "@/components/seo/JsonLd";
import { Calendar, Flame, ArrowRight, MessageSquare } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return festivalsData.map((fest) => ({
    slug: fest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const festival = festivalsData.find((f) => f.slug === resolvedParams.slug);

  if (!festival) {
    return {
      title: "Festival Not Found | Puja Kendra"
    };
  }

  return {
    title: `${festival.name} (${festival.date}) - Book Panditji | Puja Kendra`,
    description: festival.significance,
    openGraph: {
      title: `${festival.name} - ${festival.date}`,
      description: festival.description,
      type: "website"
    }
  };
}

export default async function FestivalDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const festival = festivalsData.find((f) => f.slug === resolvedParams.slug);

  if (!festival) {
    notFound();
  }

  // Cross-link suggested Pujas
  const suggestedPujas = pujasData.filter((p) =>
    festival.suggestedPujaSlugs.includes(p.slug)
  );

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": festival.name,
    "startDate": festival.date,
    "description": festival.significance,
    "organizer": {
      "@type": "Organization",
      "name": "Puja Kendra"
    }
  };

  return (
    <>
      <JsonLd data={eventJsonLd} />

      <div className="pb-16 pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-rose-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{festival.date} ({festival.day})</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-amber-100 leading-tight">
                {festival.name}
              </h1>
              {festival.hindiName && (
                <span className="text-base text-amber-300 font-semibold block">
                  {festival.hindiName}
                </span>
              )}
              <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed">
                {festival.significance}
              </p>
              <div className="pt-3">
                <a
                  href={buildDirectWhatsAppUrl(`Namaste Puja Kendra 🙏 I want to book Panditji for ${festival.name} on ${festival.date}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-emerald-200" />
                  Book {festival.name} on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white border border-amber-200/90 rounded-2xl p-6 shadow-xs">
                <h2 className="text-xl font-bold font-serif text-amber-950 mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-700" />
                  About {festival.name} Rituals
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {festival.description}
                </p>
              </div>

              {/* Samagri Checklist Component */}
              <SamagriChecklist samagriList={festival.samagri} />

              {/* FAQs */}
              {festival.faqs && festival.faqs.length > 0 && (
                <div className="bg-white border border-amber-200/90 rounded-2xl p-6 shadow-xs">
                  <h2 className="text-xl font-bold font-serif text-amber-950 mb-4">
                    {festival.name} FAQs
                  </h2>
                  <Accordion items={festival.faqs} />
                </div>
              )}
            </div>

            {/* Suggested Pujas Sidebar */}
            <div>
              <h2 className="text-lg font-bold font-serif text-amber-950 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700" />
                Recommended Pujas for {festival.name}
              </h2>
              <div className="space-y-4">
                {suggestedPujas.map((puja) => (
                  <div
                    key={puja.id}
                    className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-xs"
                  >
                    <h3 className="text-base font-bold font-serif text-amber-950">
                      {puja.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {puja.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900">
                        {puja.startingPrice ? `Starting ₹${puja.startingPrice}` : "Price on Inquiry"}
                      </span>
                      <Link
                        href={`/puja/${puja.slug}`}
                        className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                      >
                        View &amp; Book <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
