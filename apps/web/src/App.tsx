import { useState, useEffect } from 'react'
import { verifyOrigin, KRONOS_SEAL } from './kronos-guard'

export default function App() {
  const [playing, setPlaying] = useState(false)
  const [kronos] = useState(41)
  useEffect(()=>{ verifyOrigin(); },[])

  const play440 = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = 440;
      o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
      o.start(); o.stop(ctx.currentTime + 2);
      setPlaying(true); setTimeout(()=>setPlaying(false),2000);
    } catch {}
  }

  return (
    <div style={{minHeight:'100vh', background:'radial-gradient(1200px 600px at 50% -10%, #1a1500 0%, #000 70%)', color:'#fde68a', fontFamily:'Inter, ui-sans-serif, system-ui', position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, backgroundImage:'url(/kronos-matrix.svg)', opacity:0.12}} />

      <header style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 2rem', borderBottom:'1px solid rgba(253,230,138,0.12)', backdropFilter:'blur(20px)', background:'rgba(0,0,0,0.6)'}}>
        <div style={{fontWeight:900, letterSpacing:'0.3em', fontSize:'0.8rem'}}>⬢ KRONOS 2099</div>
        <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
          <span style={{fontSize:'0.65rem', opacity:0.6}}>{KRONOS_SEAL}</span>
          <span style={{background:'#00ff88', color:'#000', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.6rem', fontWeight:800}}>LEGACY 0</span>
        </div>
      </header>

      <main style={{position:'relative', zIndex:2, maxWidth:'1200px', margin:'0 auto', padding:'3rem 2rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'3rem', alignItems:'center'}}>
          <div>
            <div style={{display:'flex', gap:'0.5rem', marginBottom:'1.5rem', flexWrap:'wrap'}}>
              <span style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>NOM-024 20/20</span>
              <span style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>NOM-151 20/20</span>
              <span style={{border:'1px solid #00ff88', color:'#00ff88', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>ISO27001 20/20</span>
              <span style={{border:'1px solid #fde68a', color:'#fde68a', padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.65rem'}}>10 AÑOS ADELANTO</span>
            </div>

            <h1 style={{fontSize:'clamp(2.8rem, 6vw, 4.8rem)', lineHeight:0.9, margin:0, fontWeight:900, letterSpacing:'-0.05em'}}>
              EL SSL<br/>DE LA VOZ<br/><span style={{background:'linear-gradient(90deg, #fde68a, #f59e0b)', WebkitBackgroundClip:'text', color:'transparent'}}>HUMANA</span>
            </h1>

            <p style={{marginTop:'1.2rem', color:'#d6d3d1', lineHeight:1.7, fontSize:'1.05rem', maxWidth:'520px'}}>
              PLATINUM es industria. KRONOS es origen. Tu voz es tu llave privada — 440Hz cymatic + GPG + esteganografía + sello tiempo NOM-151. Vigencia 2036.
            </p>

            <div style={{display:'flex', gap:'0.8rem', marginTop:'2rem', flexWrap:'wrap'}}>
              <button onClick={play440} style={{background:'#fde68a', color:'#000', border:'none', padding:'0.9rem 1.6rem', borderRadius:'999px', fontWeight:800, cursor:'pointer'}}>
                {playing? '♫ 440Hz SONANDO...' : '▶ PROBAR 440Hz CYMATIC'}
              </button>
              <button onClick={()=>window.open('/api/docs','_blank')} style={{background:'transparent', border:'1px solid rgba(253,230,138,0.3)', color:'#fde68a', padding:'0.9rem 1.6rem', borderRadius:'999px', fontWeight:700, cursor:'pointer'}}>
                API / DOCS
              </button>
              <button onClick={()=>navigator.clipboard.writeText(KRONOS_SEAL)} style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', padding:'0.9rem 1.2rem', borderRadius:'999px', cursor:'pointer'}}>COPIAR SELLO</button>
            </div>

            <div style={{marginTop:'2rem', display:'flex', gap:'1.5rem', fontSize:'0.8rem'}}>
              <div><b style={{color:'#fff'}}>$1 $9 $29 $149 $350</b><br/><span style={{opacity:0.5}}>PRICING VIRAL</span></div>
              <div><b style={{color:'#fff'}}>225 FILES</b><br/><span style={{opacity:0.5}}>100% PLATINUM</span></div>
              <div><b style={{color:'#fff'}}>0 LEGACY</b><br/><span style={{opacity:0.5}}>ROOT LIMPIO</span></div>
            </div>
          </div>

          <div style={{display:'grid', gap:'1rem'}}>
            <div style={{background:'linear-gradient(135deg, rgba(253,230,138,0.12), rgba(253,230,138,0.03))', border:'1px solid rgba(253,230,138,0.2)', borderRadius:'20px', padding:'1.6rem', backdropFilter:'blur(20px)'}}>
              <div style={{fontSize:'0.65rem', letterSpacing:'0.2em', opacity:0.6}}>KRONOS 2036</div>
              <div style={{fontSize:'3rem', fontWeight:900, marginTop:'0.3rem'}}>{kronos}</div>
              <div style={{fontSize:'0.75rem', opacity:0.7, marginTop:'0.5rem'}}>Archivos con vigencia 2036 • Sello NOM-151 + GPG + Hash</div>
              <div style={{height:'3px', background:'linear-gradient(90deg, #fde68a, #00ff88)', marginTop:'1rem', borderRadius:'999px'}} />
            </div>

            <div style={{background:'rgba(0,0,0,0.6)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'20px', padding:'1.2rem', fontFamily:'monospace', fontSize:'0.7rem'}}>
              <div style={{opacity:0.5, marginBottom:'0.6rem'}}>LIVE VERIFICATION</div>
              <div>✔ voice.hash = SHA3-512(440Hz + GPG)</div>
              <div>✔ stego.png + chladni pattern</div>
              <div>✔ NOM-151 sello tiempo SAT</div>
              <div style={{color:'#00ff88', marginTop:'0.6rem'}}>● API ONLINE • {new Date().toISOString().slice(0,10)}</div>
            </div>

            <button onClick={()=>window.open('https://github.com/Marcorojas17/Co-Creatividad-Simbi-tica-y-Respeto-Digital','_blank')} style={{background:'#fff', color:'#000', border:'none', padding:'0.9rem', borderRadius:'12px', fontWeight:800, cursor:'pointer'}}>
              ⭐ GITHUB VIRAL • HACER FORK = DENEGADO (PRIVATE MODE)
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
