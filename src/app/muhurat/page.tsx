"use client";

import React, { useState } from "react";
import { muhuratData } from "@/data/muhurat";
import { Compass, MessageSquare, Home, Heart, Car, Building2, MapPin, Baby, Scissors, Flame, TrendingUp } from "lucide-react";
import { buildMuhuratWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5 text-amber-700" />,
  Heart: <Heart className="w-5 h-5 text-amber-700" />,
  Car: <Car className="w-5 h-5 text-amber-700" />,
  Building2: <Building2 className="w-5 h-5 text-amber-700" />,
  MapPin: <MapPin className="w-5 h-5 text-amber-700" />,
  Baby: <Baby className="w-5 h-5 text-amber-700" />,
  Scissors: <Scissors className="w-5 h-5 text-amber-700" />,
  Flame: <Flame className="w-5 h-5 text-amber-700" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-700" />
};

export default function MuhuratPage() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [muhuratType, setMuhuratType] = useState("Griha Pravesh Muhurat");
  const [preferredMonth, setPreferredMonth] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Full Name is required";
    
    const cleanMobile = mobile.trim().replace(/\D/g, "");
    if (!cleanMobile) {
      errs.mobile = "Mobile number is required";
    } else if (cleanMobile.length !== 10 || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      errs.mobile = "Valid 10-digit Indian mobile required";
    }

    if (!preferredMonth.trim()) errs.preferredMonth = "Preferred month/date range is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = buildMuhuratWhatsAppUrl({
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      muhuratType,
      preferredMonth: preferredMonth.trim(),
      notes: notes.trim() || undefined
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-3.5 py-1 rounded-full border border-amber-300">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            Auspicious Panchang Timing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-amber-950 mt-3">
            Panchang &amp; Muhurat Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Ensure your auspicious life milestones begin at the most favorable planetary Tithi, Nakshatra, and Choghadiya timings.
          </p>
        </div>

        {/* Muhurat Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {muhuratData.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-amber-200/80 rounded-2xl p-6 shadow-xs hover:border-amber-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 flex items-center justify-center">
                    {iconMap[m.iconName] || <Compass className="w-5 h-5 text-amber-700" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-amber-950">
                      {m.name}
                    </h3>
                    {m.hindiName && (
                      <span className="text-xs text-amber-800 font-semibold block -mt-0.5">
                        {m.hindiName}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {m.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMuhuratType(m.name);
                  window.scrollTo({ top: document.getElementById("muhurat-form")?.offsetTop || 0, behavior: "smooth" });
                }}
                className="w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-colors flex items-center justify-center gap-1 mt-2"
              >
                Inquire for {m.name} →
              </button>
            </div>
          ))}
        </div>

        {/* Muhurat Inquiry Form */}
        <div id="muhurat-form" className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-10 shadow-xl max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Need help choosing a Muhurat?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-950 mt-2">
              Ask Panditji on WhatsApp
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Submit your event details and preferred months to receive accurate Panchang timings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-amber-900 mb-1">
                Select Muhurat Type <span className="text-rose-600">*</span>
              </label>
              <select
                value={muhuratType}
                onChange={(e) => setMuhuratType(e.target.value)}
                className="w-full p-3 bg-amber-50/50 rounded-xl border border-amber-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {muhuratData.map((m) => (
                  <option key={m.id} value={m.name}>
                    {m.name} ({m.hindiName})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patel"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full p-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.fullName ? "border-rose-500" : "border-amber-200"
                  }`}
                />
                {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  WhatsApp Mobile Number <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="10-digit Indian Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                  className={`w-full p-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.mobile ? "border-rose-500" : "border-amber-200"
                  }`}
                />
                {errors.mobile && <p className="text-rose-600 text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Preferred Month / Date Range <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. October 2026 or Navratri days"
                value={preferredMonth}
                onChange={(e) => setPreferredMonth(e.target.value)}
                className={`w-full p-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.preferredMonth ? "border-rose-500" : "border-amber-200"
                }`}
              />
              {errors.preferredMonth && <p className="text-rose-600 text-xs mt-1">{errors.preferredMonth}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Additional Notes / City Location (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Apartment facing East, family city Indore, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 bg-amber-50/40 rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
            >
              <MessageSquare className="w-5 h-5 fill-current text-emerald-200" />
              Ask on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
