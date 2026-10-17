export type Branch = {
  id: string;
  nameAr: string;
  nameEn: string;
  cityAr: string;
  cityEn: string;
  region: "tanta" | "cairo" | "coast";
  addressAr: string;
  addressEn: string;
  phone?: string;
  phone2?: string;
  whatsapp: string;
  hoursAr: string;
  hoursEn: string;
  maps: string;
  main?: boolean;
};

export const HOTLINE = "01200400094";
export const HOTLINE_WA = "201200400094";
export const BRANCHES_WA = "201200400461";
export const COMPLAINTS = "01200400089";
export const SITE = "https://bendaryph.com";
export const INSTAGRAM = "https://www.instagram.com/elbendary_pharmacy1980/";

export const branches: Branch[] = [
  {
    id: "galaa-1",
    nameAr: "شارع الجلاء (١)",
    nameEn: "El Galaa St. (1)",
    cityAr: "طنطا",
    cityEn: "Tanta",
    region: "tanta",
    addressAr: "٢٤ شارع الجلاء — أمام موقف الجلاء، الغربية",
    addressEn: "24 El Galaa St., opposite the Galaa stop, Gharbia",
    phone: "0403300088",
    whatsapp: HOTLINE_WA,
    hoursAr: "٢٤ ساعة — كل أيام الأسبوع",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+El+Galaa+Tanta",
    main: true,
  },
  {
    id: "galaa-2",
    nameAr: "شارع الجلاء (٢)",
    nameEn: "El Galaa St. (2)",
    cityAr: "طنطا",
    cityEn: "Tanta",
    region: "tanta",
    addressAr: "أمام قصر جرين بالاس",
    addressEn: "Opposite Green Palace",
    phone: "0403546290",
    whatsapp: "201200400461",
    hoursAr: "٢٤ ساعة",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+El+Galaa+2+Tanta",
  },
  {
    id: "galaa-3",
    nameAr: "شارع الجلاء (٣)",
    nameEn: "El Galaa St. (3)",
    cityAr: "طنطا",
    cityEn: "Tanta",
    region: "tanta",
    addressAr: "بجوار الأمن المركزي",
    addressEn: "Beside Central Security",
    whatsapp: "201200400461",
    hoursAr: "٢٤ ساعة",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+El+Galaa+3+Tanta",
  },
  {
    id: "borsa",
    nameAr: "شارع البورصة",
    nameEn: "Borsa Street",
    cityAr: "طنطا",
    cityEn: "Tanta",
    region: "tanta",
    addressAr: "بجوار قسم أول — أسفل مول الشهاوي",
    addressEn: "Beside Qism Awal, under El Shahawy Mall",
    whatsapp: HOTLINE_WA,
    hoursAr: "٢٤ ساعة",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Borsa+Tanta",
  },
  {
    id: "ashraf",
    nameAr: "شارع الأشراف",
    nameEn: "El Ashraf Street",
    cityAr: "طنطا",
    cityEn: "Tanta",
    region: "tanta",
    addressAr: "شارع الأشراف، طنطا",
    addressEn: "El Ashraf Street, Tanta",
    whatsapp: HOTLINE_WA,
    hoursAr: "٢٤ ساعة",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Ashraf+Tanta",
  },
  {
    id: "mohandessin",
    nameAr: "المهندسين",
    nameEn: "Mohandessin",
    cityAr: "الجيزة",
    cityEn: "Giza",
    region: "cairo",
    addressAr: "٦٩ شارع شهاب — تقاطع لبنان، بجوار مزايا",
    addressEn: "69 Shehab St., Lebanon intersection, beside Mazaya",
    phone: "0233463222",
    phone2: "01210222822",
    whatsapp: "201210222822",
    hoursAr: "٢٤ ساعة",
    hoursEn: "Open 24/7",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Mohandessin+Shehab",
  },
  {
    id: "fifth",
    nameAr: "التجمع الخامس",
    nameEn: "Fifth Settlement",
    cityAr: "القاهرة الجديدة",
    cityEn: "New Cairo",
    region: "cairo",
    addressAr: "التجمع الخامس — القاهرة الجديدة",
    addressEn: "Fifth Settlement, New Cairo",
    whatsapp: HOTLINE_WA,
    hoursAr: "حسب وردية الفرع — الخط الساخن يؤكد",
    hoursEn: "Branch shift — hotline confirms",
    maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Fifth+Settlement",
  },
  {
    id: "october",
    nameAr: "٦ أكتوبر",
    nameEn: "6th of October",
    cityAr: "٦ أكتوبر",
    cityEn: "6th of October",
    region: "cairo",
    addressAr: "مدينة ٦ أكتوبر",
    addressEn: "6th of October City",
    phone: "01068187221",
    whatsapp: "201068187221",
    hoursAr: "مفتوح دائماً حسب إعلان الفرع",
    hoursEn: "Posted as always open",
    maps: "https://www.google.com/maps/search/?api=1&query=Bendary+Pharmacies+6th+of+October",
  },
  {
    id: "zayed",
    nameAr: "الشيخ زايد",
    nameEn: "Sheikh Zayed",
    cityAr: "الشيخ زايد",
    cityEn: "Sheikh Zayed",
    region: "cairo",
    addressAr: "تغطية توصيل داخل الشيخ زايد",
    addressEn: "Delivery coverage inside Sheikh Zayed",
    whatsapp: HOTLINE_WA,
    hoursAr: "توصيل على مدار الساعة في النطاق",
    hoursEn: "Around-the-clock delivery in zone",
    maps: "https://www.google.com/maps/search/?api=1&query=Sheikh+Zayed+Giza",
  },
  {
    id: "hacienda",
    nameAr: "هاسيندا",
    nameEn: "Hacienda",
    cityAr: "الساحل الشمالي",
    cityEn: "North Coast",
    region: "coast",
    addressAr: "هاسيندا كوميرشال ستريب — فرع موسمي",
    addressEn: "Hacienda commercial strip — seasonal branch",
    whatsapp: HOTLINE_WA,
    hoursAr: "موسم الصيف — تأكد من الخط الساخن",
    hoursEn: "Summer season — confirm on the hotline",
    maps: "https://www.google.com/maps/search/?api=1&query=Hacienda+North+Coast+Egypt",
  },
];

