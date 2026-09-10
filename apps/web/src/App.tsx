// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036
import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* bg particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(253,230,138,0.15),transparent_60%)]" />

      <header className="relative z-10 mx-4 mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded grid place-items-center border border-yellow-200/30">⬡</div>
          <span className="font-bold tracking-[0.2em] text-yellow-100">KRONOS 2099</span>
        </div>
        <div className="hidden md:flex gap-6 text-xs text-white/50">
          <span>Product</span><span>Solutions</span><span>Docs</span><span>Pricing</span><span>Login</span>
        </div>
        <a href="#pricing" className="rounded-full bg-[#fde68a] px-5 py-2 text-xs font-bold text-black">Get Certified</a>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[10px]">ANTI-DEEPFAKE VOICE CERTIFICATION • NOW LIVE <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"/></div>
          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-[0.9]">KRONOS 2099 —<br/>El <span className="text-[#fde68a]">SSL de la Voz Humana</span></h1>
          <p className="mt-4 text-sm text-white/60 max-w-xl">Verifies human voice authenticity in real-time. Stop deepfakes. Protect trust.<br/>Certified by 260-point cymatic voice analysis.</p>
          <div className="mt-6 flex gap-3">
            <a href="/docs" className="rounded-lg bg-[#fde68a] px-6 py-3 text-sm font-bold text-black">▶ Start Free Trial</a>
            <button className="rounded-lg border border-white/20 px-6 py-3 text-sm">See How It Works →</button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-3">
          <div className="text-[10px] text-white/40">Coverage • Mexico</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Mapa_de_M%C3%A9xico.svg" className="mt-2 invert opacity-40 h-48 w-full object-contain" />
          <div className="text-[8px] text-white/30 mt-2">MX • Mexico City<br/>GDL • Guadalajara<br/>Pacific Ocean • Gulf</div>
        </div>
      </main>

      <section id="pricing" className="relative z-10 px-4 pb-20">
        <div className="text-center text-[10px] tracking-widest text-white/30 mb-8">— PRICING • CHOOSE YOUR PLAN —</div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-4">
          {[
            {t:"Viral Hook",p:"$1",s:"USD /one-time",f:["1 Voice Certificate","Social Media Clip","24h Validation","Basic Watermark"]},
            {t:"Basic",p:"$9",s:"/month",f:["100 Verifications/mo","API Access","Email Support","Standard SSL Seal"]},
            {t:"Pro • MOST POPULAR",p:"$29",s:"/month",f:["1,000 Verifications/mo","Real-time Analysis","Priority API","Custom Branding","260-pt Cymatic Scan"],pop:true},
            {t:"Enterprise",p:"$149",s:"/month",f:["Unlimited Verifications","SSO & Compliance","Dedicated Support","Custom On-prem"]},
            {t:"Booth Totem",p:"$350",s:"MXN /month",f:["Physical Kiosk Hardware","On-site Auth","Offline Mode","Local Dashboard"]},
          ].map((c,i)=><div key={i} className={`rounded-xl border p-5 bg-[#0f0f0f] ${c.pop?'border-[#fde68a] shadow-[0_0_40px_rgba(253,230,138,0.3)]': 'border-white/10'}`}>
            <div className="text-[10px] mb-2 px-2 py-0.5 rounded-full bg-white/10 inline-block">{c.t}</div>
            <div className={`text-4xl font-black ${i===0?'text-green-400':i===4?'text-purple-400':i===3?'text-red-400':'text-yellow-100'}`}>{c.p}</div>
            <div className="text-[10px] text-white/40 mb-3">{c.s}</div>
            <ul className="text-[11px] space-y-1 text-white/60">{c.f.map(x=><li key={x}>✓ {x}</li>)}</ul>
          </div>)}
        </div>
      </section>
    </div>
  )
}
