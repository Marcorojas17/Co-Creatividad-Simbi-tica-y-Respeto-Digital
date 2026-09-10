export default function LandingVentas() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
      {/* HERO */}
      <div style={{ 
        height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at center, #1a1a0a 0%, #000 70%)',
        borderBottom: '2px solid #D4AF37', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '10%', fontSize: 12, letterSpacing: 8, color: '#D4AF37' }}>KRONOS-28-ITZA // 289 PLATINUM // 04:40</div>
        <h1 style={{ fontSize: 72, fontWeight: 900, background: 'linear-gradient(180deg, #D4AF37 0%, #8B6914 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', lineHeight: 0.9 }}>
          LEGADO<br/>2099
        </h1>
        <p style={{ marginTop: 20, fontSize: 14, letterSpacing: 4, color: '#666' }}>CO-CREATIVIDAD SIMBIÓTICA Y RESPETO DIGITAL</p>
        <div style={{ marginTop: 40, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, #D4AF37 0%, #000 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 80px rgba(212,175,55,0.5)', animation: 'pulse 3s infinite' }}>
          <div style={{ width: 200, height: 200, borderRadius: '50%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🪨</div>
        </div>
        <p style={{ marginTop: 30, maxWidth: 600, textAlign: 'center', color: '#999', fontSize: 13, lineHeight: 1.6 }}>
          Resguardo familiar con ADN digital + roca madre + diamante eterno.<br/>
          SHA-256 real. No es NFT. Es memoria inmutable.
        </p>
        <button style={{ marginTop: 30, padding: '16px 48px', background: '#D4AF37', color: '#000', border: 'none', fontWeight: 900, letterSpacing: 3, cursor: 'pointer', fontSize: 14 }}>
          ADQUIRIR 289 PLATINUM → $150K MXN
        </button>
      </div>

      {/* GRID 4 MINTS */}
      <div style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 12, letterSpacing: 6, color: '#D4AF37', marginBottom: 40 }}>4 MINTS // 6 CAPÍTULOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {[
            { cap: 'CAP 1', title: 'NEXO PRIMORDIAL', desc: 'ADN dorado + roca madre. Origen.', color: '#D4AF37', price: '289' },
            { cap: 'CAP 6', title: 'DIAMANTE ETERNO', desc: 'SHA-256 + familia. Inmutable.', color: '#9D00FF', price: '289' },
            { cap: 'CAP 3', title: 'BOOTH INTERACTIVO', desc: 'Experiencia física Zamna. QR + Cymatics.', color: '#00FF9D', price: '500K' },
            { cap: 'CAP 4', title: 'SELECTOR 4 MINTS', desc: 'Netflix de legados. 4 familias.', color: '#FF3B3B', price: '150K' },
          ].map(m => (
            <div key={m.title} style={{ background: '#111', border: `1px solid ${m.color}`, padding: 24, position: 'relative' }}>
              <div style={{ fontSize: 10, color: m.color }}>{m.cap}</div>
              <h3 style={{ marginTop: 10, fontSize: 18, color: '#fff' }}>{m.title}</h3>
              <p style={{ marginTop: 8, fontSize: 12, color: '#666' }}>{m.desc}</p>
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: m.color, fontWeight: 900 }}>{m.price} PLATINUM</span>
                <button style={{ background: 'transparent', border: `1px solid ${m.color}`, color: m.color, padding: '6px 12px', fontSize: 10, cursor: 'pointer' }}>VER →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK PARA GOBIERNO */}
      <div style={{ background: '#0a0a0a', padding: '60px 40px', borderTop: '1px solid #222' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: 12, letterSpacing: 4 }}>STACK KRONOS-28-ITZA</h3>
            <ul style={{ marginTop: 20, listStyle: 'none', padding: 0, fontSize: 12, color: '#666', lineHeight: 2 }}>
              <li>✓ Turbo monorepo cache 85%</li>
              <li>✓ Type-check 100% verde</li>
              <li>✓ Vite build 131ms / 46.7kb gzipped</li>
              <li>✓ core-dsp 432Hz / 528Hz / 963Hz audit</li>
              <li>✓ SHA-256 real + compliance/seal.mjs</li>
              <li>✓ Husky + lint-staged + pre-commit seal</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: 12, letterSpacing: 4 }}>PARA ZAMNA / GOBIERNO</h3>
            <p style={{ marginTop: 20, fontSize: 12, color: '#999', lineHeight: 1.8 }}>
              No es arte generativo. Es infraestructura de memoria.<br/><br/>
              Cada roca escaneada = hash SHA-256 + audio 3D + video familia.<br/>
              Deploy en Vercel Edge + IPFS. Resguardo 100 años.<br/><br/>
              <span style={{ color: '#fff' }}>Ticket promedio: $150K - $500K MXN por legado familiar.</span>
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: 40, fontSize: 10, color: '#333', letterSpacing: 6 }}>
        KRONOS-28-ITZA 289 PLATINUM © 2099 // MARCO ROJAS // CO-CREATIVIDAD SIMBIÓTICA
      </div>
      <style>{`@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }`}</style>
    </div>
  )
}
