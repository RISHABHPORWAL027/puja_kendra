"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Festival } from "@/types";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

interface FestivalCardProps {
  festival: Festival;
}

export const FestivalCard: React.FC<FestivalCardProps> = ({ festival }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-amber-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Banner */}
        <div className="h-44 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 relative overflow-hidden flex items-center justify-center p-4">
          {!imgError ? (
            <img
              src={festival.image}
              alt={festival.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          ) : (
            <div className="text-center">
              <Sparkles className="w-10 h-10 text-amber-300 mx-auto mb-1 opacity-80" />
              <span className="text-xs font-serif text-amber-200 uppercase tracking-widest">
                Sacred Festival
              </span>
            </div>
          )}

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-amber-950/90 backdrop-blur-xs border border-amber-400/40 text-amber-100 p-2.5 rounded-xl text-center shadow-lg">
            <span className="text-xs uppercase font-extrabold text-amber-400 block tracking-wider">
              {festival.month}
            </span>
            <span className="text-xl font-black font-serif text-white leading-none block my-0.5">
              {festival.date.split(" ")[0]}
            </span>
            <span className="text-[10px] text-amber-200 block font-medium">
              {festival.day}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold font-serif text-amber-950 group-hover:text-amber-700 transition-colors">
            {festival.name}
          </h3>
          {festival.hindiName && (
            <span className="text-xs font-semibold text-amber-800 block mt-0.5 mb-2">
              {festival.hindiName}
            </span>
          )}
          <p className="text-slate-600 text-sm leading-snug line-clamp-2 mb-4">
            {festival.significance}
          </p>

          {/* Linked Pujas */}
          <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-1.5 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-700" />
              Recommended Festival Pujas:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {festival.suggestedPujaSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/puja/${slug}`}
                  className="text-xs bg-white text-amber-900 border border-amber-200 px-2.5 py-1 rounded-md hover:bg-amber-100 transition-colors font-medium"
                >
                  {slug.replace(/-/g, " ").toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-5 pt-0 mt-auto">
        <Link
          href={`/upcoming-pujas/${festival.slug}`}
          className="w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
        >
          View Festival Details &amp; Book
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
