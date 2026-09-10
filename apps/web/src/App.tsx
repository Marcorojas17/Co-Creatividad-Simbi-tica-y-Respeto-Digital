import { useState, useEffect } from 'react'

export default function App() {
  const [kronos] = useState(41)
  return (
    <div style={{minHeight:'100vh', background:'radial-gradient(1200px 600px at 50% -10%, #1a1500 0%, #000 60%)', color:'#fde68a', fontFamily:'Inter, system-ui, monospace', overflow:'hidden', position:'relative'}}>
      <div style={{position:'absolute', inset:0, backgroundImage:'url(/kronos-matrix.svg)', opacity:0.15, pointerEvents:'none'}} />
      <div style={{position:'absolute', inset:0, background:'radial-gradient(800px 400px at 70% 20%, rgba(253,230,138,0.15), transparent)'}} />
      
      <header style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between', padding:'1.5rem 2rem', borderBottom:'1px solid rgba(253,230,138,0.15)', backdropFilter:'blur(12px)'}}>
        <div style={{letterSpacing:'0.3em', fontSize:'0.8rem'}}>KRONOS 2099 • VIGENCIA 2036</div>
        <div style={{fontSize:'0.75rem', opacity:0.7}}>SafeCreative 2607086319439 • LEGACY 0</div>
      </header>

      <main style={{position:'relative', zIndex:2, maxWidth:'1100px', margin:'0 auto', padding:'4rem 2rem'}}>
        <div style={{display:'inline-flex', gap:'0.5rem', marginBottom:'2rem'}}>
          <span style={{background:'rgba(0,255,136,0.15)', border:'1px solid #00ff88', color:'#00ff88', padding:'0.25rem 0.75rem', borderRadius:'999px', fontSize:'0.7rem'}}>NOM-024 20/20</span>
          <span style={{background:'rgba(0,255,136,0.15)', border:'1px solid #00ff88', color:'#00ff88', padding:'0.25rem 0.75rem', borderRadius:'999px', fontSize:'0.7rem'}}>NOM-151 20/20</span>
          <span style={{background:'rgba(0,255,136,0.15)', border:'1px solid #00ff88', color:'#00ff88', padding:'0.25rem 0.75rem', borderRadius:'999px', fontSize:'0.7rem'}}>ISO27001 20/20</span>
        </div>

        <h1 style={{fontSize:'clamp(3rem, 8vw, 5.5rem)', lineHeight:0.9, margin:0, fontWeight:900, letterSpacing:'-0.04em'}}>
          EL SSL<br/>DE LA VOZ<br/><span style={{color:'transparent', WebkitTextStroke:'1px #fde68a'}}>HUMANA</span>
        </h1>
        
        <p style={{maxWidth:'520px', marginTop:'1.5rem', fontSize:'1.1rem', lineHeight:1.6, opacity:0.8, color:'#e7e5e4'}}>
          PLATINUM es Industria. KRONOS es Origen. 10 años de adelanto tecnológico. Tu voz es tu llave privada — 440Hz cymatic + GPG + esteganografía.
        </p>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'1rem', marginTop:'3rem'}}>
          <div style={{background:'rgba(253,230,138,0.06)', border:'1px solid rgba(253,230,138,0.2)', borderRadius:'16px', padding:'1.5rem', backdropFilter:'blur(12px)'}}>
            <div style={{fontSize:'2.5rem', fontWeight:800}}>{kronos}</div>
            <div style={{fontSize:'0.7rem', letterSpacing:'0.2em', opacity:0.6, marginTop:'0.5rem'}}>KRONOS 2036 • VIGENCIA 2036</div>
            <div style={{height:'2px', background:'linear-gradient(90deg, #fde68a, transparent)', marginTop:'1rem'}} />
          </div>
          <div style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'1.5rem'}}>
            <div style={{fontSize:'2.5rem', fontWeight:800}}>225</div>
            <div style={{fontSize:'0.7rem', letterSpacing:'0.2em', opacity:0.6, marginTop:'0.5rem'}}>ARCHIVOS AUDITADOS • 100% PLATINUM</div>
          </div>
          <div style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'1.5rem'}}>
            <div style={{fontSize:'2.5rem', fontWeight:800}}>0</div>
            <div style={{fontSize:'0.7rem', letterSpacing:'0.2em', opacity:0.6, marginTop:'0.5rem'}}>LEGACY • ROOT LIMPIO</div>
          </div>
        </div>

        <div style={{marginTop:'3rem', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
          <a href="/docs/12_CERTIFICACION_10_ANIOS.md" style={{background:'#fde68a', color:'#000', padding:'0.9rem 1.5rem', borderRadius:'999px', textDecoration:'none', fontWeight:700, fontSize:'0.85rem'}}>VER CERTIFICACIÓN 2036 →</a>
          <a href="https://github.com/Marcorojas17/Co-Creatividad-Simbi-tica-y-Respeto-Digital" style={{border:'1px solid rgba(253,230,138,0.3)', color:'#fde68a', padding:'0.9rem 1.5rem', borderRadius:'999px', textDecoration:'none', fontSize:'0.85rem'}}>GITHUB • $1 $9 $29 $149 $350</a>
        </div>
      </main>

      <footer style={{position:'relative', zIndex:2, padding:'2rem', borderTop:'1px solid rgba(253,230,138,0.1)', fontSize:'0.7rem', opacity:0.5, textAlign:'center', letterSpacing:'0.2em'}}>
        KRONOS MATRIX • 440HZ • CHLADNI • GPG SEAL • 2607086319439 • 2036
      </footer>
    </div>
  )
}
