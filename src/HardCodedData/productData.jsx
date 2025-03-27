import glasses1 from "./glasses1/glasses1 (1).jpg";
import glasses2 from "./glasses1/glasses1 (2).jpg";
import glasses3 from "./glasses1/glasses1 (3).jpg";
import glasses4 from "./glasses1/glasses1 (4).jpg";

import glasses01 from "./glasses2/glasses2 (1).jpg";
import glasses02 from "./glasses2/glasses2 (2).jpg";
import glasses03 from "./glasses2/glasses2 (3).jpg";

import glasses11 from "./glasses3/glasses3 (1).jpg";
import glasses12 from "./glasses3/glasses3 (2).jpg";
import glasses13 from "./glasses3/glasses3 (3).jpg";
import glasses14 from "./glasses3/glasses3 (4).jpg";
import glasses15 from "./glasses3/glasses3 (5).jpg";

import glasses21 from "./glasses4/glasses4 (1).jpg";
import glasses22 from "./glasses4/glasses4 (2).jpg";
import glasses23 from "./glasses4/glasses4 (3).jpg";
import glasses24 from "./glasses4/glasses4 (4).jpg";

import glasses31 from "./glasses5/glasses5 (1).jpg";
import glasses32 from "./glasses5/glasses5 (2).jpg";

import glassess41 from "./glasses6/glasess6 (1).jpg";
import glassess42 from "./glasses6/glasess6 (2).jpg";

export const ProductData = [
  {
    name: "VaporVue",
    description:
      "Compact AR glasses with mist-like hologram projections for basic navigation.",
    features: [
      "Mini AR displays",
      "Water-resistant coating",
      "Button-controlled interface",
    ],
    price: "₹765.00",
    original_price: "₹900.00",
    discount_percent: 15,
    images: { img1: glasses1, img2: glasses2, img3: glasses3, img4: glasses4 },
  },
  {
    name: "LuminaSpex",
    description:
      "Auto-tinting lenses with basic solar charging for casual use.",
    features: [
      "Solar-absorbing frames",
      "Light-adaptive lenses",
      "UV protection",
    ],
    price: "₹640.00",
    original_price: "₹800.00",
    discount_percent: 20,
    images: { img1: glasses01, img2: glasses02, img3: glasses03 },
  },
  {
    name: "ZephyrGlint",
    description:
      "Lightweight sports glasses with airflow vents for everyday activities.",
    features: ["Anti-fog vents", "Polarized lenses", "Rubberized grips"],
    price: "₹562.50",
    original_price: "₹750.00",
    discount_percent: 25,
    images: {
      img1: glasses11,
      img2: glasses12,
      img3: glasses13,
      img4: glasses14,
      img5: glasses15,
    },
  },
  {
    name: "AuroraLoom",
    description: "Color-enhancing lenses with subtle aurora-inspired tints.",
    features: [
      "UV400 protection",
      "Scratch-resistant coating",
      "Adjustable nose pads",
    ],
    price: "₹855.00",
    original_price: "₹950.00",
    discount_percent: 10,
    images: {
      img1: glasses21,
      img2: glasses22,
      img3: glasses23,
      img4: glasses24,
    },
  },
  {
    name: "CelestiaClarity",
    description: "Anti-glare glasses with a minimalist star map design.",
    features: [
      "Night-use mode",
      "Durable polycarbonate lenses",
      "Lightweight frames",
    ],
    price: "₹700.00",
    original_price: "₹1,000.00",
    discount_percent: 30,
    images: { img1: glasses31, img2: glasses32 },
  },
  {
    name: "NebulaNest",
    description: "LED-embedded frames with simple app-controlled lighting.",
    features: [
      "Customizable colors",
      "Interchangeable lenses",
      "Bluetooth pairing",
    ],
    price: "₹637.50",
    original_price: "₹850.00",
    discount_percent: 25,
    images: { img1: glassess41, img2: glassess42 },
  },
];
