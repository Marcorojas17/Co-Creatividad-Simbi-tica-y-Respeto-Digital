export default function Indice() {
  return (
    <main style={{
      minHeight:'100vh', display:'grid', placeItems:'center',
      background:'radial-gradient(circle at 50% 40%, rgba(91,31,127,.2), transparent 35%), #050508',
      color:'#fff', textAlign:'center', padding:24
    }}>
      <div>
        <div style={{fontFamily:'monospace', fontSize:12, opacity:0.6, letterSpacing:'0.16em'}}>NEXO SONORO 2099 / EXPERIENCIA AI</div>
        <h1 style={{fontSize:'clamp(3rem,10vw,6rem)', color:'#ffd52e', margin:'16px 0', textShadow:'0 0 20px rgba(255,213,46,.8)'}}>
          LEGADO <span style={{display:'block', fontSize:'0.42em', letterSpacing:'0.23em'}}>2099</span>
        </h1>
        <p style={{opacity:0.8}}>Marco Valdovinos & The AI Architect</p>
        <p style={{opacity:0.5, fontSize:12, marginTop:8}}>El Nexo Primordial · El sonido se hace materia</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:28}}>
          <a href="/nexo" style={{background:'linear-gradient(135deg,#fff176,#ffd52e)', color:'#100b00', padding:'12px 22px', borderRadius:999, fontWeight:800, textDecoration:'none'}}>🧬 VER NEXO</a>
          <a href="/esencias" style={{border:'1px solid #a855f7', color:'#fff', padding:'12px 22px', borderRadius:999, textDecoration:'none'}}>4 MINTS</a>
        </div>
      </div>
    </main>
  )
}
