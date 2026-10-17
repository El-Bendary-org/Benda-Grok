export const orderStages = [
  "تم الاستلام",
  "قيد التأكيد",
  "جاري التجهيز",
  "خرج مع المندوب",
  "تم التسليم",
] as const;

export type OrderStage = (typeof orderStages)[number];

export type TrackedOrder = {
  code: string;
  customer: string;
  phone: string;
  branch: string;
  address: string;
  stage: OrderStage;
  total: number;
  payment: string;
  rider?: string;
  placedAt: string;
  items: { name: string; qty: number; price: number }[];
};

export const demoOrders: TrackedOrder[] = [
  {
    code: "BND-10241",
    customer: "أحمد عبد الرحمن",
    phone: "01001234567",
    branch: "ش الجلاء (١)",
    address: "طنطا - ش الجيش - عمارة ١٢",
    stage: "خرج مع المندوب",
    total: 486,
    payment: "الدفع عند الاستلام",
    rider: "سيد الجزار",
    placedAt: "2026-09-10 10:12",
    items: [
      { name: "أوجمنتين ١ جم", qty: 1, price: 168 },
      { name: "بنادول أدفانس ٥٠٠", qty: 2, price: 38 },
      { name: "فيتامين د ٥٠٠٠٠", qty: 1, price: 95 },
      { name: "معجون سنسوداين", qty: 1, price: 95 },
    ],
  },
  {
    code: "BND-10242",
    customer: "منة الله شريف",
    phone: "01122334455",
    branch: "المهندسين",
    address: "القاهرة - المهندسين - ش شهاب ٦٩",
    stage: "جاري التجهيز",
    total: 1410,
    payment: "فيزا / ماستركارد",
    placedAt: "2026-09-10 11:40",
    items: [
      { name: "سيرافي غسول مرطب", qty: 1, price: 520 },
      { name: "يوسيرين واقي شمس SPF50+", qty: 1, price: 890 },
    ],
  },
  {
    code: "BND-10243",
    customer: "محمد الديب",
    phone: "01207778899",
    branch: "ش البورصة",
    address: "طنطا - ش البورصة - أعلى مول الشهاوي",
    stage: "قيد التأكيد",
    total: 990,
    payment: "إنستا باي",
    placedAt: "2026-09-10 12:05",
    items: [{ name: "جهاز سكر أكيوتشيك أكتيف", qty: 1, price: 990 }],
  },
  {
    code: "BND-10244",
    customer: "سلمى عز الدين",
    phone: "01555667788",
    branch: "المحافظة",
    address: "طنطا - ش النحاس",
    stage: "تم التسليم",
    total: 665,
    payment: "محافظ الهاتف",
    rider: "محمود رجب",
    placedAt: "2026-09-09 18:22",
    items: [
      { name: "بيبيلاك ١ لبن أطفال", qty: 2, price: 245 },
      { name: "مولفيكس مناديل مبللة", qty: 1, price: 62 },
      { name: "جونسون شامبو أطفال", qty: 1, price: 118 },
    ],
  },
  {
    code: "BND-10245",
    customer: "طارق الشناوي",
    phone: "01099001122",
    branch: "كفر عصام",
    address: "كفر عصام - بجوار مدرسة أم المؤمنين",
    stage: "تم الاستلام",
    total: 322,
    payment: "الدفع عند الاستلام",
    placedAt: "2026-09-10 12:31",
    items: [
      { name: "فنتولين بخاخ", qty: 1, price: 76 },
      { name: "كلاريتين ١٠ مجم", qty: 1, price: 60 },
      { name: "أوميجا ٣ ١٠٠٠ مجم", qty: 1, price: 186 },
    ],
  },
];

export type Channel = "واتساب" | "هاتف" | "فيسبوك" | "إنستجرام" | "شات الموقع";

export type Conversation = {
  id: string;
  channel: Channel;
  customer: string;
  branch: string;
  status: "جديد" | "قيد المعالجة" | "بانتظار العميل" | "مغلق";
  updatedAt: string;
  messages: { from: "عميل" | "فريق البنداري"; text: string; time: string }[];
};

export const conversations: Conversation[] = [
  {
    id: "TK-5501",
    channel: "واتساب",
    customer: "أحمد عبد الرحمن",
    branch: "ش الجلاء (١)",
    status: "قيد المعالجة",
    updatedAt: "12:44",
    messages: [
      { from: "عميل", text: "مساء الخير، الطلب BND-10241 وصل فين؟", time: "12:40" },
      { from: "فريق البنداري", text: "أهلاً بك، الطلب خرج مع المندوب سيد الجزار ويوصلك خلال ٢٥ دقيقة.", time: "12:44" },
    ],
  },
  {
    id: "TK-5502",
    channel: "هاتف",
    customer: "منى صلاح",
    branch: "المهندسين",
    status: "جديد",
    updatedAt: "12:31",
    messages: [
      { from: "عميل", text: "محتاجة أعرف لو فيه بديل مصري لـ نيكسيوم ٤٠.", time: "12:31" },
    ],
  },
  {
    id: "TK-5503",
    channel: "فيسبوك",
    customer: "Kareem Nabil",
    branch: "ش البورصة",
    status: "بانتظار العميل",
    updatedAt: "11:58",
    messages: [
      { from: "عميل", text: "جهاز الضغط أومرون متاح؟", time: "11:50" },
      { from: "فريق البنداري", text: "متاح بسعر ١٨٥٠ ج.م بضمان سنتين، أبعتلك لينك الطلب؟", time: "11:58" },
    ],
  },
  {
    id: "TK-5504",
    channel: "إنستجرام",
    customer: "salma.ezz",
    branch: "المحافظة",
    status: "مغلق",
    updatedAt: "أمس",
    messages: [
      { from: "عميل", text: "شكراً على سرعة التوصيل ❤️", time: "أمس" },
      { from: "فريق البنداري", text: "نورتينا، في خدمتك دايماً.", time: "أمس" },
    ],
  },
  {
    id: "TK-5505",
    channel: "شات الموقع",
    customer: "زائر #8821",
    branch: "مركز الاتصال",
    status: "جديد",
    updatedAt: "12:20",
    messages: [
      { from: "عميل", text: "أقرب فرع لطريق إسكندرية الزراعي؟", time: "12:20" },
    ],
  },
];

export const quickReplies = [
  "أهلاً بك في صيدليات البنداري، كيف أقدر أساعدك؟",
  "الطلب قيد التجهيز وسيخرج مع المندوب خلال ٣٠ دقيقة.",
  "ممكن ترسل صورة الروشتة على واتساب 01200400461؟",
  "الخدمة متاحة ٢٤ ساعة والتوصيل مجاني للطلبات فوق ٣٠٠ ج.م.",
  "تم تسجيل شكواك وسيتم التواصل معك خلال ٢٤ ساعة.",
];
