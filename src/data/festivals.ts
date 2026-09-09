import { Festival } from "@/types";

export const festivalsData: Festival[] = [
  {
    id: "ganesh-chaturthi",
    slug: "ganesh-chaturthi",
    name: "Ganesh Chaturthi Puja",
    hindiName: "गणेश चतुर्थी पूजा",
    date: "14 September 2026",
    day: "Monday",
    month: "September",
    significance: "Celebrates the birth of Lord Ganesha, the remover of all obstacles and harbinger of wisdom and auspiciousness.",
    description: "Book experienced Panditji for Ganesh Sthapana, Shodashopachara Puja, Atharvashirsha Path, and Modak Naivedyam at your home, office, or society pandal.",
    suggestedPujaSlugs: ["ganesh-puja", "ganesh-havan", "satyanarayan-katha"],
    samagri: ["Clay Ganesh Idol", "Durva grass", "Modak", "Red flowers", "Chandan", "Kumkum", "Kalash", "Coconut", "Paan leaves"],
    modes: ["home", "online"],
    image: "/images/festivals/ganesh-chaturthi.jpg",
    faqs: [
      {
        question: "When should Ganesh Sthapana Puja be performed?",
        answer: "Ganesh Sthapana is ideally conducted during Madhyahna (midday) Muhurat on Chaturthi Tithi."
      },
      {
        question: "Can Panditji bring Puja Samagri?",
        answer: "Yes, you can choose Option 1 during booking for Panditji to bring all ritual Samagri except fresh flowers/fruits."
      }
    ]
  },
  {
    id: "navratri-puja",
    slug: "navratri-puja",
    name: "Sharad Navratri Puja & Durga Path",
    hindiName: "शारदीय नवरात्रि पूजा एवं दुर्गा पाठ",
    date: "11 October 2026",
    day: "Sunday",
    month: "October",
    significance: "Nine sacred nights dedicated to Goddess Durga and her nine forms (Navadurga) for spiritual victory and strength.",
    description: "Perform Ghatasthapana (Kalash Sthapana), Durga Saptashati Path, Akhand Jyot setup, and Kanya Pujan with Vedic Pandits.",
    suggestedPujaSlugs: ["durga-puja", "durga-havan", "navgraha-puja"],
    samagri: ["Earthen pot & barley seeds", "Kalash", "Coconut", "Red Chunri", "Durga Saptashati book", "Havan Samagri", "Desi Ghee"],
    modes: ["home", "online"],
    image: "/images/festivals/navratri.jpg",
    faqs: [
      {
        question: "What is performed on the first day of Navratri?",
        answer: "Ghatasthapana (Kalash Sthapana) is performed on Pratipada Tithi to invoke Goddess Durga into the sacred home altar."
      }
    ]
  },
  {
    id: "dhanteras-puja",
    slug: "dhanteras-puja",
    name: "Dhanteras & Kuber Puja",
    hindiName: "धनतेरस एवं कुबेर पूजा",
    date: "06 November 2026",
    day: "Friday",
    month: "November",
    significance: "Worship of Lord Dhanvantari (deity of health) and Lord Kuber (custodian of wealth) for health and prosperity.",
    description: "Special evening Lakshmi Kuber Pujan, Yamadeep Daan, and blessing ritual for newly purchased gold, silver, or brass utensils.",
    suggestedPujaSlugs: ["lakshmi-puja", "lakshmi-ganesh-puja", "new-car-puja"],
    samagri: ["Kuber Yantra / Idol", "New silver/brass vessel", "Coriander seeds (Dhana)", "Lotus flowers", "Ghee lamps"],
    modes: ["home", "online"],
    image: "/images/festivals/dhanteras.jpg",
    faqs: [
      {
        question: "What is the best timing for Dhanteras Puja?",
        answer: "Dhanteras Puja is performed during Pradosh Kaal in the evening when Vrishabha Lagna prevails."
      }
    ]
  },
  {
    id: "diwali-lakshmi-puja",
    slug: "diwali-lakshmi-puja",
    name: "Diwali Mahalakshmi Puja",
    hindiName: "दीपावली महालक्ष्मी पूजा",
    date: "08 November 2026",
    day: "Sunday",
    month: "November",
    significance: "The festival of lights honoring Goddess Lakshmi, Lord Ganesha, and Goddess Saraswati for eternal abundance and joy.",
    description: "Traditional Diwali Chopda Pujan, Lakshmi Ganesh Pujan, and Kuber Puja conducted at residence, shops, offices, and factories.",
    suggestedPujaSlugs: ["lakshmi-puja", "lakshmi-ganesh-puja", "shop-opening-puja"],
    samagri: ["Lakshmi Ganesh Idol", "Chopda / Account books", "Kamal Gatta", "Lotus flowers", "Kheel Batasha", "Clay Diyas"],
    modes: ["home", "online"],
    image: "/images/festivals/diwali.jpg",
    faqs: [
      {
        question: "Is Diwali Puja conducted at commercial spaces too?",
        answer: "Yes, our Pandits conduct specialized Vyapar Chopda Pujan for businesses, shops, and corporate offices during Sthir Lagna."
      }
    ]
  },
  {
    id: "karwa-chauth",
    slug: "karwa-chauth",
    name: "Karwa Chauth Vrat Puja",
    hindiName: "करवा चौथ व्रत पूजा",
    date: "27 October 2026",
    day: "Tuesday",
    month: "October",
    significance: "Observed by married women for the longevity, health, and prosperity of their husbands.",
    description: "Evening group or individual Karwa Chauth Vrat Katha, Gauri Puja, Karwa exchange rituals, and Arghya timing guidance.",
    suggestedPujaSlugs: ["marriage-puja", "satyanarayan-katha"],
    samagri: ["Earthen Karwa", "Sieve (Chhani)", "Karwa Chauth Story Book", "Shringar items", "Sweets"],
    modes: ["home", "online"],
    image: "/images/festivals/karwa-chauth.jpg",
    faqs: [
      {
        question: "Can Karwa Chauth Katha be conducted in a group?",
        answer: "Yes! Many societies and family groups book Panditji for collective Karwa Chauth Katha reading."
      }
    ]
  },
  {
    id: "maha-shivratri",
    slug: "maha-shivratri",
    name: "Maha Shivratri Rudrabhishek",
    hindiName: "महाशिवरात्रि रुद्राभिषेक",
    date: "15 February 2027",
    day: "Monday",
    month: "February",
    significance: "The Great Night of Shiva commemorating the divine union of Lord Shiva and Goddess Parvati.",
    description: "Four-Prahar Shivratri Abhishek, Laghu Rudra Path, Bilva Patra Archana, and Shiv Sahasranama Havan conducted at home or temple.",
    suggestedPujaSlugs: ["rudrabhishek", "mahamrityunjaya-jaap", "shiv-puja"],
    samagri: ["Shivling / Narmadeshwar", "Milk, Curd, Honey, Ghee, Sugar (Panchamrit)", "Bilva leaves", "Dhatura", "Bhang", "Bhasma"],
    modes: ["home", "online"],
    image: "/images/festivals/maha-shivratri.jpg",
    faqs: [
      {
        question: "Can Panchamrit Rudrabhishek be performed inside apartment homes?",
        answer: "Yes, our Pandits bring a stainless steel Abhishek tray (Jaldhari) so milk and panchamrit are neatly collected without spillage."
      }
    ]
  },
  {
    id: "ram-navami",
    slug: "ram-navami",
    name: "Ram Navami Puja",
    hindiName: "राम नवमी पूजा",
    date: "26 March 2027",
    day: "Friday",
    month: "March",
    significance: "Celebrates the birth of Maryada Purushottam Lord Ram, the 7th avatar of Lord Vishnu.",
    description: "Ram Janmotsav Sunderkand Path, Akhand Ramayan Sampurna, and Shri Ram Raksha Stotra Havan.",
    suggestedPujaSlugs: ["ram-puja", "satyanarayan-katha", "hanuman-puja"],
    samagri: ["Ram Lalla Photo/Idol", "Tulsi leaves", "Panjiri", "Chandan", "Panchamrit"],
    modes: ["home", "online"],
    image: "/images/festivals/ram-navami.jpg",
    faqs: [
      {
        question: "What time is Ram Janmotsav Puja performed?",
        answer: "Lord Ram was born at Midday (12:00 PM Abhijit Muhurat), which is the most sacred time for Aarti."
      }
    ]
  },
  {
    id: "hanuman-jayanti",
    slug: "hanuman-jayanti",
    name: "Hanuman Jayanti Special Puja",
    hindiName: "हनुमान जयंती हनुमान चालीसा एवं सुंदरकांड",
    date: "10 April 2027",
    day: "Saturday",
    month: "April",
    significance: "Celebrates the birth of Lord Hanuman, symbol of strength, devotion, and protection against evil forces.",
    description: "Sindoor Chola Arpan, 108 Hanuman Chalisa Path, Sunderkand Path, and Bajrang Baan Path with sacred Havan.",
    suggestedPujaSlugs: ["hanuman-puja", "havan", "navgraha-puja"],
    samagri: ["Orange Sindoor", "Jasmine oil (Chameli oil)", "Betel leaves (Paan)", "Bundi / Boondi Ladoo", "Red cloth"],
    modes: ["home", "online"],
    image: "/images/festivals/hanuman-jayanti.jpg",
    faqs: [
      {
        question: "What is Sindoor Chola Arpan?",
        answer: "Anointing Lord Hanuman idol with Orange Sindoor mixed in Jasmine oil, considered extremely pleasing to Mahaveer Hanuman."
      }
    ]
  },
  {
    id: "akshaya-tritiya",
    slug: "akshaya-tritiya",
    name: "Akshaya Tritiya Puja",
    hindiName: "अक्षय तृतीया महालक्ष्मी एवं विष्णु पूजा",
    date: "09 May 2027",
    day: "Sunday",
    month: "May",
    significance: "An eternal auspicious day where any virtuous activity, investment, or Puja yields non-diminishing (Akshaya) rewards.",
    description: "Special Vishnu Lakshmi Pujan, Gold/Property blessing ritual, and Annadaana / Kalash Daan rituals.",
    suggestedPujaSlugs: ["lakshmi-puja", "bhoomi-pujan", "shop-opening-puja"],
    samagri: ["Yellow flowers", "Tulsi", "Barley (Jau)", "Gold item or coin", "White sweets"],
    modes: ["home", "online"],
    image: "/images/festivals/akshaya-tritiya.jpg",
    faqs: [
      {
        question: "Why is Akshaya Tritiya considered auspicious for starting new work?",
        answer: "Sun and Moon are both in their exaltation signs on Akshaya Tritiya, making the entire day free of negative Rahu Kaal effects."
      }
    ]
  },
  {
    id: "janmashtami",
    slug: "janmashtami",
    name: "Shri Krishna Janmashtami Puja",
    hindiName: "श्री कृष्ण जन्माष्टमी पूजा",
    date: "03 September 2026",
    day: "Thursday",
    month: "September",
    significance: "Celebrates the birth of Lord Krishna at midnight, bringing joy, divine wisdom, and protection.",
    description: "Ladoo Gopal Abhishek, Jhula Utsav, Midnight Janmotsav Aarti, Gopal Sahasranama, and Makhan Mishri Naivedyam.",
    suggestedPujaSlugs: ["krishna-puja", "child-blessing-puja", "satyanarayan-katha"],
    samagri: ["Ladoo Gopal Idol", "Brass Jhula (Swing)", "Makhan (Butter)", "Mishri", "Tulsi leaves", "Panchamrit"],
    modes: ["home", "online"],
    image: "/images/festivals/janmashtami.jpg",
    faqs: [
      {
        question: "When is the Janmashtami Puja conducted?",
        answer: "Main Janmashtami Pujan takes place at Midnight Nishita Kaal Muhurat around 12:00 AM."
      }
    ]
  }
];
