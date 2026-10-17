import { branches } from "./branches";
import { products } from "./products";

export const salesTrend = [
  { day: "السبت", sales: 118000, orders: 214 },
  { day: "الأحد", sales: 132500, orders: 241 },
  { day: "الاثنين", sales: 121300, orders: 226 },
  { day: "الثلاثاء", sales: 145900, orders: 268 },
  { day: "الأربعاء", sales: 152400, orders: 279 },
  { day: "الخميس", sales: 168200, orders: 312 },
  { day: "الجمعة", sales: 139700, orders: 255 },
];

export const branchPerformance = branches.slice(0, 8).map((b, i) => ({
  branch: b.nameAr,
  sales: 210000 - i * 17500,
  orders: 640 - i * 48,
  stockHealth: 96 - i * 3,
}));

export type Movement = {
  id: string;
  type: "وارد" | "صادر" | "تحويل";
  product: string;
  qty: number;
  from: string;
  to: string;
  date: string;
  user: string;
};

export const movements: Movement[] = [
  { id: "MV-9001", type: "وارد", product: "أوجمنتين ١ جم", qty: 120, from: "مستودع GSK", to: "المخزن المركزي", date: "2026-09-09", user: "د. أحمد سامي" },
  { id: "MV-9002", type: "تحويل", product: "بنادول أدفانس ٥٠٠", qty: 60, from: "المخزن المركزي", to: "ش الجلاء (١)", date: "2026-09-09", user: "أ. مروة فتحي" },
  { id: "MV-9003", type: "صادر", product: "سيرافي غسول مرطب", qty: 14, from: "المهندسين", to: "بيع تجزئة", date: "2026-09-10", user: "د. هبة كامل" },
  { id: "MV-9004", type: "تحويل", product: "جهاز ضغط أومرون M2", qty: 4, from: "ش البورصة", to: "المحافظة", date: "2026-09-10", user: "أ. كريم عادل" },
  { id: "MV-9005", type: "وارد", product: "بيبيلاك ١ لبن أطفال", qty: 200, from: "دانون مصر", to: "المخزن المركزي", date: "2026-09-08", user: "د. أحمد سامي" },
  { id: "MV-9006", type: "صادر", product: "شرائط سكر أكيوتشيك", qty: 22, from: "ش سعيد", to: "بيع تجزئة", date: "2026-09-08", user: "د. منار السيد" },
  { id: "MV-9007", type: "تحويل", product: "فنتولين بخاخ", qty: 15, from: "المخزن المركزي", to: "كفر عصام", date: "2026-09-07", user: "أ. مروة فتحي" },
];

export const lowStock = products
  .filter((pr) => pr.stock <= 26)
  .map((pr) => ({ ...pr, needed: Math.max(pr.lowStock * 2 - pr.stock, 10) }));

export type Supplier = {
  id: string;
  name: string;
  rep: string;
  phone: string;
  balance: number;
  terms: string;
};

export const suppliers: Supplier[] = [
  { id: "SP-01", name: "ابن سينا فارما", rep: "م. طارق حسن", phone: "01000112233", balance: 412000, terms: "٣٠ يوم" },
  { id: "SP-02", name: "المهن الطبية", rep: "م. سعيد فؤاد", phone: "01099887766", balance: 138500, terms: "٤٥ يوم" },
  { id: "SP-03", name: "فارما أوفرسيز", rep: "م. نهى جمال", phone: "01223344556", balance: 96700, terms: "٢١ يوم" },
  { id: "SP-04", name: "مجموعة النودي", rep: "م. عمرو زكي", phone: "01144556677", balance: 205300, terms: "٣٠ يوم" },
  { id: "SP-05", name: "يونايتد فارما", rep: "م. دينا شريف", phone: "01277889900", balance: 61200, terms: "١٥ يوم" },
];

export type PurchaseOrder = {
  id: string;
  supplier: string;
  branch: string;
  total: number;
  items: number;
  status: "مسودة" | "بانتظار الموافقة" | "تم الإرسال" | "تم الاستلام";
  date: string;
};

export const purchaseOrders: PurchaseOrder[] = [
  { id: "PO-2609-014", supplier: "ابن سينا فارما", branch: "المخزن المركزي", total: 184500, items: 42, status: "تم الإرسال", date: "2026-09-09" },
  { id: "PO-2609-013", supplier: "فارما أوفرسيز", branch: "المهندسين", total: 62300, items: 18, status: "بانتظار الموافقة", date: "2026-09-08" },
  { id: "PO-2609-012", supplier: "المهن الطبية", branch: "المخزن المركزي", total: 97800, items: 31, status: "تم الاستلام", date: "2026-09-06" },
  { id: "PO-2609-011", supplier: "مجموعة النودي", branch: "ش الجلاء (٣)", total: 41250, items: 12, status: "مسودة", date: "2026-09-05" },
];

export const supplierInvoices = [
  { id: "INV-77120", supplier: "ابن سينا فارما", amount: 184500, due: "2026-10-09", status: "غير مسددة" },
  { id: "INV-77088", supplier: "المهن الطبية", amount: 97800, due: "2026-09-21", status: "مسددة جزئياً" },
  { id: "INV-77040", supplier: "يونايتد فارما", amount: 61200, due: "2026-09-15", status: "مسددة" },
];

export type Sop = {
  id: string;
  title: string;
  dept: string;
  audience: string;
  steps: string[];
};

