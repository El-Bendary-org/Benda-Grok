
'use client'
export default function Roushita() {
  return (
    <div className="min-h-screen bg-white max-w-lg mx-auto pb-20">
      <div className="p-4 flex items-center justify-between border-b">
        <span className="font-bold">ارسال روشتة</span>
        <span>›</span>
      </div>
      <div className="p-4">
        <div className="bg-white border rounded-2xl p-6 shadow-sm text-center">
          <div className="text-7xl font-black text-[#E30613] mb-4">Rx</div>
          <div className="font-bold">2 - صور الروشتة *</div>
          <div className="text-sm text-zinc-600 mb-6">صور الروشتة او المنتج</div>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-[#E30613] text-white rounded-xl font-bold flex items-center justify-center gap-2">📷 كاميرا</button>
            <button className="py-3 bg-[#E30613] text-white rounded-xl font-bold flex items-center justify-center gap-2">🖼️ معرض الصور</button>
          </div>
        </div>
        <div className="my-6 flex items-center gap-2"><div className="flex-1 h-px bg-zinc-200"></div><span className="text-zinc-400">او</span><div className="flex-1 h-px bg-zinc-200"></div></div>
        <div className="bg-zinc-50 border rounded-2xl p-4 h-48">
          <div className="text-sm text-zinc-400">يمكنك كتابه طلبك هنا</div>
          <div className="text-sm text-zinc-400 mt-1">مثال: علبة بنادول + بامبرز مقاس 0</div>
        </div>
        <button className="w-full mt-6 py-4 bg-[#E30613] text-white rounded-xl font-bold text-lg">التالي</button>
        <div className="mt-4 text-center text-[10px] text-zinc-400">Powered by MoSTa & MoSTa ChaT</div>
      </div>
    </div>
  )
}
