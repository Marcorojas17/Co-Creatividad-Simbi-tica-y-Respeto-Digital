import { useState } from 'react'
import { PAYMENTS } from '../config/payments'

export default function Home(){
  return (
    <div style={{background:'#050507',color:'#fff',minHeight:'100vh',fontFamily:'monospace'}}>
      <div style={{textAlign:'center',padding:'60px 20px'}}>
        <h1 style={{color:'#FFD700',fontSize:'42px'}}>KRONOS 2099</h1>
        <p>El SSL de la Voz Humana - Detecta Deepfakes con Física Chladni</p>
        <div style={{marginTop:'30px',display:'flex',gap:'15px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/src/pages/detector.html" style={{background:'#FFD700',color:'#000',padding:'15px 30px',borderRadius:'10px',textDecoration:'none',fontWeight:'bold'}}>🧪 PROBAR DETECTOR GRATIS</a>
          <a href={PAYMENTS.mercadopago.gancho} style={{background:'#00b1ea',color:'#fff',padding:'15px 30px',borderRadius:'10px',textDecoration:'none',fontWeight:'bold'}}>🇲🇽 Pagar $20 MXN OXXO</a>
        </div>
      </div>

      <iframe src="/src/pages/pricing-carousel.html" style={{width:'100%',height:'700px',border:'none'}}></iframe>

      <div dangerouslySetInnerHTML={{__html: `<div style="background:#050507;color:#FFD700;padding:20px;text-align:center"><h2>💰 Paga como quieras - 100% para michis</h2><div style="display:flex;gap:15px;justify-content:center;margin-top:20px;flex-wrap:wrap"><a href="${PAYMENTS.stripe.pro}" style="background:#635bff;color:#fff;padding:15px 25px;border-radius:10px;text-decoration:none">💳 Stripe Internacional $1/$9/$29 USD</a><a href="${PAYMENTS.mercadopago.pro}" style="background:#00b1ea;color:#fff;padding:15px 25px;border-radius:10px;text-decoration:none">🇲🇽 Mercado Pago OXXO/Tarjeta/SPEI</a></div></div>`}} />
    </div>
  )
}
