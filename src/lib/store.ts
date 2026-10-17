import { create } from "zustand";
import { persist } from "zustand/middleware";
import { findProduct } from "@/data/catalog";
import {
  seedChannels,
  seedConversations,
  seedTenders,
  type Channel,
  type Conversation,
  type Tender,
} from "@/data/desk";

export type Lang = "ar" | "en";
export type PayMethod = "instapay" | "fawry" | "paymob" | "vodafone" | "cod";
export type Role = "pharmacist" | "manager" | "inventory" | "cashier" | "delivery";

export type CartLine = { sku: string; qty: number };

export type Order = {
  id: string;
  createdAt: string;
  items: { sku: string; nameAr: string; nameEn: string; qty: number; price: number }[];
  total: number;
  method: PayMethod;
  status: "confirmed" | "preparing" | "out" | "delivered";
  branchId: string;
  customer: string;
  phone: string;
  address: string;
  city: string;
  note: string;
  ref: string;
};

export type RxRequest = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  branchId: string;
  note: string;
  fileName: string;
  status: "received" | "reviewing" | "ready";
};

type OrderDraft = {
  items: Order["items"];
  total: number;
  method: PayMethod;
  branchId: string;
  customer: string;
  phone: string;
  address: string;
  city: string;
  note: string;
};

type RxDraft = Omit<RxRequest, "id" | "createdAt" | "status">;

type BendaryState = {
  lang: Lang;
  cart: CartLine[];
  orders: Order[];
  rxs: RxRequest[];
  memberId: string | null;
  role: Role;
  channels: Channel[];
  conversations: Conversation[];
  tenders: Tender[];
  visitor: string;
  setLang: (lang: Lang) => void;
  addToCart: (sku: string, qty?: number) => void;
  setQty: (sku: string, qty: number) => void;
  clearCart: () => void;
  placeOrder: (draft: OrderDraft) => Order;
  addRx: (draft: RxDraft) => RxRequest;
  setMember: (id: string | null) => void;
  setRole: (role: Role) => void;
  toggleChannel: (id: string) => void;
  reply: (conversationId: string, text: string) => void;
  inbound: (conversationId: string, text: string, sender: string) => void;
  ensureWebThread: (customer: string, text: string) => string;
  setAssignee: (id: string, assignee: string) => void;
  setConvoStatus: (id: string, status: Conversation["status"]) => void;
  markTender: (id: string, status: Tender["status"]) => void;
  setVisitor: (name: string) => void;
};

function stamp() {
  return new Date().toISOString();
}

