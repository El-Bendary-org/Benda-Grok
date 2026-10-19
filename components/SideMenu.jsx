
'use client'
export default function SideMenu({ open, setOpen, dark, setDark, user }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="flex-1 bg-black/50" onClick={() => setOpen(false)}></div>
      <div className={`w-80 h-full ${dark ? 'bg-zinc-900 text-white' : 'bg-white'} shadow-2xl flex flex-col`}>
        {/* Header red as screenshot */}
        <div className="bg-[#E30613] text-white p-6 text-center">
          <div className="w-20 h-20 mx-auto bg-white/90 rounded-full flex items-center justify-center mb-3">
            <span className="text-3xl">🛍️</span>
          </div>
          <div className="font-bold text-lg">{user?.name || 'Mostafa Elmourabea'}</div>
          <div className="text-sm opacity-80">+{user?.phone || '201507055701'}</div>
          <div className="text-sm mt-1">0 نقطة ( EGP 0.01 )</div>
        </div>
        <div className={`${dark ? 'bg-zinc-800' : 'bg-zinc-800'} text-white p-3 flex justify-around`}>
          <button>📞</button><button>💬</button><button>📷</button>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="p-4 flex items-center justify-between border-b">
            <span className="font-bold">الوضع الليلي</span>
            <button onClick={() => setDark(!dark)} className={`w-14 h-8 rounded-full p-1 transition ${dark ? 'bg-[#E30613]' : 'bg-zinc-300'}`}><div className={`w-6 h-6 bg-white rounded-full transition ${dark ? 'translate-x-6' : ''}`}></div></button>
          </div>
          {[
            { icon: '🏠', label: 'الرئيسية' },
            { icon: '🏢', label: 'الفروع' },
            { icon: '🛍️', label: 'طلباتي' },
            { icon: '❤️', label: 'المفضلة' },
            { icon: '👤', label: 'حسابي' },
            { icon: '📍', label: 'العناوين' },
            { icon: '🌐', label: 'اللغة' },
          ].map(it => (
            <button key={it.label} className="w-full flex items-center justify-between p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-b">
              <span>{it.label}</span><span className="text-xl">{it.icon}</span>
            </button>
          ))}
          <div className="p-4 text-[10px] text-zinc-400 text-center">Powered by MoSTa & MoSTa ChaT</div>
        </div>
      </div>
    </div>
  )
}
