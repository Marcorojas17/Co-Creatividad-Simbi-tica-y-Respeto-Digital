import { useState } from 'react'

export default function LandingVentas() {
  const [showPay, setShowPay] = useState(false)
  const [paid, setPaid] = useState(false)
  const [codigo, setCodigo] = useState('')
  const [transferRef, setTransferRef] = useState('')

  const generarCodigo = () => {
    if(transferRef.length < 4) { alert('Pon los últimos 4 dígitos de tu transferencia'); return }
    const fecha = new Date().toISOString().slice(0,10).replace(/-/g,'')
    const rand = Math.random().toString(36).substring(2,6).toUpperCase()
    const code = `KRONOS-289-${fecha}-${transferRef}-${rand}-41a3683b`
    setCodigo(code)
    setPaid(true)
  }

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'ui-monospace, monospace', minHeight: '100vh' }}>
      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, #1a1a00 0%, #000 70%)', borderBottom: '2px solid #D4AF37' }}>
        <div style={{ border: '1px solid #D4AF37', color: '#D4AF37', padding: '6px 14px', borderRadius: 20, fontSize: 10, letterSpacing: 3, display: 'inline-block', marginBottom: 20 }}>
          BANAMEX • KRONOS-28-ITZA • 289 PLATINUM • SAFECREATIVE 2607086319439
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 0.9, margin: 0 }}>TU FAMILIA<br/><span style={{ color: '#D4AF37' }}>NO MUERE</span><br/>SE MINTÉA.</h1>
        <p style={{ color: '#888', fontSize: 14, maxWidth: 600, margin: '20px auto' }}>Memoria inmutable + SHA-256 + 100 años IPFS + Registro legal NOM-151</p>
        <button onClick={()=>setShowPay(true)} style={{ background: '#D4AF37', color: '#000', border: 0, padding: '18px 36px', borderRadius: 40, fontWeight: 900, fontSize: 14, cursor: 'pointer' }}>
          💎 RESGUARDAR LEGADO — $150K MXN — BANAMEX
        </button>
        <div style={{ marginTop: 12, fontSize: 9, color: '#555' }}>CLABE Banamex: 002438701524066473 • SHA-256: 41a3683bbf...</div>
      </div>

      {showPay && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99, padding: 20 }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #D4AF37', padding: 28, maxWidth: 500, width: '100%', borderRadius: 20 }}>
            {!paid ? (
              <>
                <div style={{ fontSize: 18, fontWeight: 900 }}>PAGO POR TRANSFERENCIA BANAMEX</div>
                <div style={{ marginTop: 16, background: '#111', padding: 16, border: '1px solid #222', fontSize: 11, lineHeight: 1.8 }}>
                  <div style={{ color: '#D4AF37', fontWeight: 900, fontSize: 12 }}>🏦 BANAMEX - DATOS OFICIALES</div>
                  <div style={{ marginTop: 8 }}>Beneficiario: <b style={{ color: '#fff' }}>Marco Antonio Rojas Valdovinos</b></div>
                  <div>Banco: <b style={{ color: '#fff' }}>BANAMEX</b></div>
                  <div style={{ background: '#000', padding: '8px 12px', margin: '8px 0', border: '1px solid #D4AF37', borderRadius: 8 }}>
                    CLABE: <b style={{ color: '#D4AF37', letterSpacing: 1, fontSize: 13 }}>002438701524066473</b>
                  </div>
                  <div>Concepto: <b>LEGADO 289 + tu nombre</b></div>
                  <div style={{ marginTop: 8, color: '#D4AF37', fontSize: 13, fontWeight: 900 }}>Monto: $150,000.00 MXN</div>
                  <div style={{ marginTop: 12, borderTop: '1px solid #222', paddingTop: 10 }}>
                    <div style={{ color: '#888' }}>Envía comprobante a:</div>
                    <div style={{ color: '#6DFFFF' }}>📧 marco.a.rojas.v@hotmail.com</div>
                    <div style={{ color: '#6DFFFF' }}>📧 proyectokronos@hotmail.com</div>
                    <div style={{ color: '#00FF9D' }}>📱 WhatsApp: 7225862335</div>
                  </div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>ÚLTIMOS 4 DÍGITOS DE TU TRANSFERENCIA BANAMEX</div>
                  <input value={transferRef} onChange={e=>setTransferRef(e.target.value)} placeholder="Ej: 6473" maxLength={6} style={{ width: '100%', background: '#000', border: '1px solid #D4AF37', color: '#fff', padding: '12px', borderRadius: 10, fontSize: 18, letterSpacing: 4, textAlign: 'center', fontWeight: 900 }} />
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                  <button onClick={()=>setShowPay(false)} style={{ flex: 1, background: '#111', color: '#fff', border: '1px solid #333', padding: '12px', borderRadius: 30, fontSize: 11, cursor: 'pointer' }}>CERRAR</button>
                  <button onClick={generarCodigo} style={{ flex: 2, background: '#D4AF37', color: '#000', border: 0, padding: '12px', borderRadius: 30, fontSize: 11, fontWeight: 900, cursor: 'pointer' }}>✅ YA TRANSFERÍ — GENERAR CÓDIGO</button>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 16, fontWeight: 900, color: '#00FF9D' }}>✅ PAGO REGISTRADO — CÓDIGO GENERADO</div>
                <div style={{ marginTop: 14, background: '#000', border: '1px solid #00FF9D', padding: 14, borderRadius: 12 }}>
                  <div style={{ fontSize: 9, color: '#888' }}>TU CÓDIGO LEGADO 2099 — BANAMEX 002438701524066473</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#D4AF37', marginTop: 8, wordBreak: 'break-all', letterSpacing: 1 }}>{codigo}</div>
                  <div style={{ fontSize: 8, color: '#555', marginTop: 8 }}>CLABE DESTINO: 002438701524066473 • SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3</div>
                </div>
                <div style={{ marginTop: 14, fontSize: 11, color: '#aaa', lineHeight: 1.6 }}>
                  1. Screenshot a este código<br/>2. Mándalo al WhatsApp <b style={{ color: '#00FF9D' }}>7225862335</b> con comprobante BANAMEX<br/>3. 72h mint + QR + IPFS 100 años<br/>4. Correos: marco.a.rojas.v@hotmail.com
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                  <button onClick={()=>{navigator.clipboard.writeText(`Código: ${codigo} - CLABE: 002438701524066473 - Banamex - Comprobante enviado`); alert('Código copiado')}} style={{ flex: 1, background: '#111', color: '#fff', border: '1px solid #333', padding: '12px', borderRadius: 30, fontSize: 11, cursor: 'pointer' }}>COPIAR CÓDIGO</button>
                  <a href={`https://wa.me/527225862335?text=Hola%20Marco%2C%20ya%20transferí%20BANAMEX%20a%20la%20CLABE%20002438701524066473.%20Mi%20código%20es%3A%20${encodeURIComponent(codigo)}%20-%20Monto%20%24150K%20-%20Adjunto%20comprobante`} target="_blank" style={{ flex: 1, background: '#00FF9D', color: '#000', padding: '12px', borderRadius: 30, fontSize: 11, fontWeight: 900, textAlign: 'center', textDecoration: 'none' }}>WHATSAPP 7225862335</a>
                </div>
                <button onClick={()=>{setPaid(false); setShowPay(false);}} style={{ width: '100%', marginTop: 10, background: 'transparent', color: '#666', border: 0, fontSize: 10, cursor: 'pointer' }}>Cerrar ventana</button>
              </>
            )}
          </div>
        </div>
      )}

      <div style={{ padding: 20, textAlign: 'center', fontSize: 9, color: '#444', borderTop: '1px solid #111', lineHeight: 1.6 }}>
        🏦 BANAMEX CLABE: 002438701524066473 • Beneficiario: Marco Antonio Rojas Valdovinos<br/>
        📱 7225862335 • 📧 marco.a.rojas.v@hotmail.com • proyectokronos@hotmail.com<br/>
        KRONOS-28-ITZA © 2099 • SafeCreative 2607086319439 • SHA-256 41a3683bbf... • NOM-151
      </div>
    </div>
  )
}