function code(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function pushMessage(
  conversations: Conversation[],
  conversationId: string,
  message: Conversation["messages"][number],
): Conversation[] {
  return conversations.map((c) =>
    c.id === conversationId ? { ...c, messages: [...c.messages, message], status: "open" as const } : c,
  );
}

export const useBendary = create<BendaryState>()(
  persist(
    (set, get) => ({
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
      addToCart: (sku, qty = 1) =>
        set((s) => {
          const hit = s.cart.find((l) => l.sku === sku);
          if (hit) {
            return { cart: s.cart.map((l) => (l.sku === sku ? { ...l, qty: l.qty + qty } : l)) };
          }
          return { cart: [...s.cart, { sku, qty }] };
        }),
      setQty: (sku, qty) =>
        set((s) => ({
          cart: qty <= 0 ? s.cart.filter((l) => l.sku !== sku) : s.cart.map((l) => (l.sku === sku ? { ...l, qty } : l)),
        })),
      clearCart: () => set({ cart: [] }),
      placeOrder: (draft) => {
        const order: Order = {
          ...draft,
          id: code("BND"),
          createdAt: stamp(),
          status: "preparing",
          ref:
            draft.method === "fawry"
              ? String(Math.floor(1000000000 + Math.random() * 9000000000))
              : draft.method === "instapay"
                ? code("IPAY")
                : draft.method === "vodafone"
                  ? code("VC")
                  : draft.method === "paymob"
                    ? code("PMB")
                    : code("COD"),
        };
        const convo: Conversation = {
          id: `c-${order.id}`,
          customer: order.customer,
          phone: order.phone,
          channelId: "wa-orders",
          status: "open",
          assignee: null,
          topicAr: `طلب ${order.id}`,
          topicEn: `Order ${order.id}`,
          messages: [
            {
              id: `m-${order.id}`,
              direction: "in",
              text: `طلب جديد من المتجر: ${order.id} — ${order.total} ج.م عبر ${order.method}. العنوان: ${order.address}، ${order.city}.`,
              at: order.createdAt,
              sender: order.customer,
            },
          ],
        };
        set((s) => ({
          orders: [order, ...s.orders],
          cart: [],
          conversations: [convo, ...s.conversations],
          tenders: [
            {
              id: order.ref,
              method: order.method,
              amount: order.total,
              status: order.method === "cod" ? "pending" : "pending",
              ref: order.ref,
              noteAr: `طلب المتجر ${order.id}`,
              noteEn: `Store order ${order.id}`,
            },
            ...s.tenders,
          ],
        }));
        return order;
      },
      addRx: (draft) => {
        const rx: RxRequest = {
          ...draft,
          id: code("RX"),
          createdAt: stamp(),
          status: "received",
        };
        const convo: Conversation = {
          id: `c-${rx.id}`,
          customer: rx.name,
          phone: rx.phone,
          channelId: "web",
          status: "open",
          assignee: null,
          topicAr: `روشتة ${rx.id}`,
          topicEn: `Prescription ${rx.id}`,
          messages: [
            {
              id: `m-${rx.id}`,
              direction: "in",
              text: `روشتة مرفوعة (${rx.fileName || "بدون ملف"}). ${rx.note || "بدون ملاحظات."}`,
              at: rx.createdAt,
              sender: rx.name,
            },
          ],
        };
        set((s) => ({ rxs: [rx, ...s.rxs], conversations: [convo, ...s.conversations] }));
        return rx;
      },
      setMember: (id) => set({ memberId: id }),
      setRole: (role) => set({ role }),
      toggleChannel: (id) =>
        set((s) => ({
          channels: s.channels.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c)),
        })),
      reply: (conversationId, text) =>
        set((s) => ({
          conversations: pushMessage(s.conversations, conversationId, {
            id: code("MSG"),
            direction: "out",
            text,
            at: stamp(),
            sender: "صيدلي البنداري",
          }),
        })),
      inbound: (conversationId, text, sender) =>
        set((s) => ({
          conversations: pushMessage(s.conversations, conversationId, {
            id: code("MSG"),
            direction: "in",
            text,
            at: stamp(),
            sender,
          }),
        })),
      ensureWebThread: (customer, text) => {
        const existing = get().conversations.find((c) => c.id === "c-web-visitor");
        if (!existing) {
          const convo: Conversation = {
            id: "c-web-visitor",
            customer: customer || "زائر الموقع",
            channelId: "web",
            status: "open",
            assignee: null,
            topicAr: "شات الموقع",
            topicEn: "Website chat",
            messages: [
              {
                id: code("MSG"),
                direction: "in",
                text,
                at: stamp(),
                sender: customer || "زائر الموقع",
              },
            ],
          };
          set((s) => ({ conversations: [convo, ...s.conversations] }));
          return convo.id;
        }
        get().inbound(existing.id, text, customer || existing.customer);
        if (customer && customer !== existing.customer) {
          set((s) => ({
            conversations: s.conversations.map((c) =>
              c.id === existing.id ? { ...c, customer } : c,
            ),
          }));
        }
        return existing.id;
      },
      setAssignee: (id, assignee) =>
        set((s) => ({
          conversations: s.conversations.map((c) => (c.id === id ? { ...c, assignee, status: "pending" } : c)),
        })),
      setConvoStatus: (id, status) =>
        set((s) => ({
          conversations: s.conversations.map((c) => (c.id === id ? { ...c, status } : c)),
        })),
      markTender: (id, status) =>
        set((s) => ({
          tenders: s.tenders.map((tender) => (tender.id === id ? { ...tender, status } : tender)),
        })),
      setVisitor: (name) => set({ visitor: name }),
    }),
    {
      name: "bendary-desk",
      skipHydration: true,
    },
  ),
);

export function cartCount(cart: CartLine[]) {
  return cart.reduce((n, l) => n + l.qty, 0);
}

export function cartDetailed(cart: CartLine[]) {
  return cart
    .map((l) => {
      const product = findProduct(l.sku);
      if (!product) return null;
      return { ...l, product, line: product.price * l.qty };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}

export function L(lang: Lang, ar: string, en: string) {
  return lang === "ar" ? ar : en;
}
