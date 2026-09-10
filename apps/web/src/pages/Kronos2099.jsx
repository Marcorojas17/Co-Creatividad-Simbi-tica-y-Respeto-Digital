export default function Kronos2099() {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_#1a1a0a_0%,_#000_60%)]">
      {/* NAV */}
      <nav className="mx-4 mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-3"><div className="h-8 w-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-600" /> <span className="tracking-widest text-yellow-100 font-bold">KRONOS 2099</span></div>
        <div className="hidden md:flex gap-6 text-sm text-white/60"><a>Product</a><a>Solutions</a><a>Docs</a><a>Pricing</a><a>Login</a></div>
        <button className="rounded-full bg-[#fde68a] px-5 py-2 text-sm font-bold text-black">Get Certified</button>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 px-8 py-16 max-w-7xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/20 px-3 py-1 text-[10px] tracking-widest">ANTI-DEEPFAKE VOICE CERTIFICATION • NOW LIVE <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"/></div>
          <h1 className="mt-6 text-5xl font-black leading-tight">KRONOS 2099 —<br/><span className="text-[#fde68a]">El SSL de la Voz Humana</span></h1>
          <p className="mt-4 max-w-xl text-white/60 text-sm">Verifies human voice authenticity in real-time. Stop deepfakes. Protect trust.<br/>Certified by 260-point cymatic voice analysis.</p>
          <div className="mt-6 flex gap-3">
            <a href="/docs" className="rounded-lg bg-[#fde68a] px-6 py-3 text-black font-bold text-sm">▶ Start Free Trial</a>
            <a href="#how" className="rounded-lg border border-white/20 px-6 py-3 text-sm">See How It Works →</a>
          </div>
        </div>
        <div className="rounded-xl border border-yellow-200/20 bg-black/50 p-4">
          <div className="text-[10px] text-white/40">Coverage • Mexico</div>
          <div className="mt-2 h-48 rounded bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/09/Map_of_Mexico.svg')] bg-cover opacity-60" />
          <div className="mt-2 text-[8px] text-white/30">MX • Mexico City<br/>GDL • Guadalajara</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 pb-20">
        <div className="text-center text-[10px] tracking-widest text-white/40 mb-8">— PRICING • CHOOSE YOUR PLAN —</div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {[
            {tag:"Viral Hook", price:"$1", sub:"USD /one-time", color:"green", feats:["1 Voice Certificate","Social Media Clip","24h Validation","Basic Watermark"]},
            {tag:"Basic", price:"$9", sub:"/month", color:"yellow", feats:["100 Verifications/mo","API Access","Email Support","Standard SSL Seal"]},
            {tag:"Pro • MOST POPULAR", price:"$29", sub:"/month", color:"gold", feats:["1,000 Verifications/mo","Real-time Analysis","Priority API","Custom Branding","260-pt Cymatic Scan"]},
            {tag:"Enterprise", price:"$149", sub:"/month", color:"red", feats:["Unlimited Verifications","SSO & Compliance","Dedicated Support","Custom On-prem"]},
            {tag:"Booth Totem", price:"$350", sub:"MXN /month", color:"purple", feats:["Physical Kiosk Hardware","On-site Auth","Offline Mode","Local Dashboard"]},
          ].map((p,i)=>(
            <div key={i} className={`rounded-xl border p-5 bg-gradient-to-b from-white/[0.06] to-black ${p.tag.includes('MOST')?'border-yellow-200 shadow-[0_0_30px_rgba(253,230,138,0.4)] scale-105':''} border-white/10`}>
              <div className={`text-[10px] px-2 py-0.5 rounded-full inline-block mb-2 bg-white/10`}>{p.tag}</div>
              <div className={`text-4xl font-black ${p.color==='green'?'text-green-400':p.color==='purple'?'text-purple-400':p.color==='red'?'text-red-400':'text-yellow-200'}`}>{p.price}</div>
              <div className="text-[10px] text-white/40 mb-4">{p.sub}</div>
              <ul className="space-y-1 text-[11px] text-white/70">{p.feats.map(f=> <li key={f}>✓ {f}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-3 text-center text-[9px] text-white/30">Powered by KRONOS 2099 • Protected by 260-point Cymatic Particle Analysis • Compliant with ISO/IEC 27001 • Product Hunt #1 Tech Startup 2024</footer>
    </div>
  )
}
