export const brand = {
  nameAr: "صيدليات البنداري",
  nameEn: "EL-BENDARY PHARMACIES",
  since: 1980,
  years: 45,
  hotline: "01200400094",
  complaints: "01200400089",
  branchesWhatsapp: "01200400461",
  website: "bendaryph.com",
  copyright: "Dr. Mostafa El-mourabea (@Most-Pharm) · Build By ♥ To All Pharmacists",
};

export const whatsappLink = (phone: string, text: string) =>
  `https://wa.me/2${phone.replace(/^0/, "0")}?text=${encodeURIComponent(text)}`;

export const insurancePartners = [
  "أكسا للتأمين",
  "مصر للتأمين",
  "ميدنت",
  "نكست كير",
  "غلوب ميد",
  "بيور هيلث",
  "الشفا للرعاية الصحية",
  "مصر لتأمينات الحياة",
  "توكيو مارين",
  "بوبا إيجيبت",
  "أليانز مصر",
  "التأمين الصحي الشامل",
];

export const paymentMethods = [
  { name: "الدفع عند الاستلام", note: "كاش للمندوب" },
  { name: "فيزا / ماستركارد", note: "دفع آمن بالبطاقة" },
  { name: "محافظ الهاتف", note: "فودافون كاش، اتصالات، أورنج" },
  { name: "إنستا باي", note: "تحويل فوري InstaPay" },
];
