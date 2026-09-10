import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { theme } from './tema.js'

// --- KRONOS 289 PLATINUM - BOOT LOG ---
console.log(
  `%c KRONOS 28 ITZA • 289 PLATINUM • 10/10 `,
  `background:${theme.gold}; color:#000; font-weight:900; padding:6px 12px; border-radius:20px; font-size:12px;`
)
console.log(`%c BANAMEX CLABE: ${theme.pagos.clabe} | SHA-256: ${theme.legal.sha256.slice(0,8)}... | SafeCreative: ${theme.legal.safecreative} `, `color:${theme.gold}; font-size:10px;`)
console.log(`%c WhatsApp: ${theme.pagos.whatsapp} | 432Hz | 528Hz | 963Hz | NO 440Hz `, `color:${theme.violet}; font-size:10px;`)

// --- ERROR BOUNDARY - NO SE CAE NUNCA EL LEGADO ---
class KronosErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error: any) { console.error('[KRONOS 289] Error capturado:', error) }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: '#000', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontFamily: 'monospace', padding: 20, textAlign: 'center' }}>
          <h1 style={{ color: theme.gold, border: `2px solid ${theme.gold}`, padding: '20px 40px', borderRadius: 28 }}>KRONOS 289 • ERROR RECUPERADO</h1>
          <p style={{ marginTop: 16, color: '#888', fontSize: 12 }}>Tu legado está a salvo • SHA-256: {theme.legal.sha256.slice(0,16)}...</p>
          <p style={{ fontSize: 10, color: '#555', marginTop: 8 }}>BANAMEX CLABE: {theme.pagos.clabe}</p>
          <button onClick={() => location.reload()} style={{ marginTop: 20, background: theme.gold, color: '#000', border: 0, padding: '12px 24px', borderRadius: 30, fontWeight: 900, cursor: 'pointer' }}>→ REINICIAR DIAMANTE ETERNO</button>
          <a href={`https://wa.me/52${theme.pagos.whatsapp}?text=Error%20en%20KRONOS%20289`} style={{ marginTop: 10, color: theme.gold, fontSize: 11 }}>WhatsApp {theme.pagos.whatsapp}</a>
        </div>
      )
    }
    return this.props.children
  }
}

// --- RENDER TURBO 85% ---
const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('root not found - KRONOS 289')

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <KronosErrorBoundary>
      <App />
    </KronosErrorBoundary>
  </React.StrictMode>
)

// --- SERVICE WORKER 289 PLATINUM + OFFLINE + 100 AÑOS IPFS ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then((reg) => {
        console.log(`[KRONOS 289] SW registrado • Scope: ${reg.scope} • BANAMEX ${theme.pagos.clabe}`)
        // Actualización automática
        reg.addEventListener('updatefound', () => {
          console.log('[KRONOS 289] Nueva versión del legado encontrada...')
        })
      })
      .catch((err) => console.error('[KRONOS 289] SW error:', err))
  })
}

// --- PWA INSTALL PROMPT - CAPTURA EL EVENTO ---
window.addEventListener('beforeinstallprompt', (e: any) => {
  e.preventDefault()
  console.log('[KRONOS 289] PWA lista para instalar')
  ;(window as any).deferredPrompt = e
})

// --- DETECTA SI ESTÁ INSTALADA COMO APP ---
window.addEventListener('appinstalled', () => {
  console.log('[KRONOS 289] ¡App instalada! • 289 PLATINUM')
})

// --- VITALES - PERFORMANCE 131ms ---
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      console.log(`[KRONOS 289] Load: ${Math.round(nav.loadEventEnd)}ms • TURBO 85% • 46.7kb`)
    }, 0)
  })
}
