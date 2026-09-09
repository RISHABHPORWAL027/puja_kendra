import React from "react";
import { PujaService } from "@/types";
import { PujaCard } from "./PujaCard";
import { SearchX, RefreshCw } from "lucide-react";

interface PujaGridProps {
  pujas: PujaService[];
  onResetFilters?: () => void;
}

export const PujaGrid: React.FC<PujaGridProps> = ({ pujas, onResetFilters }) => {
  if (pujas.length === 0) {
    return (
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto my-8">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-serif text-amber-950 mb-2">
          No Pujas Found
        </h3>
        <p className="text-slate-600 text-sm mb-6">
          We couldn&apos;t find any Puja matching your search query or selected filters. Try adjusting your search term or browsing popular services.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-amber-800 text-white font-semibold text-sm shadow-md hover:bg-amber-900 transition-all inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pujas.map((puja) => (
        <PujaCard key={puja.id} puja={puja} />
      ))}
    </div>
  );
};
