import React from "react";
import Link from "next/link";
import { occasionsData } from "@/data/occasions";
import {
  Home,
  Car,
  Building2,
  Heart,
  Baby,
  Users,
  TrendingUp,
  Sparkles,
  Flame,
  Calendar,
  Video,
  ArrowRight
} from "lucide-react";

const renderIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-amber-700 group-hover:text-amber-100 transition-colors duration-200" };
  switch (iconName) {
    case "Home": return <Home {...props} />;
    case "Car": return <Car {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Heart": return <Heart {...props} />;
    case "Baby": return <Baby {...props} />;
    case "Users": return <Users {...props} />;
    case "TrendingUp": return <TrendingUp {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Flame": return <Flame {...props} />;
    case "Calendar": return <Calendar {...props} />;
    case "Video": return <Video {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const OccasionGrid: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
            Browse By Occasion
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950 mt-2">
            What do you need Puja for?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your life milestone or occasion to find the most suitable authentic Puja rituals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {occasionsData.map((occ) => (
            <Link
              key={occ.id}
              href={occ.slug === "online-puja" ? "/online-puja" : `/puja?occasion=${encodeURIComponent(occ.name)}`}
              className="group bg-white border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 group-hover:bg-amber-800 transition-all duration-200 flex items-center justify-center mb-3 group-hover:scale-110 shadow-xs group-hover:shadow-md">
                {renderIcon(occ.icon)}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold font-serif text-amber-950 group-hover:text-amber-700 transition-colors">
                  {occ.name}
                </h3>
                {occ.hindiName && (
                  <span className="text-[11px] text-amber-800/80 font-medium block mt-0.5">
                    {occ.hindiName}
                  </span>
                )}
              </div>
              <div className="mt-3 text-xs font-semibold text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                Browse <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
