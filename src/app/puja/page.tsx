"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { pujasData } from "@/data/pujas";
import { PujaCategory } from "@/types";
import { PujaCard } from "@/components/puja/PujaCard";
import { PujaFilter } from "@/components/puja/PujaFilter";
import { PujaSearch } from "@/components/puja/PujaSearch";
import { Flame, Sparkles } from "lucide-react";

function PujaDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams?.get("q") || "";
  const initialCategory = searchParams?.get("category") || "all";
  const initialOccasion = searchParams?.get("occasion") || "all";
  const initialMode = searchParams?.get("mode") || "all";

  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState<string>(initialOccasion);
  const [selectedMode, setSelectedMode] = useState<string>(initialMode);
  const [selectedDeity, setSelectedDeity] = useState<string>("all");

  // Extract unique categories, occasions, and deities
  const categories: PujaCategory[] = [
    "Home & Property",
    "Child & Family",
    "Vehicle",
    "Business",
    "Marriage",
    "Devotional",
    "Havan & Shanti",
    "Special Pujas"
  ];

  const occasions = useMemo(() => {
    const set = new Set<string>();
    pujasData.forEach((p) => p.occasions.forEach((occ) => set.add(occ)));
    return Array.from(set).sort();
  }, []);

  const deities = useMemo(() => {
    const set = new Set<string>();
    pujasData.forEach((p) => {
      if (p.deity) set.add(p.deity);
    });
    return Array.from(set).sort();
  }, []);

  // Filtered dataset
  const filteredPujas = useMemo(() => {
    return pujasData.filter((p) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          p.name.toLowerCase().includes(q) ||
          (p.hindiName && p.hindiName.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.occasions.some((occ) => occ.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // Occasion filter
      if (selectedOccasion !== "all" && !p.occasions.includes(selectedOccasion)) {
        return false;
      }

      // Mode filter
      if (selectedMode === "home" && !p.modes.includes("home")) return false;
      if (selectedMode === "online" && !p.modes.includes("online")) return false;

      // Deity filter
      if (selectedDeity !== "all" && p.deity !== selectedDeity) return false;

      return true;
    });
  }, [searchQuery, selectedCategory, selectedOccasion, selectedMode, selectedDeity]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedOccasion("all");
    setSelectedMode("all");
    setSelectedDeity("all");
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-3.5 py-1 rounded-full border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-700" />
            Complete Service Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-amber-950 mt-3">
            Puja &amp; Havan Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore 60+ authentic Hindu Puja services, Havan, Sanskars, and Shanti rituals for home or online live session.
          </p>

          {/* Search bar inside header */}
          <div className="mt-8">
            <PujaSearch
              initialQuery={searchQuery}
              onSearchSubmit={(q) => setSearchQuery(q)}
            />
          </div>
        </div>

        {/* Filters Toolbar */}
        <PujaFilter
          categories={categories}
          occasions={occasions}
          deities={deities}
          selectedCategory={selectedCategory}
          selectedOccasion={selectedOccasion}
          selectedMode={selectedMode}
          selectedDeity={selectedDeity}
          onCategoryChange={(c) => setSelectedCategory(c)}
          onOccasionChange={(o) => setSelectedOccasion(o)}
          onModeChange={(m) => setSelectedMode(m)}
          onDeityChange={(d) => setSelectedDeity(d)}
          onReset={handleResetFilters}
          totalResultsCount={filteredPujas.length}
        />

        {/* Card Grid or Empty State */}
        {filteredPujas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPujas.map((puja) => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-amber-200/90 rounded-2xl p-10 text-center max-w-lg mx-auto my-8">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold font-serif text-amber-950">
              No Puja Found
            </h3>
            <p className="text-slate-600 text-sm mt-2 mb-6">
              No services matched your specific filter choices. Try broadening your criteria or reset all filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-amber-800 text-white font-bold text-sm shadow-md hover:bg-amber-900 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PujaDirectoryPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-amber-900 font-medium">Loading Pujas...</div>}>
      <PujaDirectoryContent />
    </Suspense>
  );
}
