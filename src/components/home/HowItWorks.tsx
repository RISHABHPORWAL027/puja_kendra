import React from "react";
import { Search, Send, MessageSquare, Flame } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "1",
      icon: <Search className="w-5 h-5 text-amber-200" />,
      title: "1. Select Your Puja",
      description: "Choose the suitable ritual for your home occasion, festival, or life milestone."
    },
    {
      step: "2",
      icon: <Send className="w-5 h-5 text-amber-200" />,
      title: "2. Send Inquiry",
      description: "Pick your preferred date, time slot, and samagri preference."
    },
    {
      step: "3",
      icon: <MessageSquare className="w-5 h-5 text-amber-200" />,
      title: "3. Confirm on WhatsApp",
      description: "Our team instantly confirms Panditji availability and auspicious Muhurat."
    },
    {
      step: "4",
      icon: <Flame className="w-5 h-5 text-amber-200" />,
      title: "4. Perform Rituals",
      description: "Panditji conducts authentic Vedic Puja at your home or live on Google Meet."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-amber-950 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-900/80 px-3 py-1 rounded-full border border-amber-800">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-50 mt-3">
            How Puja Kendra Works
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base mt-2">
            No complex registration or forms required. Book directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-amber-900/40 border border-amber-800/80 rounded-2xl p-5 relative group hover:border-amber-500/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-800/80 text-amber-200 flex items-center justify-center mb-3 font-bold text-sm">
                {s.icon}
              </div>
              <h3 className="text-base font-bold font-serif text-amber-100 mb-1.5">
                {s.title}
              </h3>
              <p className="text-amber-200/70 text-xs leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
