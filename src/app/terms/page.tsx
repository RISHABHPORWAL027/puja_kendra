import React from "react";

export const metadata = {
  title: "Terms of Service | Puja Kendra",
  description: "Terms of Service for Puja Kendra platform."
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-amber-200/90 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <h1 className="text-3xl font-bold font-serif text-amber-950">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: September 2026
          </p>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              Welcome to <strong>Puja Kendra</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              1. Services Overview
            </h2>
            <p>
              Puja Kendra provides an informational discovery and inquiry routing platform for Vedic Pujas, Panditji booking (Home &amp; Online), Kundli consultations, and Panchang Muhurat guidance.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              2. Inquiry &amp; Booking Process
            </h2>
            <p>
              Submitting an inquiry form on Puja Kendra does not constitute a guaranteed booking or binding commercial contract. All bookings, timings, pricing, and Panditji availability are confirmed mutually on WhatsApp.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              3. Spiritual &amp; Astrological Disclaimer
            </h2>
            <p>
              Pujas, Havans, and Astrology consultations are conducted in accordance with traditional Hindu Vedic scriptures and Panchang calculations. Results are spiritual in nature; Puja Kendra does not make medical, legal, financial, or guaranteed material outcome claims.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              4. Changes to Terms
            </h2>
            <p>
              We reserve the right to revise or update these terms at any time. Continued use of the website following any changes signifies acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
