import { useEffect, useRef } from 'react'

export default function NexoPrimordial() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    // Aquí va tu lógica de nexo.html con ADN dorado + roca
    // Por ahora placeholder que carga tu HTML original como iframe para no perder tu efecto auténtico
    if (canvasRef.current) {
      canvasRef.current.style.background = 'radial-gradient(circle, #0a0a0a 0%, #000 100%)'
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative' }}>
      <iframe src="/nexo.html" style={{ width: '100%', height: '100%', border: 'none' }} title="Nexo Primordial" />
      <div style={{ position: 'absolute', top: 20, left: 20, color: '#D4AF37', fontFamily: 'monospace' }}>
        CAP 1 - NEXO PRIMORDIAL // KRONOS-28-ITZA
      </div>
    </div>
  )
}
