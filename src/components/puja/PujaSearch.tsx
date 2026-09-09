"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Flame, ChevronRight } from "lucide-react";
import { pujasData } from "@/data/pujas";
import { PujaService } from "@/types";

interface PujaSearchProps {
  onSearchSubmit?: (query: string) => void;
  className?: string;
  initialQuery?: string;
}

export const PujaSearch: React.FC<PujaSearchProps> = ({
  onSearchSubmit,
  className = "",
  initialQuery = ""
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Compute suggestions reactively without set-state-in-effect
  const suggestions: PujaService[] = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase().trim();
    return pujasData
      .filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          (p.hindiName && p.hindiName.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.occasions.some((occ) => occ.toLowerCase().includes(q))
        );
      })
      .slice(0, 6);
  }, [query]);

  const isOpen = isFocused && suggestions.length > 0;

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    setIsFocused(false);
    if (onSearchSubmit) onSearchSubmit("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsFocused(false);
      if (onSearchSubmit) {
        onSearchSubmit(query);
      } else {
        router.push(`/puja?q=${encodeURIComponent(query)}`);
      }
    }
  };

  const handleSelectSuggestion = (slug: string) => {
    setIsFocused(false);
    router.push(`/puja/${slug}`);
  };

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
        What Puja are you looking for?
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-amber-700">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          placeholder="Search Puja, Havan, Festival, Muhurat..."
          className="w-full pl-12 pr-12 py-3.5 md:py-4 bg-white rounded-2xl border-2 border-amber-300 text-slate-900 text-sm md:text-base font-medium shadow-lg focus:outline-none focus:border-amber-600 focus:ring-4 focus:ring-amber-400/20 transition-all placeholder:text-slate-400"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 p-1 rounded-full text-slate-400 hover:text-amber-900 hover:bg-amber-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Auto-complete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-amber-200 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-amber-100 max-h-96 overflow-y-auto animate-in fade-in duration-150">
          <div className="p-2.5 bg-amber-50/80 text-[11px] font-bold uppercase tracking-wider text-amber-900 flex justify-between items-center">
            <span>Search Suggestions ({suggestions.length})</span>
            <span className="text-amber-700 text-[10px]">Press Enter to see all</span>
          </div>

          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectSuggestion(item.slug)}
              className="p-3.5 hover:bg-amber-100/60 cursor-pointer transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-serif text-slate-900 group-hover:text-amber-900">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="text-amber-800 font-medium">{item.category}</span>
                    <span>•</span>
                    {item.startingPrice ? (
                      <span>Starting ₹{item.startingPrice}</span>
                    ) : (
                      <span>Price on Inquiry</span>
                    )}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-transform" />
            </div>
          ))}

          <div
            onClick={() => {
              setIsFocused(false);
              if (onSearchSubmit) onSearchSubmit(query);
              else router.push(`/puja?q=${encodeURIComponent(query)}`);
            }}
            className="p-3 text-center text-xs font-bold text-amber-800 bg-amber-100/40 hover:bg-amber-100 cursor-pointer transition-colors"
          >
            View all results for &quot;{query}&quot; →
          </div>
        </div>
      )}
    </div>
  );
};
