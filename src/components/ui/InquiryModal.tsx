"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle, MessageSquare } from "lucide-react";
import { PujaService, PujaMode, PujaInquiryForm } from "@/types";
import { buildPujaWhatsAppUrl } from "@/lib/whatsapp";

interface InquiryModalProps {
  puja: PujaService | null;
  initialMode?: PujaMode;
  isOpen: boolean;
  onClose: () => void;
}

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const dd = String(tomorrow.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const InquiryModal: React.FC<InquiryModalProps> = ({
  puja,
  initialMode = "home",
  isOpen,
  onClose
}) => {
  const [mode, setMode] = useState<PujaMode>(initialMode);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState(getTomorrowDateString());
  const [preferredTime, setPreferredTime] = useState("Morning (8:00 AM - 11:00 AM)");
  const [samagriPreference, setSamagriPreference] = useState<"Panditji brings Samagri" | "Customer arranges Samagri">(
    "Panditji brings Samagri"
  );
  const [notes, setNotes] = useState("");
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen || !puja) return null;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    const cleanMobile = mobile.trim().replace(/\D/g, "");
    if (!cleanMobile) {
      errs.mobile = "Mobile number is required";
    } else if (cleanMobile.length !== 10 || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      errs.mobile = "Please enter a valid 10-digit Indian mobile number";
    }

    if (mode === "home" && !address.trim()) {
      errs.address = "Address / Area is required for Home Puja";
    }

    if (!preferredDate) {
      errs.preferredDate = "Preferred date is required";
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.preferredDate = "Preferred date cannot be in the past";
      }
    }

    if (!preferredTime) {
      errs.preferredTime = "Preferred time is required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const formData: PujaInquiryForm = {
      pujaName: puja.name,
      pujaSlug: puja.slug,
      mode,
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      address: mode === "home" ? address.trim() : undefined,
      preferredDate,
      preferredTime,
      samagriPreference,
      notes: notes.trim() || undefined
    };

    const waUrl = buildPujaWhatsAppUrl(formData);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-amber-50/95 border border-amber-200/80 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-rose-900 text-amber-50 p-5 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-amber-950/40 text-amber-100 hover:bg-amber-950/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block text-xs uppercase tracking-wider bg-amber-500/30 text-amber-200 px-2.5 py-0.5 rounded-full mb-1 font-medium">
            Send Inquiry via WhatsApp
          </span>
          <h2 className="text-xl md:text-2xl font-bold font-serif">{puja.name}</h2>
          {puja.startingPrice ? (
            <p className="text-amber-200 text-sm mt-0.5">
              Starting from ₹{puja.startingPrice.toLocaleString("en-IN")}
            </p>
          ) : (
            <p className="text-amber-200 text-sm mt-0.5">Price on Inquiry</p>
          )}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
          {/* Mode Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase text-amber-900 mb-2">
              Select Puja Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode("home")}
                disabled={!puja.modes.includes("home")}
                className={`py-2.5 px-3 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                  mode === "home"
                    ? "bg-amber-700 text-white border-amber-800 shadow-xs"
                    : puja.modes.includes("home")
                    ? "bg-white text-slate-700 border-amber-200 hover:bg-amber-100/50"
                    : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                }`}
              >
                <MapPin className="w-4 h-4 shrink-0" />
                Puja at Home
              </button>
              <button
                type="button"
                onClick={() => setMode("online")}
                disabled={!puja.modes.includes("online")}
                className={`py-2.5 px-3 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                  mode === "online"
                    ? "bg-amber-700 text-white border-amber-800 shadow-xs"
                    : puja.modes.includes("online")
                    ? "bg-white text-slate-700 border-amber-200 hover:bg-amber-100/50"
                    : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Online (Zoom / Call)
              </button>
            </div>
            {mode === "online" && (
              <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg mt-2 flex items-center gap-2 font-medium">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                Conducted Live Worldwide via Zoom, Google Meet &amp; Phone Call
              </p>
            )}
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3 text-amber-700" />
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.fullName ? "border-rose-500" : "border-amber-200"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              Mobile Number (WhatsApp) <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3 top-3 text-amber-700" />
              <input
                type="tel"
                placeholder="10-digit Mobile Number (e.g. 9876543210)"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                className={`w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  errors.mobile ? "border-rose-500" : "border-amber-200"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="text-rose-600 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Address (Only for Home Puja) */}
          {mode === "home" && (
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Address / Area <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-amber-700" />
                <input
                  type="text"
                  placeholder="e.g. Vijay Nagar / Old Palasia, Indore"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.address ? "border-rose-500" : "border-amber-200"
                  }`}
                />
              </div>
              {errors.address && (
                <p className="text-rose-600 text-xs mt-1">{errors.address}</p>
              )}
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Preferred Date <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-amber-700 pointer-events-none" />
                <input
                  type="date"
                  min={todayStr}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 bg-white rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.preferredDate ? "border-rose-500" : "border-amber-200"
                  }`}
                />
              </div>
              {errors.preferredDate && (
                <p className="text-rose-600 text-xs mt-1">{errors.preferredDate}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-950 mb-1">
                Preferred Time Slot <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-3 text-amber-700 pointer-events-none" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
                >
                  <option value="Morning (7:00 AM - 10:00 AM)">Morning (7:00 AM - 10:00 AM)</option>
                  <option value="Midday (10:00 AM - 1:00 PM)">Midday (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Samagri Preference */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              Samagri Preference
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 p-2.5 bg-white border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100/30 transition-colors">
                <input
                  type="radio"
                  name="samagriPref"
                  checked={samagriPreference === "Panditji brings Samagri"}
                  onChange={() => setSamagriPreference("Panditji brings Samagri")}
                  className="accent-amber-700 w-4 h-4"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Option 1 — Panditji brings complete Puja Samagri
                </span>
              </label>
              <label className="flex items-center gap-2 p-2.5 bg-white border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100/30 transition-colors">
                <input
                  type="radio"
                  name="samagriPref"
                  checked={samagriPreference === "Customer arranges Samagri"}
                  onChange={() => setSamagriPreference("Customer arranges Samagri")}
                  className="accent-amber-700 w-4 h-4"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Option 2 — Customer arranges Puja Samagri (List provided)
                </span>
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-amber-950 mb-1">
              Additional Notes or Specific Gotra/Language Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Preferred language Hindi, gotra requirement, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 bg-white rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-base"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            Send Inquiry on WhatsApp
          </button>
          <p className="text-[11px] text-center text-slate-500">
            Clicking will open WhatsApp with your pre-filled inquiry. No payment is required now.
          </p>
        </form>
      </div>
    </div>
  );
};
