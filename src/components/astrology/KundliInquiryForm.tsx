"use client";

import React, { useState } from "react";
import { User, Phone, Calendar, Clock, MapPin, Sparkles, MessageSquare } from "lucide-react";
import { KundliInquiryForm as FormType } from "@/types";
import { buildKundliWhatsAppUrl } from "@/lib/whatsapp";

interface KundliInquiryFormProps {
  initialService?: string;
}

export const KundliInquiryForm: React.FC<KundliInquiryFormProps> = ({ initialService = "Janam Kundli Generation & Analysis" }) => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [timeOfBirth, setTimeOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [serviceRequired, setServiceRequired] = useState(initialService);
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

    if (!dateOfBirth) errs.dateOfBirth = "Date of birth is required";
    if (!timeOfBirth) errs.timeOfBirth = "Time of birth is required";
    if (!placeOfBirth.trim()) errs.placeOfBirth = "Place of birth (City, State) is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const data: FormType = {
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      dateOfBirth,
      timeOfBirth,
      placeOfBirth: placeOfBirth.trim(),
      serviceRequired,
      notes: notes.trim() || undefined
    };

    const waUrl = buildKundliWhatsAppUrl(data);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 md:p-8 shadow-xl max-w-xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold font-serif text-amber-950">
          Kundli &amp; Astrology Inquiry
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Provide your birth details to receive authentic Vedic horoscope analysis via Phone Call, Zoom &amp; WhatsApp Worldwide.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Required */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
            Service Required <span className="text-rose-600">*</span>
          </label>
          <select
            value={serviceRequired}
            onChange={(e) => setServiceRequired(e.target.value)}
            className="w-full p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Janam Kundli Generation & Analysis">Janam Kundli Generation &amp; Analysis</option>
            <option value="Kundli Matching (Gun Milan)">Kundli Matching (Gun Milan)</option>
            <option value="Mangal Dosha Consultation">Mangal Dosha Consultation &amp; Remedies</option>
            <option value="Kaal Sarp Dosha Analysis">Kaal Sarp Dosha Analysis</option>
            <option value="Career & Business Astrology">Career &amp; Business Astrology</option>
            <option value="Pitra Dosha Consultation">Pitra Dosha Consultation</option>
            <option value="Navgraha Planetary Analysis">Navgraha Planetary Analysis</option>
            <option value="General Vedic Astrology Consultation">General Vedic Astrology Consultation</option>
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3 top-3.5 text-amber-700 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Vikram Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full pl-9 pr-3 py-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.fullName ? "border-rose-500" : "border-amber-200"
              }`}
            />
          </div>
          {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            WhatsApp Mobile Number <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 absolute left-3 top-3.5 text-amber-700 pointer-events-none" />
            <input
              type="tel"
              placeholder="10-digit Indian Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              className={`w-full pl-9 pr-3 py-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.mobile ? "border-rose-500" : "border-amber-200"
              }`}
            />
          </div>
          {errors.mobile && <p className="text-rose-600 text-xs mt-1">{errors.mobile}</p>}
        </div>

        {/* DOB & TOB */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              Date of Birth <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-3.5 text-amber-700 pointer-events-none" />
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className={`w-full pl-9 pr-3 py-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.dateOfBirth ? "border-rose-500" : "border-amber-200"
                }`}
              />
            </div>
            {errors.dateOfBirth && <p className="text-rose-600 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              Time of Birth <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 absolute left-3 top-3.5 text-amber-700 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. 08:30 AM"
                value={timeOfBirth}
                onChange={(e) => setTimeOfBirth(e.target.value)}
                className={`w-full pl-9 pr-3 py-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.timeOfBirth ? "border-rose-500" : "border-amber-200"
                }`}
              />
            </div>
            {errors.timeOfBirth && <p className="text-rose-600 text-xs mt-1">{errors.timeOfBirth}</p>}
          </div>
        </div>

        {/* Place of Birth */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Place of Birth <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-amber-700 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Indore, Madhya Pradesh"
              value={placeOfBirth}
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              className={`w-full pl-9 pr-3 py-2.5 bg-amber-50/40 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.placeOfBirth ? "border-rose-500" : "border-amber-200"
              }`}
            />
          </div>
          {errors.placeOfBirth && <p className="text-rose-600 text-xs mt-1">{errors.placeOfBirth}</p>}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1">
            Specific Question / Concerns (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Asking about marriage timing, job change, etc."
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
  );
};
