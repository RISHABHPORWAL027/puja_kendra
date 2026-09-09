"use client";

import React, { useState } from "react";
import { PujaService, PujaMode } from "@/types";
import { InquiryModal } from "@/components/ui/InquiryModal";
import { MessageSquare } from "lucide-react";

interface DetailPageClientActionsProps {
  puja: PujaService;
}

export const DetailPageClientActions: React.FC<DetailPageClientActionsProps> = ({ puja }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<PujaMode>(puja.modes[0] || "home");

  const handleOpen = (mode: PujaMode) => {
    setSelectedMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {puja.modes.includes("home") && (
          <button
            type="button"
            onClick={() => handleOpen("home")}
            className="px-6 py-3.5 rounded-2xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-current" />
            Book Home Puja
          </button>
        )}

        {puja.modes.includes("online") && (
          <button
            type="button"
            onClick={() => handleOpen("online")}
            className="px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Book Online Puja
          </button>
        )}
      </div>

      <InquiryModal
        puja={puja}
        initialMode={selectedMode}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
