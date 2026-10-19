
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
  const [loginStep, setLoginStep] = useState('options') // options | phone | otp | social
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [user, setUser] = useState(null)
  const [sendingWhatsApp, setSendingWhatsApp] = useState(false)

  const filtered = products.filter(p => !search || p.nameAr.toLowerCase().includes(search.toLowerCase()) || p.nameEn.toLowerCase().includes(search.toLowerCase()))

  const toggleProduct = (id) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, available: !p.available } : p))
  }

  const sendWhatsAppOTP = () => {
    if (!phone || phone.length < 10) return
    setSendingWhatsApp(true)
    setTimeout(() => {
      setSendingWhatsApp(false)
      setLoginStep('otp')
      // Simulate WhatsApp message sent
    }, 1500)
  }

  const verifyOTP = () => {
    if (otp.length === 6) {
      setUser({ name: 'Mostafa Elmourabea', phone: phone || '201507055701', method: 'WhatsApp' })
      setShowLogin(false)
      setLoginStep('options')
    }
  }

  const socialLogin = (provider) => {
    // Simulate OAuth
    setLoginStep('social')
    setTimeout(() => {
      setUser({ name: 'Mostafa Elmourabea', phone: '1507055701', method: provider })
      setShowLogin(false)
      setLoginStep('options')
    }, 1200)
  }

  return (
    <div className={`${dark ? 'bg-zinc-900 text-white' : 'bg-zinc-50'} min-h-screen pb-20`}>
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
          <button onClick={() => { setShowLogin(true); setLoginStep('options') }} className="text-sm">{user ? '✅' : '👤'}</button>
        </div>
        <div className="max-w-lg mx-auto px-4 pb-3">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="ابحث عن منتج..." className="w-full px-4 py-2.5 rounded-full bg-zinc-100 focus:bg-white border outline-none text-sm" />
        </div>
      </header>

      {/* Login Modal - Full System with Phone + Social + WhatsApp OTP */}
      {showLogin && (
        <div className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] w-full max-w-sm p-0 overflow-hidden shadow-2xl">
            <div className="flex gap-2 p-2 bg-zinc-100 m-2 rounded-full">
              <button onClick={() => { setLoginType('customer'); setLoginStep('options') }} className={`flex-1 py-2.5 rounded-full font-bold text-sm transition ${loginType==='customer' ? 'bg-[#E30613] text-white shadow' : 'text-zinc-600'}`}>دخول العميل</button>
              <button onClick={() => { setLoginType('staff'); setLoginStep('options') }} className={`flex-1 py-2.5 rounded-full font-bold text-sm transition ${loginType==='staff' ? 'bg-zinc-900 text-white shadow' : 'text-zinc-600'}`}>موظف (200 حساب)</button>
            </div>

            <div className="p-6">
              {loginType === 'customer' ? (
                <>
                  {loginStep === 'options' && (
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="font-black text-lg">مرحبا بك في صيدليات البنداري</div>
                        <div className="text-xs text-zinc-500 mt-1">سجل دخولك برقم التليفون أو حساباتك</div>
                      </div>
                      
                      <button onClick={() => setLoginStep('phone')} className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 shadow">
                        <span>💬</span> الدخول برقم التليفون + واتساب
                      </button>

                      <div className="flex items-center gap-3 my-2"><div className="flex-1 h-px bg-zinc-200"></div><span className="text-xs text-zinc-400">أو</span><div className="flex-1 h-px bg-zinc-200"></div></div>

                      <button onClick={() => socialLogin('Google')} className="w-full py-3 rounded-xl bg-white border-2 border-zinc-200 font-bold flex items-center justify-center gap-3 hover:bg-zinc-50">
                        <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">G</span> الدخول بـ Google
                      </button>
                      <button onClick={() => socialLogin('Facebook')} className="w-full py-3 rounded-xl bg-[#1877F2] text-white font-bold flex items-center justify-center gap-3">
                        <span className="font-black">f</span> الدخول بـ Facebook
                      </button>
                      <button onClick={() => socialLogin('Instagram')} className="w-full py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold flex items-center justify-center gap-3">
                        <span>📷</span> الدخول بـ Instagram
                      </button>

                      <div className="text-[11px] text-zinc-500 text-center mt-4 leading-relaxed">
                        سيتم إرسال رسالة تأكيد على الواتساب الخاص بك<br/>بعد تسجيل الدخول بأي طريقة
                      </div>
                    </div>
                  )}

                  {loginStep === 'phone' && (
                    <div className="space-y-4">
                      <button onClick={() => setLoginStep('options')} className="text-sm text-zinc-500">← رجوع</button>
                      <div className="font-bold">أدخل رقم التليفون</div>
                      <div className="text-xs text-zinc-500">سنرسل لك كود تأكيد على الواتساب</div>
                      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="01xxxxxxxxx" className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 border-2 focus:border-[#25D366] focus:bg-white outline-none font-mono text-center text-lg tracking-wider" />
                      <button onClick={sendWhatsAppOTP} disabled={sendingWhatsApp || phone.length < 10} className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-bold disabled:bg-zinc-300 flex items-center justify-center gap-2">
                        {sendingWhatsApp ? (
                          <><span className="animate-spin">⏳</span> جاري الإرسال على الواتساب...</>
                        ) : (
                          <><span>💬</span> إرسال كود التأكيد على الواتساب</>
                        )}
                      </button>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-700">
                        <div className="font-bold">📲 رسالة واتساب:</div>
                        <div className="mt-1 font-mono">كود تأكيد صيدليات البنداري: 458921 - صالح لمدة 5 دقائق</div>
                      </div>
                    </div>
                  )}

                  {loginStep === 'otp' && (
                    <div className="space-y-4">
                      <button onClick={() => setLoginStep('phone')} className="text-sm text-zinc-500">← رجوع</button>
                      <div className="font-bold">أدخل كود التأكيد</div>
                      <div className="text-xs text-zinc-500">أرسلنا الكود على واتساب رقم {phone}</div>
                      <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="000000" maxLength={6} className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 border-2 focus:border-[#E30613] focus:bg-white outline-none font-mono text-center text-2xl tracking-[0.5em]" />
                      <button onClick={verifyOTP} disabled={otp.length !== 6} className="w-full py-3.5 bg-[#E30613] text-white rounded-xl font-bold disabled:bg-zinc-300">تأكيد ودخول ✅</button>
                      <button onClick={sendWhatsAppOTP} className="w-full py-2 text-xs text-[#25D366] font-bold">إعادة إرسال الكود على الواتساب</button>
                    </div>
                  )}

                  {loginStep === 'social' && (
                    <div className="py-10 text-center">
                      <div className="animate-spin text-3xl">⏳</div>
                      <div className="mt-3 font-bold">جاري تسجيل الدخول...</div>
                      <div className="text-xs text-zinc-500 mt-1">سنرسل رسالة تأكيد على الواتساب</div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-4">
                  <div className="font-bold">دخول الموظفين - 200 حساب</div>
                  <div className="text-xs text-zinc-500">نظام دخول الموظفين ببريد الشركة</div>
                  <input placeholder="البريد الإلكتروني (موظف@البنداري.كوم)" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                  <input placeholder="كلمة المرور" type="password" className="w-full px-4 py-3 rounded-xl bg-zinc-100 border" />
                  <button onClick={() => { setUser({ name: 'موظف', phone: 'Staff', method: 'Email' }); setShowLogin(false) }} className="w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold">دخول الموظف</button>
                  <div className="bg-zinc-50 rounded-xl p-3 text-[11px] text-zinc-600">
                    <div className="font-bold">200 حساب موظف:</div>
                    <div className="mt-1">- كل فرع 15-20 حساب</div>
                    <div>- تسجيل دخول بالبريد + واتساب تأكيد</div>
                  </div>
                </div>
              )}
              <button onClick={() => { setShowLogin(false); setLoginStep('options') }} className="w-full mt-4 py-2 text-zinc-400 text-sm">إغلاق</button>
            </div>
          </div>
        </div>
      )}

      <SideMenu open={menuOpen} setOpen={setMenuOpen} dark={dark} setDark={setDark} user={user} />

      <main className="max-w-lg mx-auto">
        <div className={`${dark ? 'bg-zinc-800' : 'bg-gradient-to-br from-red-50 to-white'} p-6 text-center`}>
          <div className="inline-block">
            <div className="bubble-46 text-7xl font-black text-[#FFC700] leading-none" style={{WebkitTextStroke: '4px #5C2E00', textShadow: '0 4px 0 #5C2E00'}}>46</div>
            <div className="font-black text-2xl mt-1">سنة من صيدليات البنداري</div>
            <div className="text-xs text-zinc-500 mt-1">SINCE 1980 • 11 فرع • تسجيل دخول بالواتساب</div>
            {user && <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">✅ مرحبا {user.name} - دخلت عبر {user.method}</div>}
          </div>
        </div>

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

        <div className="p-6 text-center text-[11px] text-zinc-400">
          <div>Powered by MoSTa & MoSTa ChaT</div>
          <div className="mt-1">دخول برقم التليفون / انستجرام / جوجل / فيسبوك + تأكيد واتساب</div>
        </div>
      </main>

      <BottomNav active={activeTab} setActive={setActiveTab} />
    </div>
  )
}
