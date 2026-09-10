"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare, Flame } from "lucide-react";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Puja", href: "/puja" },
    { name: "Online Puja", href: "/online-puja" },
    { name: "Kundli & Astrology", href: "/kundli-astrology" },
    { name: "Upcoming Pujas", href: "/upcoming-pujas" },
    { name: "Muhurat", href: "/muhurat" },
    { name: "Contact", href: "/contact" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-800 via-amber-700 to-amber-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-amber-100 fill-amber-300" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold font-serif text-amber-950 tracking-tight block">
                Puja Kendra
              </span>
              <span className="text-[11px] font-medium text-amber-800 tracking-wide block -mt-1">
                Puja • Panditji • Kundli • Muhurat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-900 bg-amber-200/60 font-semibold"
                      : "text-slate-700 hover:text-amber-900 hover:bg-amber-100/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
              Book a Puja
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-700 hover:text-amber-900 hover:bg-amber-100/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-amber-200 bg-amber-50/98 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-amber-200/80 text-amber-950 font-bold"
                    : "text-slate-800 hover:bg-amber-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-amber-200">
            <a
              href={buildDirectWhatsAppUrl("Namaste Puja Kendra 🙏 I want to book a Panditji for Puja.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center block shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              Book a Puja on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
