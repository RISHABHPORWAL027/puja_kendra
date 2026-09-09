import { PujaService } from "@/types";

export const pujasData: PujaService[] = [
  // ==========================================
  // 1. HOME & PROPERTY (10 Services)
  // ==========================================
  {
    id: "griha-pravesh-puja",
    slug: "griha-pravesh-puja",
    name: "Griha Pravesh Puja",
    hindiName: "गृह प्रवेश पूजा",
    category: "Home & Property",
    description: "A sacred housewarming ritual performed before stepping into a new house to clear negative energies and invite health, peace, and prosperity.",
    shortDescription: "Complete housewarming Puja including Kalash Yatra, Vastu Shanti, Ganesh Pujan, and Havan for a new home.",
    deity: "Lord Ganesha, Goddess Lakshmi & Vastu Purush",
    occasions: ["New Home", "Peace & Shanti", "Family Welfare"],
    duration: "2.5 - 3.5 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    popular: true,
    samagriIncluded: true,
    samagri: [
      "Kalash & Coconut",
      "Mango Leaves & Flowers",
      "Kumkum, Haldi & Chandan",
      "Desi Ghee & Havan Samagri",
      "Milk, Rice & Panchamrit",
      "Navadhanya & Dry Fruits",
      "Camphor, Incense & Diya",
      "Vastu Yantra"
    ],
    image: "/images/pujas/griha-pravesh.jpg",
    faqs: [
      {
        question: "When should Griha Pravesh Puja be performed?",
        answer: "It must be performed on an auspicious Muhurat before starting regular living or shifting furniture into the house."
      },
      {
        question: "Do I need to arrange vessel for boiling milk?",
        answer: "Yes, a clean new milk vessel and stove arrangement is prepared by the family during the Puja."
      }
    ]
  },
  {
    id: "vastu-puja",
    slug: "vastu-puja",
    name: "Vastu Shanti Puja",
    hindiName: "वास्तु शांति पूजा",
    category: "Home & Property",
    description: "Removes architectural directional flaws (Vastu Dosha) and purifies residential or commercial premises for positive energy flow.",
    shortDescription: "Vedic Vastu Purush Pujan and Havan to neutralize structural Vastu Dosh at home or office.",
    deity: "Vastu Purush & Lord Ganesha",
    occasions: ["New Home", "New Shop / Office", "Peace & Shanti"],
    duration: "2 - 3 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    popular: true,
    samagriIncluded: true,
    samagri: [
      "Vastu Yantra",
      "Copper Kalash & Coconut",
      "Havan Wood & Desi Ghee",
      "Five Grains (Panch Dhanya)",
      "Red & Yellow Cloth",
      "Flowers & Garland"
    ],
    image: "/images/pujas/vastu-puja.jpg",
    faqs: [
      {
        question: "Can Vastu Puja be performed in an old or rented house?",
        answer: "Yes, Vastu Shanti can be performed anytime to rectify negative energy or frequent household disturbances."
      }
    ]
  },
  {
    id: "bhoomi-pujan",
    slug: "bhoomi-pujan",
    name: "Bhoomi Pujan",
    hindiName: "भूमि पूजन",
    category: "Home & Property",
    description: "Sacred ground-breaking ritual performed before starting construction on a plot of land to seek forgiveness from Mother Earth (Bhoomi Devi).",
    shortDescription: "Foundation stone laying ritual seeking Earth Goddess and Vastu blessings before building.",
    deity: "Bhoomi Devi, Sheshnag & Vastu Purush",
    occasions: ["New Home", "Business Growth"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: [
      "Bricks & Foundation Silver Snake (Nag-Nagin pair)",
      "Coconut & Kalash",
      "Spades/Pickaxe for symbolic digging",
      "Grains, Turmeric & Flowers"
    ],
    image: "/images/pujas/bhoomi-pujan.jpg",
    faqs: [
      {
        question: "Where is Bhoomi Pujan performed on the plot?",
        answer: "It is usually performed in the Ishan Kona (Northeast corner) of the plot."
      }
    ]
  },
  {
    id: "griha-shanti-puja",
    slug: "griha-shanti-puja",
    name: "Griha Shanti Puja",
    hindiName: "गृह शांति पूजा",
    category: "Home & Property",
    description: "Dispels domestic conflicts, disharmony, and bad omens, restoring peaceful relations among family members.",
    shortDescription: "Special Graha and Vastu Shanti Havan for domestic peace and emotional stability.",
    deity: "Navgraha & Kuldevi",
    occasions: ["Peace & Shanti", "Family Welfare"],
    duration: "2 - 2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Havan Samagri", "Ghee", "Navgraha Wood", "Coconut", "Flowers", "Katha Book"],
    image: "/images/pujas/griha-shanti.jpg",
    faqs: [
      {
        question: "How often can Griha Shanti be performed?",
        answer: "It can be performed annually or whenever family members feel persistent stress or disharmony."
      }
    ]
  },
  {
    id: "satyanarayan-katha",
    slug: "satyanarayan-katha",
    name: "Shri Satyanarayan Katha & Puja",
    hindiName: "श्री सत्यनारायण कथा एवं पूजा",
    category: "Home & Property",
    description: "Highly revered ritual dedicated to Lord Satyanarayan (Lord Vishnu) performed for general well-being, success, and fulfilling vows.",
    shortDescription: "Auspicious Satyanarayan Vrat Katha reading, Panchamrit Abhishek, and Panjiri Prasad distribution.",
    deity: "Lord Satyanarayan (Vishnu)",
    occasions: ["New Home", "Family Welfare", "Festival Puja", "Peace & Shanti"],
    duration: "2 - 2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    popular: true,
    samagriIncluded: true,
    samagri: [
      "Satyanarayan Frame/Idol",
      "Banana Plants / Leaves",
      "Panjiri Prasad (Wheat flour, Sugar, Ghee)",
      "Panchamrit (Milk, Curd, Honey, Ghee, Sugar)",
      "Tulsi leaves",
      "Flowers & Garland"
    ],
    image: "/images/pujas/satyanarayan-katha.jpg",
    faqs: [
      {
        question: "Is Purnima (Full Moon) required for Satyanarayan Katha?",
        answer: "Purnima is ideal, but Satyanarayan Katha can be performed on any auspicious day or occasion."
      }
    ]
  },
  {
    id: "ganesh-puja",
    slug: "ganesh-puja",
    name: "Ganesh Puja",
    hindiName: "गणेश पूजा",
    category: "Home & Property",
    description: "Primary invocation of Lord Ganesha to remove obstacles, ensure smooth starting of new ventures, and bestow intellect.",
    shortDescription: "Sacred Ganesh Atharvashirsha Path, Modak Arpan, and Shodashopachara Pujan.",
    deity: "Lord Ganesha",
    occasions: ["New Home", "New Vehicle", "New Shop / Office", "Festival Puja"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Ganesh Idol/Yantra", "Durva Grass", "Red Flowers", "Modak/Ladoo", "Chandan & Kumkum"],
    image: "/images/pujas/ganesh-puja.jpg",
    faqs: [
      {
        question: "Why is Durva grass essential for Ganesh Puja?",
        answer: "Durva grass is sacred to Lord Ganesha and symbolizes renewal, humility, and cooling divine grace."
      }
    ]
  },
  {
    id: "navgraha-shanti",
    slug: "navgraha-shanti",
    name: "Navgraha Shanti Puja",
    hindiName: "नवग्रह शांति पूजा",
    category: "Home & Property",
    description: "Pacifies adverse planetary influences of the 9 celestial bodies (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).",
    shortDescription: "9 Planet Mantra Jaap and specialized Havan for removing planetary astrological afflictions.",
    deity: "Navgrahas (9 Planets)",
    occasions: ["Peace & Shanti", "Family Welfare"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["9 Color Cloths", "Navgraha Samidha (Wood)", "Navadhanya Grains", "Ghee & Havan Mix"],
    image: "/images/pujas/navgraha-puja.jpg",
    faqs: [
      {
        question: "When is Navgraha Shanti recommended?",
        answer: "Recommended when running an unfavorable Dasha period or when multiple planetary transits cause obstacles."
      }
    ]
  },
  {
    id: "havan-sacred-fire",
    slug: "havan",
    name: "Vedic Havan (Yajna)",
    hindiName: "वैदिक हवन (यज्ञ)",
    category: "Home & Property",
    description: "Sacred fire ceremony purifying home air, generating positive cosmic vibrations, and offering oblations to deities.",
    shortDescription: "Authentic Agnihotra Havan ritual with herbal Samagri and Vedic Veda Mantras.",
    deity: "Agni Dev & Universal Deities",
    occasions: ["Havan & Homam", "New Home", "Peace & Shanti"],
    duration: "1.5 - 2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Havan Kund", "Dry Mango Wood", "Ghee", "Herbal Havan Samagri", "Camphor", "Samidha"],
    image: "/images/pujas/havan.jpg",
    faqs: [
      {
        question: "Can Havan be conducted inside apartment flats?",
        answer: "Yes! Our Pandits use eco-friendly smoke-minimized herbal Samagri and compact Havan Kunds ideal for modern flats."
      }
    ]
  },
  {
    id: "lakshmi-puja",
    slug: "lakshmi-puja",
    name: "Lakshmi Puja",
    hindiName: "लक्ष्मी पूजा",
    category: "Home & Property",
    description: "Invocation of Goddess Mahalakshmi for financial stability, wealth abundance, and home prosperity.",
    shortDescription: "Sri Suktam Path, Lotus Arpan, and Mahalakshmi Aradhana.",
    deity: "Goddess Mahalakshmi",
    occasions: ["New Home", "Business Growth", "Festival Puja"],
    duration: "1.5 - 2 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Lotus Flowers", "Kamal Gatta", "Kheel Batasha", "Red Silk Cloth", "Silver Coin"],
    image: "/images/pujas/lakshmi-puja.jpg",
    faqs: [
      {
        question: "Can Lakshmi Puja be performed on Fridays?",
        answer: "Yes, Fridays are dedicated to Goddess Lakshmi and considered highly favorable."
      }
    ]
  },
  {
    id: "rudrabhishek",
    slug: "rudrabhishek",
    name: "Rudrabhishek Puja",
    hindiName: "रुद्राभिषेक पूजा",
    category: "Home & Property",
    description: "Powerful Vedic ritual of bathing Lord Shiva (Shivling) with holy liquids while chanting Sri Rudram Chamakam Mantras.",
    shortDescription: "Abhishek of Shivling with Milk, Honey, Curd, Ghee, and Sugarcane juice for health and wish fulfillment.",
    deity: "Lord Shiva",
    occasions: ["Devotional", "Peace & Shanti", "Family Welfare"],
    duration: "2 - 2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Milk, Curd, Honey, Ghee, Sugar", "Bel Patra", "Dhatura & Bhasma", "Rosewater & Panchamrit"],
    image: "/images/pujas/rudrabhishek.jpg",
    faqs: [
      {
        question: "What are the benefits of Rudrabhishek?",
        answer: "It confers health, protects against planetary afflictions, removes fear of disease, and bestows peace of mind."
      }
    ]
  },

  // ==========================================
  // 2. CHILD & FAMILY (7 Services)
  // ==========================================
  {
    id: "naamkaran-sanskar",
    slug: "naamkaran-sanskar",
    name: "Naamkaran Sanskar (Naming Ceremony)",
    hindiName: "नामकरण संस्कार",
    category: "Child & Family",
    description: "Vedic ceremony performed on the 11th or 12th day after birth to select an astrologically sound first syllable and name for the newborn.",
    shortDescription: "Traditional newborn naming ritual with Nakshatra calculation, Sun worship, and family blessings.",
    deity: "Lord Vishnu, Kuldevi & Nakshatra Deities",
    occasions: ["Child & Sanskar", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Honey & Silver Spoon", "Betel Leaves & Grains", "New Cloths for Baby", "Kalash & Coconut"],
    image: "/images/pujas/naamkaran.jpg",
    faqs: [
      {
        question: "When is Naamkaran performed?",
        answer: "Usually on the 11th, 12th, or 21st day after the child's birth as calculated by Panditji."
      }
    ]
  },
  {
    id: "mundan-sanskar",
    slug: "mundan-sanskar",
    name: "Mundan Sanskar (Choodakarana)",
    hindiName: "मुंडन संस्कार",
    category: "Child & Family",
    description: "First head shaving ceremony for a child, symbolizing purification from past birth karma and promoting hair growth and brain development.",
    shortDescription: "First head shaving ritual with sacred Mantras, Ganga Jal bath, and turmeric paste coating.",
    deity: "Kuldevi, Lord Ganesha & Ganga Mata",
    occasions: ["Child & Sanskar"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Turmeric Paste", "Ganga Jal", "New Cloth for Child", "Curd & Honey", "Coconut & Flowers"],
    image: "/images/pujas/mundan.jpg",
    faqs: [
      {
        question: "At what age is Mundan performed?",
        answer: "Typically in the 1st or 3rd year of the child's life on a Shubh Muhurat."
      }
    ]
  },
  {
    id: "annaprashan-sanskar",
    slug: "annaprashan-sanskar",
    name: "Annaprashan Sanskar (First Feeding)",
    hindiName: "अन्नप्राशन संस्कार",
    category: "Child & Family",
    description: "Marks the child's first solid food consumption (usually Kheer) accompanied by prayers for good digestion, health, and longevity.",
    shortDescription: "First solid food feeding ritual with Kheer, Agni Pujan, and symbolic choice test.",
    deity: "Goddess Annapurna & Lord Vishnu",
    occasions: ["Child & Sanskar"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Silver Bowl & Spoon", "Rice Kheer", "Tulsi Leaf", "Items for Choice Test (Book, Pen, Gold, Cloth)"],
    image: "/images/pujas/annaprashan.jpg",
    faqs: [
      {
        question: "When is Annaprashan performed?",
        answer: "Performed in the 6th month for baby boys and 5th or 7th month for baby girls."
      }
    ]
  },
  {
    id: "vidyarambh-sanskar",
    slug: "vidyarambh-sanskar",
    name: "Vidyarambh Sanskar (Aksharabhyasam)",
    hindiName: "विद्याारंभ संस्कार",
    category: "Child & Family",
    description: "Sacred initiation into formal learning and education where the child writes their first letters in raw rice grains.",
    shortDescription: "Saraswati Pujan and child's first alphabet writing ritual for wisdom and academic success.",
    deity: "Goddess Saraswati & Lord Ganesha",
    occasions: ["Child & Sanskar"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Plate of Raw Rice", "Slate & Chalk / Pen", "White Flowers", "Yellow Sweets", "Saraswati Frame"],
    image: "/images/pujas/vidyarambh.jpg",
    faqs: [
      {
        question: "At what age is Vidyarambh performed?",
        answer: "Usually around 3 to 5 years of age before the child starts school."
      }
    ]
  },
  {
    id: "birthday-puja",
    slug: "birthday-puja",
    name: "Janmdin (Birthday) Ayushya Puja",
    hindiName: "जन्मदिन आयूष्य पूजा",
    category: "Child & Family",
    description: "Vedic birthday celebration seeking long life, immunity, mental clarity, and divine protection for children or adults.",
    shortDescription: "Special birthday Puja with Markandeya Smaran, Ayushya Homam, and elders' blessings.",
    deity: "Ashta Chiranjeevi (Markandeya, Hanuman, etc.)",
    occasions: ["Child & Sanskar", "Family Welfare"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Desi Ghee", "Honey", "Doovers/Durva", "Til & Havan Samagri", "New Cloths"],
    image: "/images/pujas/birthday-puja.jpg",
    faqs: [
      {
        question: "Should birthday Puja be done according to Tithi or Date?",
        answer: "Vedic tradition recommends performing it as per Hindu Janma Tithi, but English date can also be accommodated."
      }
    ]
  },
  {
    id: "ayushya-homam",
    slug: "ayushya-homam",
    name: "Ayushya Homam",
    hindiName: "आयुष्य होमम",
    category: "Child & Family",
    description: "Sacred fire ritual performed on 1st birthday or annual birthdays to eliminate health vulnerabilities and bestow longevity.",
    shortDescription: "Ayur Devata Havan for health, vitality, and protection against early childhood ailments.",
    deity: "Ayur Devata & Lord Brahma",
    occasions: ["Child & Sanskar", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Boiled Rice with Ghee", "Payasam", "Havan Samagri", "Lotus Flowers"],
    image: "/images/pujas/ayushya-homam.jpg",
    faqs: [
      {
        question: "Why is Ayushya Homam performed on 1st birthday?",
        answer: "It blesses the child with robust immunity, protection, and long life right at the start of childhood."
      }
    ]
  },
  {
    id: "child-blessing-puja",
    slug: "child-blessing-puja",
    name: "Santana Gopal Puja (Child Blessing)",
    hindiName: "संतान गोपाल पूजा",
    category: "Child & Family",
    description: "Performed by couples praying for healthy progeny, progeny blessings, or smooth pregnancy journey.",
    shortDescription: "Santana Gopal Mantra Jaap and Pujan for couples seeking child blessings.",
    deity: "Ladoo Gopal (Baby Krishna)",
    occasions: ["Child & Sanskar", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Ladoo Gopal Idol", "Butter & Mishri", "Tulsi Leaves", "Panchamrit", "Yellow Cloth"],
    image: "/images/pujas/santana-gopal.jpg",
    faqs: [
      {
        question: "Who should participate in Santana Gopal Puja?",
        answer: "Both husband and wife should perform the Pujan together."
      }
    ]
  },

  // ==========================================
  // 3. VEHICLE (4 Services)
  // ==========================================
  {
    id: "new-car-puja",
    slug: "new-car-puja",
    name: "New Car Vahana Puja",
    hindiName: "नया कार वाहन पूजा",
    category: "Vehicle",
    description: "Sacred vehicle blessing ritual to ward off evil eyes (Nazar), prevent accidents, and ensure safe journeys.",
    shortDescription: "Vahana Pujan for new cars including Swastik marking, Lemon crushing under tires, and Coconut breaking.",
    deity: "Lord Ganesha & Goddess Lakshmi",
    occasions: ["New Vehicle"],
    duration: "45 Minutes",
    modes: ["home", "online"],
    startingPrice: 1101,
    popular: true,
    samagriIncluded: true,
    samagri: ["4 Lemons", "1 Coconut", "Red Vermilion (Kumkum)", "Sandalwood Paste", "Garland for car", "Sweets"],
    image: "/images/pujas/car-puja.jpg",
    faqs: [
      {
        question: "Where is Car Puja conducted?",
        answer: "Panditji performs it at your house parking area, building premises, or nearby temple parking."
      }
    ]
  },
  {
    id: "new-bike-puja",
    slug: "new-bike-puja",
    name: "New Bike & Scooter Puja",
    hindiName: "नया बाइक एवं स्कूटी पूजा",
    category: "Vehicle",
    description: "Auspicious blessing ritual for two-wheelers ensuring rider safety and protection against mechanical troubles.",
    shortDescription: "Two-wheeler Vahana Pujan with Swastik drawing, Kalava tying, and Lemon crushing.",
    deity: "Lord Ganesha & Lord Hanuman",
    occasions: ["New Vehicle"],
    duration: "30 Minutes",
    modes: ["home", "online"],
    startingPrice: 501,
    samagriIncluded: true,
    samagri: ["2 Lemons", "1 Coconut", "Kumkum", "Moli / Kalava", "Garland", "Jaggery / Sweets"],
    image: "/images/pujas/bike-puja.jpg",
    faqs: [
      {
        question: "How long does Bike Puja take?",
        answer: "It takes around 25 to 30 minutes."
      }
    ]
  },
  {
    id: "new-vehicle-puja",
    slug: "new-vehicle-puja",
    name: "General Vehicle Puja",
    hindiName: "सामान्य वाहन पूजा",
    category: "Vehicle",
    description: "Puja for second-hand, re-purchased, or existing vehicles to refresh positive energy and safe operation.",
    shortDescription: "Refreshed Vahana Pujan for pre-owned cars, bikes, or family vehicles.",
    deity: "Lord Ganesha",
    occasions: ["New Vehicle"],
    duration: "30 - 45 Minutes",
    modes: ["home", "online"],
    startingPrice: 1101,
    samagriIncluded: true,
    samagri: ["Lemons", "Coconut", "Kumkum", "Camphor", "Flowers"],
    image: "/images/pujas/vehicle-puja.jpg",
    faqs: [
      {
        question: "Is vehicle Puja required for second-hand cars?",
        answer: "Yes, it is highly recommended to cleanse past owner energy and start fresh."
      }
    ]
  },
  {
    id: "commercial-vehicle-puja",
    slug: "commercial-vehicle-puja",
    name: "Commercial Vehicle Puja (Truck / Bus / Auto / Taxi)",
    hindiName: "व्यावसायिक वाहन पूजा (ट्रक/बस/टैक्सी)",
    category: "Vehicle",
    description: "Specialized Pujan for commercial fleet vehicles, trucks, tractors, and taxis to ensure business earnings and accident prevention.",
    shortDescription: "Commercial fleet Vahana Pujan for transport businesses and heavy vehicles.",
    deity: "Lord Ganesha & Vishwakarma Dev",
    occasions: ["New Vehicle", "Business Growth"],
    duration: "45 Minutes",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Big Garland", "Coconuts", "Lemons", "Red Cloth", "Camphor & Sweets"],
    image: "/images/pujas/truck-puja.jpg",
    faqs: [
      {
        question: "Can multiple commercial vehicles be blessed together?",
        answer: "Yes, Panditji can perform collective Vahana Pujan for fleet vehicles."
      }
    ]
  },

  // ==========================================
  // 4. BUSINESS (6 Services)
  // ==========================================
  {
    id: "shop-opening-puja",
    slug: "shop-opening-puja",
    name: "Shop Opening Puja (Dukan Muhurat)",
    hindiName: "दुकान उद्घाटन एवं पूजा",
    category: "Business",
    description: "Inaugural Puja for new retail outlets, showrooms, and shops to attract customers, sales growth, and Lakshmi blessings.",
    shortDescription: "Commercial shop inauguration Pujan with Lakshmi Ganesh Sthapana and Vastu Shanti.",
    deity: "Goddess Lakshmi, Lord Ganesha & Kuber Dev",
    occasions: ["New Shop / Office", "Business Growth"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Lakshmi Ganesh Photo", "Toran for Shop Door", "Sweets & Dry Fruits", "Coconut & Kalash", "Red Cloth"],
    image: "/images/pujas/shop-opening.jpg",
    faqs: [
      {
        question: "When should the ribbon cutting happen?",
        answer: "Ribbon cutting is scheduled precisely at the auspicious Shubh Choghadiya Muhurat during the Puja."
      }
    ]
  },
  {
    id: "office-opening-puja",
    slug: "office-opening-puja",
    name: "Office Opening & Corporate Puja",
    hindiName: "कार्यालय/ऑफिस उद्घाटन पूजा",
    category: "Business",
    description: "Inaugural ceremony for corporate offices, IT firms, and agencies for team prosperity, order wins, and smooth operations.",
    shortDescription: "Corporate office launch Pujan with Vastu purification, Ganesh Vandana, and Havan.",
    deity: "Lord Ganesha & Goddess Saraswati",
    occasions: ["New Shop / Office", "Business Growth"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Havan Kund & Wood", "Lotus & Rose Flowers", "Sweets for Staff", "Panchamrit"],
    image: "/images/pujas/office-opening.jpg",
    faqs: [
      {
        question: "Can office Havan be performed in air-conditioned spaces?",
        answer: "Yes, our Pandits use refined low-smoke camphor and herbal samagri, with temporary AC pause during Havan."
      }
    ]
  },
  {
    id: "factory-opening-puja",
    slug: "factory-opening-puja",
    name: "Factory & Industry Opening Puja",
    hindiName: "फैक्ट्री एवं उद्योग उद्घाटन पूजा",
    category: "Business",
    description: "Large-scale industrial inauguration worshiping Lord Vishwakarma, machine Pujan, and Vastu Pujan for worker safety and high yield.",
    shortDescription: "Industrial plant launch ritual with Vishwakarma Pujan and Machinery Pujan.",
    deity: "Lord Vishwakarma & Lord Ganesha",
    occasions: ["New Shop / Office", "Business Growth"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 5101,
    samagriIncluded: true,
    samagri: ["Machine Flowers & Garlands", "Large Havan Kund", "Coconuts for Machinery", "Red Cloths"],
    image: "/images/pujas/factory-puja.jpg",
    faqs: [
      {
        question: "Is Machine Pujan included?",
        answer: "Yes, main production machines are symbolic blessed with Swastik, Flowers, and Kalava."
      }
    ]
  },
  {
    id: "business-vastu-puja",
    slug: "business-vastu-puja",
    name: "Business Vastu Puja",
    hindiName: "व्यापारिक वास्तु पूजा",
    category: "Business",
    description: "Corrects directional imbalances in offices, factories, or shops that cause unexpected losses or customer drop-off.",
    shortDescription: "Commercial Vastu rectification Pujan for commercial spaces.",
    deity: "Vastu Purush & Kuber Dev",
    occasions: ["New Shop / Office", "Business Growth"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Vastu Yantra", "Copper Nails", "Grains & Ghee", "Flowers"],
    image: "/images/pujas/business-vastu.jpg",
    faqs: [
      {
        question: "Does this require breaking walls?",
        answer: "No, Vedic Vastu Shanti uses Mantras, Yantras, and ritual offerings without structural demolition."
      }
    ]
  },
  {
    id: "lakshmi-ganesh-puja",
    slug: "lakshmi-ganesh-puja",
    name: "Lakshmi Ganesh Pujan",
    hindiName: "लक्ष्मी गणेश पूजन",
    category: "Business",
    description: "Combined worship of Riddhi-Siddhi data Ganesha and Dhan-Dhaanya data Mahalakshmi for commercial success.",
    shortDescription: "Traditional Lakshmi Ganesh Pujan for commercial establishments and account opening.",
    deity: "Goddess Lakshmi & Lord Ganesha",
    occasions: ["Business Growth", "Festival Puja"],
    duration: "1.5 - 2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Lakshmi Ganesh Frame", "Lotus Flowers", "Modak & Sweets", "Silver Coins"],
    image: "/images/pujas/lakshmi-ganesh.jpg",
    faqs: [
      {
        question: "Is this recommended during Diwali Chopda Pujan?",
        answer: "Yes, it is the fundamental ritual for Diwali account book blessing."
      }
    ]
  },
  {
    id: "business-growth-puja",
    slug: "business-growth-puja",
    name: "Vyapar Vridhi Homam (Business Growth)",
    hindiName: "व्यापार वृद्धि होमम",
    category: "Business",
    description: "Special Havan utilizing Vyapar Vridhi Yantra and Kanakdhara Mantras to overcome market stagnation and rival obstacles.",
    shortDescription: "Kanakdhara and Kuber Mantra Havan for overcoming business stagnation.",
    deity: "Lord Kuber & Goddess Mahalakshmi",
    occasions: ["Business Growth"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: ["Vyapar Vridhi Yantra", "Lotus Seeds (Kamal Gatta)", "Desi Ghee", "Havan Mixture"],
    image: "/images/pujas/vyapar-vridhi.jpg",
    faqs: [
      {
        question: "Can this be conducted at home if shop space is small?",
        answer: "Yes, it can be conducted at the business owner's residence."
      }
    ]
  },

  // ==========================================
  // 5. MARRIAGE (6 Services)
  // ==========================================
  {
    id: "marriage-puja",
    slug: "marriage-puja",
    name: "Vivah (Marriage) Puja & Mantras",
    hindiName: "विवाह पूजा एवं विधि",
    category: "Marriage",
    description: "Complete traditional Vedic wedding ritual including Var Mala, Kanyadaan, Saptapadi (7 Phere), and Laja Homam conducted by expert Acharyas.",
    shortDescription: "Sacred 7 Phere wedding ceremony with Vedic Mantras, Kanyadaan, and Mangalsutra blessing.",
    deity: "Lord Shiva-Parvati, Lakshmi-Narayan & Agni Dev",
    occasions: ["Marriage"],
    duration: "3 - 4 Hours",
    modes: ["home", "online"],
    startingPrice: 7501,
    popular: true,
    samagriIncluded: true,
    samagri: ["Mandap Puja Kit", "Havan Wood & Ghee", "Laja (Puffed Rice)", "Mangalsutra & Sindoor Box", "Garlands"],
    image: "/images/pujas/marriage-puja.jpg",
    faqs: [
      {
        question: "How many Pandits are provided for Vivah?",
        answer: "Usually 2 to 3 Pandits manage the Mandap rituals smoothly."
      }
    ]
  },
  {
    id: "vivah-havan",
    slug: "vivah-havan",
    name: "Vivah Agni Havan",
    hindiName: "विवाह अग्नि हवन",
    category: "Marriage",
    description: "The core matrimonial fire altar ritual where bride and groom make sacred vows in front of Agni Dev.",
    shortDescription: "Matrimonial Agni Sakshi Havan for wedding functions.",
    deity: "Agni Dev",
    occasions: ["Marriage"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 3501,
    samagriIncluded: true,
    samagri: ["Havan Kund", "Samidha Wood", "Ghee & Samagri", "Puffed Rice"],
    image: "/images/pujas/vivah-havan.jpg",
    faqs: [
      {
        question: "Is this suitable for destination or hotel weddings?",
        answer: "Yes, our team brings portable clean Havan setups suited for hotel banquet halls."
      }
    ]
  },
  {
    id: "graha-shanti-marriage",
    slug: "graha-shanti-marriage",
    name: "Pre-Marriage Graha Shanti Puja",
    hindiName: "विवाह पूर्व ग्रह शांति पूजा",
    category: "Marriage",
    description: "Essential pre-wedding ritual conducted separately at bride's and groom's homes to appease planets and clear marital impediments.",
    shortDescription: "Pre-wedding planet pacification ritual performed 1-2 days before the wedding.",
    deity: "Navgrahas & Kuldevi",
    occasions: ["Marriage", "Peace & Shanti"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Navgraha Cloths & Grains", "Havan Mixture", "Moli & Coconuts"],
    image: "/images/pujas/graha-shanti-marriage.jpg",
    faqs: [
      {
        question: "When is Mandap/Graha Shanti performed?",
        answer: "Typically 1 or 2 days prior to the wedding day."
      }
    ]
  },
  {
    id: "engagement-puja",
    slug: "engagement-puja",
    name: "Sagai (Engagement) & Roka Puja",
    hindiName: "सगाई / सगाइ एवं रोका पूजा",
    category: "Marriage",
    description: "Official auspicious ritual marking the formal match commitment between two families, ring exchange, and Tilak ceremony.",
    shortDescription: "Roka & Sagai blessing ritual with Ganesh Pujan, Tilak, and Ring blessing.",
    deity: "Lord Ganesha & Goddess Lakshmi",
    occasions: ["Marriage"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Coconut & Moli", "Ring Blessing Tray", "Kumkum & Akshat", "Sweets & Dry Fruits"],
    image: "/images/pujas/engagement-puja.jpg",
    faqs: [
      {
        question: "Does Panditji read the formal Vivah Patrika during Sagai?",
        answer: "Yes, Panditji recites the formal match blessing and confirms auspicious dates."
      }
    ]
  },
  {
    id: "marriage-compatibility-consultation",
    slug: "marriage-compatibility-consultation",
    name: "Marriage Compatibility & Gun Milan",
    hindiName: "विवाह मिलान एवं गुण मिलान परामर्श",
    category: "Marriage",
    description: "Astrological verification of horoscopes before final wedding confirmation to check Mangal Dosh, Nadi Dosh, and mutual compatibility.",
    shortDescription: "36 Gun Milan horoscope matching for prospective couples.",
    deity: "Vedic Astrological Science",
    occasions: ["Marriage"],
    duration: "45 Minutes",
    modes: ["online"],
    startingPrice: 1501,
    samagriIncluded: false,
    samagri: [],
    image: "/images/pujas/gun-milan.jpg",
    faqs: [
      {
        question: "What details are required?",
        answer: "Birth date, birth time, and birth city for both prospective bride and groom."
      }
    ]
  },
  {
    id: "wedding-shanti-puja",
    slug: "wedding-shanti-puja",
    name: "Kumbh Vivah / Arka Vivah (Dosh Shanti)",
    hindiName: "कुंभ विवाह / अर्क विवाह शांति",
    category: "Marriage",
    description: "Symbolic Vedic Shanti marriage performed for individuals with severe Mangal Dosh or Nadi Dosh prior to their actual wedding.",
    shortDescription: "Remedial symbolic marriage with Vishnu Idol or Peepal/Arka tree for Manglik Dosh remediation.",
    deity: "Lord Vishnu & Agni Dev",
    occasions: ["Marriage", "Peace & Shanti"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 3501,
    samagriIncluded: true,
    samagri: ["Clay Kumbh Pot", "Vishnu Idol", "Marriage Garlands", "Havan Samagri"],
    image: "/images/pujas/kumbh-vivah.jpg",
    faqs: [
      {
        question: "Why is Kumbh Vivah performed?",
        answer: "It neutralizes severe planetary Dosh in horoscope that could affect married life harmony."
      }
    ]
  },

  // ==========================================
  // 6. DEVOTIONAL (14 Services)
  // ==========================================
  {
    id: "mahamrityunjaya-jaap",
    slug: "mahamrityunjaya-jaap",
    name: "Mahamrityunjaya Jaap & Havan",
    hindiName: "महामृत्युंजय जाप एवं हवन",
    category: "Devotional",
    description: "Potent Vedic Jaap of Lord Shiva's conquer-death mantra for overcoming critical illnesses, accidents, and psychological fear.",
    shortDescription: "11,000 / 21,000 / 125,000 Mahamrityunjaya Mantra chanting and Havan for health & longevity.",
    deity: "Lord Shiva (Tryambakam)",
    occasions: ["Devotional", "Peace & Shanti", "Family Welfare"],
    duration: "3 - 4 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Rudraksha Mala", "Milk & Ganga Jal", "Bel Patra", "Black Sesame & Ghee for Havan"],
    image: "/images/pujas/mahamrityunjaya.jpg",
    faqs: [
      {
        question: "Can this Jaap be performed for a hospitalized relative?",
        answer: "Yes, Pandits can perform Sankalp with the patient's name and gotra at home or online."
      }
    ]
  },
  {
    id: "hanuman-puja",
    slug: "hanuman-puja",
    name: "Hanuman Puja & Sunderkand Path",
    hindiName: "हनुमान पूजा एवं सुंदरकांड पाठ",
    category: "Devotional",
    description: "Rhythmic recitation of Sunderkand from Ramcharitmanas along with Hanuman Chalisa and Sindoor Arpan for courage and negative energy removal.",
    shortDescription: "Sunderkand Path, Bajrang Baan, and Hanuman Chalisa recitation with Aarti.",
    deity: "Lord Hanuman",
    occasions: ["Devotional", "Peace & Shanti", "Festival Puja"],
    duration: "2 - 2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Orange Sindoor", "Chameli Oil", "Betel Leaves (Paan)", "Bundi Ladoo", "Red Flowers"],
    image: "/images/pujas/hanuman-puja.jpg",
    faqs: [
      {
        question: "Which days are best for Sunderkand Path?",
        answer: "Tuesdays and Saturdays are traditional, but any day is auspicious for Sunderkand."
      }
    ]
  },
  {
    id: "durga-puja",
    slug: "durga-puja",
    name: "Durga Puja & Chandi Path",
    hindiName: "दुर्गा पूजा एवं चंडी पाठ",
    category: "Devotional",
    description: "Invokes Goddess Durga's protective powers for destroying obstacles, legal trouble relief, and spiritual vigor.",
    shortDescription: "Durga Saptashati 13 Adhyaya recitation and Nava Chandi Havan.",
    deity: "Goddess Durga",
    occasions: ["Devotional", "Festival Puja", "Peace & Shanti"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: ["Red Chunri", "Durga Saptashati Book", "Dry Coconut (Gola)", "Havan Mix & Ghee"],
    image: "/images/pujas/durga-puja.jpg",
    faqs: [
      {
        question: "Is Kanya Pujan included?",
        answer: "Kanya Pujan can be integrated if young girls are invited by the family."
      }
    ]
  },
  {
    id: "shiv-puja",
    slug: "shiv-puja",
    name: "Shiv Puja & Bilva Archana",
    hindiName: "शिव पूजा एवं बिल्व अर्चन",
    category: "Devotional",
    description: "Worship of Lord Shiva with 108 Bilva Patra offering, Panchamrit bath, and chanting Om Namah Shivaya.",
    shortDescription: "Traditional Shiv Pujan with 108 Bilva Patra and Shiv Sahasranama.",
    deity: "Lord Shiva",
    occasions: ["Devotional", "Peace & Shanti"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["108 Bilva Leaves", "Shivling", "Panchamrit", "Bhasma & Chandan"],
    image: "/images/pujas/shiv-puja.jpg",
    faqs: [
      {
        question: "Is Monday mandatory for Shiv Puja?",
        answer: "Mondays are extra special, but Shiv Puja can be performed any day."
      }
    ]
  },
  {
    id: "vishnu-puja",
    slug: "vishnu-puja",
    name: "Vishnu Sahasranama Puja",
    hindiName: "विष्णु पूजा एवं विष्णु सहस्रनाम",
    category: "Devotional",
    description: "Recitation of 1,000 sacred names of Lord Vishnu with Tulsi Archana for mental clarity and family harmony.",
    shortDescription: "1,000 Tulsi leaf offerings to Lord Vishnu during Sahasranama chanting.",
    deity: "Lord Vishnu",
    occasions: ["Devotional", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["1,008 Tulsi Leaves", "Yellow Sweets", "Yellow Cloth", "Chandan & Flowers"],
    image: "/images/pujas/vishnu-puja.jpg",
    faqs: [
      {
        question: "Why is Tulsi essential for Lord Vishnu?",
        answer: "Tulsi Devi is the eternal beloved of Lord Vishnu; worship without Tulsi is incomplete."
      }
    ]
  },
  {
    id: "saraswati-puja",
    slug: "saraswati-puja",
    name: "Saraswati Puja",
    hindiName: "सरस्वती पूजा",
    category: "Devotional",
    description: "Worship of the Goddess of Knowledge, Music, and Arts for students, artists, and educators.",
    shortDescription: "Saraswati Stotram, Book & Instrument blessing, and Veena Vadini Aradhana.",
    deity: "Goddess Saraswati",
    occasions: ["Devotional", "Child & Sanskar"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["White/Yellow Flowers", "Yellow Sweets", "Books & Pens", "Chandan"],
    image: "/images/pujas/saraswati-puja.jpg",
    faqs: [
      {
        question: "Is Vasant Panchami the only time for Saraswati Puja?",
        answer: "Vasant Panchami is popular, but students can perform it before major examinations."
      }
    ]
  },
  {
    id: "krishna-puja",
    slug: "krishna-puja",
    name: "Shri Krishna Puja",
    hindiName: "श्री कृष्ण पूजा",
    category: "Devotional",
    description: "Joyful devotional worship of Lord Krishna with Gopal Sahasranama and Makhan Mishri Naivedyam.",
    shortDescription: "Krishna Pujan with Madhurashtakam Path and Butter-Sugar offering.",
    deity: "Lord Krishna",
    occasions: ["Devotional", "Family Welfare"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Fresh White Butter", "Mishri", "Tulsi", "Peacock Feather", "Yellow Flowers"],
    image: "/images/pujas/krishna-puja.jpg",
    faqs: [
      {
        question: "Can this be conducted for family happiness?",
        answer: "Yes, Krishna Puja brings immense sweetness and harmony into household relationships."
      }
    ]
  },
  {
    id: "ram-puja",
    slug: "ram-puja",
    name: "Shri Ram Darbar Puja",
    hindiName: "श्री राम दरबार पूजा",
    category: "Devotional",
    description: "Worship of Lord Ram, Mata Sita, Lakshman, and Hanuman for righteousness, noble character, and family unity.",
    shortDescription: "Ram Stuti, Ram Raksha Stotra, and Ram Darbar Archana.",
    deity: "Shri Ram Darbar",
    occasions: ["Devotional", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Ram Darbar Frame/Idol", "Tulsi", "Panjiri Prasad", "Red & Yellow Cloth"],
    image: "/images/pujas/ram-puja.jpg",
    faqs: [
      {
        question: "Does this include Ram Raksha Stotra recitation?",
        answer: "Yes, Ram Raksha Stotra is recited for health and protective shield."
      }
    ]
  },
  {
    id: "shani-puja",
    slug: "shani-puja",
    name: "Shani Dev Puja & Telabhishek",
    hindiName: "शनि देव पूजा एवं तैलाभेषेक",
    category: "Devotional",
    description: "Special worship to pacify Lord Shani (Saturn), reducing Sade Sati, Dhaiya, or Saturn Dasha distress.",
    shortDescription: "Mustard oil Abhishek, Shani Chalisa, and Black Sesame Havan.",
    deity: "Lord Shani",
    occasions: ["Devotional", "Peace & Shanti"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Mustard Oil", "Black Sesame (Kale Til)", "Iron item", "Black Cloth", "Urad Dal"],
    image: "/images/pujas/shani-puja.jpg",
    faqs: [
      {
        question: "Is Saturday compulsory for Shani Puja?",
        answer: "Saturdays are traditionally preferred for Shani Dev rituals."
      }
    ]
  },
  {
    id: "navgraha-puja",
    slug: "navgraha-puja",
    name: "Navgraha Puja",
    hindiName: "नवग्रह पूजा",
    category: "Devotional",
    description: "General worship of 9 planets seeking overall balance, prosperity, and obstacle removal.",
    shortDescription: "Universal 9 planet invocation and Vedic Stotra recitation.",
    deity: "Navgrahas",
    occasions: ["Devotional", "Peace & Shanti"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["9 Grains", "9 Color Threads", "Flowers", "Havan Kit"],
    image: "/images/pujas/navgraha-puja-devotional.jpg",
    faqs: [
      {
        question: "How is this different from Navgraha Shanti?",
        answer: "Navgraha Puja is a shorter devotional invocation, whereas Shanti includes extensive Jaap & Havan."
      }
    ]
  },
  {
    id: "gayatri-mantra-jaap",
    slug: "gayatri-mantra-jaap",
    name: "Gayatri Mantra Jaap & Havan",
    hindiName: "गायत्री मंत्र जाप एवं हवन",
    category: "Devotional",
    description: "Recitation of the supreme Rigvedic Gayatri Mantra for intellect illumination, purity of thoughts, and spiritual energy.",
    shortDescription: "1,008 or 11,000 Gayatri Mantra recitation and Gayatri Havan.",
    deity: "Goddess Gayatri & Savitr (Sun)",
    occasions: ["Devotional", "Peace & Shanti"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Rudraksha / Tulsi Mala", "Ghee & Havan Samagri", "Yellow Flowers"],
    image: "/images/pujas/gayatri-puja.jpg",
    faqs: [
      {
        question: "Can Gayatri Havan be done for students?",
        answer: "Yes, it enhances concentration, memory retention, and mental peace."
      }
    ]
  },
  {
    id: "kaal-bhairav-puja",
    slug: "kaal-bhairav-puja",
    name: "Kaal Bhairav Puja",
    hindiName: "काल भैरव पूजा",
    category: "Devotional",
    description: "Protection ritual against fear, enemies, hidden evil forces, and negative planetary transits.",
    shortDescription: "Bhairav Ashtakam, Mustard Oil Lamp offering, and protection Pujan.",
    deity: "Lord Kaal Bhairav",
    occasions: ["Devotional", "Peace & Shanti"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Mustard Oil Diya", "Black Cloth", "Urad Dal Vada Prasad", "Red Flowers"],
    image: "/images/pujas/kaal-bhairav.jpg",
    faqs: [
      {
        question: "When is Kaal Bhairav Ashtami?",
        answer: "Kalashtami (8th day of Krishna Paksha every month) is ideal for Bhairav Pujan."
      }
    ]
  },
  {
    id: "santoshi-mata-puja",
    slug: "santoshi-mata-puja",
    name: "Santoshi Mata Puja",
    hindiName: "संतोषी माता पूजा",
    category: "Devotional",
    description: "Worship of Mata Santoshi for contentment, peaceful domestic life, and wish fulfillment.",
    shortDescription: "Friday Santoshi Mata Vrat Katha reading with Jaggery and Roasted Chana Prasad.",
    deity: "Goddess Santoshi",
    occasions: ["Devotional", "Family Welfare"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Gur (Jaggery)", "Bhuna Chana (Roasted Gram)", "Red Flowers", "Katha Book"],
    image: "/images/pujas/santoshi-mata.jpg",
    faqs: [
      {
        question: "What food restriction applies during Santoshi Mata Puja?",
        answer: "Sour items (curd, lemon, tamarind) are strictly avoided by devotees on the Puja day."
      }
    ]
  },
  {
    id: "kuber-puja",
    slug: "kuber-puja",
    name: "Kuber Puja & Mantra Jaap",
    hindiName: "कुबेर पूजा एवं मंत्र जाप",
    category: "Devotional",
    description: "Invocation of Lord Kuber (Treasurer of Devas) for wealth preservation and financial growth.",
    shortDescription: "Kuber Yantra Pujan and 108 Kuber Mantra Jaap.",
    deity: "Lord Kuber",
    occasions: ["Devotional", "Business Growth"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 1501,
    samagriIncluded: true,
    samagri: ["Kuber Yantra", "Lotus Flowers", "Yellow Sweets", "Silver/Brass Coins"],
    image: "/images/pujas/kuber-puja.jpg",
    faqs: [
      {
        question: "Is Kuber Puja suitable for home altars?",
        answer: "Yes, keeping a blessed Kuber Yantra in home vault brings stability in savings."
      }
    ]
  },

  // ==========================================
  // 7. HAVAN & SHANTI (8 Services)
  // ==========================================
  {
    id: "navgraha-havan",
    slug: "navgraha-havan",
    name: "Navgraha Havan",
    hindiName: "नवग्रह हवन",
    category: "Havan & Shanti",
    description: "Sacred fire offering using specific woods (Arka, Palash, Khadir, Apamarga, Peepal, Gular, Shami, Durva, Kusha) for all 9 planets.",
    shortDescription: "Specialized 9-planet Samidha Havan for planetary equilibrium.",
    deity: "Navgrahas",
    occasions: ["Havan & Homam", "Peace & Shanti"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["9 Sacred Woods (Samidha)", "Ghee", "Navadhanya Grains", "Havan Kund"],
    image: "/images/pujas/navgraha-havan.jpg",
    faqs: [
      {
        question: "Why are 9 different woods used?",
        answer: "Each planet resonates with a specific plant species in Vedic Botany."
      }
    ]
  },
  {
    id: "vastu-havan",
    slug: "vastu-havan",
    name: "Vastu Havan",
    hindiName: "वास्तु हवन",
    category: "Havan & Shanti",
    description: "Fire purification for home or commercial land to dissolve negative spatial vibrations.",
    shortDescription: "Vastu Purush Ahuti Havan for property energetic purification.",
    deity: "Vastu Purush",
    occasions: ["Havan & Homam", "New Home", "New Shop / Office"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Dry Wood", "Ghee", "Vastu Herbs", "Camphor"],
    image: "/images/pujas/vastu-havan.jpg",
    faqs: [
      {
        question: "Is this done after renovation?",
        answer: "Yes, Vastu Havan is ideal after major house repairs or remodeling."
      }
    ]
  },
  {
    id: "griha-shanti-havan",
    slug: "griha-shanti-havan",
    name: "Griha Shanti Havan",
    hindiName: "गृह शांति हवन",
    category: "Havan & Shanti",
    description: "Sacred fire oblations performed to remove negative energies, evil eye, and family stress.",
    shortDescription: "Auspicious home peace Havan for family harmony.",
    deity: "Kuldevi & Navgrahas",
    occasions: ["Havan & Homam", "Peace & Shanti", "Family Welfare"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Havan Samagri", "Ghee", "Black Sesame", "Guggal & Loban"],
    image: "/images/pujas/griha-shanti-havan.jpg",
    faqs: [
      {
        question: "Does it help against evil eye (Nazar)?",
        answer: "Yes, Guggal, Loban, and Mustard offerings in Agni destroy evil eye effects."
      }
    ]
  },
  {
    id: "mahamrityunjaya-havan",
    slug: "mahamrityunjaya-havan",
    name: "Mahamrityunjaya Havan",
    hindiName: "महामृत्युंजय हवन",
    category: "Havan & Shanti",
    description: "Fire offerings made with Mahamrityunjaya Mantra Ahutis for health recovery and physical vitality.",
    shortDescription: "Health and longevity fire ceremony with Mahamrityunjaya Mantras.",
    deity: "Lord Shiva",
    occasions: ["Havan & Homam", "Peace & Shanti", "Family Welfare"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Amrita (Giloy) sticks", "Ghee", "Black Til", "Havan Herbs"],
    image: "/images/pujas/mahamrityunjaya-havan.jpg",
    faqs: [
      {
        question: "What herbs are added to Mahamrityunjaya Havan?",
        answer: "Medicinal herbs like Giloy, Guggal, Jatamansi, and Sugandhit Dravya."
      }
    ]
  },
  {
    id: "ganesh-havan",
    slug: "ganesh-havan",
    name: "Ganesh Havan (Ganapati Homam)",
    hindiName: "गणेश हवन (गणपति होमम)",
    category: "Havan & Shanti",
    description: "Fire offerings using Modak, Durva, and Coconut to Lord Ganesha for swift obstacle removal.",
    shortDescription: "Ganapati Homam with 108 Modak / Coconut Ahutis.",
    deity: "Lord Ganesha",
    occasions: ["Havan & Homam", "New Home", "Business Growth"],
    duration: "1.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Durva grass bundle", "Modak for Havan", "Ghee & Samagri"],
    image: "/images/pujas/ganesh-havan.jpg",
    faqs: [
      {
        question: "Is Ganapati Homam performed early in the morning?",
        answer: "Yes, Brahma Muhurat or early morning is traditional for Ganapati Homam."
      }
    ]
  },
  {
    id: "lakshmi-havan",
    slug: "lakshmi-havan",
    name: "Lakshmi Havan (Kanakdhara Homam)",
    hindiName: "लक्ष्मी हवन (कनकधारा होमम)",
    category: "Havan & Shanti",
    description: "Havan with Lotus seeds (Kamal Gatta) and Ghee offerings for invoking financial stability.",
    shortDescription: "Kamal Gatta & Sri Suktam Ahuti Havan for abundance.",
    deity: "Goddess Mahalakshmi",
    occasions: ["Havan & Homam", "Business Growth"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Kamal Gatta (Lotus seeds)", "Pure Desi Ghee", "Honey", "Kheel"],
    image: "/images/pujas/lakshmi-havan.jpg",
    faqs: [
      {
        question: "How many Ahutis are given?",
        answer: "Standardly 108 Sri Suktam Ahutis are offered."
      }
    ]
  },
  {
    id: "durga-havan",
    slug: "durga-havan",
    name: "Durga Havan (Chandi Homam)",
    hindiName: "दुर्गा हवन (चंडी होमम)",
    category: "Havan & Shanti",
    description: "Potent fire ritual of Durga Saptashati Ahutis for victory over adversities and negative forces.",
    shortDescription: "Chandi Homam with 700 Mantra Ahutis.",
    deity: "Goddess Durga",
    occasions: ["Havan & Homam", "Devotional", "Peace & Shanti"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: ["Dry Coconuts", "Red Chunri", "Havan Herbs", "Ghee"],
    image: "/images/pujas/durga-havan.jpg",
    faqs: [
      {
        question: "Is Nava Chandi Havan performed during Navratri?",
        answer: "Yes, Ashtami and Navami Tithi during Navratri are peak times."
      }
    ]
  },
  {
    id: "shanti-havan",
    slug: "shanti-havan",
    name: "Sarva Dosh Shanti Havan",
    hindiName: "सर्व दोष शांति हवन",
    category: "Havan & Shanti",
    description: "Universal pacification Havan addressing unexpected household obstacles, bad dreams, and mental anxieties.",
    shortDescription: "All-in-one Sarva Shanti fire ritual for peace of mind.",
    deity: "All Devas & Agni",
    occasions: ["Havan & Homam", "Peace & Shanti"],
    duration: "2 Hours",
    modes: ["home", "online"],
    startingPrice: 2101,
    samagriIncluded: true,
    samagri: ["Sarva Oshadhi herbs", "Ghee", "Samidha", "Camphor"],
    image: "/images/pujas/shanti-havan.jpg",
    faqs: [
      {
        question: "Who can attend this Havan?",
        answer: "All family members can sit together and offer Ahutis."
      }
    ]
  },

  // ==========================================
  // 8. SPECIAL PUJAS (9 Services)
  // ==========================================
  {
    id: "kaal-sarp-dosh-shanti",
    slug: "kaal-sarp-dosh-shanti",
    name: "Kaal Sarp Dosh Shanti Puja",
    hindiName: "काल सर्प दोष शांति पूजा",
    category: "Special Pujas",
    description: "Remedial ritual performed when all 7 planets are hemmed between Rahu and Ketu, causing unexpected career delays or anxiety.",
    shortDescription: "Rahu-Ketu and Nag Pujan for Kaal Sarp Dosh remediation.",
    deity: "Rahu-Ketu & Lord Shiva",
    occasions: ["Peace & Shanti"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    popular: true,
    samagriIncluded: true,
    samagri: ["Lead / Silver Nag-Nagin Pair", "Black & White Sesame", "Navadhanya", "Milk & Coconut"],
    image: "/images/pujas/kaal-sarp.jpg",
    faqs: [
      {
        question: "Can Kaal Sarp Shanti be performed at home?",
        answer: "Yes, experienced Pandits perform authentic Nag Pujan and Rahu-Ketu Jaap at home."
      }
    ]
  },
  {
    id: "rahu-ketu-shanti",
    slug: "rahu-ketu-shanti",
    name: "Rahu Ketu Dosh Shanti",
    hindiName: "राहु केतु दोष शांति",
    category: "Special Pujas",
    description: "Pacifies shadow planets Rahu and Ketu to reduce sudden losses, confusion, and relationship misunderstandings.",
    shortDescription: "Shadow planet Rahu Ketu Mantra Jaap and Havan.",
    deity: "Rahu & Ketu Dev",
    occasions: ["Peace & Shanti"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Black Urad", "Kusha Grass", "Mustard & Sesame Seeds", "Dark Cloth"],
    image: "/images/pujas/rahu-ketu.jpg",
    faqs: [
      {
        question: "When is this recommended?",
        answer: "Recommended during Rahu or Ketu Mahadasha/Antardasha."
      }
    ]
  },
  {
    id: "chandi-path-havan",
    slug: "chandi-path-havan",
    name: "Shat Chandi / Chandi Path",
    hindiName: "चंडी पाठ एवं हवन",
    category: "Special Pujas",
    description: "Grand ritual of Durga Saptashati recitations for monumental life victories, chronic issue resolution, and supreme protection.",
    shortDescription: "Complete Durga Saptashati Path and Chandi Havan.",
    deity: "Goddess Chandi (Durga)",
    occasions: ["Special Pujas", "Devotional"],
    duration: "4 Hours",
    modes: ["home", "online"],
    startingPrice: 4501,
    samagriIncluded: true,
    samagri: ["Special Chandi Kit", "Red Flowers", "Lotus Gatta", "Dry Coconuts"],
    image: "/images/pujas/chandi-path.jpg",
    faqs: [
      {
        question: "How many Pandits perform Chandi Path?",
        answer: "Usually 3 to 5 Pandits recite simultaneously."
      }
    ]
  },
  {
    id: "pitra-dosh-shanti",
    slug: "pitra-dosh-shanti",
    name: "Pitra Dosh Shanti & Tarpan",
    hindiName: "पितृ दोष शांति एवं तर्पण",
    category: "Special Pujas",
    description: "Remedial ritual seeking peace for ancestors (Pitru Deva) and resolving lineage delays in marriage or progeny.",
    shortDescription: "Pitra Tarpan, Pind Daan, and Pitra Shanti Havan.",
    deity: "Pitru Devata & Lord Vishnu",
    occasions: ["Special Pujas", "Peace & Shanti"],
    duration: "2.5 Hours",
    modes: ["home", "online"],
    startingPrice: 2501,
    samagriIncluded: true,
    samagri: ["Black Sesame", "Kusha Grass", "Barley Flour (Jau)", "White Flowers & Sweets"],
    image: "/images/pujas/pitra-dosh.jpg",
    faqs: [
      {
        question: "Is Amavasya required for Pitra Shanti?",
        answer: "Amavasya or Pitru Paksha is ideal, but specific Tithis can also be selected."
      }
    ]
  },
  {
    id: "nakshatra-shanti",
    slug: "nakshatra-shanti",
    name: "Gand Mool Nakshatra Shanti",
    hindiName: "गंडमूल नक्षत्र शांति",
    category: "Special Pujas",
    description: "Performed on the 27th day after birth if a child is born in Gand Mool Nakshatras (Ashlesha, Magha, Jyeshtha, Moola, Revati, Aswini).",
    shortDescription: "27 Well Waters & 27 Tree Leaves Shanti Puja for newborn Gand Mool Dosh.",
    deity: "Nakshatra Deities",
    occasions: ["Special Pujas", "Child & Sanskar"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: ["27 Tree Leaves", "27 Earth Clods / Soil", "Grains & 27 Medicinal Herbs"],
    image: "/images/pujas/gandmool.jpg",
    faqs: [
      {
        question: "Why is 27th day chosen?",
        answer: "Because the birth Nakshatra recurs on the 27th day after birth."
      }
    ]
  },
  {
    id: "sunderkand-path-special",
    slug: "sunderkand-path",
    name: "Akhand Sunderkand Path",
    hindiName: "अखंड सुंदरकांड पाठ",
    category: "Special Pujas",
    description: "Complete rhythmic chanting of Sunderkand with musical accompaniment (Dholak/Harmonium) for divine joy.",
    shortDescription: "Devotional musical Sunderkand Path with Aarti & Prasad.",
    deity: "Lord Hanuman & Shri Ram",
    occasions: ["Special Pujas", "Devotional", "Family Welfare"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3101,
    samagriIncluded: true,
    samagri: ["Sindoor", "Chameli Oil", "Sweets & Fruit Basket", "Ramayana Pith"],
    image: "/images/pujas/sunderkand.jpg",
    faqs: [
      {
        question: "Are musical instruments included?",
        answer: "Yes, our team brings traditional Dholak and Harmonium for devotional Samuhik singing."
      }
    ]
  },
  {
    id: "akhand-ramayan-path",
    slug: "akhand-ramayan-path",
    name: "Akhand Ramayan Path (24 Hours)",
    hindiName: "अखंड रामायण पाठ (24 घंटे)",
    category: "Special Pujas",
    description: "Continuous 24-hour uninterrupted recitation of all 7 Kaandas of Ramcharitmanas by a team of Acharyas.",
    shortDescription: "24-hour continuous Ramcharitmanas Path with Havanas & Mahaaarti.",
    deity: "Shri Ram Darbar",
    occasions: ["Special Pujas", "Devotional", "New Home"],
    duration: "24 Hours",
    modes: ["home", "online"],
    startingPrice: 11001,
    samagriIncluded: true,
    samagri: ["Ramcharitmanas Grantha", "Akhand Lamp & Ghee", "Complete Havan Kit", "Prasad Materials"],
    image: "/images/pujas/akhand-ramayan.jpg",
    faqs: [
      {
        question: "How many Pandits participate in 24-hour Path?",
        answer: "A team of 4 to 6 Pandits recite in rotating shifts so reading never pauses."
      }
    ]
  },
  {
    id: "baglamukhi-puja",
    slug: "baglamukhi-puja",
    name: "Mata Baglamukhi Puja (Pitambara)",
    hindiName: "माता बगलामुखी (पीतांबरा) पूजा",
    category: "Special Pujas",
    description: "Powerful Mahavidya Pujan for victory in legal court disputes, silencing false allegations, and overcoming enemies.",
    shortDescription: "Yellow Mahavidya Baglamukhi Mantra Jaap and Haldi Havan.",
    deity: "Goddess Baglamukhi",
    occasions: ["Special Pujas", "Peace & Shanti"],
    duration: "3 Hours",
    modes: ["home", "online"],
    startingPrice: 3501,
    samagriIncluded: true,
    samagri: ["Yellow Cloths", "Turmeric Whole (Haldi Ganth)", "Yellow Flowers", "Ghee"],
    image: "/images/pujas/baglamukhi.jpg",
    faqs: [
      {
        question: "Why is Yellow color dominant in Baglamukhi Puja?",
        answer: "Goddess Baglamukhi is Pitambara (fond of Yellow), hence yellow garments, haldi, and yellow sweets are offered."
      }
    ]
  },
  {
    id: "kalsarp-rahu-combikit",
    slug: "shanti-combo-puja",
    name: "Maha Shanti Combo Puja",
    hindiName: "महा शांति कॉम्बो पूजा",
    category: "Special Pujas",
    description: "Integrated Griha Shanti, Navgraha Havan, and Vastu Pujan designed for maximum energetic clearing in one sitting.",
    shortDescription: "Combined Griha Shanti + Navgraha Havan + Vastu Pujan.",
    deity: "Navgrahas & Vastu Dev",
    occasions: ["Special Pujas", "Peace & Shanti", "New Home"],
    duration: "3.5 Hours",
    modes: ["home", "online"],
    startingPrice: 4101,
    samagriIncluded: true,
    samagri: ["Combined Shanti Samagri", "All Planet Woods", "Vastu Yantra", "Ghee & Coconuts"],
    image: "/images/pujas/shanti-combo.jpg",
    faqs: [
      {
        question: "Is this more cost-effective than booking separately?",
        answer: "Yes, booking the combo saves time and provides comprehensive coverage in one session."
      }
    ]
  }
];
