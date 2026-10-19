
'use client'
export default function BottomNav({ active, setActive }) {
  const items = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'cart', label: 'السلة', icon: '🛒', badge: 0 },
    { id: 'roushita', label: 'الروشتة', icon: '📋' },
    { id: 'orders', label: 'الطلبات', icon: '📦' },
    { id: 'menu', label: 'القائمة', icon: '☰' },
  ]
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
      <div className="max-w-lg mx-auto flex justify-around py-2">
        {items.map(it => (
          <button key={it.id} onClick={() => setActive(it.id)} className={`flex flex-col items-center px-3 py-1 ${active===it.id ? 'text-[#E30613]' : 'text-zinc-400'}`}>
            <span className="text-xl relative">{it.icon}{it.badge !== undefined && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">{it.badge}</span>}</span>
            <span className="text-[11px] font-bold mt-1">{it.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
