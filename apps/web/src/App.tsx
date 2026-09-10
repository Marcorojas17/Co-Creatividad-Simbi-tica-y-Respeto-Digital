import { useState, useEffect } from 'react'
import { verifyOrigin, KRONOS_SEAL } from './kronos-guard'
import { a11yInit } from './a11y'
export default function App(){
  const [playing,setPlaying]=useState(false)
  useEffect(()=>{ verifyOrigin(); a11yInit(); },[])
  const play440=()=>{
    try{
      const ctx=new (window.AudioContext||(window as any).webkitAudioContext)();
      const o=ctx.createOscillator(); const g=ctx.createGain();
      o.type='sine'; o.frequency.value=440; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0,ctx.currentTime); g.gain.linearRampToValueAtTime(0.3,ctx.currentTime+0.1); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+2);
      o.start(); o.stop(ctx.currentTime+2); setPlaying(true); setTimeout(()=>setPlaying(false),2000);
    }catch{}
  }
  return(
    <div role="main" aria-label="KRONOS 2099 Platinum" style={{minHeight:'100vh', background:'radial-gradient(1200px 600px at 50% -10%, #1a1500 0%, #000 70%)', color:'#fde68a', fontFamily:'Inter, system-ui', position:'relative', overflow:'hidden'}}>
      <header aria-label="Header KRONOS" style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 2rem', borderBottom:'1px solid rgba(253,230,138,0.12)', backdropFilter:'blur(20px)', background:'rgba(0,0,0,0.6)'}}>
        <div style={{fontWeight:900, letterSpacing:'0.3em', fontSize:'0.8rem'}}>⬢ KRONOS 2099</div>
        <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
          <span aria-label="Sello SafeCreative" style={{fontSize:'0.65rem', opacity:0.6}}>{KRONOS_SEAL}</span>
          <span style={{background:'#00ff88', color:'#000', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.6rem', fontWeight:800}}>LEGACY 0</span>
        </div>
      </header>
      <main style={{position:'relative', zIndex:2, maxWidth:'1200px', margin:'0 auto', padding:'3rem 2rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'3rem'}}>
          <div>
            <div role="list" aria-label="Certificaciones" style={{display:'flex', gap:'0.5rem', marginBottom:'1.5rem', flexWrap:'wrap'}}>
              <span role="listitem" style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>NOM-024 20/20</span>
              <span role="listitem" style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>NOM-151 20/20</span>
              <span role="listitem" style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>ISO27001 20/20</span>
              <span role="listitem" style={{border:'1px solid #fde68a', color:'#fde68a', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>10 AÑOS ADELANTO</span>
            </div>
            <h1 style={{fontSize:'clamp(2.8rem,6vw,4.8rem)', lineHeight:0.9, margin:0, fontWeight:900}}>EL SSL<br/>DE LA VOZ<br/><span style={{background:'linear-gradient(90deg, #fde68a, #f59e0b)', WebkitBackgroundClip:'text', color:'transparent'}}>HUMANA</span></h1>
            <p style={{marginTop:'1.2rem', color:'#d6d3d1', lineHeight:1.7}}>PLATINUM es industria. KRONOS es origen. Tu voz es tu llave privada — 440Hz cymatic + GPG + esteganografía + sello tiempo NOM-151. Vigencia 2036.</p>
            <div style={{display:'flex', gap:'0.8rem', marginTop:'2rem', flexWrap:'wrap'}}>
              <button aria-label="Probar sonido 440Hz" onClick={play440} style={{background:'#fde68a', color:'#000', border:'none', padding:'0.9rem 1.6rem', borderRadius:'999px', fontWeight:800, cursor:'pointer'}}>{playing?'♫ 440Hz SONANDO...':'▶ PROBAR 440Hz CYMATIC'}</button>
              <button aria-label="Ver documentacion API" onClick={()=>window.open('/api/docs','_blank')} style={{background:'transparent', border:'1px solid rgba(253,230,138,0.3)', color:'#fde68a', padding:'0.9rem 1.6rem', borderRadius:'999px', fontWeight:700, cursor:'pointer'}}>API / DOCS</button>
              <button aria-label="Copiar sello" onClick={()=>navigator.clipboard.writeText(KRONOS_SEAL)} style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', padding:'0.9rem 1.2rem', borderRadius:'999px', cursor:'pointer'}}>COPIAR SELLO</button>
            </div>
          </div>
          <div style={{display:'grid', gap:'1rem'}}>
            <div style={{background:'linear-gradient(135deg, rgba(253,230,138,0.12), rgba(253,230,138,0.03))', border:'1px solid rgba(253,230,138,0.2)', borderRadius:'20px', padding:'1.6rem'}}>
              <div style={{fontSize:'0.65rem', letterSpacing:'0.2em', opacity:0.6}}>KRONOS 2036</div>
              <div style={{fontSize:'3rem', fontWeight:900}}>41</div>
              <div style={{fontSize:'0.75rem', opacity:0.7}}>Archivos con vigencia 2036 • Sello NOM-151 + GPG + Hash</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
