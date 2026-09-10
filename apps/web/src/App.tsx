import { useState } from 'react'
import NexoPrimordial from './pages/NexoPrimordial'
import DiamanteEterno from './pages/DiamanteEterno'
import LegacySelector from './pages/LegacySelector'

const chapters = [
  { id: 'nexo', label: 'CAP 1 - NEXO', comp: NexoPrimordial },
  { id: 'diamante', label: 'CAP 6 - DIAMANTE', comp: DiamanteEterno },
  { id: 'selector', label: 'CAP 4 - SELECTOR 4 MINTS', comp: LegacySelector },
]

export default function App() {
  const [active, setActive] = useState('nexo')
  const ActiveComp = chapters.find(c => c.id === active)?.comp || NexoPrimordial

  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', gap: 10, padding: 10, background: 'rgba(0,0,0,0.8)' }}>
        {chapters.map(c => (
          <button key={c.id} onClick={() => setActive(c.id)} style={{ padding: '8px 16px', background: active === c.id ? '#D4AF37' : '#111', color: active === c.id ? '#000' : '#D4AF37', border: '1px solid #D4AF37', cursor: 'pointer' }}>
            {c.label}
          </button>
        ))}
        <a href="/index.html" style={{ marginLeft: 'auto', color: '#D4AF37', padding: 8 }}>→ HTML ORIGINAL</a>
      </nav>
      <ActiveComp />
    </div>
  )
}
