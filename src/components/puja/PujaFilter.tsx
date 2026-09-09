"use client";

import React from "react";
import { PujaCategory } from "@/types";
import { Filter, RotateCcw } from "lucide-react";

interface PujaFilterProps {
  categories: PujaCategory[];
  occasions: string[];
  deities: string[];
  selectedCategory: string;
  selectedOccasion: string;
  selectedMode: string; // "all" | "home" | "online"
  selectedDeity: string;
  onCategoryChange: (cat: string) => void;
  onOccasionChange: (occ: string) => void;
  onModeChange: (mode: string) => void;
  onDeityChange: (deity: string) => void;
  onReset: () => void;
  totalResultsCount: number;
}

export const PujaFilter: React.FC<PujaFilterProps> = ({
  categories,
  occasions,
  deities,
  selectedCategory,
  selectedOccasion,
  selectedMode,
  selectedDeity,
  onCategoryChange,
  onOccasionChange,
  onModeChange,
  onDeityChange,
  onReset,
  totalResultsCount
}) => {
  const isFiltered =
    selectedCategory !== "all" ||
    selectedOccasion !== "all" ||
    selectedMode !== "all" ||
    selectedDeity !== "all";

  return (
    <div className="bg-white border border-amber-200/80 rounded-2xl p-4 md:p-6 shadow-xs mb-8 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-amber-100">
        <div className="flex items-center gap-2 text-amber-950 font-bold font-serif text-base">
          <Filter className="w-4 h-4 text-amber-700" />
          <span>Filter Pujas ({totalResultsCount} Available)</span>
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1 hover:underline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Occasion Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Occasion
          </label>
          <select
            value={selectedOccasion}
            onChange={(e) => onOccasionChange(e.target.value)}
            className="w-full p-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          >
            <option value="all">All Occasions</option>
            {occasions.map((occ) => (
              <option key={occ} value={occ}>
                {occ}
              </option>
            ))}
          </select>
        </div>

        {/* Mode Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Puja Mode (Home / Online)
          </label>
          <select
            value={selectedMode}
            onChange={(e) => onModeChange(e.target.value)}
            className="w-full p-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          >
            <option value="all">All Modes (Home & Online)</option>
            <option value="home">Puja at Home Only</option>
            <option value="online">Online Puja Only (Google Meet)</option>
          </select>
        </div>

        {/* Deity Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Deity / Devata
          </label>
          <select
            value={selectedDeity}
            onChange={(e) => onDeityChange(e.target.value)}
            className="w-full p-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          >
            <option value="all">All Deities</option>
            {deities.map((deity) => (
              <option key={deity} value={deity}>
                {deity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
