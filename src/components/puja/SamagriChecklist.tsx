"use client";

import React, { useState } from "react";
import { PackageCheck, CheckCircle2, Info } from "lucide-react";

interface SamagriChecklistProps {
  samagriList: string[];
}

export const SamagriChecklist: React.FC<SamagriChecklistProps> = ({ samagriList }) => {
  const [selectedOption, setSelectedOption] = useState<"panditji" | "customer">("panditji");

  return (
    <div className="bg-white border border-amber-200/90 rounded-2xl p-5 md:p-6 shadow-xs my-6">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
          <PackageCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold font-serif text-amber-950">
            Puja Samagri (पूजा सामग्री विकल्प)
          </h3>
          <p className="text-xs text-slate-500">
            Aap apni suvidha ke anusaar samagri option chuna sakte hain
          </p>
        </div>
      </div>

      {/* Option Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <div
          onClick={() => setSelectedOption("panditji")}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
            selectedOption === "panditji"
              ? "border-amber-700 bg-amber-50/90 shadow-xs"
              : "border-amber-100 bg-slate-50/50 hover:bg-amber-50/30"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <input
              type="radio"
              name="samagriOption"
              checked={selectedOption === "panditji"}
              onChange={() => setSelectedOption("panditji")}
              className="mt-1 accent-amber-700 w-4 h-4 shrink-0"
            />
            <div>
              <h4 className="text-sm font-bold text-amber-950">
                Option 1 — Panditji Brings Samagri
              </h4>
              <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                (सामग्री पंडित जी लाएंगे - आसान और बेफिक्र)
              </span>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Panditji aam samagri (Ghee, Havan mix, Kalash, Kumkum, Moli) sath layenge. Aapko bas phool, phal aur doodh rakhna hoga.
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setSelectedOption("customer")}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
            selectedOption === "customer"
              ? "border-amber-700 bg-amber-50/90 shadow-xs"
              : "border-amber-100 bg-slate-50/50 hover:bg-amber-50/30"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <input
              type="radio"
              name="samagriOption"
              checked={selectedOption === "customer"}
              onChange={() => setSelectedOption("customer")}
              className="mt-1 accent-amber-700 w-4 h-4 shrink-0"
            />
            <div>
              <h4 className="text-sm font-bold text-amber-950">
                Option 2 — Customer Arranges Samagri
              </h4>
              <span className="text-[11px] font-semibold text-amber-800 block mt-0.5">
                (सामग्री आप खुद लाएंगे)
              </span>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Hum aapko poori samagri ki list denge. Aap Puja se pehle bazaar se saaman lana aur tayyar rakhna hoga.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Display */}
      <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2.5 flex items-center gap-1.5">
          <span>Required Puja Samagri List (सामग्री सूची):</span>
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {samagriList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-amber-200/60 text-xs font-medium text-slate-800"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center gap-2 text-xs text-slate-600">
          <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>
            Exact quantity aur jankari inquiry bhejane ke baad WhatsApp par confirm ki jayegi.
          </span>
        </div>
      </div>
    </div>
  );
};
