import React from "react";
import { festivalsData } from "@/data/festivals";
import { FestivalCard } from "@/components/festivals/FestivalCard";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Upcoming Pujas & Hindu Festival Calendar | Puja Kendra",
  description: "Plan your festival Pujas for Ganesh Chaturthi, Sharad Navratri, Dhanteras, Diwali Mahalakshmi Pujan, Karwa Chauth, and Maha Shivratri."
};

export default function UpcomingPujasPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-3.5 py-1 rounded-full border border-amber-300">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            Date-Oriented Festival Discovery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-amber-950 mt-3">
            Upcoming Pujas &amp; Festivals
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Never miss an auspicious Hindu festival. Book Panditji early for festival Sthapana, Saptashati Path, Chopda Pujan, and Shivratri Rudrabhishek.
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivalsData.map((fest) => (
            <FestivalCard key={fest.id} festival={fest} />
          ))}
        </div>
      </div>
    </div>
  );
}
