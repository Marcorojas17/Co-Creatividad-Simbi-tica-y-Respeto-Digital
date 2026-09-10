import { useState } from 'react'
export default function LegacySelector() {
  const [essence, setEssence] = useState<'fuego'|'agua'|'aire'|'tierra'>('fuego')
  const essences = [
    { id: 'fuego', label: 'FUEGO', color: '#ff6a00' },
    { id: 'agua', label: 'AGUA', color: '#22d3ee' },
    { id: 'aire', label: 'AIRE', color: '#a855f7' },
    { id: 'tierra', label: 'TIERRA', color: '#d4af37' },
  ] as const
  return (
    <div style={{padding: 24}}>
      <h2>ELIGE TU ESENCIA</h2>
      <div style={{display:'flex', gap:12, marginTop:16}}>
        {essences.map(e => (
          <button key={e.id} onClick={()=>setEssence(e.id)} style={{background:e.color, padding:'12px 18px', borderRadius:999, fontWeight:800}}>{e.label}</button>
        ))}
      </div>
      <p style={{marginTop:20, opacity:0.6}}>Seleccionado: {essence}</p>
    </div>
  )
}
