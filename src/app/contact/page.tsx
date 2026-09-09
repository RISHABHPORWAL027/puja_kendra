"use client";

import React, { useState } from "react";
import { MessageSquare, MapPin, Send } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Namaste Puja Kendra 🙏\n\n`;
    text += `Name: ${name}\n`;
    text += `Mobile: ${phone}\n`;
    text += `Subject: ${subject}\n\n`;
    text += `Message: ${message}\n`;

    const waUrl = buildDirectWhatsAppUrl(text);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-3.5 py-1 rounded-full border border-amber-300">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            Direct Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-amber-950 mt-3">
            Contact Puja Kendra
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Have a question about Puja availability, Panditji booking, Samagri preferences, or Kundli analysis? We are happy to assist you on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-amber-950 text-amber-50 rounded-3xl p-8 shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-serif text-amber-100 mb-2">
                  Puja Kendra Services
                </h2>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  Your place for Puja, Panditji &amp; Vedic Services. Serving home Pujas in Indore, MP, and online Pujas worldwide.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-amber-800">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-amber-400">
                      Primary Service Area
                    </h3>
                    <p className="text-sm font-medium text-amber-100 mt-0.5">
                      Indore, Madhya Pradesh (Expanding to Bhopal, Ujjain &amp; major MP cities)
                    </p>
                    <p className="text-xs text-emerald-300 mt-1">
                      • Online Google Meet Pujas available worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-amber-400">
                      WhatsApp Inquiry Support
                    </h3>
                    <p className="text-sm font-medium text-amber-100 mt-0.5">
                      Mon – Sun: 7:00 AM – 9:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-800">
                <a
                  href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I have a general inquiry about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-emerald-200" />
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-amber-200/90 rounded-3xl p-6 md:p-8 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-950 mb-1">
              Send Us a Message
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Fill out the form below to initiate an inquiry. Your message will be formatted and opened in WhatsApp.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anjali Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 bg-amber-50/40 rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Indian Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-amber-50/40 rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 bg-amber-50/40 rounded-xl border border-amber-200 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Home Puja Booking">Home Puja Booking</option>
                  <option value="Online Puja Inquiry">Online Puja Inquiry</option>
                  <option value="Kundli / Astrology">Kundli / Astrology</option>
                  <option value="Muhurat Selection">Muhurat Selection</option>
                  <option value="Panditji Registration">Panditji Registration / Join Team</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Your Message / Requirement <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 bg-amber-50/40 rounded-xl border border-amber-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
