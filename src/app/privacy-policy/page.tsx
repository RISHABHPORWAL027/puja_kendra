import React from "react";

export const metadata = {
  title: "Privacy Policy | Puja Kendra",
  description: "Privacy Policy for Puja Kendra services."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-amber-200/90 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <h1 className="text-3xl font-bold font-serif text-amber-950">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: September 2026
          </p>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              At <strong>Puja Kendra</strong>, accessible from pujakendra.com, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by Puja Kendra and how we use it.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              1. Information We Collect
            </h2>
            <p>
              Puja Kendra V1 operates without a database or user registration system. When you use our inquiry forms (Puja booking, Kundli inquiry, Muhurat inquiry), the information you type (Name, Mobile, Address, Birth Details) is processed locally on your device to format a pre-filled WhatsApp message.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              2. How We Use Your Information
            </h2>
            <p>
              Any information shared through WhatsApp is used solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Coordinating Panditji schedule and availability</li>
              <li>Providing Puja Samagri checklists and pricing details</li>
              <li>Sending live Google Meet links for Online Pujas</li>
              <li>Providing requested Kundli &amp; Astrology consultations</li>
            </ul>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              3. Data Security &amp; Sharing
            </h2>
            <p>
              We do not sell, trade, or rent users&apos; personal identification information to third parties. We do not store financial credentials or credit card information.
            </p>

            <h2 className="text-xl font-bold font-serif text-amber-900 pt-2">
              4. Contact Us
            </h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us via WhatsApp or through our Contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
