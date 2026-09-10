import React from "react";
import { CheckCircle2, ShieldCheck, HeartHandshake, MessageSquare, Video, Award } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-amber-700" />,
      title: "Verified Degree Panditji, Pujari & Purohit",
      desc: "All our Panditji, Pujari Ji & Purohit Ji hold verified Veda-Shastri / Acharya degrees in Vedic Karmakand from authentic Sanskrit Gurukuls."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-amber-700" />,
      title: "Simple Booking Process",
      desc: "No accounts, passwords, or complex checkout portals. Book in seconds via WhatsApp."
    },
    {
      icon: <Video className="w-6 h-6 text-amber-700" />,
      title: "Worldwide Call, Zoom & Meet Puja",
      desc: "All Pujas & Astrology Consultations are conducted globally via Phone Call, Zoom, and Google Meet for NRIs and global devotees."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-700" />,
      title: "Clear Ritual Information",
      desc: "Transparent descriptions, duration, significance, and deity guidance before booking."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-700" />,
      title: "Flexible Samagri Options",
      desc: "Choose whether Panditji brings complete ritual Samagri or you arrange it yourself."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-700" />,
      title: "Direct WhatsApp Support",
      desc: "Get instant personal guidance on date availability, Muhurat, and special requests."
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
            Our Commitment &amp; Trust
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950 mt-3">
            Why Choose Puja Kendra
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Punditji, Pujari Ji &amp; Purohit Ji verified with authentic Veda-Shastri degree certifications for accurate Vedic Vidhi.
          </p>
        </div>

        {/* Highlight Banner: Degree Verified Pandits */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white rounded-2xl p-6 mb-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-amber-800/50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Award className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300 block">
                100% Certified Vedic Acharyas
              </span>
              <h3 className="text-xl font-bold font-serif text-amber-50">
                Degree Verified Panditji, Pujari &amp; Purohit Ji
              </h3>
              <p className="text-amber-200/80 text-xs sm:text-sm mt-0.5">
                Every Panditji, Pujari Ji &amp; Purohit Ji is background-checked and holds a Shastri/Acharya degree in Vedic rituals.
              </p>
            </div>
          </div>
          <div className="shrink-0 bg-amber-400/20 border border-amber-400/30 text-amber-200 px-4 py-2 rounded-xl text-xs font-bold text-center">
            ✓ Veda-Shastri Certified
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center mb-4">
                {pt.icon}
              </div>
              <h3 className="text-lg font-bold font-serif text-amber-950 mb-2">
                {pt.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