export const sops: Sop[] = [
  {
    id: "SOP-01",
    title: "صرف الروشتات الطبية",
    dept: "الصيدلة الإكلينيكية",
    audience: "الصيادلة",
    steps: [
      "التحقق من اكتمال الروشتة واسم الطبيب وتاريخها.",
      "مراجعة الجرعة والتداخلات الدوائية مع أدوية المريض الحالية.",
      "تسجيل الصرف على النظام واختيار البديل المصري عند نفاذ الأصل بعد موافقة المريض.",
      "شرح طريقة الاستخدام ومواعيد الجرعات للمريض قبل التسليم.",
      "أرشفة صورة الروشتة للأدوية المقيدة.",
    ],
  },
  {
    id: "SOP-02",
    title: "استلام الشحنات من الموردين",
    dept: "المخازن",
    audience: "أمين المخزن",
    steps: [
      "مطابقة الفاتورة مع أمر الشراء PO.",
      "فحص تواريخ الصلاحية ورفض أي عبوة أقل من ٦ أشهر.",
      "التأكد من سلامة سلسلة التبريد للأدوية المبردة.",
      "إدخال الكميات على النظام وطباعة إشعار الاستلام.",
    ],
  },
  {
    id: "SOP-03",
    title: "تخزين الأدوية المبردة",
    dept: "المخازن",
    audience: "الصيادلة والمساعدين",
    steps: [
      "الحفاظ على درجة حرارة ٢ - ٨ مئوية وتسجيلها مرتين يومياً.",
      "استخدام حافظة مبردة عند التحويل بين الفروع.",
      "الإبلاغ الفوري عن أي انقطاع كهرباء يزيد عن ٣٠ دقيقة.",
    ],
  },
  {
    id: "SOP-04",
    title: "التعامل مع شكاوى العملاء",
    dept: "خدمة العملاء",
    audience: "المساعدين",
    steps: [
      "الاستماع وتسجيل الشكوى على النظام برقم تذكرة.",
      "حل الشكوى داخل الفرع إن أمكن خلال ١٥ دقيقة.",
      "تحويل الحالات الدوائية للصيدلي المسؤول.",
      `المتابعة الهاتفية خلال ٢٤ ساعة على الخط 01200400089.`,
    ],
  },
  {
    id: "SOP-05",
    title: "تجهيز وتسليم أوردرات الدليفري",
    dept: "العمليات",
    audience: "فريق التجهيز",
    steps: [
      "طباعة فاتورة الطلب ومراجعتها بند بند.",
      "تغليف الأدوية المبردة منفصلة مع أيس باك.",
      "إسناد الطلب لمندوب وتحديث الحالة على النظام.",
      "تأكيد التحصيل ورفع صورة الإيصال عند الدفع كاش.",
    ],
  },
  {
    id: "SOP-06",
    title: "جرد نهاية الشهر",
    dept: "المخازن",
    audience: "الصيادلة",
    steps: [
      "إيقاف حركة الصرف قبل بدء الجرد.",
      "الجرد الفعلي بالباركود ومقارنته بالنظام.",
      "تحرير محضر فروقات وتوقيع مدير الفرع.",
    ],
  },
];

export type Staff = {
  id: string;
  name: string;
  role: string;
  branch: string;
  shift: "صباحي" | "مسائي" | "راحة";
  attendance: "حاضر" | "متأخر" | "غائب" | "إجازة";
  phone: string;
};

export const staff: Staff[] = [
  { id: "EMP-101", name: "د. أحمد سامي", role: "مدير عمليات", branch: "الإدارة الرئيسية", shift: "صباحي", attendance: "حاضر", phone: "01200400094" },
  { id: "EMP-102", name: "د. هبة كامل", role: "صيدلي مسؤول", branch: "المهندسين", shift: "صباحي", attendance: "حاضر", phone: "01210222822" },
  { id: "EMP-103", name: "د. منار السيد", role: "صيدلي", branch: "ش سعيد", shift: "مسائي", attendance: "متأخر", phone: "0403313734" },
  { id: "EMP-104", name: "أ. كريم عادل", role: "مساعد صيدلي", branch: "ش البورصة", shift: "مسائي", attendance: "حاضر", phone: "0403358874" },
  { id: "EMP-105", name: "أ. مروة فتحي", role: "أمين مخزن", branch: "المخزن المركزي", shift: "صباحي", attendance: "حاضر", phone: "01200400461" },
  { id: "EMP-106", name: "د. يوسف مصطفى", role: "صيدلي", branch: "ش الجلاء (١)", shift: "راحة", attendance: "إجازة", phone: "0403298793" },
  { id: "EMP-107", name: "أ. سارة نبيل", role: "خدمة عملاء", branch: "مركز الاتصال", shift: "صباحي", attendance: "حاضر", phone: "01200400089" },
  { id: "EMP-108", name: "م. محمود رجب", role: "مندوب توصيل", branch: "المحافظة", shift: "مسائي", attendance: "حاضر", phone: "01223258957" },
];

export const riders = [
  { id: "RD-01", name: "محمود رجب", branch: "المحافظة", status: "في الطريق", orders: 3, phone: "01223258957" },
  { id: "RD-02", name: "عمار شعبان", branch: "المهندسين", status: "متاح", orders: 0, phone: "01210222922" },
  { id: "RD-03", name: "سيد الجزار", branch: "ش الجلاء (١)", status: "في الطريق", orders: 2, phone: "01207222322" },
  { id: "RD-04", name: "أنس فوزي", branch: "ش البورصة", status: "راحة", orders: 0, phone: "01121369758" },
];
