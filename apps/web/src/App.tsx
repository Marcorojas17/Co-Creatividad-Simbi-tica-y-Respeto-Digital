export default function App() {
  return (
    <div style={{fontFamily:'serif', background:'#0a0a0a', color:'#f5f5dc', minHeight:'100vh', padding:'40px', textAlign:'center'}}>
      <h1 style={{fontSize:'48px', letterSpacing:'4px'}}>KRONOS 2099</h1>
      <h2>Co-Creatividad Simbiótica y Respeto Digital</h2>
      <p style={{maxWidth:'600px', margin:'30px auto', lineHeight:'1.6', opacity:0.8}}>
        No es una app. Es un espejo de tu esencia. Elige Fuego, Agua, Aire o Tierra 
        y co-crea con una IA que te respeta. Sin manipulación. Sin adicción. Solo verdad.
      </p>
      
      <div style={{display:'flex', gap:'15px', justifyContent:'center', margin:'40px 0'}}>
        {['FUEGO','AGUA','AIRE','TIERRA'].map(e=>(
          <button key={e} style={{padding:'15px 30px', borderRadius:'30px', border:'none', fontWeight:'bold', background: e==='FUEGO'?'#ff6a00':e==='AGUA'?'#00c6ff':e==='AIRE'?'#a770ef':'#d4a017', cursor:'pointer'}}>{e}</button>
        ))}
      </div>

      <a href="https://mpago.la/1hJx7jX" target="_blank" style={{display:'inline-block', background:'#fff', color:'#000', padding:'18px 50px', borderRadius:'40px', fontWeight:'bold', textDecoration:'none', fontSize:'20px', marginTop:'20px'}}>
        DESBLOQUEAR ACCESO COMPLETO - $299 MXN
      </a>
      
      <p style={{marginTop:'20px', fontSize:'12px', opacity:0.5}}>Acceso inmediato • Pago seguro con Mercado Pago • Por Marcorojas17</p>
    </div>
  )
}
