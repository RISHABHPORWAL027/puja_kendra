import React from "react";
import { Search, Send, MessageSquare, Flame } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "1",
      icon: <Search className="w-5 h-5 text-amber-700" />,
      title: "1. Puja Chuniye (पूजा चुनिए)",
      description: "Apne shubh avsar, griha pravesh ya festival ke anusaar Puja chuniye."
    },
    {
      step: "2",
      icon: <Send className="w-5 h-5 text-amber-700" />,
      title: "2. Inquiry Bhejiye (जानकारी भेजिए)",
      description: "Apni pasand ki date, samay slot aur samagri option select karein."
    },
    {
      step: "3",
      icon: <MessageSquare className="w-5 h-5 text-amber-700" />,
      title: "3. WhatsApp Par Confirm Karein",
      description: "Hamari team WhatsApp par Panditji ki availability aur timing confirm karegi."
    },
    {
      step: "4",
      icon: <Flame className="w-5 h-5 text-amber-700" />,
      title: "4. Puja Karwayein (पूजा संपन्न करें)",
      description: "Panditji ghar aakar ya live Google Meet video call par Puja karwayenge."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-amber-950 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-900/80 px-3 py-1 rounded-full border border-amber-800">
            Aasan 4-Step Process (सरल प्रक्रिया)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-50 mt-3">
            How Puja Kendra Works (पूजा केंद्र कैसे काम करता है)
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base mt-2">
            Koi mushkil form ya registration nahi. Seedhe WhatsApp par aasan booking karein.
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
