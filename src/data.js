export const cropsData = [
  {
    id: 1,
    name: "Rice (Paddy)",
    category: "Cereals",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    description: "The staple food grain requiring disciplined water pooling during panicle initiation and split nitrogen application.",
    season: "Aus, Aman, Boro",
    soil: "Clayey Loam to Silty Clay",
    temp: "20°C – 35°C",
    sowing: "Boro: Dec–Jan | Aus: Mar–Apr | Aman: Jun–Jul"
  },
  {
    id: 2,
    name: "Wheat",
    category: "Cereals",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "High-nutritional cereal crop sensitive to late winter heat. Timely sowing before December 5 ensures maximum yield.",
    season: "Rabi (Winter)",
    soil: "Well-drained Fertile Loamy Soil",
    temp: "18°C – 25°C",
    sowing: "Nov 15 – Dec 05 (Critical window)"
  },
  {
    id: 3,
    name: "Tomato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    description: "High-yield hybrid varieties and irrigation guide with staking techniques to prevent soil-borne fruit rotting.",
    season: "Rabi / Early Kharif Hybrid",
    soil: "Sandy Loam with Organic Matter (pH 6.0–6.8)",
    temp: "21°C – 28°C",
    sowing: "Nursery: Oct–Nov | Transplant: Nov–Dec"
  },
  {
    id: 4,
    name: "Mango (Himsagar / Amrapali)",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    description: "The king of fruits; requires balanced post-harvest canopy pruning and timely hopper management during blossoming.",
    season: "Summer Orchard",
    soil: "Deep well-drained alluvial soil",
    temp: "24°C – 32°C",
    sowing: "Planting saplings: Jun–Aug"
  },
  {
    id: 5,
    name: "Lentil (Masoor Dal)",
    category: "Pulses",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
    description: "Protein-rich legume that naturally fixes atmospheric nitrogen, rejuvenating soil vitality for subsequent crops.",
    season: "Rabi (Winter)",
    soil: "Clay loam to alluvial soil",
    temp: "16°C – 24°C",
    sowing: "November"
  },
  {
    id: 6,
    name: "Mustard (Oilseed)",
    category: "Cash Crops",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80",
    description: "Major edible oil crop fitting neatly between Aman and Boro rice rotations to maximize land productivity.",
    season: "Rabi (Short duration)",
    soil: "Loamy to Sandy Loam",
    temp: "15°C – 22°C",
    sowing: "Late Oct – Mid Nov"
  }
];

export const diseasesData = [
  {
    id: 1,
    name: "Leaf Blight (Bacterial & Fungal)",
    risk: "Severe Risk",
    crop: "Rice (Paddy)",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80",
    symptoms: "Water-soaked wavy margins starting at leaf tips, turning yellow-gray and desiccating into dry straw-colored lesions.",
    earlySigns: [
      "Translucent light-green spots near leaf tips in early morning",
      "Milky bacterial ooze beads on underleaf in high humidity",
      "Rapid yellowing progressing backward along veins"
    ],
    treatment: "Copper Oxychloride (2.5 g/L) + Streptocycline (0.15 g/L) or Nativo 75 WG (0.6 g/L) at first notice.",
    bioControl: "Foliar spray with Pseudomonas fluorescens (5 g/L) and cow-dung slurry filtrate (10%)."
  },
  {
    id: 2,
    name: "Root Rot & Damping-off",
    risk: "Severe Risk",
    crop: "Vegetables",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    symptoms: "Dark brown to black necrotic lesions on the root collar, waterlogged root disintegration, and sudden wilting without yellowing.",
    earlySigns: [
      "Seedling stems pinching near the soil surface level",
      "Roots sloughing off outer cortex when pulled gently",
      "Stunted growth accompanied by midday canopy drooping"
    ],
    treatment: "Soil drenching with Metalaxyl + Mancozeb (Ridomil Gold 2 g/L) or Carbendazim (Autostin 1.5 g/L).",
    bioControl: "Soil incorporation of Trichoderma viride / harzianum enriched farmyard manure 10 days before planting."
  }
];