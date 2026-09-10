export default function App(){
 const clabe = "002438701524066473";
 return(
  <div style={{background:'#040a14', color:'#D4AF37', minHeight:'100vh', padding:'24px', fontFamily:'serif'}}>
    <h1>KRONOS 28 ITZA - 289 PLATINUM</h1>
    <p>Tu familia no muere, se mintéa. Roca madre + ADN dorado + SHA-256 REAL.</p>
    <h2 style={{marginTop:'30px'}}>ELIGE TU ESENCIA</h2>
    <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
      {['FUEGO','AGUA','AIRE','TIERRA'].map(e=> <button key={e} style={{padding:'12px 24px', borderRadius:'24px', border:'1px solid #D4AF37', background:'#111', color:'#D4AF37', fontWeight:'bold'}}>{e}</button>)}
    </div>

    <div style={{marginTop:'40px', border:'1px solid #D4AF37', padding:'20px', borderRadius:'12px'}}>
      <h3>Resguardar Legado $150K - BANAMEX</h3>
      <p>CLABE: <b>{clabe}</b></p>
      <p>SafeCreative: 2607086319439 | 432Hz 528Hz 963Hz</p>
      <a href="https://mpago.la/1hJx7jX" target="_blank" style={{display:'block', background:'#D4AF37', color:'#000', padding:'16px', textAlign:'center', borderRadius:'8px', fontWeight:'bold', textDecoration:'none', marginTop:'12px'}}>PAGAR CON MERCADO PAGO $299</a>
      <a href="https://wa.me/527225862335?text=Hola%20Marco%20quiero%20pagar%20mi%20legado%20KRONOS%20289" target="_blank" style={{display:'block', background:'#25D366', color:'#fff', padding:'16px', textAlign:'center', borderRadius:'8px', fontWeight:'bold', textDecoration:'none', marginTop:'12px'}}>WHATSAPP 7225862335</a>
    </div>
    <p style={{fontSize:'10px', opacity:0.6, marginTop:'30px'}}>SHA-256: 41a3683b | IPFS 100 años | Kronos 3 Hash</p>
  </div>
 )
}
