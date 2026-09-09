"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const MobileWhatsAppCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-amber-950/90 backdrop-blur-md border-t border-amber-800 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I would like to inquire about booking a Puja.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-sm text-center shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-98"
        >
          <MessageSquare className="w-4 h-4 fill-current text-emerald-200" />
          Book Puja on WhatsApp
        </a>
      </div>
    </div>
  );
};
