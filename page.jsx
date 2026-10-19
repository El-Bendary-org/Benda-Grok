
'use client'
import { useState, useEffect } from 'react'
import BottomNav from '../components/BottomNav'
import SideMenu from '../components/SideMenu'
import branchesData from '../data/branches.json'
import productsData from '../data/products.json'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(productsData.slice(0, 100))
  const [showLogin, setShowLogin] = useState(false)
  const [loginType, setLoginType] = useState('customer') // customer | staff
  const [user, setUser] = useState(null)

  const filtered = products.filter(p => !search || p.nameAr.toLowerCase().includes(search.toLowerCase()) || p.nameEn.toLowerCase().includes(search.toLowerCase()))

  const toggleProduct = (id) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, available: !p.available } : p))
  }

  return (
    <div className={`${dark ? 'bg-zinc-900 text-white' : 'bg-zinc-50'} min-h-screen pb-20`}>
      {/* Header */}
      <header className={`${dark ? 'bg-zinc-800' : 'bg-white'} sticky top-0 z-40 border-b shadow-sm`}>
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => setMenuOpen(true)} className="text-2xl">☰</button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl shadow p-1">
              <img src="/photo7572142141958712388.jpeg" className="w-full h-full object-contain" alt="Bendary" />
            </div>
            <div>
              <div className="font-black text-sm leading-none">صيدليات البنداري</div>
              <div className="text-[10px] text-zinc-500">منذ 1980</div>
            </div>
          </div>
          <button onClick={() => setShowLogin(true)} className="text-sm">👤</button>
        </div>
        {/* Search */}
        <div className="max-w-lg mx-auto px-4 pb-3">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="ابحث عن منتج..." className="w-full px-4 py-2.5 rounded-full bg-zinc-100 focus:bg-white border outline-none text-sm" />
        </div>
      </header>

      {/* Login Modal - 2 systems */}
      {showLogin && (
        <div className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex gap-2 mb-6">
              <button onClick={() => setLoginType('customer')} className={`flex-1 py-2 rounded-full font-bold ${loginType==='customer' ? 'bg-[#E30613] text-white' : 'bg-zinc-100'}`}>عميل</button>
              <button onClick={() => setLoginType('staff')} className={`flex-1 py-2 rounded-full font-bold ${loginType==='staff' ? 'bg-zinc-900 text-white' : 'bg-zinc-100'}`}>موظف (200 mail)</button>
            </div>
            {loginType === 'customer' ? (
              <div className="space-y-3">
                <div className="font-bold">تسجيل دخول العميل</div>
                <input placeholder="رقم الموبايل 01xxxxxxxxx" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                <input placeholder="كود التحقق" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                <button onClick={() => { setUser({ name: 'Mostafa Elmourabea', phone: '1507055701' }); setShowLogin(false) }} className="w-full py-3 bg-[#E30613] text-white rounded-xl font-bold">دخول</button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="font-bold">دخول الموظفين - 200 حساب</div>
                <input placeholder="البريد الإلكتروني" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                <input placeholder="كلمة المرور" type="password" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                <button onClick={() => { setUser({ name: 'Staff', phone: 'Admin' }); setShowLogin(false) }} className="w-full py-3 bg-zinc-900 text-white rounded-xl font-bold">دخول الموظف</button>
                <div className="text-[11px] text-zinc-500">200 حساب موظف مجهز للفروع</div>
              </div>
            )}
            <button onClick={() => setShowLogin(false)} className="w-full mt-3 py-2 text-zinc-500 text-sm">إلغاء</button>
          </div>
        </div>
      )}

      <SideMenu open={menuOpen} setOpen={setMenuOpen} dark={dark} setDark={setDark} user={user} />

      {/* Home Content */}
      <main className="max-w-lg mx-auto">
        {/* Hero 46 years - bubble font matching photo */}
        <div className={`${dark ? 'bg-zinc-800' : 'bg-gradient-to-br from-red-50 to-white'} p-6 text-center`}>
          <div className="inline-block">
            <div className="bubble-46 text-7xl font-black text-[#FFC700] leading-none" style={{WebkitTextStroke: '4px #5C2E00', textShadow: '0 4px 0 #5C2E00'}}>46</div>
            <div className="font-black text-2xl mt-1">سنة من صيدليات البنداري</div>
            <div className="text-xs text-zinc-500 mt-1">SINCE 1980 • CAIRO, EG • 11 فرع</div>
          </div>
        </div>

        {/* Products Grid with ON/OFF */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-black">المنتجات • {filtered.length}</h2>
            <span className="text-xs text-zinc-500">{products.filter(p=>p.available).length} متاح</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filtered.slice(0, 20).map(p => (
              <div key={p.id} className={`${dark ? 'bg-zinc-800' : 'bg-white'} rounded-2xl p-3 shadow-sm border`}>
                <div className="aspect-square bg-zinc-50 rounded-xl flex items-center justify-center text-[9px] text-center p-2">{p.nameAr.slice(0, 30)}</div>
                <div className="mt-2">
                  <div className="text-[10px] text-zinc-500 truncate">{p.sku}</div>
                  <div className="font-bold text-xs leading-tight line-clamp-2 h-8">{p.nameAr}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-black text-[#E30613] text-sm">{p.price} ج</span>
                    <button onClick={() => toggleProduct(p.id)} className={`px-2 py-1 rounded-full text-[10px] font-bold ${p.available ? 'bg-green-500 text-white' : 'bg-zinc-200 text-zinc-500'}`}>{p.available ? 'متاح' : 'غير متاح'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Branches - CLEAN no queue text for customer */}
        <div className="p-4">
          <h2 className="font-black mb-3">فروعنا • اطلب عبر واتساب</h2>
          <div className="space-y-3">
            {branchesData.slice(0, 5).map(b => (
              <div key={b.name} className={`${dark ? 'bg-zinc-800' : 'bg-white'} rounded-2xl p-4 shadow-sm border`}>
                <div className="font-bold text-sm">{b.name}</div>
                <div className="text-[11px] text-zinc-500 mt-1">{b.address}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {b.mobiles?.map(num => (
                    <a key={num} href={`https://wa.me/2${num}`} target="_blank" className="px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold">💬 {num}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Powered by */}
        <div className="p-6 text-center text-[11px] text-zinc-400">
          <div>Powered by MoSTa & MoSTa ChaT</div>
          <div className="mt-1">Collect, Catalog, Get Client by Click</div>
        </div>
      </main>

      <BottomNav active={activeTab} setActive={setActiveTab} />
    </div>
  )
}
