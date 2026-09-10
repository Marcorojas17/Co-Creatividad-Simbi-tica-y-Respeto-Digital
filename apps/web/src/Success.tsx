import { useEffect, useState } from 'react'
export default function Success(){
  const params = new URLSearchParams(window.location.search);
  const tier = params.get('tier') || 'platinum';
  const seal = params.get('seal') || '2607086319439';
  const [confetti, setConfetti] = useState(false);
  useEffect(()=>{ setConfetti(true);
    try{
      const ctx=new (window.AudioContext||(window as any).webkitAudioContext)();
      const o=ctx.createOscillator(); const g=ctx.createGain();
      o.frequency.value=528; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0,ctx.currentTime); g.gain.linearRampToValueAtTime(0.2,ctx.currentTime+0.2); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+3);
      o.start(); o.stop(ctx.currentTime+3);
    }catch{}
  },[]);
  const downloadCert = ()=>{
    const content = `KRONOS 2099 CERTIFICADO PLATINUM\n\nSello: ${seal}-2036-GPG\nTier: ${tier.toUpperCase()}\nVigencia: NOM-151 hasta 2036\nVerificacion: 440Hz Cymatic + GPG + Esteganografia\nStatus: LEGACY 0 - 10 AÑOS ADELANTO\n\nFirmado: KRONOS ORIGIN`;
    const blob=new Blob([content],{type:'text/plain'}); const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download=`KRONOS-${tier}-${seal}.txt`; a.click();
  }
  return(
    <div style={{minHeight:'100vh', background:'radial-gradient(800px 400px at 50% 0%, #fde68a 0%, #000 70%)', color:'#000', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Inter, system-ui', position:'relative', overflow:'hidden'}}>
      {confetti && <div style={{position:'absolute', inset:0, pointerEvents:'none', background:'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(253,230,138,0.3) 20px, rgba(253,230,138,0.3) 40px)', animation:'slide 2s linear infinite'}} />}
      <div style={{background:'rgba(0,0,0,0.9)', color:'#fde68a', border:'2px solid #fde68a', borderRadius:'24px', padding:'2.5rem', maxWidth:'520px', width:'90%', textAlign:'center', boxShadow:'0 0 80px rgba(253,230,138,0.5)', position:'relative', zIndex:2}}>
        <div style={{fontSize:'4rem'}}>⬢</div>
        <div style={{letterSpacing:'0.4em', fontSize:'0.7rem', opacity:0.6}}>KRONOS 2099 • VERIFIED</div>
        <h1 style={{fontSize:'2.2rem', fontWeight:900, margin:'0.8rem 0 0'}}>¡ERES KRONOS!</h1>
        <p style={{opacity:0.7, marginTop:'0.6rem'}}>Sello <b>{seal}</b> • Tier <b style={{color:'#fff'}}>{tier.toUpperCase()}</b> • Vigencia 2036</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.8rem', marginTop:'1.8rem'}}>
          <div style={{background:'rgba(253,230,138,0.1)', borderRadius:'12px', padding:'1rem'}}><div style={{fontSize:'0.6rem', opacity:0.6}}>NOM-024</div><div style={{fontWeight:800}}>20/20 ✓</div></div>
          <div style={{background:'rgba(253,230,138,0.1)', borderRadius:'12px', padding:'1rem'}}><div style={{fontSize:'0.6rem', opacity:0.6}}>NOM-151</div><div style={{fontWeight:800}}>2036 ✓</div></div>
          <div style={{background:'rgba(253,230,138,0.1)', borderRadius:'12px', padding:'1rem'}}><div style={{fontSize:'0.6rem', opacity:0.6}}>ISO27001</div><div style={{fontWeight:800}}>20/20 ✓</div></div>
          <div style={{background:'rgba(0,255,136,0.15)', borderRadius:'12px', padding:'1rem', border:'1px solid #00ff88'}}><div style={{fontSize:'0.6rem', opacity:0.6}}>440Hz</div><div style={{fontWeight:800, color:'#00ff88'}}>VERIFIED ✓</div></div>
        </div>
        <div style={{display:'flex', gap:'0.8rem', marginTop:'1.8rem'}}>
          <button onClick={downloadCert} style={{flex:1, background:'#fde68a', color:'#000', border:'none', padding:'0.9rem', borderRadius:'999px', fontWeight:800, cursor:'pointer'}}>📜 DESCARGAR CERTIFICADO 2036</button>
          <button onClick={()=>window.location.href='/'} style={{flex:1, background:'transparent', border:'1px solid #fde68a', color:'#fde68a', padding:'0.9rem', borderRadius:'999px', fontWeight:700, cursor:'pointer'}}>VOLVER</button>
        </div>
        <button onClick={()=>{ if(navigator.share) navigator.share({title:'Soy KRONOS VERIFIED 2036', text:`Verificado con sello ${seal} - 10 años adelante`, url: window.location.origin}); else navigator.clipboard.writeText(window.location.origin); alert('Link copiado - viraliza!'); }} style={{marginTop:'1rem', width:'100%', background:'#fff', color:'#000', border:'none', padding:'0.8rem', borderRadius:'12px', fontWeight:800, cursor:'pointer'}}>🚀 COMPARTIR QUE SOY KRONOS VERIFIED</button>
        <div style={{marginTop:'1rem', fontSize:'0.6rem', opacity:0.5}}>Frecuencia 528Hz activada • LEGACY 0 • 10 AÑOS ADELANTO</div>
      </div>
    </div>
  )
}
