"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PujaService, PujaMode } from "@/types";
import { MapPin, Video, ArrowRight, Sparkles, Flame, Check } from "lucide-react";

// Lazy load InquiryModal dialog component
const InquiryModal = dynamic(
  () => import("@/components/ui/InquiryModal").then((mod) => mod.InquiryModal),
  { ssr: false }
);

interface PujaCardProps {
  puja: PujaService;
}

export const PujaCard: React.FC<PujaCardProps> = ({ puja }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<PujaMode>("home");
  const [imgError, setImgError] = useState(false);

  const openBookModal = (e: React.MouseEvent, mode: PujaMode) => {
    e.preventDefault();
    e.stopPropagation();
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="group bg-white border border-amber-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1">
        {/* Card Header & Badge */}
        <div>
          {/* Top Banner / Image Placeholder */}
          <div className="h-44 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 relative overflow-hidden flex items-center justify-center p-4">
            {!imgError ? (
              <img
                src={puja.image}
                alt={puja.name}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
            ) : (
              <div className="text-center p-4">
                <Flame className="w-12 h-12 text-amber-300 mx-auto opacity-70 mb-1" />
                <span className="text-xs font-serif text-amber-200 uppercase tracking-widest">
                  {puja.category}
                </span>
              </div>
            )}

            {/* Popular Badge */}
            {puja.popular && (
              <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-amber-950" />
                Popular
              </span>
            )}

            {/* Modes Badges */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
              {puja.modes.includes("home") && (
                <span className="bg-slate-900/85 backdrop-blur-xs text-amber-100 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1 font-medium border border-amber-500/30">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  Home
                </span>
              )}
              {puja.modes.includes("online") && (
                <span className="bg-slate-900/85 backdrop-blur-xs text-emerald-300 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1 font-medium border border-emerald-500/30">
                  <Video className="w-3 h-3 text-emerald-400" />
                  Online
                </span>
              )}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1">
              {puja.category}
            </div>
            <h3 className="text-lg font-bold font-serif text-amber-950 group-hover:text-amber-700 transition-colors line-clamp-1">
              {puja.name}
            </h3>
            {puja.hindiName && (
              <span className="text-xs text-amber-800/80 font-medium block -mt-0.5 mb-2">
                {puja.hindiName}
              </span>
            )}
            <p className="text-slate-600 text-sm leading-snug line-clamp-2 mb-4">
              {puja.shortDescription}
            </p>

            {/* Samagri badge */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 bg-amber-50/80 p-2 rounded-lg border border-amber-100">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Panditji Brings Samagri Option</span>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-5 pt-0 mt-auto border-t border-amber-100/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              Starting From
            </span>
            {puja.startingPrice ? (
              <span className="text-lg font-extrabold text-amber-900">
                ₹{puja.startingPrice.toLocaleString("en-IN")}
              </span>
            ) : (
              <span className="text-sm font-semibold text-slate-700">
                Price on Inquiry
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/puja/${puja.slug}`}
              className="px-3 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold transition-colors flex items-center gap-1"
            >
              Details
            </Link>
            <button
              type="button"
              onClick={(e) => openBookModal(e, puja.modes[0] || "home")}
              className="px-3.5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1"
            >
              Book
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loaded Inquiry Modal */}
      {isModalOpen && (
        <InquiryModal
          puja={puja}
          initialMode={modalMode}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
