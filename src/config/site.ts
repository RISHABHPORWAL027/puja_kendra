export const SITE_CONFIG = {
  name: "Puja Kendra",
  tagline: "Puja • Panditji • Kundli • Muhurat",
  subTagline: "Your place for Puja, Panditji & Vedic Services",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  displayPhone: process.env.NEXT_PUBLIC_DISPLAY_PHONE || "+91 98765 43210",
  primaryCity: process.env.NEXT_PUBLIC_CITY || "Indore, Madhya Pradesh",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pujakendra.com",
};

export const getWhatsAppNumber = (): string => {
  return SITE_CONFIG.whatsappNumber;
};
