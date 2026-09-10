import React from "react";
import Link from "next/link";
import { Flame, MessageSquare, Heart } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-amber-100 border-t border-amber-900 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-amber-900/60">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-800 to-amber-900 flex items-center justify-center shadow-md border border-amber-600/50">
                <Flame className="w-5 h-5 text-amber-100 fill-amber-300" />
              </div>
              <div>
                <span className="text-xl font-bold font-serif text-amber-50 tracking-tight block">
                  Puja Kendra
                </span>
                <span className="text-xs font-medium text-amber-300 block -mt-1">
                  Puja • Panditji • Kundli • Muhurat
                </span>
              </div>
            </Link>
            <p className="text-amber-200/80 text-sm leading-relaxed max-w-sm">
              Your trusted destination for authentic Vedic Pujas, experienced Panditji bookings at home or online via Zoom, Google Meet &amp; Call worldwide, Kundli analysis, and Muhurat selection.
            </p>
            <div className="pt-2">
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Puja Services */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
              Puja Services
            </h3>
            <ul className="space-y-2.5 text-sm text-amber-200/80">
              <li>
                <Link href="/puja" className="hover:text-amber-300 transition-colors">
                  All Pujas
                </Link>
              </li>
              <li>
                <Link href="/puja?mode=home" className="hover:text-amber-300 transition-colors">
                  Home Puja Services
                </Link>
              </li>
              <li>
                <Link href="/online-puja" className="hover:text-amber-300 transition-colors">
                  Online Puja (Zoom / Meet / Call)
                </Link>
              </li>
              <li>
                <Link href="/puja?category=Havan+%26+Shanti" className="hover:text-amber-300 transition-colors">
                  Havan & Homam
                </Link>
              </li>
              <li>
                <Link href="/upcoming-pujas" className="hover:text-amber-300 transition-colors">
                  Festival Pujas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kundli & Astrology */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
              Kundli & Astrology
            </h3>
            <ul className="space-y-2.5 text-sm text-amber-200/80">
              <li>
                <Link href="/kundli-astrology" className="hover:text-amber-300 transition-colors">
                  Janam Kundli
                </Link>
              </li>
              <li>
                <Link href="/kundli-astrology" className="hover:text-amber-300 transition-colors">
                  Kundli Matching (Gun Milan)
                </Link>
              </li>
              <li>
                <Link href="/kundli-astrology" className="hover:text-amber-300 transition-colors">
                  Astrology Consultation
                </Link>
              </li>
              <li>
                <Link href="/kundli-astrology" className="hover:text-amber-300 transition-colors">
                  Dosha & Vedic Remedies
                </Link>
              </li>
              <li>
                <Link href="/muhurat" className="hover:text-amber-300 transition-colors">
                  Panchang Muhurat
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-amber-200/80">
              <li>
                <Link href="/upcoming-pujas" className="hover:text-amber-300 transition-colors">
                  Upcoming Festivals
                </Link>
              </li>
              <li>
                <Link href="/muhurat" className="hover:text-amber-300 transition-colors">
                  Muhurat Guidance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-amber-300/70 gap-4">
          <p>© {new Date().getFullYear()} Puja Kendra. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for Indian spiritual devotion with <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          </p>
        </div>
      </div>
    </footer>
  );
};
