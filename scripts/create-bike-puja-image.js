const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 900;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4a0e04" />
      <stop offset="50%" stop-color="#7c1d06" />
      <stop offset="100%" stop-color="#2a0502" />
    </linearGradient>

    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#dc2626" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic Bike Gradient -->
    <linearGradient id="bikeBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="50%" stop-color="#9f1239" />
      <stop offset="100%" stop-color="#4c0519" />
    </linearGradient>

    <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="25%" stop-color="#f8fafc" />
      <stop offset="50%" stop-color="#cbd5e1" />
      <stop offset="75%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#64748b" />
    </linearGradient>

    <linearGradient id="headlightGlass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#fef08a" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.5" />
    </linearGradient>

    <!-- Gold Accent -->
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#a16207" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="900" fill="url(#bgGrad)" />
  <circle cx="600" cy="450" r="500" fill="url(#glow)" />

  <!-- Spiritual Mandala Ring in Background -->
  <circle cx="600" cy="420" r="340" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8 8" opacity="0.3" />
  <circle cx="600" cy="420" r="280" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="15 10" opacity="0.4" />

  <!-- Ground Shadow -->
  <ellipse cx="600" cy="780" rx="420" ry="60" fill="#000000" opacity="0.7" filter="blur(20px)"/>

  <!-- ================= SCOOTER / BIKE FRONT BODY ================= -->
  <!-- Wheel & Suspension -->
  <rect x="540" y="620" width="120" height="180" rx="30" fill="#1e293b" stroke="#090d16" stroke-width="8"/>
  <rect x="560" y="640" width="80" height="140" rx="20" fill="#0f172a" stroke="#334155" stroke-width="4"/>
  <!-- Front Fender / Mudguard -->
  <path d="M 480 600 Q 600 520 720 600 L 700 660 Q 600 600 500 660 Z" fill="url(#bikeBody)" stroke="#881337" stroke-width="3"/>

  <!-- Side Panels & Front Shield -->
  <path d="M 380 440 Q 600 320 820 440 L 760 620 Q 600 660 440 620 Z" fill="url(#bikeBody)" stroke="#be123c" stroke-width="4"/>
  <!-- Dark Trim on Shield -->
  <path d="M 460 450 Q 600 370 740 450 L 700 570 Q 600 600 500 570 Z" fill="#0f172a" opacity="0.7"/>

  <!-- Handlebars -->
  <!-- Left Grip -->
  <rect x="240" y="320" width="120" height="35" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="3" transform="rotate(-8 300 337)"/>
  <rect x="340" y="315" width="25" height="45" rx="5" fill="url(#chrome)"/>
  <!-- Right Grip -->
  <rect x="840" y="320" width="120" height="35" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="3" transform="rotate(8 900 337)"/>
  <rect x="835" y="315" width="25" height="45" rx="5" fill="url(#chrome)"/>
  <!-- Handlebar Center Console Body -->
  <path d="M 340 330 Q 600 270 860 330 L 820 420 Q 600 380 380 420 Z" fill="url(#bikeBody)" stroke="#9f1239" stroke-width="3"/>

  <!-- Mirrors -->
  <!-- Left Mirror -->
  <path d="M 320 310 L 280 210" stroke="url(#chrome)" stroke-width="10" stroke-linecap="round"/>
  <ellipse cx="270" cy="200" rx="45" ry="30" fill="#1e293b" stroke="url(#chrome)" stroke-width="4" transform="rotate(-15 270 200)"/>
  <!-- Right Mirror -->
  <path d="M 880 310 L 920 210" stroke="url(#chrome)" stroke-width="10" stroke-linecap="round"/>
  <ellipse cx="930" cy="200" rx="45" ry="30" fill="#1e293b" stroke="url(#chrome)" stroke-width="4" transform="rotate(15 930 200)"/>

  <!-- Headlight (Glowing Brightly) -->
  <ellipse cx="600" cy="350" rx="90" ry="55" fill="url(#headlightGlass)" stroke="url(#chrome)" stroke-width="8"/>
  <ellipse cx="600" cy="350" rx="60" ry="35" fill="#ffffff" opacity="0.9" filter="blur(4px)"/>

  <!-- ================= PUJA RITUAL DECORATIONS ================= -->

  <!-- Sacred SWASTIKA (Swastik) drawn with Kumkum on Front Shield -->
  <g transform="translate(600, 490) scale(1.4)">
    <!-- Swastika Lines -->
    <path d="M 0 -30 L 0 30 M -30 0 L 30 0" stroke="#dc2626" stroke-width="8" stroke-linecap="round" />
    <path d="M 0 -30 L 20 -30 M 0 30 L -20 30 M -30 0 L -30 -20 M 30 0 L 30 20" stroke="#dc2626" stroke-width="8" stroke-linecap="round" />
    <!-- 4 Dots -->
    <circle cx="-14" cy="-14" r="3.5" fill="#dc2626" />
    <circle cx="14" cy="-14" r="3.5" fill="#dc2626" />
    <circle cx="-14" cy="14" r="3.5" fill="#dc2626" />
    <circle cx="14" cy="14" r="3.5" fill="#dc2626" />
  </g>

  <!-- Red Moli / Kalava Thread tied around Handlebar -->
  <path d="M 360 340 Q 600 320 840 340" stroke="#ef4444" stroke-width="6" stroke-dasharray="12 6" />
  <path d="M 360 344 Q 600 324 840 344" stroke="#f59e0b" stroke-width="4" />

  <!-- Fresh Marigold Flower Garland (Genda Phool Mala) Draped Around Handlebars -->
  <!-- Outer Garland Loop -->
  <g id="garland">
    <!-- Marigold Flowers along curve -->
    <circle cx="340" cy="340" r="18" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
    <circle cx="370" cy="365" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="405" cy="395" r="19" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
    <circle cx="445" cy="435" r="20" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
    <circle cx="490" cy="480" r="21" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="540" cy="520" r="22" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
    <!-- Bottom Drop Flowers -->
    <circle cx="600" cy="540" r="24" fill="#ea580c" stroke="#9a3412" stroke-width="4"/>
    <circle cx="600" cy="580" r="22" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="600" cy="615" r="18" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>

    <circle cx="660" cy="520" r="22" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
    <circle cx="710" cy="480" r="21" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="755" cy="435" r="20" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
    <circle cx="795" cy="395" r="19" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
    <circle cx="830" cy="365" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="860" cy="340" r="18" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
  </g>

  <!-- ================= GROUND RITUAL OFFERINGS ================= -->

  <!-- Coconut (Nariyal) with Mango Leaves in front -->
  <g transform="translate(420, 720)">
    <!-- Mango Leaves Behind Coconut -->
    <path d="M 0 -10 Q -40 -60 -20 -90 Q 0 -60 0 -10" fill="#15803d"/>
    <path d="M 0 -10 Q 40 -60 20 -90 Q 0 -60 0 -10" fill="#16a34a"/>
    <path d="M 0 -10 Q -60 -30 -80 -40 Q -40 -10 0 -10" fill="#15803d"/>
    <path d="M 0 -10 Q 60 -30 80 -40 Q 40 -10 0 -10" fill="#16a34a"/>
    <!-- Brown Coconut Body -->
    <circle cx="0" cy="0" r="38" fill="#78350f" stroke="#451a03" stroke-width="4"/>
    <!-- Coconut Fiber Details -->
    <path d="M -15 -20 Q 0 -35 15 -20 M -25 0 Q 0 -15 25 0 M -20 15 Q 0 5 20 15" stroke="#92400e" stroke-width="3" fill="none"/>
    <!-- Tilak / Kumkum Tika on Coconut -->
    <circle cx="0" cy="-10" r="8" fill="#dc2626"/>
    <circle cx="0" cy="-10" r="3" fill="#fef08a"/>
  </g>

  <!-- Green Lemons (Nimbu) for Vehicle Protection -->
  <!-- Lemon 1 -->
  <ellipse cx="750" cy="740" rx="20" ry="16" fill="#84cc16" stroke="#4d7c0f" stroke-width="3" transform="rotate(-15 750 740)"/>
  <!-- Lemon 2 -->
  <ellipse cx="790" cy="750" rx="18" ry="15" fill="#a3e635" stroke="#4d7c0f" stroke-width="3" transform="rotate(20 790 750)"/>

  <!-- Burning Brass Diya Lamp (Deepak) on Right Side -->
  <g transform="translate(760, 700)">
    <!-- Brass Diya Base -->
    <path d="M -30 20 L 30 20 L 20 35 L -20 35 Z" fill="url(#gold)"/>
    <path d="M -40 20 Q 0 35 40 20 Q 25 5 0 8 Q -25 5 -40 20 Z" fill="url(#gold)" stroke="#b45309" stroke-width="2"/>
    <!-- Oil inside -->
    <ellipse cx="0" cy="14" rx="25" ry="8" fill="#78350f"/>
    <!-- Flame Glow -->
    <circle cx="0" cy="-5" r="30" fill="#f59e0b" opacity="0.5" filter="blur(8px)"/>
    <!-- Flame Body -->
    <path d="M -10 10 Q 0 -35 0 -45 Q 0 -35 10 10 Z" fill="#fbbf24"/>
    <path d="M -5 8 Q 0 -25 0 -32 Q 0 -25 5 8 Z" fill="#ffffff"/>
  </g>

  <!-- Kumkum & Haldi Rice (Akshat) scattered on ground -->
  <circle cx="500" cy="760" r="4" fill="#dc2626"/>
  <circle cx="510" cy="765" r="3" fill="#eab308"/>
  <circle cx="525" cy="755" r="4" fill="#dc2626"/>
  <circle cx="680" cy="750" r="4" fill="#dc2626"/>
  <circle cx="700" cy="760" r="3" fill="#eab308"/>
  <circle cx="715" cy="745" r="4" fill="#dc2626"/>

  <!-- Header Badge Overlay Banner Text -->
  <g transform="translate(600, 85)">
    <rect x="-340" y="-35" width="680" height="70" rx="35" fill="#4c0519" fill-opacity="0.85" stroke="#f59e0b" stroke-width="3"/>
    <text x="0" y="-2" font-family="'Georgia', 'Times New Roman', serif" font-size="28" font-weight="bold" fill="#fef08a" text-anchor="middle">NEW BIKE &amp; SCOOTER PUJA</text>
    <text x="0" y="24" font-family="sans-serif" font-size="18" font-weight="600" fill="#fcd34d" text-anchor="middle">नया बाइक एवं स्कूटी वाहन पूजा (₹501)</text>
  </g>

  <!-- Bottom Subtitle Badge -->
  <g transform="translate(600, 840)">
    <rect x="-260" y="-20" width="520" height="40" rx="20" fill="#0f172a" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="0" y="5" font-family="sans-serif" font-size="15" font-weight="bold" fill="#e0f2fe" text-anchor="middle">Vahana Pujan • Swastik • Kalava • Nariyal • Diya Rituals</text>
  </g>
</svg>
`;

const outputPath = path.join(__dirname, '../public/images/pujas/bike-puja.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95 })
  .toFile(outputPath)
  .then((info) => {
    console.log("Successfully generated high-resolution bike-puja.jpg image!", info);
  })
  .catch((err) => {
    console.error("Error generating image:", err);
  });