export const insurers = [
  "AXA",
  "Misr Insurance",
  "MedNet",
  "Nextcare",
  "GlobeMed",
  "Pure Health",
  "Al-Shefa",
  "Misr Life",
  "Tokio Marine",
  "Bupa Egypt",
  "Allianz",
  "Universal Health Insurance",
];

export type Member = {
  id: string;
  nameAr: string;
  nameEn: string;
  insurer: string;
  planAr: string;
  planEn: string;
  copay: string;
  limit: number;
  used: number;
  branchId: string;
};

export const members: Member[] = [
  {
    id: "BND-AXA-20481",
    nameAr: "نور السيد",
    nameEn: "Nour El-Sayed",
    insurer: "AXA",
    planAr: "ذهبي عائلي",
    planEn: "Gold family",
    copay: "20%",
    limit: 15000,
    used: 4200,
    branchId: "mohandessin",
  },
  {
    id: "BND-MED-11820",
    nameAr: "عمر فتحي",
    nameEn: "Omar Fathy",
    insurer: "MedNet",
    planAr: "عائلي",
    planEn: "Family",
    copay: "15%",
    limit: 8000,
    used: 1900,
    branchId: "galaa-1",
  },
  {
    id: "BND-EGY-00912",
    nameAr: "هالة مصطفى",
    nameEn: "Hala Mostafa",
    insurer: "Misr Insurance",
    planAr: "شركات",
    planEn: "Corporate",
    copay: "10%",
    limit: 20000,
    used: 7600,
    branchId: "fifth",
  },
];

export type Batch = {
  sku: string;
  batch: string;
  branchId: string;
  qty: number;
  expiry: string;
};

export const batches: Batch[] = [
  { sku: "0063657_2", batch: "HS-24118", branchId: "galaa-1", qty: 40, expiry: "2026-12-02" },
  { sku: "GA", batch: "GV-26004", branchId: "galaa-1", qty: 24, expiry: "2027-08-19" },
  { sku: "0071491", batch: "AN-25014", branchId: "mohandessin", qty: 8, expiry: "2027-03-18" },
  { sku: "BAB-01", batch: "SL-25110", branchId: "galaa-2", qty: 36, expiry: "2026-11-28" },
  { sku: "VIT-D", batch: "VD-26077", branchId: "borsa", qty: 50, expiry: "2028-01-09" },
  { sku: "DEV-02", batch: "BP-24990", branchId: "october", qty: 4, expiry: "2029-05-01" },
  { sku: "CLR-05", batch: "CL-26021", branchId: "mohandessin", qty: 12, expiry: "2027-02-14" },
  { sku: "MTH-02", batch: "PN-25102", branchId: "fifth", qty: 14, expiry: "2026-12-20" },
];

export function daysUntil(iso: string) {
  const ms = new Date(iso).getTime() - Date.now();
  return Math.ceil(ms / 86400000);
}

export function branchById(id: string) {
  return branches.find((b) => b.id === id);
}
