
'use client'
import branches from '../../data/branches.json'
export default function Branches() {
  return (
    <div className="min-h-screen bg-zinc-50 max-w-lg mx-auto p-4 pb-20">
      <h1 className="font-black text-xl mb-4">الفروع - 11 فرع</h1>
      <div className="space-y-3">
        {branches.map(b => (
          <div key={b.name} className="bg-white rounded-2xl p-4 shadow-sm border">
            <div className="font-bold">{b.name}</div>
            <div className="text-xs text-zinc-500 mt-1">{b.address}</div>
            <div className="text-xs mt-2">📞 {b.allNumbers}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {b.mobiles?.map(num => <a key={num} href={`https://wa.me/2${num}`} target="_blank" className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">💬 {num}</a>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
