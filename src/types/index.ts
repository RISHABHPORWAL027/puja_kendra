export type PujaCategory = 
  | "Home & Property"
  | "Child & Family"
  | "Vehicle"
  | "Business"
  | "Marriage"
  | "Devotional"
  | "Havan & Shanti"
  | "Special Pujas";

export type PujaMode = "home" | "online";

export type PujaService = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: PujaCategory;
  description: string;
  shortDescription: string;
  deity?: string;
  occasions: string[];
  duration?: string;
  modes: PujaMode[];
  startingPrice?: number; // In INR
  samagri: string[];
  samagriIncluded?: boolean;
  image: string;
  popular?: boolean;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type Festival = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  date: string;
  day: string;
  month: string;
  significance: string;
  description: string;
  suggestedPujaSlugs: string[];
  samagri: string[];
  modes: PujaMode[];
  image: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type AstrologyService = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: "Kundli" | "Astrology Consultation" | "Dosha & Remedies";
  description: string;
  shortDescription: string;
  startingPrice?: number;
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type MuhuratCategory = {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  description: string;
  iconName: string;
  bestTimingsInfo?: string;
  suggestedPujaSlug?: string;
};

export type Occasion = {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  icon: string;
  slug: string;
};

export type PujaInquiryForm = {
  pujaName: string;
  pujaSlug: string;
  mode: PujaMode;
  fullName: string;
  mobile: string;
  address?: string;
  preferredDate: string;
  preferredTime: string;
  samagriPreference: "Panditji brings Samagri" | "Customer arranges Samagri";
  notes?: string;
};

export type KundliInquiryForm = {
  fullName: string;
  mobile: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  serviceRequired: string;
  notes?: string;
};

export type MuhuratInquiryForm = {
  fullName: string;
  mobile: string;
  muhuratType: string;
  preferredMonth: string;
  notes?: string;
};
