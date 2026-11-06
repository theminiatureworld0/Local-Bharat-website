/**
 * Local Bharat - Product & Service Catalog Data
 * 
 * Reusable product data structure featuring verified local listings,
 * custom fabrication offerings, and doorstep services.
 */

export const products = [
  // 1. Home Improvement & Custom Work
  {
    id: "lb-prod-001",
    slug: "bespoke-architectural-stone-archway-portal",
    name: "Custom Handcrafted Architectural Stone Archway",
    category: "home-improvement-and-custom-work",
    shortDescription: "Custom-fitted interlocking sandstone entrance portal and classical structural arch.",
    description: "Designed and chiselled to client elevation blueprints for residential villa entrances and courtyard transitions. Built using interlocking dry-fit voussoirs in natural buff and pink sandstone with decorative rosette keystones.",
    material: "Dholpur Beige & Pink Sandstone",
    dimensions: "Opening 180 cm W x 240 cm H (Bespoke)",
    finish: "Hand-Chiselled Natural Matte",
    featured: true,
    priceEstimate: "₹45,000 - ₹95,000 (Based on span)",
    moq: "1 Unit (Custom Made)",
    vendor: "Shree Ram Stone & Fabrication Works",
    vendorLocation: "Mansarovar, Jaipur",
    images: [
      "/images/products/archway-01.webp",
      "/images/products/archway-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Vendor Type": "Verified Local Manufacturer & Masonry Team",
      "Lead Time": "15 to 25 Days",
      "Installation Type": "Structural Interlocking Mortar & Dowel Fixing",
      "Service Area": "Jaipur & 50 km Radius (Doorstep site measurement)"
    },
    seoTitle: "Architectural Stone Archway | Local Bharat",
    seoDescription: "Bespoke stone entrance arches and classical structural portals by verified local stone fabricators in Jaipur."
  },
  {
    id: "lb-prod-002",
    slug: "ornate-fluted-porch-pillars-and-capitals",
    name: "Classical Fluted Porch Pillars & Turned Capitals",
    category: "home-improvement-and-custom-work",
    shortDescription: "Load-bearing or decorative turned sandstone pillars with inverted lotus bases and carved capitals.",
    description: "Hand-turned on precision stone lathes and detailed by master carvers. Engineered to bear structural verandah loads or clad around RCC columns for residential bungalows and farmhouse porticos.",
    material: "Natural Buff Sandstone",
    dimensions: "Dia 30 cm, Height 270 cm (Custom heights available)",
    finish: "Fine Honed Satin Finish",
    featured: true,
    priceEstimate: "₹28,000 - ₹60,000 per pair",
    moq: "1 Pair",
    vendor: "A-One Stone Pillars & Masonry",
    vendorLocation: "Sanganer, Jaipur",
    images: [
      "/images/products/fluted-pillar-01.webp",
      "/images/products/fluted-pillar-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Core Construction": "Monolithic Solid or Hollow Cladding for RCC Columns",
      "Load Capacity": "Tested for residential verandah beam loads",
      "Delivery": "Secure local crane / hydraulic vehicle transport",
      "Warranty": "25-year structural stone integrity"
    },
    seoTitle: "Fluted Porch Pillars & Stone Columns | Local Bharat",
    seoDescription: "Buy turned stone pillars and fluted verandah columns from verified local craftsmen in Jaipur on Local Bharat."
  },

  // 2. Printing & Business Supplies
  {
    id: "lb-prod-003",
    slug: "custom-corrugated-packaging-boxes-bulk",
    name: "Custom Printed Corrugated Packaging Boxes (3/5/7 Ply)",
    category: "printing-and-business-supplies",
    shortDescription: "High-bursting-strength corrugated shipping boxes with custom multi-colour brand printing.",
    description: "Direct-from-factory corrugated cartons engineered for e-commerce, manufacturing, textile exports, and FMCG brands. Custom die-cut sizing, moisture-resistant coating, and vibrant flexographic brand printing.",
    material: "Virgin Kraft Paper (140 - 250 GSM)",
    dimensions: "Any Custom L x W x H",
    finish: "Matte / Glossy Lamination / Natural Kraft",
    featured: true,
    priceEstimate: "₹18 - ₹65 per box (Volume dependent)",
    moq: "300 Units",
    vendor: "Bharat Print & Pack Solutions",
    vendorLocation: "Mansarovar Industrial Area, Jaipur",
    images: [
      "/images/products/lotus-panel-02.webp",
      "/images/products/lotus-panel-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Ply Rating": "3-Ply, 5-Ply, and Heavy-duty 7-Ply",
      "Printing Options": "Single colour flexo to 4-colour process",
      "Sampling": "Free digital proof and unprinted physical sample within 48h",
      "Dispatch Time": "5 to 7 business days for repeat orders"
    },
    seoTitle: "Custom Printed Corrugated Boxes | Local Bharat",
    seoDescription: "Source custom packaging boxes and shipping cartons direct from verified local manufacturers in Jaipur."
  },
  {
    id: "lb-prod-004",
    slug: "3d-acrylic-led-glow-signboard",
    name: "3D Acrylic LED Backlit Commercial Shop Signboard",
    category: "printing-and-business-supplies",
    shortDescription: "Weatherproof 3D raised acrylic letter signboard with energy-efficient Samsung LED modules.",
    description: "Make your retail shop or office prominent day and night. Custom fabricated with CNC laser-cut imported cast acrylic, ACP sheet base, and IP67 waterproof LED modules with industrial power supply.",
    material: "Cast Acrylic, ACP Backing, IP67 LEDs",
    dimensions: "10 ft x 3 ft (Custom facade dimensions)",
    finish: "High-Gloss Front, Brushed Metallic Sides",
    featured: false,
    priceEstimate: "₹18,000 - ₹48,000 (Complete fabrication & fitting)",
    moq: "1 Signboard",
    vendor: "Creative Vision Signage & Branding",
    vendorLocation: "Malviya Nagar, Jaipur",
    images: [
      "/images/products/bracket-cornice-01.webp",
      "/images/products/bracket-cornice-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Warranty": "2 Years on LEDs and Power Supply",
      "Power Rating": "Low voltage 12V DC operation",
      "Turnaround": "4 to 6 days including on-site mounting",
      "Permits": "Assistance with local municipal signage compliance"
    },
    seoTitle: "3D Acrylic LED Shop Signboards | Local Bharat",
    seoDescription: "Order commercial 3D acrylic LED signboards and storefront branding from top local signage makers."
  },

  // 3. Local Manufacturing & Artisans
  {
    id: "lb-prod-005",
    slug: "handcrafted-sheesham-dining-table-suite",
    name: "Solid Teak & Sheesham 6-Seater Dining Suite",
    category: "local-manufacturing-and-artisans",
    shortDescription: "Kiln-dried solid hardwood dining table with cushioned ergonomic high-back chairs.",
    description: "Handcrafted by generational Rajasthani carpenters using sustainably sourced seasoned wood. Finished with premium polyurethane Italian coat to resist heat, water spills, and daily wear.",
    material: "Grade-A Seasoned Sheesham / Teak Wood",
    dimensions: "Table: 180 cm L x 90 cm W x 75 cm H",
    finish: "Natural Walnut Hand-Rubbed PU Finish",
    featured: true,
    priceEstimate: "₹38,000 - ₹58,000 (Table + 6 Chairs)",
    moq: "1 Set",
    vendor: "Heritage Woodcraft Studios",
    vendorLocation: "Mansarovar, Jaipur",
    images: [
      "/images/products/ceiling-mandala-01.webp",
      "/images/products/ceiling-mandala-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Wood Treatment": "Chemically pressure-treated for 100% borer and termite resistance",
      "Upholstery": "High-density 40-density foam with stain-resistant fabric",
      "Customisation": "4-seater, 6-seater, or 8-seater configurations",
      "Delivery": "Complimentary assembly & room delivery across Jaipur"
    },
    seoTitle: "Solid Wood Dining Table Set | Local Bharat",
    seoDescription: "Buy handcrafted solid teak and Sheesham dining sets directly from verified local furniture workshops in Jaipur."
  },
  {
    id: "lb-prod-006",
    slug: "custom-wrought-iron-compound-gate",
    name: "Heavy-Duty Wrought Iron Compound Gate & Grille",
    category: "local-manufacturing-and-artisans",
    shortDescription: "Custom forged mild steel driveway gate with anti-rust epoxy primer and automated lock slots.",
    description: "Fabricated with heavy-gauge tubular MS sections, forged spearheads, and decorative scrollwork. Double-coated with zinc phosphate epoxy primer and automotive polyurethane paint for decades of rust resistance.",
    material: "Forged Mild Steel & Cast Iron Accents",
    dimensions: "12 ft W x 6 ft H (Double Leaf)",
    finish: "Matt Charcoal Powder Coated / PU Enamel",
    featured: false,
    priceEstimate: "₹32,000 - ₹75,000 (Including hinges & latching)",
    moq: "1 Gate Unit",
    vendor: "Vishwakarma Metal Fabrication Works",
    vendorLocation: "Vaishali Nagar, Jaipur",
    images: [
      "/images/products/balustrade-01.webp",
      "/images/products/balustrade-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Weight": "Approx. 180 - 260 kg",
      "Automation Ready": "Pre-drilled mounting plates for swing gate motors",
      "On-site Fitting": "Includes professional masonry alignment & welding",
      "Corrosion Protection": "10-Year outdoor rust guarantee"
    },
    seoTitle: "Wrought Iron Compound Gate Fabrication | Local Bharat",
    seoDescription: "Order custom forged iron driveway gates and boundary railings from local welding and fabrication masters."
  },

  // 4. Architectural & Stone Craft
  {
    id: "lb-prod-007",
    slug: "handcrafted-sandstone-home-temple-mandir",
    name: "Handcrafted Sandstone Home Temple (Pooja Mandir)",
    category: "architectural-and-stone-craft",
    shortDescription: "Bespoke carved stone home temple with shikhara spire, turned columns, and sanctum drawer.",
    description: "A consecrated sanctuary for your residence carved by master sthapatis in authentic Dholpur pink sandstone. Features traditional stepped shikhara, carved pillar brackets, Kalash finial, and concealed brass deity lighting.",
    material: "Natural Dholpur Pink & Beige Sandstone",
    dimensions: "150 cm H x 105 cm W x 60 cm D (Custom sizes)",
    finish: "Fine Chisel & Honed Smooth Sanctum",
    featured: true,
    priceEstimate: "₹48,000 - ₹1,20,000",
    moq: "1 Temple",
    vendor: "Shree Ganesh Stone Arts & Temples",
    vendorLocation: "Jaipur Artisan Zone, Rajasthan",
    images: [
      "/images/products/home-temple-mandir-01.webp",
      "/images/products/home-temple-mandir-02.webp",
      "/images/products/home-temple-mandir-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Construction": "Interlocking modular stone segments for easy floor-by-floor movement",
      "Vastu Compliance": "Crafted according to classical Vastu and Shilpa proportions",
      "Included Accessories": "Drawer for pooja essentials and brass diya pulls",
      "Packaging": "Full wooden crate packaging with multi-layer high-density foam"
    },
    seoTitle: "Handcrafted Stone Mandir for Home | Local Bharat",
    seoDescription: "Exquisite carved sandstone home mandirs and traditional pooja temples by verified master stone carvers."
  },
  {
    id: "lb-prod-008",
    slug: "monolithic-ganesha-stone-sculpture",
    name: "Monolithic Hand-Carved Ganesha Stone Idol",
    category: "architectural-and-stone-craft",
    shortDescription: "Single-stone Lord Ganesha idol with classical ornaments and serene meditative expression.",
    description: "Carved from a singular block of dense natural sandstone, this Lord Ganesha idol captures delicate ornamental jewelry, crown (Mukuta), modaka, and lotus pedestal according to traditional Shilpa Shastra geometry.",
    material: "Natural Buff Dholpur Sandstone",
    dimensions: "75 cm H x 45 cm W x 30 cm D (Weight: ~55 kg)",
    finish: "Natural Matte Chisel Detailing",
    featured: true,
    priceEstimate: "₹22,000 - ₹45,000",
    moq: "1 Sculpture",
    vendor: "Murti Kala Kendra",
    vendorLocation: "Jaipur, Rajasthan",
    images: [
      "/images/products/ganesha-sculpture-01.webp",
      "/images/products/ganesha-sculpture-02.webp",
      "/images/products/ganesha-sculpture-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Iconography": "Right-trunk (Dakshinabhimukhi) or Left-trunk (Vamamukhi)",
      "Outdoor Suitability": "100% weather and water resistant for garden or temple",
      "Origin": "Individually hand-chiselled in Jaipur, India",
      "Transport": "Safe wooden boxed dispatch across India"
    },
    seoTitle: "Monolithic Ganesha Stone Idol | Local Bharat",
    seoDescription: "Pure handcrafted sandstone Ganesha idols and garden sculptures carved by traditional artisans on Local Bharat."
  },
  {
    id: "lb-prod-009",
    slug: "lotus-relief-sandstone-wall-panel",
    name: "Lotus Relief 3D Sandstone Decorative Wall Mural",
    category: "architectural-and-stone-craft",
    shortDescription: "High-relief hand-chiselled lotus petal wall mural for grand foyer accent walls.",
    description: "Transform your living room or office reception. Carved in deep three-dimensional relief, individual lotus petals capture ambient downlighting to create an exquisite interplay of warmth and shadow.",
    material: "Natural Dholpur Beige Sandstone",
    dimensions: "120 cm x 90 cm x 7.5 cm (Custom sizes)",
    finish: "Hand-Chiselled Natural Matte",
    featured: false,
    priceEstimate: "₹18,000 - ₹35,000 per panel",
    moq: "1 Panel",
    vendor: "Shree Ram Stone & Fabrication Works",
    vendorLocation: "Mansarovar, Jaipur",
    images: [
      "/images/products/lotus-panel-01.webp",
      "/images/products/lotus-panel-02.webp",
      "/images/products/lotus-panel-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Mounting": "Concealed rear stainless steel brackets and epoxy anchors",
      "Application": "Living room accents, foyer entrances, courtyard feature walls",
      "Maintenance": "Dust with dry brush or soft damp sponge",
      "Customization": "Motif and dimensions tailored to architectural CAD files"
    },
    seoTitle: "Lotus Relief Sandstone Wall Panel | Local Bharat",
    seoDescription: "Exquisite 3D lotus stone wall murals hand-carved in natural sandstone by verified local ateliers."
  },

  // 5. Professional & Doorstep Services
  {
    id: "lb-prod-010",
    slug: "on-demand-doorstep-electrician-and-wiring",
    name: "Verified Doorstep Electrician & Home Wiring Inspection",
    category: "professional-and-repair-services",
    shortDescription: "Licensed local electrician visit for appliance installation, short-circuit diagnostics, and wiring.",
    description: "Book background-verified local electricians equipped with industrial multi-meters, safety tools, and standard spares. Fast arrival within 90 minutes in Mansarovar, Malviya Nagar, and across Jaipur.",
    material: "Certified Labour & ISI-Marked Spares",
    dimensions: "Standard Service Slot (1 - 2 Hours)",
    finish: "Standard Diagnostic & Safety Audit Included",
    featured: false,
    priceEstimate: "₹249 Visit Charge (Adjusted against final labour bill)",
    moq: "1 Service Call",
    vendor: "CityCare Technical Services Network",
    vendorLocation: "Mansarovar, Jaipur",
    images: [
      "/images/products/lotus-fountain-01.webp",
      "/images/products/lotus-fountain-02.webp"
    ],
    customisationAvailable: false,
    specifications: {
      "Technician Verification": "Aadhaar verified, background checked, ITI certified",
      "Response Time": "Same-day 90-minute doorstep service",
      "Warranty": "30-Day service rework guarantee",
      "Payment": "UPI / Cash on completion after customer satisfaction"
    },
    seoTitle: "Doorstep Electrician Services in Jaipur | Local Bharat",
    seoDescription: "Book certified doorstep electricians and electrical contractors for fast home repairs on Local Bharat."
  },

  // 6. B2B Supplies & Wholesale Network
  {
    id: "lb-prod-011",
    slug: "commercial-5kw-on-grid-rooftop-solar",
    name: "5kW Residential & Commercial On-Grid Solar Plant",
    category: "b2b-supplies-and-wholesale",
    shortDescription: "Tier-1 Mono PERC solar panels, DCR compliant with net-metering and PM Surya Ghar subsidy.",
    description: "Complete turnkey solar installation for independent bungalows, institutions, and industrial workshops. Includes DISCOM net-metering approvals, heavy-duty aluminium mounting structures, and 5-year on-site maintenance.",
    material: "Mono PERC Half-Cut 550W Panels + Inverter",
    dimensions: "Requires approx. 350 - 450 sq. ft shadow-free roof area",
    finish: "Hot-Dip Galvanised Structure",
    featured: true,
    priceEstimate: "₹2,40,000 - ₹2,90,000 (Before central subsidy)",
    moq: "1 Setup",
    vendor: "Rajasthan Solar Power Systems",
    vendorLocation: "Jaipur, Rajasthan",
    images: [
      "/images/products/compact-pooja-mandir-01.webp",
      "/images/products/doorframe-shakha-01.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Subsidy Support": "Full assistance with PM Surya Ghar portal documentation",
      "Generation": "Generates 20 - 24 units clean electricity daily",
      "Panel Warranty": "25 Years linear performance guarantee",
      "Inverter": "5kW On-Grid string inverter with Wi-Fi monitoring"
    },
    seoTitle: "5kW Rooftop Solar Installation in Jaipur | Local Bharat",
    seoDescription: "Get competitive quotes for residential and commercial rooftop solar systems from verified local EPC contractors."
  },
  {
    id: "lb-prod-012",
    slug: "natural-stone-jali-screen-lattice",
    name: "Architectural Geometric Stone Jali Screen (Air & Light)",
    category: "b2b-supplies-and-wholesale",
    shortDescription: "Pierced natural sandstone jali screen panels for building facades, balconies, and stairwell shafts.",
    description: "Traditional perforated stone latticework supplied in bulk to civil contractors, architects, and institutions. Provides 40% ambient daylight penetration while blocking direct harsh desert sun heat and monsoon splash.",
    material: "Red Agra & Dholpur Beige Sandstone",
    dimensions: "150 cm x 60 cm x 5 cm (Custom batch sizes)",
    finish: "Smooth Precision CNC & Hand-Finished Latticework",
    featured: false,
    priceEstimate: "₹450 - ₹950 per sq. ft (Wholesale pricing)",
    moq: "50 Sq. ft",
    vendor: "Shree Ram Stone & Fabrication Works",
    vendorLocation: "Mansarovar, Jaipur",
    images: [
      "/images/products/jali-screen-01.webp",
      "/images/products/jali-screen-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Pattern": "Eight-point Islamic star, floral, or modern geometric",
      "Bulk Packaging": "Interlocking vertical wooden crates for zero breakage",
      "Fire Rating": "Class-A non-combustible natural stone",
      "Supply Capacity": "Over 2,000 sq. ft per month"
    },
    seoTitle: "Stone Jali Screens Wholesale Supply | Local Bharat",
    seoDescription: "Wholesale architectural stone jali lattice panels and decorative facade screens from verified suppliers."
  }
];

export default products;
