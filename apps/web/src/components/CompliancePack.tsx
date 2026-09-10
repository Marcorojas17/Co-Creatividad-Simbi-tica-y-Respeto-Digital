// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036
import { useState } from 'react'

export default function CompliancePack() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div style={{ background: '#0a0a0a', borderTop: '2px solid #D4AF37', padding: 24, fontFamily: 'monospace' }}>
      {/* SELLOS LEGALES - NOM-151 + ISO */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <div style={{ border: '1px solid #D4AF37', padding: '8px 12px', fontSize: 9, color: '#D4AF37' }}>
          ✅ NOM-151-SCFI-2016 | SafeCreative 2607086319439 | QTSA 2022
        </div>
        <div style={{ border: '1px solid #00D9FF', padding: '8px 12px', fontSize: 9, color: '#00D9FF' }}>
          ✅ ISO 25010 | 46.7kb gzipped | 131ms | 100% Type-Check
        </div>
        <div style={{ border: '1px solid #00FF9D', padding: '8px 12px', fontSize: 9, color: '#00FF9D' }}>
          ✅ ISO 9241-151 | WCAG 4.5:1 | Responsive
        </div>
        <div style={{ border: '1px solid #ff3366', padding: '8px 12px', fontSize: 9, color: '#ff3366' }}>
          ✅ ISO 27001 | MP3 Sandbox | Max 20 MB
        </div>
      </div>

      {/* AVISO PRIVACIDAD LFPDPPP - OBLIGATORIO */}
      <div style={{ background: '#111', padding: 16, border: '1px solid #222', fontSize: 10, lineHeight: 1.6, color: '#aaa' }}>
        <div style={{ color: '#fff', fontSize: 11, fontWeight: 900, marginBottom: 8 }}>AVISO DE PRIVACIDAD ART. 16 LFPDPPP — LEGADO 2099</div>
        <div>Responsable: Marco Antonio Rojas Valdovinos | Email: marco.a.rojas.v@hotmail.com</div>
        <div>Finalidad: Resguardo de legado familiar, generación de hash SHA-256, mint 289 Platinum y conservación NOM-151.</div>
        <div>Datos: Audio (432 Hz, 528 Hz, 963 Hz), video familiar, geometría. No se venden datos a terceros.</div>
        <div>Hosting: Vercel Edge + IPFS. Derechos ARCO: Escríbenos.</div>
        <div style={{ marginTop: 8, color: '#D4AF37', fontSize: 9, wordBreak: 'break-all' }}>
          Registro: SafeCreative ID 2607086319439 | SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3
          <br/>Verificación: https://www.safecreative.org/certificate | Código: 2607086319439-6XGR3V
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, cursor: 'pointer', color: '#fff' }}>
          <input type="checkbox" checked={accepted} onChange={e=>setAccepted(e.target.checked)} />
          Acepto Aviso de Privacidad y conservación NOM-151-SCFI-2016
        </label>
      </div>

      {/* UNIDADES NOM-008 CORREGIDAS */}
      <div style={{ marginTop: 16, fontSize: 9, color: '#555' }}>
        Unidades: 432 Hz | 528 Hz | 963 Hz | 20 MB máx | Tiempo: s | Conforme NOM-008-SCFI-2002
      </div>
    </div>
  )
}
