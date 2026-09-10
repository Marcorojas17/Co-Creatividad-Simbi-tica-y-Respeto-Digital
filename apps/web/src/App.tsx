import { useEffect, useState } from 'react'
import { verifyOrigin, KRONOS_SEAL } from './kronos-guard'
import { a11yInit } from './a11y'
import { checkout } from './checkout'
import Success from './Success'
export default function App(){
  const [playing,setPlaying]=useState(false)
  const isSuccess = window.location.pathname.includes('success') || window.location.search.includes('seal');
  useEffect(()=>{ verifyOrigin(); a11yInit(); },[])
  if(isSuccess) return <Success />;
  const play440=()=>{
    try{
      const ctx=new (window.AudioContext||(window as any).webkitAudioContext)();
      const o=ctx.createOscillator(); const g=ctx.createGain();
      o.type='sine'; o.frequency.value=440; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0,ctx.currentTime); g.gain.linearRampToValueAtTime(0.3,ctx.currentTime+0.1); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+2);
      o.start(); o.stop(ctx.currentTime+2); setPlaying(true); setTimeout(()=>setPlaying(false),2000);
    }catch{}
  }
  const tiers=[
    {id:'starter', price:'$1', name:'STARTER', desc:'Basic Verification'},
    {id:'operator', price:'$9', name:'OPERATOR', desc:'Standard API'},
    {id:'sentinel', price:'$29', name:'SENTINEL', desc:'Advanced Security'},
    {id:'platinum', price:'$149', name:'PLATINUM', desc:'Full Suite + SSL', hot:true},
    {id:'sovereign', price:'$350', name:'SOVEREIGN', desc:'Enterprise Custom'},
  ]
  return(
    <div style={{minHeight:'100vh', background:'radial-gradient(1200px 600px at 50% -10%, #1a1500 0%, #000 70%)', color:'#fde68a', fontFamily:'Inter, system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'1rem 2rem', borderBottom:'1px solid rgba(253,230,138,0.12)', background:'rgba(0,0,0,0.6)'}}>
        <b style={{letterSpacing:'0.3em', fontSize:'0.8rem'}}>⬢ KRONOS 2099</b>
        <span style={{fontSize:'0.6rem', opacity:0.6}}>{KRONOS_SEAL} • LEGACY 0</span>
      </header>
      <main style={{maxWidth:'1200px', margin:'0 auto', padding:'2.5rem 2rem'}}>
        <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:900, lineHeight:0.9, margin:0}}>EL SSL DE LA VOZ HUMANA</h1>
        <div style={{display:'flex', gap:'0.8rem', marginTop:'1.5rem', flexWrap:'wrap'}}>
          <button onClick={play440} style={{background:'#fde68a', color:'#000', border:'none', padding:'0.8rem 1.4rem', borderRadius:'999px', fontWeight:800, cursor:'pointer'}}>{playing?'♫ SONANDO...':'▶ PROBAR 440Hz'}</button>
          <button onClick={()=>window.open('/api/docs','_blank')} style={{background:'transparent', border:'1px solid #fde68a', color:'#fde68a', padding:'0.8rem 1.4rem', borderRadius:'999px', cursor:'pointer'}}>API / DOCS</button>
        </div>
        <div style={{marginTop:'2.5rem'}}>
          <div style={{fontSize:'0.7rem', letterSpacing:'0.2em', opacity:0.6, marginBottom:'1rem', textAlign:'center'}}>PRICING VIRAL • 10 AÑOS ADELANTO</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:'1rem'}}>
            {tiers.map(t=>(
              <div key={t.id} onClick={()=>checkout(t.id)} style={{background: t.hot?'linear-gradient(135deg, rgba(253,230,138,0.2), rgba(0,0,0,0.8))':'rgba(255,255,255,0.04)', border: t.hot?'1px solid #fde68a':'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'1.4rem', cursor:'pointer', position:'relative'}}>
                {t.hot && <div style={{position:'absolute', top:'-8px', right:'10px', background:'#fde68a', color:'#000', fontSize:'0.6rem', fontWeight:800, padding:'0.2rem 0.5rem', borderRadius:'999px'}}>MÁS POPULAR</div>}
                <div style={{fontSize:'2.2rem', fontWeight:900}}>{t.price}</div>
                <div style={{fontWeight:800, fontSize:'0.85rem'}}>{t.name}</div>
                <div style={{fontSize:'0.7rem', opacity:0.6}}>{t.desc}</div>
                <button style={{marginTop:'1rem', width:'100%', background:'#fff', color:'#000', border:'none', padding:'0.6rem', borderRadius:'8px', fontWeight:800}}>COMPRAR</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
