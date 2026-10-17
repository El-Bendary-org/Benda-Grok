export type ChannelType = "whatsapp" | "messenger" | "instagram" | "web" | "voice" | "sms";

export type Channel = {
  id: string;
  type: ChannelType;
  nameAr: string;
  nameEn: string;
  handle: string;
  enabled: boolean;
  status: "live" | "standby";
};

export type ChatMessage = {
  id: string;
  direction: "in" | "out";
  text: string;
  at: string;
  sender: string;
};

export type Conversation = {
  id: string;
  customer: string;
  phone?: string;
  channelId: string;
  status: "open" | "pending" | "closed";
  assignee: string | null;
  topicAr: string;
  topicEn: string;
  messages: ChatMessage[];
};

export type Tender = {
  id: string;
  method: string;
  amount: number;
  status: "pending" | "paid";
  ref: string;
  noteAr: string;
  noteEn: string;
};

const t = (minsAgo: number) => new Date(Date.now() - minsAgo * 60000).toISOString();

export const seedChannels: Channel[] = [
  {
    id: "wa-orders",
    type: "whatsapp",
    nameAr: "واتساب الطلبات",
    nameEn: "Orders WhatsApp",
    handle: "01200400094",
    enabled: true,
    status: "live",
  },
  {
    id: "wa-branches",
    type: "whatsapp",
    nameAr: "واتساب الفروع",
    nameEn: "Branch WhatsApp",
    handle: "01200400461",
    enabled: true,
    status: "live",
  },
  {
    id: "voice",
    type: "voice",
    nameAr: "مركز الاتصال",
    nameEn: "Call center",
    handle: "01200400094",
    enabled: true,
    status: "standby",
  },
  {
    id: "complaints",
    type: "voice",
    nameAr: "الشكاوى والاقتراحات",
    nameEn: "Complaints",
    handle: "01200400089",
    enabled: true,
    status: "live",
  },
  {
    id: "web",
    type: "web",
    nameAr: "شات الموقع",
    nameEn: "Website chat",
    handle: "bendaryph.com",
    enabled: true,
    status: "live",
  },
  {
    id: "ig",
    type: "instagram",
    nameAr: "إنستجرام",
    nameEn: "Instagram",
    handle: "@elbendary_pharmacy1980",
    enabled: true,
    status: "standby",
  },
  {
    id: "fb",
    type: "messenger",
    nameAr: "ماسنجر فيسبوك",
    nameEn: "Facebook Messenger",
    handle: "Elbendary pharmacies",
    enabled: true,
    status: "standby",
  },
  {
    id: "sms",
    type: "sms",
    nameAr: "رسائل قصيرة",
    nameEn: "SMS",
    handle: "01200400094",
    enabled: false,
    status: "standby",
  },
];

export const seedConversations: Conversation[] = [
  {
    id: "c-wa-1",
    customer: "أحمد حسن",
    phone: "01000011224",
    channelId: "wa-orders",
    status: "open",
    assignee: null,
    topicAr: "تأكيد طلب جافيسكون",
    topicEn: "Confirm Gaviscon order",
    messages: [
      {
        id: "m1",
        direction: "in",
        text: "مساء الخير، عايز أأكد طلب جافيسكون الأكياس على فرع الجلاء ويتوصل النهاردة.",
        at: t(46),
        sender: "أحمد حسن",
      },
    ],
  },
  {
    id: "c-ig-1",
    customer: "سارة م.",
    channelId: "ig",
    status: "pending",
    assignee: "مي",
    topicAr: "عرض ليفز ٢+١",
    topicEn: "Leaves 2+1 offer",
    messages: [
      {
        id: "m2",
        direction: "in",
        text: "العرض ٢+١ على ليفز لسه شغال في فرع المهندسين؟",
        at: t(120),
        sender: "سارة م.",
      },
      {
        id: "m3",
        direction: "out",
        text: "أيوة يا فندم، العرض شغال على مجموعة ليفز في كل الفروع لحد نفاد الكمية.",
        at: t(110),
        sender: "مي",
      },
    ],
  },
  {
    id: "c-fb-1",
    customer: "هالة مصطفى",
    channelId: "fb",
    status: "open",
    assignee: null,
    topicAr: "تغطية مصر للتأمين",
    topicEn: "Misr Insurance coverage",
    messages: [
      {
        id: "m4",
        direction: "in",
        text: "رقم العضوية BND-EGY-00912 — ينفع أصرف الفيتامينات على الفاتورة المباشرة؟",
        at: t(30),
        sender: "هالة مصطفى",
      },
    ],
  },
  {
    id: "c-voice-1",
    customer: "محمود عبد الله",
    phone: "01200400089",
    channelId: "complaints",
    status: "pending",
    assignee: "ياسر",
    topicAr: "متابعة توصيل متأخر",
    topicEn: "Late delivery follow-up",
    messages: [
      {
        id: "m5",
        direction: "in",
        text: "اتصال فائت: الطلب خرج من الجلاء ٢ من ساعة ولسه موصلش شارع البحر.",
        at: t(18),
        sender: "مركز الاتصال",
      },
    ],
  },
];

export const seedTenders: Tender[] = [
  {
    id: "PAY-1842",
    method: "Instapay",
    amount: 628,
    status: "pending",
    ref: "IPAY-BND-1842",
    noteAr: "بانتظار تأكيد إيصال إنستاباي",
    noteEn: "Waiting on Instapay receipt",
  },
  {
    id: "PAY-1770",
    method: "Fawry",
    amount: 340,
    status: "paid",
    ref: "8472910033",
    noteAr: "كود فوري مدفوع — مجموعة ليفز",
    noteEn: "Fawry code paid — Leaves set",
  },
  {
    id: "PAY-1904",
    method: "Vodafone Cash",
    amount: 890,
    status: "pending",
    ref: "VC-5521",
    noteAr: "جهاز ضغط — المهندسين",
    noteEn: "BP monitor — Mohandessin",
  },
];
