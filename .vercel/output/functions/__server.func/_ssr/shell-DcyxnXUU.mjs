import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Phone, f as MessageCircle, h as Headphones, l as Send, n as Upload, p as Menu, s as ShoppingBag, t as X, u as Search } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DcyxnXUU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HOTLINE = "01200400094";
var HOTLINE_WA = "201200400094";
var COMPLAINTS = "01200400089";
var branches = [
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
		main: true
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+El+Galaa+2+Tanta"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+El+Galaa+3+Tanta"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Borsa+Tanta"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Ashraf+Tanta"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Mohandessin+Shehab"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Elbendary+pharmacy+Fifth+Settlement"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Bendary+Pharmacies+6th+of+October"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Sheikh+Zayed+Giza"
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
		maps: "https://www.google.com/maps/search/?api=1&query=Hacienda+North+Coast+Egypt"
	}
];
var insurers = [
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
	"Universal Health Insurance"
];
var members = [
	{
		id: "BND-AXA-20481",
		nameAr: "نور السيد",
		nameEn: "Nour El-Sayed",
		insurer: "AXA",
		planAr: "ذهبي عائلي",
		planEn: "Gold family",
		copay: "20%",
		limit: 15e3,
		used: 4200,
		branchId: "mohandessin"
	},
	{
		id: "BND-MED-11820",
		nameAr: "عمر فتحي",
		nameEn: "Omar Fathy",
		insurer: "MedNet",
		planAr: "عائلي",
		planEn: "Family",
		copay: "15%",
		limit: 8e3,
		used: 1900,
		branchId: "galaa-1"
	},
	{
		id: "BND-EGY-00912",
		nameAr: "هالة مصطفى",
		nameEn: "Hala Mostafa",
		insurer: "Misr Insurance",
		planAr: "شركات",
		planEn: "Corporate",
		copay: "10%",
		limit: 2e4,
		used: 7600,
		branchId: "fifth"
	}
];
var batches = [
	{
		sku: "0063657_2",
		batch: "HS-24118",
		branchId: "galaa-1",
		qty: 40,
		expiry: "2026-12-02"
	},
	{
		sku: "GA",
		batch: "GV-26004",
		branchId: "galaa-1",
		qty: 24,
		expiry: "2027-08-19"
	},
	{
		sku: "0071491",
		batch: "AN-25014",
		branchId: "mohandessin",
		qty: 8,
		expiry: "2027-03-18"
	},
	{
		sku: "BAB-01",
		batch: "SL-25110",
		branchId: "galaa-2",
		qty: 36,
		expiry: "2026-11-28"
	},
	{
		sku: "VIT-D",
		batch: "VD-26077",
		branchId: "borsa",
		qty: 50,
		expiry: "2028-01-09"
	},
	{
		sku: "DEV-02",
		batch: "BP-24990",
		branchId: "october",
		qty: 4,
		expiry: "2029-05-01"
	},
	{
		sku: "CLR-05",
		batch: "CL-26021",
		branchId: "mohandessin",
		qty: 12,
		expiry: "2027-02-14"
	},
	{
		sku: "MTH-02",
		batch: "PN-25102",
		branchId: "fifth",
		qty: 14,
		expiry: "2026-12-20"
	}
];
function daysUntil(iso) {
	const ms = new Date(iso).getTime() - Date.now();
	return Math.ceil(ms / 864e5);
}
function branchById(id) {
	return branches.find((b) => b.id === id);
}
var categories = [
	{
		id: "digestion",
		ar: "مضادات الحموضة",
		en: "Digestion"
	},
	{
		id: "skin",
		ar: "العناية بالبشرة",
		en: "Skin"
	},
	{
		id: "hair",
		ar: "العناية بالشعر",
		en: "Hair"
	},
	{
		id: "personal",
		ar: "العناية الشخصية",
		en: "Personal care"
	},
	{
		id: "beauty",
		ar: "مستحضرات التجميل",
		en: "Beauty"
	},
	{
		id: "vitamins",
		ar: "فيتامينات ومكملات",
		en: "Vitamins"
	},
	{
		id: "mother",
		ar: "الأم والطفل",
		en: "Mother & baby"
	},
	{
		id: "devices",
		ar: "أجهزة طبية",
		en: "Devices"
	}
];
var products = [
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
		blurbAr: "أكياس ألجينات لحموضة المعدة والارتجاع بعد الأكل."
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
		blurbAr: "يُصرف بروشتة. ارفع الصورة والصيدلي يؤكد الصرف قبل التجهيز."
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
		blurbAr: "شراب معلق لتخفيف سريع للحموضة وعسر الهضم."
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
		blurbAr: "الفازلين الأصلي للبشرة الجافة والشفاه والتهيج البسيط."
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
		blurbAr: "عرض الاحتفال على مجموعة ليفز للبشرة والشعر."
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
		blurbAr: "غسول يومي لبشرة أنضر وأهدأ."
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
		blurbAr: "الكريم المكمل لغسول ديميكاب."
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
		blurbAr: "لمسة مطفية للبشرة المعرضة للمعان."
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
		blurbAr: "مخزون محدود على الأرفف. الصيدلي يؤكد أقرب فرع متوفر."
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
		blurbAr: "خط العناية بالشعر ضمن عروض الاحتفال."
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
		blurbAr: "شامبو كافيين من ركن العناية بالشعر."
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
		blurbAr: "شامبو للشعر الذي يتساقط أكثر من المعتاد."
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
		blurbAr: "غسول يدين لطيف للاستخدام العائلي اليومي."
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
		blurbAr: "شاور جل بعد الرياضة."
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
		blurbAr: "كريم توحيد مع عامل حماية عالٍ. واقي الشمس يومي في كل الأحوال."
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
		blurbAr: "مجموعة كلاري، القطعة الثانية بنصف السعر."
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
		blurbAr: "مكمل شائع. اسأل الصيدلي عن الجرعة المناسبة لك."
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
		blurbAr: "كبسولات أوميجا من ركن المكملات."
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
		blurbAr: "تركيبة ما قبل الولادة. راجعي طبيبكِ إذا كنتِ حاملاً."
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
		blurbAr: "نقط ملحية لراحة أنف الرضيع."
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
		blurbAr: "ترمومتر منزلي رقمي بشاشة واضحة."
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
		blurbAr: "جهاز ذراع. الصيدلي يضبط مقاس السوار معك."
	}
];
function categoryName(id, lang) {
	const c = categories.find((x) => x.id === id);
	return c ? lang === "ar" ? c.ar : c.en : id;
}
function findProduct(sku) {
	return products.find((p) => p.sku === sku);
}
function money(n, lang) {
	const v = new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-EG", { maximumFractionDigits: 2 }).format(n);
	return lang === "ar" ? `${v} ج.م` : `EGP ${v}`;
}
var t = (minsAgo) => (/* @__PURE__ */ new Date(Date.now() - minsAgo * 6e4)).toISOString();
var seedChannels = [
	{
		id: "wa-orders",
		type: "whatsapp",
		nameAr: "واتساب الطلبات",
		nameEn: "Orders WhatsApp",
		handle: "01200400094",
		enabled: true,
		status: "live"
	},
	{
		id: "wa-branches",
		type: "whatsapp",
		nameAr: "واتساب الفروع",
		nameEn: "Branch WhatsApp",
		handle: "01200400461",
		enabled: true,
		status: "live"
	},
	{
		id: "voice",
		type: "voice",
		nameAr: "مركز الاتصال",
		nameEn: "Call center",
		handle: "01200400094",
		enabled: true,
		status: "standby"
	},
	{
		id: "complaints",
		type: "voice",
		nameAr: "الشكاوى والاقتراحات",
		nameEn: "Complaints",
		handle: "01200400089",
		enabled: true,
		status: "live"
	},
	{
		id: "web",
		type: "web",
		nameAr: "شات الموقع",
		nameEn: "Website chat",
		handle: "bendaryph.com",
		enabled: true,
		status: "live"
	},
	{
		id: "ig",
		type: "instagram",
		nameAr: "إنستجرام",
		nameEn: "Instagram",
		handle: "@elbendary_pharmacy1980",
		enabled: true,
		status: "standby"
	},
	{
		id: "fb",
		type: "messenger",
		nameAr: "ماسنجر فيسبوك",
		nameEn: "Facebook Messenger",
		handle: "Elbendary pharmacies",
		enabled: true,
		status: "standby"
	},
	{
		id: "sms",
		type: "sms",
		nameAr: "رسائل قصيرة",
		nameEn: "SMS",
		handle: "01200400094",
		enabled: false,
		status: "standby"
	}
];
var seedConversations = [
	{
		id: "c-wa-1",
		customer: "أحمد حسن",
		phone: "01000011224",
		channelId: "wa-orders",
		status: "open",
		assignee: null,
		topicAr: "تأكيد طلب جافيسكون",
		topicEn: "Confirm Gaviscon order",
		messages: [{
			id: "m1",
			direction: "in",
			text: "مساء الخير، عايز أأكد طلب جافيسكون الأكياس على فرع الجلاء ويتوصل النهاردة.",
			at: t(46),
			sender: "أحمد حسن"
		}]
	},
	{
		id: "c-ig-1",
		customer: "سارة م.",
		channelId: "ig",
		status: "pending",
		assignee: "مي",
		topicAr: "عرض ليفز ٢+١",
		topicEn: "Leaves 2+1 offer",
		messages: [{
			id: "m2",
			direction: "in",
			text: "العرض ٢+١ على ليفز لسه شغال في فرع المهندسين؟",
			at: t(120),
			sender: "سارة م."
		}, {
			id: "m3",
			direction: "out",
			text: "أيوة يا فندم، العرض شغال على مجموعة ليفز في كل الفروع لحد نفاد الكمية.",
			at: t(110),
			sender: "مي"
		}]
	},
	{
		id: "c-fb-1",
		customer: "هالة مصطفى",
		channelId: "fb",
		status: "open",
		assignee: null,
		topicAr: "تغطية مصر للتأمين",
		topicEn: "Misr Insurance coverage",
		messages: [{
			id: "m4",
			direction: "in",
			text: "رقم العضوية BND-EGY-00912 — ينفع أصرف الفيتامينات على الفاتورة المباشرة؟",
			at: t(30),
			sender: "هالة مصطفى"
		}]
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
		messages: [{
			id: "m5",
			direction: "in",
			text: "اتصال فائت: الطلب خرج من الجلاء ٢ من ساعة ولسه موصلش شارع البحر.",
			at: t(18),
			sender: "مركز الاتصال"
		}]
	}
];
var seedTenders = [
	{
		id: "PAY-1842",
		method: "Instapay",
		amount: 628,
		status: "pending",
		ref: "IPAY-BND-1842",
		noteAr: "بانتظار تأكيد إيصال إنستاباي",
		noteEn: "Waiting on Instapay receipt"
	},
	{
		id: "PAY-1770",
		method: "Fawry",
		amount: 340,
		status: "paid",
		ref: "8472910033",
		noteAr: "كود فوري مدفوع — مجموعة ليفز",
		noteEn: "Fawry code paid — Leaves set"
	},
	{
		id: "PAY-1904",
		method: "Vodafone Cash",
		amount: 890,
		status: "pending",
		ref: "VC-5521",
		noteAr: "جهاز ضغط — المهندسين",
		noteEn: "BP monitor — Mohandessin"
	}
];
function stamp() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
function code(prefix) {
	return `${prefix}-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function pushMessage(conversations, conversationId, message) {
	return conversations.map((c) => c.id === conversationId ? {
		...c,
		messages: [...c.messages, message],
		status: "open"
	} : c);
}
var useBendary = create()(persist((set, get) => ({
	lang: "ar",
	cart: [],
	orders: [],
	rxs: [],
	memberId: null,
	role: "pharmacist",
	channels: seedChannels,
	conversations: seedConversations,
	tenders: seedTenders,
	visitor: "",
	setLang: (lang) => set({ lang }),
	addToCart: (sku, qty = 1) => set((s) => {
		if (s.cart.find((l) => l.sku === sku)) return { cart: s.cart.map((l) => l.sku === sku ? {
			...l,
			qty: l.qty + qty
		} : l) };
		return { cart: [...s.cart, {
			sku,
			qty
		}] };
	}),
	setQty: (sku, qty) => set((s) => ({ cart: qty <= 0 ? s.cart.filter((l) => l.sku !== sku) : s.cart.map((l) => l.sku === sku ? {
		...l,
		qty
	} : l) })),
	clearCart: () => set({ cart: [] }),
	placeOrder: (draft) => {
		const order = {
			...draft,
			id: code("BND"),
			createdAt: stamp(),
			status: "preparing",
			ref: draft.method === "fawry" ? String(Math.floor(1e9 + Math.random() * 9e9)) : draft.method === "instapay" ? code("IPAY") : draft.method === "vodafone" ? code("VC") : draft.method === "paymob" ? code("PMB") : code("COD")
		};
		const convo = {
			id: `c-${order.id}`,
			customer: order.customer,
			phone: order.phone,
			channelId: "wa-orders",
			status: "open",
			assignee: null,
			topicAr: `طلب ${order.id}`,
			topicEn: `Order ${order.id}`,
			messages: [{
				id: `m-${order.id}`,
				direction: "in",
				text: `طلب جديد من المتجر: ${order.id} — ${order.total} ج.م عبر ${order.method}. العنوان: ${order.address}، ${order.city}.`,
				at: order.createdAt,
				sender: order.customer
			}]
		};
		set((s) => ({
			orders: [order, ...s.orders],
			cart: [],
			conversations: [convo, ...s.conversations],
			tenders: [{
				id: order.ref,
				method: order.method,
				amount: order.total,
				status: order.method === "cod" ? "pending" : "pending",
				ref: order.ref,
				noteAr: `طلب المتجر ${order.id}`,
				noteEn: `Store order ${order.id}`
			}, ...s.tenders]
		}));
		return order;
	},
	addRx: (draft) => {
		const rx = {
			...draft,
			id: code("RX"),
			createdAt: stamp(),
			status: "received"
		};
		const convo = {
			id: `c-${rx.id}`,
			customer: rx.name,
			phone: rx.phone,
			channelId: "web",
			status: "open",
			assignee: null,
			topicAr: `روشتة ${rx.id}`,
			topicEn: `Prescription ${rx.id}`,
			messages: [{
				id: `m-${rx.id}`,
				direction: "in",
				text: `روشتة مرفوعة (${rx.fileName || "بدون ملف"}). ${rx.note || "بدون ملاحظات."}`,
				at: rx.createdAt,
				sender: rx.name
			}]
		};
		set((s) => ({
			rxs: [rx, ...s.rxs],
			conversations: [convo, ...s.conversations]
		}));
		return rx;
	},
	setMember: (id) => set({ memberId: id }),
	setRole: (role) => set({ role }),
	toggleChannel: (id) => set((s) => ({ channels: s.channels.map((c) => c.id === id ? {
		...c,
		enabled: !c.enabled
	} : c) })),
	reply: (conversationId, text) => set((s) => ({ conversations: pushMessage(s.conversations, conversationId, {
		id: code("MSG"),
		direction: "out",
		text,
		at: stamp(),
		sender: "صيدلي البنداري"
	}) })),
	inbound: (conversationId, text, sender) => set((s) => ({ conversations: pushMessage(s.conversations, conversationId, {
		id: code("MSG"),
		direction: "in",
		text,
		at: stamp(),
		sender
	}) })),
	ensureWebThread: (customer, text) => {
		const existing = get().conversations.find((c) => c.id === "c-web-visitor");
		if (!existing) {
			const convo = {
				id: "c-web-visitor",
				customer: customer || "زائر الموقع",
				channelId: "web",
				status: "open",
				assignee: null,
				topicAr: "شات الموقع",
				topicEn: "Website chat",
				messages: [{
					id: code("MSG"),
					direction: "in",
					text,
					at: stamp(),
					sender: customer || "زائر الموقع"
				}]
			};
			set((s) => ({ conversations: [convo, ...s.conversations] }));
			return convo.id;
		}
		get().inbound(existing.id, text, customer || existing.customer);
		if (customer && customer !== existing.customer) set((s) => ({ conversations: s.conversations.map((c) => c.id === existing.id ? {
			...c,
			customer
		} : c) }));
		return existing.id;
	},
	setAssignee: (id, assignee) => set((s) => ({ conversations: s.conversations.map((c) => c.id === id ? {
		...c,
		assignee,
		status: "pending"
	} : c) })),
	setConvoStatus: (id, status) => set((s) => ({ conversations: s.conversations.map((c) => c.id === id ? {
		...c,
		status
	} : c) })),
	markTender: (id, status) => set((s) => ({ tenders: s.tenders.map((tender) => tender.id === id ? {
		...tender,
		status
	} : tender) })),
	setVisitor: (name) => set({ visitor: name })
}), {
	name: "bendary-desk",
	skipHydration: true
}));
function cartCount(cart) {
	return cart.reduce((n, l) => n + l.qty, 0);
}
function cartDetailed(cart) {
	return cart.map((l) => {
		const product = findProduct(l.sku);
		if (!product) return null;
		return {
			...l,
			product,
			line: product.price * l.qty
		};
	}).filter((x) => Boolean(x));
}
function L(lang, ar, en) {
	return lang === "ar" ? ar : en;
}
function ChatWidget() {
	const lang = useBendary((s) => s.lang);
	const visitor = useBendary((s) => s.visitor);
	const setVisitor = useBendary((s) => s.setVisitor);
	const thread = useBendary((s) => s.conversations.find((c) => c.id === "c-web-visitor"));
	const ensureWebThread = useBendary((s) => s.ensureWebThread);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)("");
	function send() {
		const body = text.trim();
		if (!body) return;
		ensureWebThread(visitor.trim() || L(lang, "زائر الموقع", "Website visitor"), body);
		setText("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 end-4 z-50 flex flex-col items-end gap-2",
		children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-card border border-line bg-surface shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-ink px-4 py-3 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-bold",
						children: "MoSTaa-ChaT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand",
						children: L(lang, "شات صيدليات البنداري", "El-Bendary live desk")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						"aria-label": L(lang, "إغلاق", "Close"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2 overflow-y-auto bg-paper p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-sand px-3 py-2 text-xs text-muted",
						children: L(lang, "اكتب طلبك. يظهر فوراً في مكتب MoSTaa-ChaT مع واتساب والاتصال.", "Write your request. It lands instantly on the MoSTaa-ChaT desk with WhatsApp and voice.")
					}), thread?.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.direction === "in" ? "bg-surface text-ink" : "ms-auto bg-red text-paper"}`,
						children: m.text
					}, m.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 border-t border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: visitor,
						onChange: (e) => setVisitor(e.target.value),
						placeholder: L(lang, "اسمك", "Your name"),
						className: "w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: text,
							onChange: (e) => setText(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") send();
							},
							placeholder: L(lang, "رسالتك للصيدلي", "Message the pharmacist"),
							className: "min-w-0 flex-1 rounded-xl border border-line bg-paper px-3 py-2 text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: send,
							className: "grid size-10 place-items-center rounded-xl bg-red text-paper",
							"aria-label": L(lang, "إرسال", "Send"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex items-center gap-2 rounded-full bg-red px-4 py-3 text-sm font-semibold text-paper shadow-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), L(lang, "كلّم البنداري", "Talk to Bendary")]
		})]
	});
}
var links = [
	{
		to: "/shop",
		ar: "المتجر",
		en: "Shop"
	},
	{
		to: "/branches",
		ar: "الفروع",
		en: "Branches"
	},
	{
		to: "/prescription",
		ar: "الروشتة",
		en: "Prescription"
	},
	{
		to: "/insurance",
		ar: "التأمين",
		en: "Insurance"
	},
	{
		to: "/track",
		ar: "التتبع",
		en: "Track"
	},
	{
		to: "/assistant",
		ar: "الصيدلي",
		en: "Pharmacist"
	},
	{
		to: "/mostaa",
		ar: "MoSTaa-ChaT",
		en: "MoSTaa-ChaT"
	}
];
function Shell({ children }) {
	const lang = useBendary((s) => s.lang);
	const setLang = useBendary((s) => s.setLang);
	const cart = useBendary((s) => s.cart);
	const path = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const count = cartCount(cart);
	const ar = lang === "ar";
	(0, import_react.useEffect)(() => {
		useBendary.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = ar ? "ar" : "en";
		document.documentElement.dir = ar ? "rtl" : "ltr";
	}, [ar]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	function onSearch(e) {
		e.preventDefault();
		navigate({
			to: "/shop",
			search: {
				q,
				cat: "all",
				price: "all",
				stock: "all"
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: ar ? "rtl" : "ltr",
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${HOTLINE}`,
							className: "inline-flex items-center gap-1.5 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-3.5",
									"aria-hidden": true
								}),
								L(lang, "الخط الساخن", "Hotline"),
								" ",
								HOTLINE
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${COMPLAINTS}`,
							className: "inline-flex items-center gap-1.5 text-sand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, {
									className: "size-3.5",
									"aria-hidden": true
								}),
								L(lang, "شكاوى", "Complaints"),
								" ",
								COMPLAINTS
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sand",
						children: L(lang, "توصيل مبرد ٢٤/٧ · منذ ١٩٨٠", "Cooled delivery 24/7 · since 1980")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "flex shrink-0 items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/brand/logo.png",
									alt: "El-Bendary Pharmacies",
									className: "h-12 w-auto"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								onSubmit: onSearch,
								className: "hidden min-w-0 flex-1 md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: L(lang, "بحث", "Search")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute inset-y-0 start-3 my-auto size-4 text-muted" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: q,
											onChange: (e) => setQ(e.target.value),
											placeholder: L(lang, "ابحث عن دواء أو مستحضر أو جهاز", "Search a medicine, care product, or device"),
											className: "w-full rounded-full border border-line bg-paper py-2.5 ps-10 pe-4 text-sm outline-none"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ms-auto flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLang(ar ? "en" : "ar"),
										className: "rounded-full border border-line px-3 py-2 text-xs font-semibold",
										children: ar ? "EN" : "عربي"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/prescription",
										className: "hidden items-center gap-1.5 rounded-full border border-line px-3 py-2 text-sm font-semibold sm:inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-red" }), L(lang, "روشتة", "Rosheta")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/cart",
										className: "relative inline-flex items-center gap-1.5 rounded-full bg-red px-3 py-2 text-sm font-semibold text-paper",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: L(lang, "السلة", "Cart")
											}),
											count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-1.5 -end-1.5 grid size-5 place-items-center rounded-full bg-ink text-xs text-paper tabular-nums",
												children: count
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-10 place-items-center rounded-full border border-line md:hidden",
										onClick: () => setOpen((v) => !v),
										"aria-label": open ? L(lang, "إغلاق القائمة", "Close menu") : L(lang, "فتح القائمة", "Open menu"),
										children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto hidden max-w-6xl gap-1 px-4 pb-3 md:flex",
						children: [links.map((item) => {
							const active = path === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								search: item.to === "/shop" ? {
									q: "",
									cat: "all",
									price: "all",
									stock: "all"
								} : void 0,
								className: `rounded-full px-3 py-1.5 text-sm font-medium ${active ? "bg-ink text-paper" : "text-ink hover:bg-sand"}`,
								children: ar ? item.ar : item.en
							}, item.to);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ops",
							className: "ms-auto rounded-full px-3 py-1.5 text-sm text-muted hover:bg-sand",
							children: L(lang, "بوابة الفريق", "Team desk")
						})]
					}),
					open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line bg-surface px-4 py-3 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							onSubmit: onSearch,
							className: "mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: L(lang, "بحث في الكتالوج", "Search the catalog"),
								className: "w-full rounded-full border border-line bg-paper px-4 py-2.5 text-sm"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								search: item.to === "/shop" ? {
									q: "",
									cat: "all",
									price: "all",
									stock: "all"
								} : void 0,
								className: "rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-sand",
								children: ar ? item.ar : item.en
							}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ops",
								className: "rounded-xl px-3 py-2.5 text-sm text-muted",
								children: L(lang, "بوابة الفريق", "Team desk")
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 border-t border-line bg-ink text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/logo.png",
								alt: "",
								className: "mb-4 h-16 w-auto rounded-xl bg-paper p-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-sm text-sand",
								children: L(lang, "صيدليات البنداري. صحتك وصحة عائلتك أولويتنا منذ عام ١٩٨٠. أدوية أصلية، توصيل مبرد، وروشتة تُراجعها صيدلية لا خوارزمية وحدها.", "El-Bendary Pharmacies. Your health, and your family's, has been the priority since 1980. Authentic stock, cooled delivery, and a pharmacist on the prescription — not an algorithm alone.")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-display font-bold",
								children: L(lang, "تواصل", "Contact")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sand",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${HOTLINE}`,
										children: HOTLINE
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${COMPLAINTS}`,
										children: [
											L(lang, "شكاوى", "Complaints"),
											" ",
											COMPLAINTS
										]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://bendaryph.com",
										children: "bendaryph.com"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/elbendary_pharmacy1980/",
										children: "@elbendary_pharmacy1980"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 font-display font-bold",
									children: "MoSTaa-ChaT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sand",
									children: L(lang, "مكتب القنوات الموحّد للبنداري: واتساب، اتصال، إنستجرام، ماسنجر، وشات الموقع في طابور واحد.", "Bendary's unified desk: WhatsApp, voice, Instagram, Messenger, and the website in one queue.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/mostaa",
									className: "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-red" }), L(lang, "افتح المكتب", "Open the desk")]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-red-deep/40 px-4 py-4 text-center text-xs text-sand",
					children: L(lang, "صيدليات البنداري © ٢٠٢٦ · رعاية من القلب", "El-Bendary Pharmacies © 2026")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {})
		]
	});
}
//#endregion
export { branchById as a, categories as c, findProduct as d, insurers as f, useBendary as g, products as h, batches as i, categoryName as l, money as m, L as n, branches as o, members as p, Shell as r, cartDetailed as s, HOTLINE as t, daysUntil as u };
