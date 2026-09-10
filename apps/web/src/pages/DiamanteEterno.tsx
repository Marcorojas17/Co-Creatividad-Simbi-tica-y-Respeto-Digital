import { useEffect, useRef, useState } from 'react'

export default function DiamanteEterno() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hash, setHash] = useState('41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3')
  const [live, setLive] = useState(false)
  const [fft, setFft] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const draw = (level: number) => {
      const dpr = Math.min(window.devicePixelRatio * 2.5, 3)
      const w = window.innerWidth, h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(dpr, dpr)
      ctx.clearRect(0,0,w,h)

      // Fondo negro premium
      const bg = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w*0.8)
      bg.addColorStop(0, '#0a0014')
      bg.addColorStop(0.5, '#000')
      bg.addColorStop(1, '#000')
      ctx.fillStyle = bg
      ctx.fillRect(0,0,w,h)

      const cx = w/2, cy = h/2 - 20
      const def = 1 + level * 0.02
      const time = Date.now() * 0.001

      // DIAMANTE ETERNO - DOBLE PIRÁMIDE HD
      ctx.shadowBlur = 30 * def
      ctx.shadowColor = '#9D00FF'
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 1.2

      // Pirámide superior
      const top = 180 * def
      const baseW = 140 * def

      // Caras con glow violeta
      const pointsTop = [
        [0, -top],
        [-baseW, 40],
        [baseW, 40],
      ]

      // Dibuja pirámide superior
      ctx.beginPath()
      ctx.moveTo(cx + pointsTop[0][0], cy + pointsTop[0][1])
      ctx.lineTo(cx + pointsTop[1][0], cy + pointsTop[1][1])
      ctx.lineTo(cx + pointsTop[2][0], cy + pointsTop[2][1])
      ctx.closePath()
      ctx.stroke()

      // Pirámide inferior (reflejo)
      const pointsBottom = [
        [0, top],
        [-baseW, 40],
        [baseW, 40],
      ]
      ctx.beginPath()
      ctx.moveTo(cx + pointsBottom[0][0], cy + pointsBottom[0][1])
      ctx.lineTo(cx + pointsBottom[1][0], cy + pointsBottom[1][1])
      ctx.lineTo(cx + pointsBottom[2][0], cy + pointsBottom[2][1])
      ctx.closePath()
      ctx.stroke()

      // Líneas internas - ADN del diamante
      ctx.shadowBlur = 0
      ctx.strokeStyle = 'rgba(157,0,255,0.5)'
      ctx.lineWidth = 0.6
      for(let i=0; i<3; i++){
        const angle = (time + i * 2.09)
        const x1 = cx + Math.cos(angle) * 20
        const y1 = cy + Math.sin(angle) * 20
        const x2 = cx + Math.cos(angle) * (120*def)
        const y2 = cy + Math.sin(angle) * (120*def)
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Anillo exterior - ciclo eterno
      ctx.strokeStyle = 'rgba(212,175,55,0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(cx, cy, (200 + Math.sin(time*2)*10)*def, 0, Math.PI*2)
      ctx.stroke()

      // Brillo central
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.shadowBlur = 20
      ctx.shadowColor = '#fff'
      ctx.beginPath()
      ctx.arc(cx, cy, 4*def, 0, Math.PI*2)
      ctx.fill()
      ctx.shadowBlur = 0

      // Partículas flotando
      for(let p=0; p<8; p++){
        const a = time*0.5 + p*0.8
        const r = 240*def + Math.sin(time+p)*15
        const px = cx + Math.cos(a)*r
        const py = cy + Math.sin(a)*r*0.6
        ctx.fillStyle = `rgba(157,0,255,${0.3 + Math.sin(time+p)*0.2})`
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI*2)
        ctx.fill()
      }

      requestAnimationFrame(()=>draw(fft))
    }
    draw(0)
  }, [fft])

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const src = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      analyser.fftSize = 2048
      src.connect(analyser)
      const data = new Uint8Array(analyser.frequencyBinCount)
      setLive(true)
      const tick = () => {
        analyser.getByteFrequencyData(data)
        setFft(data[90]/2)
        requestAnimationFrame(tick)
      }
      tick()
    } catch { alert('Activa micro para LIVE E2E') }
  }

  const generateHash = async () => {
    const input = `KRONOS-289-${Date.now()}-${Math.random()}`
    const enc = new TextEncoder().encode(input)
    const buf = await crypto.subtle.digest('SHA-256', enc)
    const hex = Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')
    setHash(hex)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative', overflow: 'hidden', fontFamily: 'ui-monospace, monospace' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />

      {/* HEADER CAP 6 */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '12px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', background: 'rgba(0,0,0,0.8)', zIndex: 10, fontSize: 10 }}>
        <div style={{ color: '#9D00FF', fontWeight: 900 }}>CAP 6 - DIAMANTE ETERNO // 289 PLATINUM // BANAMEX 002438701524066473</div>
        <div style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '3px 10px', borderRadius: 20 }}>HD 8K • SHA-256 REAL • VERDE</div>
      </div>

      {/* INFO CENTRAL */}
      <div style={{ position: 'absolute', bottom: 100, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 10, width: '90%', maxWidth: 600 }}>
        <div style={{ color: '#fff', fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>DIAMANTE ETERNO</div>
        <div style={{ color: '#9D00FF', fontSize: 11, marginTop: 6, letterSpacing: 3 }}>VIDA LÍQUIDA • GRAVES + AGUDOS • MEMORIA BIO • 963 Hz</div>
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: 12, marginTop: 16, fontSize: 9, wordBreak: 'break-all', color: '#888' }}>
          <div style={{ color: '#D4AF37', fontSize: 10, marginBottom: 6 }}>SHA-256 REAL (Web Crypto API) • LEGADO 2099</div>
          {hash}
          <div style={{ marginTop: 8, color: '#555' }}>SafeCreative: 2607086319439-6XGR3V • NOM-151 • QTSA 2022</div>
        </div>
      </div>

      {/* CONTROLES */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={startMic} style={{ background: live? '#9D00FF' : '#111', color: live? '#fff' : '#9D00FF', border: '1px solid #9D00FF', padding: '12px 20px', borderRadius: 30, fontSize: 11, fontWeight: 900, cursor: 'pointer' }}>
          {live? `🎤 LIVE ${fft.toFixed(0)} Hz` : '🎤 LIVE E2E — QUE TU VOZ TALLE EL DIAMANTE'}
        </button>
        <button onClick={generateHash} style={{ background: '#D4AF37', color: '#000', border: 0, padding: '12px 20px', borderRadius: 30, fontSize: 11, fontWeight: 900, cursor: 'pointer' }}>
          🔐 GENERAR SHA-256 REAL
        </button>
        <a href="https://wa.me/527225862335?text=Quiero%20mi%20Diamante%20Eterno%20CAP6%20-%20BANAMEX%20002438701524066473" style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '12px 20px', borderRadius: 30, fontSize: 11, textDecoration: 'none' }}>
          💎 RESGUARDAR $150K — BANAMEX
        </a>
      </div>

      {/* BADGE */}
      <div style={{ position: 'absolute', top: 60, left: 20, zIndex: 10, fontSize: 9, color: '#666', lineHeight: 1.6 }}>
        <div style={{ color: '#9D00FF' }}>MIN4 • VIDA LÍQUIDA • BIO</div>
        <div>● NO EXISTE BIO — MEMORIA ORGÁNICA</div>
        <div style={{ marginTop: 6, color: '#D4AF37' }}>BANAMEX CLABE: 002438701524066473</div>
        <div>7225862335 • marco.a.rojas.v@hotmail.com</div>
      </div>
    </div>
  )
}
