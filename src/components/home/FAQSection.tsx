import React from "react";
import { Accordion } from "@/components/ui/Accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Are Panditji, Pujari Ji & Purohit Ji degree verified?",
      answer: "Yes! All our Panditji, Pujari Ji, and Purohit Ji hold verified Veda-Shastri / Acharya degrees in Vedic Karmakand and ritual Vidhi from authentic Sanskrit Vishwavidyalayas and Gurukuls."
    },
    {
      question: "How do I book a Puja on Puja Kendra?",
      answer: "Choose your required Puja from our directory, fill in the short inquiry form with your date and time preferences, and click 'Send Inquiry on WhatsApp'. Our team will instantly confirm Panditji availability on WhatsApp."
    },
    {
      question: "Can Puja be performed online?",
      answer: "Yes! Selected Pujas (Satyanarayan Katha, Rudrabhishek, Ganesh Puja, Lakshmi Puja, etc.) can be performed online through a live Google Meet video call with Panditji."
    },
    {
      question: "Does Panditji bring Puja Samagri?",
      answer: "Depending on your selection during inquiry, you can choose Option 1 (Panditji brings all ritual Samagri except fresh flowers/fruits) or Option 2 (Customer arranges Samagri according to our provided list)."
    },
    {
      question: "Can I choose my preferred date and time?",
      answer: "Yes, you can select your preferred date and time slot in the inquiry form. Final timing is confirmed based on Shubh Muhurat and Panditji availability."
    },
    {
      question: "Do I need an account or registration to book?",
      answer: "No. Puja Kendra V1 does not require an account, password, or sign-up. All inquiries are handled directly via WhatsApp for your convenience."
    },
    {
      question: "What locations/cities are supported?",
      answer: "Our initial home Puja operational service area is Indore, Madhya Pradesh. Online Pujas (Google Meet) can be booked from anywhere in India and worldwide."
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-amber-950 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about booking Panditji, Pujari Ji &amp; Purohit Ji with Puja Kendra.
          </p>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
};
