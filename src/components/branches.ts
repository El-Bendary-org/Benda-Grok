export type Branch = {
  id: string;
  nameAr: string;
  nameEn: string;
  addressAr: string;
  phones: string[];
  city: string;
};

export const branches: Branch[] = [
  {
    id: "mohandeseen",
    nameAr: "المهندسين",
    nameEn: "Mohandeseen",
    addressAr: "٦٩ ش شهاب - تقاطع لبنان بجوار مزايا",
    phones: ["01210222822", "01210222922", "0233463222", "0233488777"],
    city: "القاهرة",
  },
  {
    id: "galaa-1",
    nameAr: "ش الجلاء (١)",
    nameEn: "El Galaa St. (1)",
    addressAr: "أمام موقف الجلاء",
    phones: ["0403298793", "01200400094", "01207222322"],
    city: "طنطا",
  },
  {
    id: "galaa-2",
    nameAr: "ش الجلاء (٢)",
    nameEn: "El Galaa St. (2)",
    addressAr: "أمام قصر الجرين بالاس",
    phones: ["0403546290"],
    city: "طنطا",
  },
  {
    id: "galaa-3",
    nameAr: "ش الجلاء (٣)",
    nameEn: "El Galaa St. (3)",
    addressAr: "بجوار الأمن المركزي",
    phones: ["0403282323", "01200400461"],
    city: "طنطا",
  },
  {
    id: "borsa",
    nameAr: "ش البورصة",
    nameEn: "Borsa St.",
    addressAr: "بجوار قسم أول - أسفل مول الشهاوي",
    phones: ["0403358874", "01121369758"],
    city: "طنطا",
  },
  {
    id: "ashraf",
    nameAr: "ش الأشراف",
    nameEn: "Al Ashraf St.",
    addressAr: "مع المرشحة",
    phones: ["0403313012", "01200400459"],
    city: "طنطا",
  },
  {
    id: "kafr-essam",
    nameAr: "كفر عصام",
    nameEn: "Kafr Essam",
    addressAr: "بجوار مدرسة أم المؤمنين",
    phones: ["0403332816", "01207271272"],
    city: "طنطا",
  },
  {
    id: "saeed",
    nameAr: "ش سعيد",
    nameEn: "Saeed St.",
    addressAr: "آخر ش سعيد مع عمر بن عبد العزيز",
    phones: ["0403313734", "01200400469"],
    city: "طنطا",
  },
  {
    id: "maared",
    nameAr: "المعارض",
    nameEn: "El Maared",
    addressAr: "طريق القاهرة الزراعي",
    phones: ["0403129339", "01200400434"],
    city: "طنطا",
  },
  {
    id: "alex-agri",
    nameAr: "طريق إسكندرية الزراعي",
    nameEn: "Alex Agricultural Road",
    addressAr: "بعد محطة أندريا",
    phones: ["0403344310", "01200400471"],
    city: "طنطا",
  },
  {
    id: "mohafza",
    nameAr: "المحافظة",
    nameEn: "El Mohafza",
    addressAr: "أول ش النحاس من ش البحر",
    phones: ["0403353406", "01223258957"],
    city: "طنطا",
  },
];

export const mapsSearchUrl = (b: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `صيدلية البنداري ${b.nameAr} ${b.city}`,
  )}`;

export const mapsEmbedUrl = (b: Branch) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    `صيدلية البنداري ${b.nameAr} ${b.city}`,
  )}&z=14&output=embed`;
