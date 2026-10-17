export type Category =
  | "أدوية"
  | "العناية بالبشرة"
  | "الأم والطفل"
  | "مكملات غذائية"
  | "أجهزة طبية"
  | "عناية شخصية";

export const categories: Category[] = [
  "أدوية",
  "العناية بالبشرة",
  "الأم والطفل",
  "مكملات غذائية",
  "أجهزة طبية",
  "عناية شخصية",
];

export type Product = {
  sku: string;
  barcode?: string | undefined;
  name: string;
  nameAr: string;
  category: Category;
  price: number;
  stock: number;
  lowStock: number;
  form: string;
  manufacturer: string;
  rx: boolean;
  image?: string | undefined;

};

const p = (
  sku: string,
  nameAr: string,
  name: string,
  category: Category,
  price: number,
  stock: number,
  form: string,
  manufacturer: string,
  rx = false,
  barcode?: string,
): Product => ({
  sku,
  barcode,
  name,
  nameAr,
  category,
  price,
  stock,
  lowStock: 20,
  form,
  manufacturer,
  rx,
});

export const products: Product[] = [
  // Seed rows from the uploaded import template
  p(
    "RX-PAN-500",
    "بنادول أدفانس ٥٠٠ مجم (٢٤ قرص)",
    "Panadol Advance 500mg",
    "أدوية",
    38,
    120,
    "أقراص",
    "Haleon Egypt",
    false,
    "622100998801",
  ),
  p(
    "RX-KLAV-1G",
    "كلافوكس ١ جم أقراص (١٤ قرص)",
    "Klavox 1g Amoxicillin/Clavulanate",
    "أدوية",
    95,
    14,
    "أقراص",
    "Spimaco Misr",
    true,
    "622100998802",
  ),
  p(
    "BEA-VICHY-MIN89",
    "سيروم فيشي مينيرال ٨٩ المعزز للبشرة ٥٠ مل",
    "Vichy Mineral 89 Booster 50ml",
    "العناية بالبشرة",
    890,
    8,
    "سيروم",
    "Vichy Laboratories",
    false,
    "3337875543249",
  ),

  // أدوية
  p("RX-CATA-500", "كتافلام ٥٠ مجم (٢٠ قرص)", "Cataflam 50mg", "أدوية", 42, 90, "أقراص", "Novartis"),
  p("RX-BRUF-600", "بروفين ٦٠٠ مجم (٢٠ قرص)", "Brufen 600mg", "أدوية", 55, 75, "أقراص", "Kahira Pharm"),
  p("RX-AUGM-1G", "أوجمنتين ١ جم (١٤ قرص)", "Augmentin 1g", "أدوية", 168, 26, "أقراص", "GSK", true),
  p("RX-ZINN-500", "زينات ٥٠٠ مجم (١٠ أقراص)", "Zinnat 500mg", "أدوية", 210, 18, "أقراص", "GSK", true),
  p("RX-CONC-5", "كونكور ٥ مجم (٣٠ قرص)", "Concor 5mg", "أدوية", 88, 40, "أقراص", "Merck", true),
  p("RX-GLUC-500", "جلوكوفاج ٥٠٠ مجم (٣٠ قرص)", "Glucophage 500mg", "أدوية", 36, 110, "أقراص", "Merck", true),
  p("RX-NEXI-40", "نيكسيوم ٤٠ مجم (١٤ قرص)", "Nexium 40mg", "أدوية", 175, 33, "أقراص", "AstraZeneca", true),
  p("RX-CLAR-10", "كلاريتين ١٠ مجم (١٠ أقراص)", "Claritine 10mg", "أدوية", 60, 62, "أقراص", "Bayer"),
  p("RX-FLUM-SYR", "فلوموكس ٢٥٠ شراب", "Flumox 250 Syrup", "أدوية", 48, 54, "شراب", "EIPICO", true),
  p("RX-VENT-INH", "فنتولين بخاخ ١٠٠ ميكروجرام", "Ventolin Inhaler", "أدوية", 76, 22, "بخاخ", "GSK", true),
  p("RX-OTRI-NAS", "أوتريفين نقط أنف", "Otrivin Nasal Drops", "أدوية", 33, 88, "نقط", "Haleon"),
  p("RX-ANTI-COLD", "أنتيفلو أقراص للبرد", "Antiflu Cold Tablets", "أدوية", 29, 130, "أقراص", "Amoun"),

  // العناية بالبشرة
  p("BEA-CERA-CLN", "سيرافي غسول مرطب ٤٧٣ مل", "CeraVe Hydrating Cleanser", "العناية بالبشرة", 520, 30, "غسول", "CeraVe"),
  p("BEA-LRP-EFF", "لاروش بوزيه إيفاكلار غسول", "La Roche-Posay Effaclar Gel", "العناية بالبشرة", 610, 24, "غسول", "La Roche-Posay"),
  p("BEA-BIO-SEN", "بيوديرما سينسيبيو ماء ميسيلار ٥٠٠ مل", "Bioderma Sensibio H2O", "العناية بالبشرة", 745, 19, "لوشن", "Bioderma"),
  p("BEA-EUC-SUN", "يوسيرين واقي شمس SPF50+", "Eucerin Sun Fluid SPF50+", "العناية بالبشرة", 890, 15, "كريم", "Eucerin"),
  p("BEA-ORD-NIA", "ذا أورديناري نياسيناميد ١٠٪", "The Ordinary Niacinamide 10%", "العناية بالبشرة", 430, 40, "سيروم", "The Ordinary"),
  p("BEA-AVE-CIC", "أفين سيكالفات كريم مرمم", "Avene Cicalfate+ Cream", "العناية بالبشرة", 560, 21, "كريم", "Avene"),
  p("BEA-PANT-CRM", "بانثينول كريم مرطب", "Panthenol Cream", "العناية بالبشرة", 65, 95, "كريم", "Sedico"),

  // الأم والطفل
  p("MOM-BEB-MILK", "بيبيلاك ١ لبن أطفال ٤٠٠ جم", "Bebelac 1 Infant Formula", "الأم والطفل", 245, 60, "بودرة", "Danone"),
  p("MOM-SIM-GOLD", "سيميلاك جولد ٢ ٤٠٠ جم", "Similac Gold 2", "الأم والطفل", 320, 45, "بودرة", "Abbott"),
  p("MOM-PAMP-4", "بامبرز مقاس ٤ - ٦٤ حفاضة", "Pampers Size 4 (64)", "الأم والطفل", 420, 70, "حفاضات", "P&G"),
  p("MOM-MOL-WIPE", "مولفيكس مناديل مبللة", "Molfix Baby Wipes", "الأم والطفل", 62, 140, "مناديل", "Hayat"),
  p("MOM-JOH-SHMP", "جونسون شامبو أطفال ٥٠٠ مل", "Johnson's Baby Shampoo", "الأم والطفل", 118, 80, "شامبو", "J&J"),
  p("MOM-NUK-BTL", "زجاجة أطفال نوك ٣٠٠ مل", "NUK Baby Bottle 300ml", "الأم والطفل", 285, 25, "زجاجة", "NUK"),
  p("MOM-CETA-BABY", "سيتافيل بيبي لوشن", "Cetaphil Baby Lotion", "الأم والطفل", 340, 28, "لوشن", "Galderma"),

  // مكملات غذائية
  p("SUP-CENT-MEN", "سنتروم للرجال ٣٠ قرص", "Centrum Men 30 Tab", "مكملات غذائية", 380, 42, "أقراص", "Pfizer"),
  p("SUP-VITD-50K", "فيتامين د ٥٠٠٠٠ وحدة (٨ كبسولات)", "Vitamin D 50000 IU", "مكملات غذائية", 95, 100, "كبسولات", "Hi Pharm"),
  p("SUP-OMEG-1000", "أوميجا ٣ ١٠٠٠ مجم (٣٠ كبسولة)", "Omega 3 1000mg", "مكملات غذائية", 260, 55, "كبسولات", "Puritan's Pride"),
  p("SUP-IRON-FOL", "حديد فوليك أسيد أقراص", "Ferrofol Tablets", "مكملات غذائية", 72, 88, "أقراص", "Hi Pharm"),
  p("SUP-CALC-D3", "كالسيوم + د٣ (٣٠ قرص)", "Calcium + D3", "مكملات غذائية", 130, 64, "أقراص", "SEDICO"),
  p("SUP-ZINC-50", "زنك ٥٠ مجم (٣٠ قرص)", "Zinc 50mg", "مكملات غذائية", 85, 76, "أقراص", "Nature's Bounty"),
  p("SUP-COLL-PWD", "كولاجين بيبتايد بودرة", "Collagen Peptides Powder", "مكملات غذائية", 690, 18, "بودرة", "Nutrishop"),

  // أجهزة طبية
  p("DEV-OMR-BP", "جهاز قياس ضغط أومرون M2", "Omron M2 BP Monitor", "أجهزة طبية", 1850, 12, "جهاز", "Omron"),
  p("DEV-ACC-GLU", "جهاز سكر أكيوتشيك أكتيف", "Accu-Chek Active Glucometer", "أجهزة طبية", 990, 20, "جهاز", "Roche"),
  p("DEV-ACC-STRP", "شرائط سكر أكيوتشيك (٥٠ شريط)", "Accu-Chek Strips (50)", "أجهزة طبية", 640, 34, "شرائط", "Roche"),
  p("DEV-THER-IR", "ترمومتر ديجيتال بالأشعة", "Infrared Thermometer", "أجهزة طبية", 720, 16, "جهاز", "Beurer"),
  p("DEV-NEB-COMP", "جهاز بخار كومبريسور", "Compressor Nebulizer", "أجهزة طبية", 1450, 9, "جهاز", "Omron"),
  p("DEV-OXY-PULSE", "مقياس نسبة الأكسجين", "Pulse Oximeter", "أجهزة طبية", 520, 26, "جهاز", "Contec"),

  // عناية شخصية
  p("PER-SENS-TP", "معجون سنسوداين ٧٥ مل", "Sensodyne Toothpaste", "عناية شخصية", 95, 120, "معجون", "Haleon"),
  p("PER-LIST-MW", "غسول فم ليسترين ٥٠٠ مل", "Listerine Mouthwash", "عناية شخصية", 135, 84, "غسول", "J&J"),
  p("PER-GILL-RZR", "شفرات جيليت ماتش ٣", "Gillette Mach3 Blades", "عناية شخصية", 310, 48, "شفرات", "P&G"),
  p("PER-NIVEA-DEO", "مزيل عرق نيفيا رول أون", "Nivea Roll-on Deodorant", "عناية شخصية", 78, 150, "رول أون", "Beiersdorf"),
  p("PER-DETT-HS", "ديتول معقم أيدي ٥٠ مل", "Dettol Hand Sanitizer", "عناية شخصية", 45, 200, "جل", "Reckitt"),
  p("PER-ALW-PAD", "أولويز فوط صحية", "Always Sanitary Pads", "عناية شخصية", 68, 160, "فوط", "P&G"),
];

export const formatEGP = (n: number) =>
  `${n.toLocaleString("ar-EG", { maximumFractionDigits: 2 })} ج.م`;
