import { PujaInquiryForm, KundliInquiryForm, MuhuratInquiryForm } from "@/types";
import { SITE_CONFIG } from "@/config/site";

export const getWhatsAppNumber = (): string => {
  return SITE_CONFIG.whatsappNumber;
};

export const buildPujaWhatsAppUrl = (form: PujaInquiryForm): string => {
  const phone = getWhatsAppNumber();
  
  const modeText = form.mode === "home" ? "Puja at Home" : "Online Puja (Google Meet)";
  
  let msg = `Namaste Puja Kendra 🙏\n\n`;
  msg += `I would like to enquire about:\n\n`;
  msg += `Puja: ${form.pujaName}\n`;
  msg += `Mode: ${modeText}\n\n`;
  msg += `Name: ${form.fullName}\n`;
  msg += `Mobile: ${form.mobile}\n`;
  if (form.mode === "home" && form.address) {
    msg += `Address/Area: ${form.address}\n`;
  }
  msg += `Preferred Date: ${form.preferredDate}\n`;
  msg += `Preferred Time: ${form.preferredTime}\n`;
  msg += `Samagri Option: ${form.samagriPreference}\n`;
  if (form.notes) {
    msg += `Additional Info: ${form.notes}\n`;
  }
  msg += `\nPlease share the availability and booking details.\n\nThank you.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};

export const buildKundliWhatsAppUrl = (form: KundliInquiryForm): string => {
  const phone = getWhatsAppNumber();

  let msg = `Namaste Puja Kendra 🙏\n\n`;
  msg += `I would like to enquire about Kundli & Astrology Services:\n\n`;
  msg += `Service: ${form.serviceRequired}\n`;
  msg += `Name: ${form.fullName}\n`;
  msg += `Mobile: ${form.mobile}\n`;
  msg += `Date of Birth: ${form.dateOfBirth}\n`;
  msg += `Time of Birth: ${form.timeOfBirth}\n`;
  msg += `Place of Birth: ${form.placeOfBirth}\n`;
  if (form.notes) {
    msg += `Specific Question: ${form.notes}\n`;
  }
  msg += `\nPlease share the details and consultation process.\n\nThank you.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};

export const buildMuhuratWhatsAppUrl = (form: MuhuratInquiryForm): string => {
  const phone = getWhatsAppNumber();

  let msg = `Namaste Puja Kendra 🙏\n\n`;
  msg += `I would like to enquire about Muhurat Selection:\n\n`;
  msg += `Muhurat Type: ${form.muhuratType}\n`;
  msg += `Name: ${form.fullName}\n`;
  msg += `Mobile: ${form.mobile}\n`;
  msg += `Preferred Month/Dates: ${form.preferredMonth}\n`;
  if (form.notes) {
    msg += `Notes: ${form.notes}\n`;
  }
  msg += `\nPlease guide us with auspicious Muhurat dates and Panditji booking.\n\nThank you.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};

export const buildDirectWhatsAppUrl = (customText?: string): string => {
  const phone = getWhatsAppNumber();
  const msg = customText || "Namaste Puja Kendra 🙏 I would like to enquire about your Puja and Panditji services.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};
