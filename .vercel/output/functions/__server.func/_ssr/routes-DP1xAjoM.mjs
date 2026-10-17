import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Building2, a as Stethoscope, c as ShieldCheck, g as Clock, m as MapPin, n as Upload, o as Snowflake, r as Truck, v as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { f as insurers, g as useBendary, h as products, n as L, o as branches, r as Shell, t as HOTLINE } from "./shell-DcyxnXUU.mjs";
import { t as ProductCard } from "./product-card-cVW6mXB6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DP1xAjoM.js
var import_jsx_runtime = require_jsx_runtime();
var featured = [
	"LV-SET",
	"CPX-01",
	"GA",
	"0071491",
	"DEV-02",
	"CLR-05"
];
function Home() {
	const lang = useBendary((s) => s.lang);
	const offers = products.filter((p) => p.offerAr);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-red",
					children: "EL-BENDARY · SINCE 1980"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-extrabold md:text-6xl",
					children: L(lang, "صحتك وصحة عائلتك أولويتنا.", "Your family’s health, kept close.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base text-muted md:text-lg",
					children: L(lang, "بدأت الحكاية عام ١٩٨٠ بصيدلية في طنطا. اليوم أكثر من ١٥ فرعاً بين طنطا والقاهرة والساحل، مخزون يغطي نواقص الدواء، وتوصيل مبرد حتى باب البيت.", "One counter in Tanta in 1980. Today more than 15 branches across Tanta, Cairo, and the coast — shortage cover, and cooled delivery to the door.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: {
								q: "",
								cat: "all",
								price: "all",
								stock: "all"
							},
							className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper",
							children: L(lang, "تسوق الكتالوج", "Browse the catalog")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/prescription",
							className: "inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), L(lang, "ارفع الروشتة", "Upload a prescription")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/mostaa",
							className: "inline-flex items-center gap-1 rounded-full px-3 py-3 text-sm font-semibold text-red-deep",
							children: ["MoSTaa-ChaT", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/hero.jpg",
					alt: L(lang, "هاون البنداري على رخام الصيدلية", "Bendary mortar on the pharmacy marble"),
					className: "h-80 w-full rounded-card object-cover md:h-[28rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 start-4 end-4 rounded-2xl bg-surface/95 p-4 backdrop-blur md:end-auto md:max-w-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-red",
							children: L(lang, "الخط الموحّد", "One number")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${HOTLINE}`,
							className: "font-display text-2xl font-extrabold tabular-nums",
							children: HOTLINE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: L(lang, "طلب · واتساب · متابعة", "Order · WhatsApp · follow-up")
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
				children: [
					[
						"٤٦",
						"46",
						"عاماً من الثقة",
						"years of trust"
					],
					[
						"+١٥",
						"15+",
						"فرعاً في الخدمة",
						"branches open"
					],
					[
						"٢٤/٧",
						"24/7",
						"توصيل مبرد",
						"cooled delivery"
					],
					[
						"+٢٥",
						"25+",
						"شركة تأمين",
						"insurers"
					]
				].map(([arN, enN, arL, enL]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-line px-4 py-6 md:border-s first:border-s-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-3xl font-extrabold tabular-nums",
						children: L(lang, arN, enN)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-sm text-muted",
						children: L(lang, arL, enL)
					})]
				}, enL))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-wide text-red",
					children: L(lang, "احتفال ٤٦ سنة", "46-year offers")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl font-extrabold",
					children: L(lang, "العروض الجارية", "On the counter now")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: {
						q: "",
						cat: "all",
						price: "all",
						stock: "all"
					},
					className: "text-sm font-semibold",
					children: L(lang, "كل الكتالوج", "Full catalog")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line overflow-hidden rounded-card border border-line bg-surface",
				children: offers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$sku",
					params: { sku: p.sku },
					className: "flex items-center justify-between gap-4 px-4 py-4 hover:bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: lang === "ar" ? p.nameAr : p.nameEn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: lang === "ar" ? p.nameEn : p.nameAr
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-sm font-semibold text-leaf",
						children: lang === "ar" ? p.offerAr : p.offerEn
					})]
				}) }, p.sku))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-3 px-4 md:grid-cols-3",
			children: [
				{
					icon: Truck,
					to: "/shop",
					ar: "المتجر",
					en: "The shop",
					dAr: "أسعار الرف، تصفية بالقسم والسعر، ودفع بإنستاباي وفوري وفودافون كاش.",
					dEn: "Shelf prices, filters, Instapay, Fawry, and Vodafone Cash."
				},
				{
					icon: MapPin,
					to: "/branches",
					ar: "الفروع",
					en: "Branches",
					dAr: "طنطا، المهندسين، التجمع، أكتوبر، والساحل. واتساب كل فرع.",
					dEn: "Tanta, Mohandessin, New Cairo, October, and the coast."
				},
				{
					icon: Stethoscope,
					to: "/assistant",
					ar: "الصيدلي الذكي",
					en: "Pharmacist desk",
					dAr: "إرشاد دوائي بلغة واضحة، والروشتة تبقى للصيدة البشرية.",
					dEn: "Plain-language guidance. Prescriptions stay with a human pharmacist."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				search: item.to === "/shop" ? {
					q: "",
					cat: "all",
					price: "all",
					stock: "all"
				} : void 0,
				className: "rounded-card border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-red" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl font-bold",
						children: L(lang, item.ar, item.en)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: L(lang, item.dAr, item.dEn)
					})
				]
			}, item.en))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold",
				children: L(lang, "من الأرفف", "From the shelves")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: products.filter((p) => featured.includes(p.sku)).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.sku))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-red",
						children: "MOSTAA-CHAT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-extrabold md:text-4xl",
						children: L(lang, "كل قناة. طابور واحد.", "Every channel. One queue.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sand",
						children: L(lang, "موقع البنداري موصول بمكتب MoSTaa-ChaT: واتساب الطلبات، واتساب الفروع، مركز الاتصال، الشكاوى، إنستجرام، ماسنجر، وشات الزائر. الرد من المكتب يصل لصاحب الرسالة.", "The Bendary site is wired into MoSTaa-ChaT: order WhatsApp, branch WhatsApp, the call center, complaints, Instagram, Messenger, and the visitor chat. A reply from the desk reaches the person who wrote.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mostaa",
							className: "rounded-full bg-red px-5 py-3 text-sm font-semibold text-paper",
							children: L(lang, "ادخل مكتب القنوات", "Enter the desk")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ops",
							className: "rounded-full border border-sand/40 px-5 py-3 text-sm font-semibold",
							children: L(lang, "عمليات الفروع", "Branch operations")
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-2 text-sm",
					children: [
						["WhatsApp", "01200400094"],
						["Branches", "01200400461"],
						["Voice", "01200400094"],
						["Instagram", "@elbendary_pharmacy1980"]
					].map(([name, handle]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-sand/20 px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-semibold break-all",
							children: handle
						})]
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "story",
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3",
			children: [
				{
					icon: ShieldCheck,
					ar: "دواء أصلي",
					en: "Authentic stock",
					dAr: "أصناف مضمونة من رف الصيدلية، لا من سوق رمادي.",
					dEn: "Shelf stock you can trace to the branch, not a grey market."
				},
				{
					icon: Snowflake,
					ar: "سلسلة تبريد",
					en: "Cold chain",
					dAr: "التوصيل المبرد للأصناف التي لا تحتمل حرارة الطريق.",
					dEn: "Cooled runs for anything that should not sit in a hot car."
				},
				{
					icon: Clock,
					ar: "صيدلي في الوردية",
					en: "A pharmacist on shift",
					dAr: "الروشتة تُراجع قبل الصرف. المساعد يوضح ولا يصرف بدل الصيدلي.",
					dEn: "Prescriptions are checked before they leave. The assistant explains; it does not replace the pharmacist."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-leaf" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl font-bold",
						children: L(lang, item.ar, item.en)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: L(lang, item.dAr, item.dEn)
					})
				]
			}, item.en))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold",
					children: L(lang, "فروع قريبة", "Nearby counters")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/branches",
					className: "text-sm font-semibold",
					children: L(lang, "الدليل", "Directory")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: branches.slice(0, 3).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold text-red",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5" }), lang === "ar" ? b.cityAr : b.cityEn]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg font-bold",
							children: lang === "ar" ? b.nameAr : b.nameEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: lang === "ar" ? b.addressAr : b.addressEn
						})
					]
				}, b.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-muted",
					children: L(lang, "فاتورة مباشرة مع أكثر من ٢٥ شريكاً، منهم", "Direct billing with 25+ partners, including")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: insurers.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-line bg-surface px-3 py-1.5 text-sm",
						children: name
					}, name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/insurance",
					className: "mt-4 inline-block text-sm font-semibold text-red-deep",
					children: L(lang, "دخول عضو التأمين", "Member sign-in")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-card border border-dashed border-line bg-sand/60 px-4 py-5 text-sm text-muted",
				children: L(lang, "موضع شراكة دوائية — متاح لشركاء البنداري بدل الإعلان العشوائي. لا نعرض إعلانات خارجية على صفحات الدواء.", "A reserved placement for Bendary’s pharmaceutical partners. Drug pages stay free of outside advertising.")
			})
		})
	] });
}
//#endregion
export { Home as component };
