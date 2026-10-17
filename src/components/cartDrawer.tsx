import { useEffect } from "react";
import { ExternalLink, Loader2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";

export function CartDrawer() {
  const { items, open, setOpen, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } =
    useCartStore();

  useEffect(() => {
    if (open) syncCart();
  }, [open, syncCart]);

  if (!open) return null;
  const currency = items[0]?.price.currencyCode ?? "EGP";
  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);

  const checkout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-label="سلة المشتريات">
      <button aria-label="إغلاق السلة" className="flex-1 bg-navy/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <aside className="flex h-full w-full max-w-sm flex-col bg-card shadow-2xl">
        <header className="flex items-center justify-between border-b p-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <ShoppingBag className="size-5 text-brand" /> سلة المشتريات
          </h2>
          <button onClick={() => setOpen(false)} aria-label="إغلاق">
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length === 0 && (
            <p className="pt-10 text-center text-sm text-muted-foreground">السلة فارغة — تصفح المتجر وأضف احتياجاتك.</p>
          )}
          {items.map((item) => {
            const img = item.product.node.images.edges[0]?.node;
            return (
              <div key={item.variantId} className="flex gap-3 rounded-xl border p-3">
                <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                  {img && <img src={img.url} alt={item.product.node.title} className="size-full object-cover" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate text-sm font-bold">{item.product.node.title}</p>
                    <button onClick={() => removeItem(item.variantId)} aria-label="حذف">
                      <Trash2 className="size-4 text-brand" />
                    </button>
                  </div>
                  {item.variantTitle !== "Default Title" && (
                    <p className="text-xs text-muted-foreground">{item.selectedOptions.map((o) => o.value).join(" • ")}</p>
                  )}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg border px-2 py-1">
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} aria-label="زيادة">
                        <Plus className="size-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} aria-label="إنقاص">
                        <Minus className="size-4" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-brand">
                      {formatMoney(String(parseFloat(item.price.amount) * item.quantity), item.price.currencyCode)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="space-y-3 border-t p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">الإجمالي</span>
            <span className="text-lg font-extrabold text-brand">{formatMoney(String(total), currency)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={items.length === 0 || isLoading || isSyncing}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-bold text-brand-foreground disabled:opacity-50"
          >
            {isLoading || isSyncing ? <Loader2 className="size-4 animate-spin" /> : <ExternalLink className="size-4" />}
            إتمام الشراء الآمن
          </button>
        </footer>
      </aside>
    </div>
  );
}
