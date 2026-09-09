"use client";

import React, { useState } from "react";
import { pujasData } from "@/data/pujas";
import { PujaCard } from "@/components/puja/PujaCard";
import { Video, Search, MessageSquare } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export default function OnlinePujaPage() {
  const [query, setQuery] = useState("");

  const onlinePujas = pujasData.filter((p) => p.modes.includes("online"));

  const filteredPujas = onlinePujas.filter((p) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const steps = [
    {
      num: "1",
      title: "Choose Your Service",
      desc: "Select any Puja or Astrology Consultation worldwide (Satyanarayan, Rudrabhishek, Havan, Kundli, etc.)."
    },
    {
      num: "2",
      title: "Send WhatsApp Inquiry",
      desc: "Fill in your preferred date, time slot, and preferred mode (Zoom / Google Meet / Phone Call)."
    },
    {
      num: "3",
      title: "Confirm Schedule",
      desc: "Our team coordinates Panditji schedule, gotra, and provides pre-ritual guidance on WhatsApp."
    },
    {
      num: "4",
      title: "Receive Meeting Link / Call Details",
      desc: "You will receive your private Zoom / Google Meet invite link or phone call confirmation."
    },
    {
      num: "5",
      title: "Join & Perform Ritual",
      desc: "Join live worldwide with your family, chant Mantras along with Panditji, and complete Sankalp with full Vedic rituals."
    }
  ];

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl mb-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Video className="w-4 h-4 text-emerald-400" />
              Worldwide Live Online Puja &amp; Telephonic Consultation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-amber-100 leading-tight">
              Online Puja &amp; Consultation Worldwide
            </h1>
            <p className="text-emerald-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with Veda-Shastri Panditji worldwide via live Zoom, Google Meet, or Telephonic Call for all Pujas, Havans, and Astrology Consultations.
            </p>
            <div className="pt-2">
              <a
                href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I want to inquire about Online Puja / Consultation via Zoom / Meet / Call.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current text-emerald-200" />
                Inquire for Online Puja &amp; Call Consultation
              </a>
            </div>
          </div>
        </div>

        {/* 5-Step Process */}
        <div className="my-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Simple 5-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-950 mt-2">
              How Online Puja Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white border border-emerald-200/80 rounded-2xl p-5 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-sm flex items-center justify-center mb-3">
                    {st.num}
                  </div>
                  <h3 className="text-base font-bold font-serif text-amber-950 mb-1">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Puja Directory Grid */}
        <div className="mt-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-950">
                Available Online Puja Services ({filteredPujas.length})
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Select any service to submit your date and time preferences on WhatsApp.
              </p>
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-72 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search online puja..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPujas.map((puja) => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
