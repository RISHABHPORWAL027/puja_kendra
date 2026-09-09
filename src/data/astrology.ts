import { AstrologyService } from "@/types";

export const astrologyData: AstrologyService[] = [
  {
    id: "janam-kundli",
    slug: "janam-kundli",
    name: "Janam Kundli Generation & Analysis",
    hindiName: "जन्म कुंडली विश्लेषण",
    category: "Kundli",
    shortDescription: "Complete birth chart reading covering planetary positions, Dasha cycles, strengths, and life guidance.",
    description: "Detailed analysis of your birth chart (Lagna, Rashi, Bhava, and Dasha) by experienced Vedic Astrologers. Receive clarity on career, health, relationships, financial prospects, and upcoming Dasha periods.",
    startingPrice: 1100,
    benefits: [
      "Detailed 12-house planetary positioning analysis",
      "Current Mahadasha & Antardasha predictions",
      "Career, Marriage, Health, and Finance forecasts",
      "Personalized Vedic remedies & Gemstone recommendations"
    ],
    faqs: [
      {
        question: "What details are required for Kundli analysis?",
        answer: "You need to provide your exact Date of Birth, Time of Birth, and Place of Birth."
      },
      {
        question: "How will I receive the consultation?",
        answer: "Our team shares your preliminary chart details and conducts a telephonic or WhatsApp video consultation with the Panditji."
      }
    ]
  },
  {
    id: "kundli-matching",
    slug: "kundli-matching",
    name: "Kundli Matching (Gun Milan)",
    hindiName: "कुंडली मिलान (गुण मिलान)",
    category: "Kundli",
    shortDescription: "Ashta Koota Kundli matching for prospective bride and groom to ensure matrimonial harmony.",
    description: "In-depth analysis of 36 Guns (Ashta Koota Milan), Manglik Dosh check, Bhakoot Dosh evaluation, and Nadi Dosh check for prospective couples before marriage.",
    startingPrice: 1500,
    benefits: [
      "36 Gun Milan score calculation",
      "Check for Nadi, Bhakoot, and Mangal Dosh",
      "Emotional, physical, and financial compatibility insights",
      "Remedial suggestions if Dosh is present"
    ],
    faqs: [
      {
        question: "What is considered a good Gun Milan score?",
        answer: "A score of 18 or above out of 36 is generally considered suitable for marriage, along with detailed Dosh analysis."
      }
    ]
  },
  {
    id: "mangal-dosha",
    slug: "mangal-dosha",
    name: "Mangal Dosha Consultation & Remedies",
    hindiName: "मंगल दोष निवारण परामर्श",
    category: "Dosha & Remedies",
    shortDescription: "Identify Mars affliction (Manglik Dosh) in birth chart and learn effective Shanti remedies.",
    description: "Comprehensive evaluation of Mars placement in 1st, 4th, 7th, 8th, or 12th house. Understand whether Manglik Dosh is Anshik (partial) or Purna (full), and receive authentic Vedic Shanti recommendations.",
    startingPrice: 1100,
    benefits: [
      "Clear verification of Mangal Dosh in Lagna and Moon charts",
      "Identification of Dosh Cancellation (Dosh Bhanga) factors",
      "Guidance on Kumbh Vivah / Mangal Shanti Puja"
    ],
    faqs: [
      {
        question: "Can Mangal Dosha be neutralized?",
        answer: "Yes, Vedic astrology provides specific remedies like Mangal Shanti Havan, Mantra Jaap, and fasts to diminish adverse effects."
      }
    ]
  },
  {
    id: "kaal-sarp-dosha",
    slug: "kaal-sarp-dosha",
    name: "Kaal Sarp Dosha Analysis",
    hindiName: "काल सर्प दोष विश्लेषण",
    category: "Dosha & Remedies",
    shortDescription: "Analyze Rahu-Ketu planetary alignment and remedies for career or personal obstacles.",
    description: "Detailed evaluation of Rahu and Ketu enclosing all 7 planets in your horoscope. Understand which of the 12 types of Kaal Sarp Dosh is present and get step-by-step guidance on Rahu-Ketu Shanti Pujas.",
    startingPrice: 1100,
    benefits: [
      "Identification of exact Kaal Sarp Dosh type (Anant, Kulik, Vasuki, etc.)",
      "Understanding obstacle root causes in business or family life",
      "Recommended Pujas at home or auspicious holy places"
    ],
    faqs: [
      {
        question: "Is Kaal Sarp Dosh always harmful?",
        answer: "Not necessarily. Many successful individuals have Kaal Sarp Dosh. Proper Shanti Puja converts obstacles into opportunities."
      }
    ]
  },
  {
    id: "career-astrology",
    slug: "career-astrology",
    name: "Career & Business Astrology",
    hindiName: "करियर एवं व्यापार ज्योतिष",
    category: "Astrology Consultation",
    shortDescription: "Astrological guidance for job search, promotion, business expansion, and financial growth.",
    description: "Focuses on the 10th (Karma), 2nd (Wealth), and 11th (Gains) houses to help you choose suitable career fields, favorable job change timing, and business growth remedies.",
    startingPrice: 1200,
    benefits: [
      "Ideal profession or business sector recommendation",
      "Timing for job change, business expansion, or investments",
      "Remedies for career stagnant periods"
    ],
    faqs: [
      {
        question: "Can astrology help in choosing between business and job?",
        answer: "Yes, planetary strengths in 6th and 10th houses clearly indicate whether employment or entrepreneurship suits you better."
      }
    ]
  },
  {
    id: "pitra-dosha",
    slug: "pitra-dosha",
    name: "Pitra Dosha Consultation",
    hindiName: "पितृ दोष परामर्श एवं शांति",
    category: "Dosha & Remedies",
    shortDescription: "Identify ancestral debts in birth chart and perform Shradh & Shanti rituals for family peace.",
    description: "Analyzes Sun, Rahu, and 9th house afflictions in horoscope. Guidance on performing Narayan Bali, Pitra Tarpan, and Shanti Havan for peace and progeny blessings.",
    startingPrice: 1100,
    benefits: [
      "Relief from chronic family disputes and unexplainable delays",
      "Blessings of ancestors (Pitrudeva) for family growth",
      "Guidance on simple home remedies and annual rituals"
    ],
    faqs: [
      {
        question: "What are symptoms of Pitra Dosh?",
        answer: "Unexplained delays in marriage, child birth issues, recurring health troubles, or disharmony at home can indicate Pitra Dosh."
      }
    ]
  },
  {
    id: "navgraha-analysis",
    slug: "navgraha-analysis",
    name: "Navgraha Planetary Analysis",
    hindiName: "नवग्रह स्थिति विश्लेषण",
    category: "Astrology Consultation",
    shortDescription: "Examine strength of all 9 planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).",
    description: "Evaluates favorable (Yogakaraka) and weak (Maraka/Afflicted) planets in your chart. Provides tailored advice on Mantra chanting, charity, and planet-specific Pujas.",
    startingPrice: 1100,
    benefits: [
      "Comprehensive planet strength scorecard",
      "Mantra Jaap count recommendations",
      "Color, charity, and fast suggestions for weak planets"
    ],
    faqs: [
      {
        question: "How long is the consultation session?",
        answer: "Standard consultation lasts 25-30 minutes with complete Q&A."
      }
    ]
  }
];
