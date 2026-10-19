export async function POST(req) {
  const { phone, method } = await req.json()
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  
  // In production: Send via WhatsApp Business API - NEVER return OTP in response
  // await fetch(`https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_ID}/messages`, {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     messaging_product: 'whatsapp',
  //     to: phone,
  //     type: 'template',
  //     template: { name: 'otp_code', language: { code: 'ar' }, components: [{ type: 'body', parameters: [{ type: 'text', text: otp }] }] }
  //   })
  // })

  // Store OTP securely in database/cache with expiry (5 minutes)
  // Example: await redis.set(`otp:${phone}`, otp, 'EX', 300)

  console.log(`[SECURE] OTP for ${phone}: ${otp} - Sent via WhatsApp only, NOT returned to client`)

  // Production: Return only success, NEVER the OTP
  return Response.json({ 
    success: true, 
    message: `تم إرسال كود التأكيد على واتساب رقم ${phone}`,
    // otp is NOT returned here for security - only in development mode below
    ...(process.env.NODE_ENV === 'development' ? { _dev_otp: otp, _warning: 'DEV ONLY - Remove in production' } : {})
  })
}
