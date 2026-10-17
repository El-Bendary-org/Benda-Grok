export type CategoryId =
  | "digestion"
  | "skin"
  | "hair"
  | "personal"
  | "beauty"
  | "vitamins"
  | "mother"
  | "devices";

export type Product = {
  sku: string;
  nameEn: string;
  nameAr: string;
  category: CategoryId;
  price: number;
  stock: number;
  rx: boolean;
  cold: boolean;
  blurbEn: string;
  blurbAr: string;
  offerEn?: string;
  offerAr?: string;
};

export const categories: { id: CategoryId; ar: string; en: string }[] = [
  { id: "digestion", ar: "مضادات الحموضة", en: "Digestion" },
  { id: "skin", ar: "العناية بالبشرة", en: "Skin" },
  { id: "hair", ar: "العناية بالشعر", en: "Hair" },
  { id: "personal", ar: "العناية الشخصية", en: "Personal care" },
  { id: "beauty", ar: "مستحضرات التجميل", en: "Beauty" },
  { id: "vitamins", ar: "فيتامينات ومكملات", en: "Vitamins" },
  { id: "mother", ar: "الأم والطفل", en: "Mother & baby" },
  { id: "devices", ar: "أجهزة طبية", en: "Devices" },
];

export const products: Product[] = [
  {
    sku: "GA",
    nameEn: "Gaviscon Liquid 24 Sachets",
    nameAr: "جافيسكون أكياس شراب 24 كيس",
    category: "digestion",
    price: 288,
    stock: 42,
    rx: false,
    cold: false,
    blurbEn: "Alginate sachets for heartburn and reflux after meals.",
    blurbAr: "أكياس ألجينات لحموضة المعدة والارتجاع بعد الأكل.",
  },
  {
    sku: "0063657_2",
    nameEn: "Healsec 20 mg 14 Capsules",
    nameAr: "هيلسيك 20 مجم 14 كبسولة",
    category: "digestion",
    price: 47,
    stock: 18,
    rx: true,
    cold: false,
    blurbEn: "Dispensed against a prescription. Upload the rosheta and a pharmacist confirms it.",
    blurbAr: "يُصرف بروشتة. ارفع الصورة والصيدلي يؤكد الصرف قبل التجهيز.",
  },
  {
    sku: "771643",
    nameEn: "Gaviscon Suspension",
    nameAr: "جافيسكون شراب معلق",
    category: "digestion",
    price: 144,
    stock: 30,
    rx: false,
    cold: false,
    blurbEn: "Suspension for fast relief of acid and indigestion.",
    blurbAr: "شراب معلق لتخفيف سريع للحموضة وعسر الهضم.",
  },
  {
    sku: "782300",
    nameEn: "Vaseline 50 ml Original",
    nameAr: "فازلين 50 مل أصلي",
    category: "skin",
    price: 85,
    stock: 64,
    rx: false,
    cold: false,
    blurbEn: "Original jelly for dry skin, lips, and minor irritation.",
    blurbAr: "الفازلين الأصلي للبشرة الجافة والشفاه والتهيج البسيط.",
  },
  {
    sku: "LV-SET",
    nameEn: "Leaves Natural Care Set",
    nameAr: "مجموعة ليفز الطبيعية للعناية",
    category: "skin",
    price: 340,
    stock: 26,
    rx: false,
    cold: false,
    offerEn: "2 + 1 free",
    offerAr: "٢ + ١ مجاناً",
    blurbEn: "Anniversary offer on the Leaves skin and hair line.",
    blurbAr: "عرض الاحتفال على مجموعة ليفز للبشرة والشعر.",
  },
  {
    sku: "DIM-03",
    nameEn: "Dimicap Cleanser",
    nameAr: "غسول ديميكاب",
    category: "skin",
    price: 145,
    stock: 33,
    rx: false,
    cold: false,
    offerEn: "50% on the second piece",
    offerAr: "خصم ٥٠٪ على القطعة الثانية",
    blurbEn: "Daily cleanser for fresher, calmer skin.",
    blurbAr: "غسول يومي لبشرة أنضر وأهدأ.",
  },
  {
    sku: "DIM-04",
    nameEn: "Dimicap Cream",
    nameAr: "كريم ديميكاب",
    category: "skin",
    price: 175,
    stock: 21,
    rx: false,
    cold: false,
    offerEn: "50% on the second piece",
    offerAr: "خصم ٥٠٪ على القطعة الثانية",
    blurbEn: "Companion cream to the Dimicap wash.",
    blurbAr: "الكريم المكمل لغسول ديميكاب.",
  },
  {
    sku: "CLR-05",
    nameEn: "Clearsal Matte Gel",
    nameAr: "جل كليرسال للبشرة",
    category: "skin",
    price: 210,
    stock: 14,
    rx: false,
    cold: false,
    offerEn: "70% on the second piece",
    offerAr: "خصم ٧٠٪ على القطعة الثانية",
    blurbEn: "Matte finish for shine-prone skin.",
    blurbAr: "لمسة مطفية للبشرة المعرضة للمعان.",
  },
  {
    sku: "0071491",
    nameEn: "Anua PDRN Hyaluronic Serum 30 ml",
    nameAr: "أنوا سيروم الهيالورونيك 30 مل",
    category: "skin",
    price: 1700,
    stock: 7,
    rx: false,
    cold: false,
    blurbEn: "Limited counter stock. A pharmacist can confirm the nearest branch.",
    blurbAr: "مخزون محدود على الأرفف. الصيدلي يؤكد أقرب فرع متوفر.",
  },
  {
    sku: "CPX-01",
    nameEn: "Capixy Hair Treatment",
    nameAr: "علاج كابيكسي للشعر",
    category: "hair",
    price: 390,
    stock: 20,
    rx: false,
    cold: false,
    offerEn: "Buy 2 get 1 free",
    offerAr: "اشترِ ٢ واحصل على ١ مجاناً",
    blurbEn: "Hair-care line featured in the anniversary offers.",
    blurbAr: "خط العناية بالشعر ضمن عروض الاحتفال.",
  },
  {
    sku: "0033037",
    nameEn: "Alpecin Tuning Shampoo 200 ml",
    nameAr: "ألبسين شامبو 200 مل",
    category: "hair",
    price: 361,
    stock: 15,
    rx: false,
    cold: false,
    blurbEn: "Caffeine shampoo from the hair shelf.",
    blurbAr: "شامبو كافيين من ركن العناية بالشعر.",
  },
  {
    sku: "0040409",
    nameEn: "ART Anti Hair-Loss Shampoo 200 ml",
    nameAr: "آرت شامبو ضد تساقط الشعر 200 مل",
    category: "hair",
    price: 500,
    stock: 9,
    rx: false,
    cold: false,
    blurbEn: "Shampoo for hair that sheds more than usual.",
    blurbAr: "شامبو للشعر الذي يتساقط أكثر من المعتاد.",
  },
  {
    sku: "0004521",
    nameEn: "Lifebuoy Mild Care Hand Wash 450 ml",
    nameAr: "لايفبوي غسول اليدين 450 مل",
    category: "personal",
    price: 100,
    stock: 40,
    rx: false,
    cold: false,
    blurbEn: "Mild hand wash for everyday family use.",
    blurbAr: "غسول يدين لطيف للاستخدام العائلي اليومي.",
  },
  {
    sku: "0038121",
    nameEn: "Adidas After Sport Shower Gel 250 ml",
    nameAr: "أديداس شاور جل 250 مل",
    category: "personal",
    price: 175,
    stock: 22,
    rx: false,
    cold: false,
    blurbEn: "After-sport shower gel.",
    blurbAr: "شاور جل بعد الرياضة.",
  },
  {
    sku: "771148",
    nameEn: "ACM Depiwhite Cream SPF 50+ 50 ml",
    nameAr: "ACM ديبي وايت كريم SPF50 50 مل",
    category: "beauty",
    price: 450,
    stock: 11,
    rx: false,
    cold: false,
    blurbEn: "Tone cream with high SPF. Use sunscreen daily regardless.",
    blurbAr: "كريم توحيد مع عامل حماية عالٍ. واقي الشمس يومي في كل الأحوال.",
  },
  {
    sku: "CLY-02",
    nameEn: "Clary Glow Cream",
    nameAr: "كريم كلاري للإشراقة",
    category: "beauty",
    price: 260,
    stock: 18,
    rx: false,
    cold: false,
    offerEn: "50% on the second piece",
    offerAr: "خصم ٥٠٪ على القطعة الثانية",
    blurbEn: "Clary line, second piece at half price.",
    blurbAr: "مجموعة كلاري، القطعة الثانية بنصف السعر.",
  },
  {
    sku: "VIT-D",
    nameEn: "Vitamin D3 5000 IU",
    nameAr: "فيتامين د3 5000 وحدة",
    category: "vitamins",
    price: 120,
    stock: 50,
    rx: false,
    cold: false,
    blurbEn: "A common supplement. Ask the pharmacist about your dose.",
    blurbAr: "مكمل شائع. اسأل الصيدلي عن الجرعة المناسبة لك.",
  },
  {
    sku: "OME-3",
    nameEn: "Omega Blend 60 Softgels",
    nameAr: "أوميجا 60 كبسولة",
    category: "vitamins",
    price: 265,
    stock: 28,
    rx: false,
    cold: false,
    blurbEn: "Fish-oil style softgels from the supplement wall.",
    blurbAr: "كبسولات أوميجا من ركن المكملات.",
  },
  {
    sku: "MTH-02",
    nameEn: "Prenatal Multivitamin",
    nameAr: "فيتامينات ما قبل الولادة",
    category: "mother",
    price: 320,
    stock: 19,
    rx: false,
    cold: false,
    blurbEn: "Prenatal formula. Confirm with your physician if you are pregnant.",
    blurbAr: "تركيبة ما قبل الولادة. راجعي طبيبكِ إذا كنتِ حاملاً.",
  },
  {
    sku: "BAB-01",
    nameEn: "Baby Saline Drops",
    nameAr: "نقط محلول ملحي للأطفال",
    category: "mother",
    price: 45,
    stock: 60,
    rx: false,
    cold: false,
    blurbEn: "Saline drops for infant nasal comfort.",
    blurbAr: "نقط ملحية لراحة أنف الرضيع.",
  },
  {
    sku: "DEV-01",
    nameEn: "Digital Thermometer",
    nameAr: "ترمومتر رقمي",
    category: "devices",
    price: 180,
    stock: 16,
    rx: false,
    cold: false,
    blurbEn: "Home digital thermometer with a clear display.",
    blurbAr: "ترمومتر منزلي رقمي بشاشة واضحة.",
  },
  {
    sku: "DEV-02",
    nameEn: "Blood Pressure Monitor",
    nameAr: "جهاز ضغط دم",
    category: "devices",
    price: 890,
    stock: 6,
    rx: false,
    cold: false,
    blurbEn: "Upper-arm monitor. A pharmacist can show you the cuff fit.",
    blurbAr: "جهاز ذراع. الصيدلي يضبط مقاس السوار معك.",
  },
];

export function categoryName(id: CategoryId, lang: "ar" | "en") {
  const c = categories.find((x) => x.id === id);
  return c ? (lang === "ar" ? c.ar : c.en) : id;
}

export function findProduct(sku: string) {
  return products.find((p) => p.sku === sku);
}

export function money(n: number, lang: "ar" | "en") {
  const v = new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-EG", {
    maximumFractionDigits: 2,
  }).format(n);
  return lang === "ar" ? `${v} ج.م` : `EGP ${v}`;
}
