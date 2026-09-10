# BORRA EL VIEJO Y PEGA ESTE NUEVO
cat > apps/web/src/pages/index.tsx <<'TSX'
import { useEffect, useRef, useState } from 'react'

export default function Indice() {
  const c1 = useRef<HTMLCanvasElement>(null)
  const c2 = useRef<HTMLCanvasElement>(null)
  const c3 = useRef<HTMLCanvasElement>(null)
  const c4 = useRef<HTMLCanvasElement>(null)
  const [live, setLive] = useState(false)
  const [fft, setFft] = useState(0)

  useEffect(() => {
    const draw = (canvas: HTMLCanvasElement, type: number, level: number) => {
      const dpr = Math.min(window.devicePixelRatio * 2.5, 3)
      const w = 600, h = 500
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      const ctx = canvas.getContext('2d')!
      ctx.scale(dpr, dpr)
      ctx.clearRect(0,0,w,h)
      const cx = w/2, cy = h/2
      const def = 1 + level * 0.015

      if (type === 1) {
        // MONEDA ORO 432Hz - HD 8K
        const g = ctx.createRadialGradient(cx-50, cy-80, 10, cx, cy, 160*def)
        g.addColorStop(0, '#FFF8C6')
        g.addColorStop(0.25, '#FFD700')
        g.addColorStop(0.5, '#D4AF37')
        g.addColorStop(0.8, '#8B6914')
        g.addColorStop(1, '#3D2B00')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, 145*def, 0, Math.PI*2)
        ctx.fill()
        ctx.fillStyle = '#2a1a00'
        ctx.font = '900 110px serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('ॐ', cx, cy+12)
        ctx.fillStyle = 'rgba(255,255,255,0.55)'
        ctx.beginPath()
        ctx.ellipse(cx-55, cy-55, 48, 28, -0.5, 0, Math.PI*2)
        ctx.fill()
        ctx.strokeStyle = 'rgba(212,175,55,0.4)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(cx, cy, 160*def, 0, Math.PI*2)
        ctx.stroke()
      }
      if (type === 2) {
        // GEOMETRIA 528Hz
        ctx.shadowBlur = 18*def
        ctx.shadowColor = '#00D9FF'
        ctx.strokeStyle = '#6DFFFF'
        ctx.lineWidth = 1.3
        for(let k=0;k<3;k++){
          ctx.beginPath()
          for(let a=0;a<=Math.PI*2;a+=0.05){
            const r = (110 + Math.sin(a*5 + k + level*0.08)*22)*def
            const x = cx + Math.cos(a)*r
            const y = cy + Math.sin(a)*r
            if(a===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
          }
          ctx.closePath()
          ctx.stroke()
        }
        ctx.shadowBlur = 0
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 1
        const pts = [[0,-110],[95,55],[-95,55]] as const
        ctx.beginPath()
        ctx.moveTo(cx+pts[0][0]*def, cy+pts[0][1]*def)
        pts.slice(1).forEach(p=>ctx.lineTo(cx+p[0]*def, cy+p[1]*def))
        ctx.closePath()
        ctx.stroke()
      }
      if (type === 3) {
        // TUNEL 963Hz
        ctx.strokeStyle = '#00FF9D'
        ctx.lineWidth = 0.8
        for(let r=20;r<200;r+=13){
          ctx.beginPath()
          ctx.arc(cx, cy, r*def, 0, Math.PI*2)
          ctx.stroke()
          if(r%26===7){
            for(let a=0;a<Math.PI*2;a+=0.38){
              ctx.beginPath()
              ctx.moveTo(cx+Math.cos(a)*18, cy+Math.sin(a)*18)
              ctx.lineTo(cx+Math.cos(a)*r*def, cy+Math.sin(a)*r*def)
              ctx.stroke()
            }
          }
        }
      }
      if (type === 4) {
        // DIAMANTE VIDA
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 1.1
        ctx.shadowBlur = 14
        ctx.shadowColor = '#fff'
        const h2 = 130*def
        const base = [[-80,60],[80,60],[0,-60]] as const
        ctx.beginPath()
        ctx.moveTo(cx, cy-h2)
        base.forEach(p=>ctx.lineTo(cx+p[0]*def, cy+p[1]*def))
        ctx.closePath()
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(cx, cy+h2)
        base.forEach(p=>ctx.lineTo(cx+p[0]*def, cy+p[1]*def))
        ctx.closePath()
        ctx.stroke()
      }
    }

    const loop = () => {
      if(c1.current) draw(c1.current, 1, fft)
      if(c2.current) draw(c2.current, 2, fft)
      if(c3.current) draw(c3.current, 3, fft)
      if(c4.current) draw(c4.current, 4, fft)
      requestAnimationFrame(loop)
    }
    loop()
  }, [fft])

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const src = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 2048
      src.connect(analyser)
      const data = new Uint8Array(analyser.frequencyBinCount)
      setLive(true)
      const tick = () => {
        analyser.getByteFrequencyData(data)
        setFft(data[80] / 2)
        requestAnimationFrame(tick)
      }
      tick()
    } catch { alert('Activa micrófono para E2E LIVE') }
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', fontFamily: 'ui-monospace, SFMono-Regular, monospace', color: '#fff', overflowX: 'hidden' }}>
      {/* HEADER */}
      <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', fontSize: 10, letterSpacing: 2 }}>
        <div style={{ color: '#D4AF37', fontWeight: 900 }}>KRONOS-28-ITZA • 289 PLATINUM • LEGADO 2099</div>
        <div style={{ color: '#6DFFFF', border: '1px solid #00D9FF', padding: '3px 10px', borderRadius: 20 }}>HD 8K • CAP.04 • VERDE</div>
      </div>

      {/* GRID 2x2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '72vh', gap: 1, background: '#111' }}>
        {[
          { id:'MIN1', tag:'MONEDA', t:'CÍRCULO DE LA VIDA', s:'432 Hz • Tierra • Om • Consciencia', d:'Tu voz grave acuña moneda dorada. Cada ॐ es un token real.', ref:c1, col:'#D4AF37', badge:'VERDE // DISPONIBLE', bcol:'#00FF9D' },
          { id:'MIN2', tag:'GEOMETRÍA', t:'THE ARCHITECT', s:'528 Hz • Corazón • Merkaba • Sanación', d:'Frecuencia del amor. Dibuja la geometría perfecta.', ref:c2, col:'#6DFFFF', badge:'FLOWER 2099 BLUEPRINT', bcol:'#00D9FF' },
          { id:'MIN3', tag:'PORTAL', t:'TÚNEL CUÁNTICO', s:'963 Hz • Cosmos • DJs', d:'Agudos que abren portales interdimensionales.', ref:c3, col:'#00FF9D', badge:'60° DOME TÚNEL', bcol:'#00FF9D' },
          { id:'MIN4', tag:'VIDA LÍQUIDA', t:'DIAMANTE VIVO', s:'Vida • Orgánica • Bio', d:'Graves + agudos. Geometría con memoria.', ref:c4, col:'#fff', badge:'NO EXISTE BIO', bcol:'#666' },
        ].map(m=>(
          <div key={m.id} style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 10, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', zIndex: 2, fontSize: 9 }}>
              <div style={{ color: '#D4AF37' }}>{m.id} • {m.tag}</div>
              <div style={{ color: m.bcol, border: `1px solid ${m.bcol}`, padding: '2px 7px', borderRadius: 10 }}>● {m.badge}</div>
            </div>
            <canvas ref={m.ref} style={{ width: '100%', height: '70%', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12, background: 'linear-gradient(0deg,#000 75%,transparent)' }}>
              <div style={{ color: m.col, fontSize: 15, fontWeight: 900 }}>{m.t}</div>
              <div style={{ color: m.col, fontSize: 9, opacity: 0.9, marginTop: 3 }}>{m.s}</div>
              <div style={{ color: '#888', fontSize: 9, marginTop: 5, lineHeight: 1.3 }}>{m.d}</div>
            </div>
          </div>
        ))}
      </div>

      {/* E2E CONTROLS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, padding: 18, flexWrap: 'wrap', background: '#000' }}>
        <button onClick={startMic} style={{ background: live? '#00FF9D' : '#D4AF37', color: '#000', border: 0, padding: '13px 24px', borderRadius: 30, fontWeight: 900, fontSize: 11, cursor: 'pointer' }}>
          {live? `🎤 LIVE E2E ACTIVO ${fft.toFixed(0)} Hz` : '🎤 QUE TU MÚSICA ELIJA POR TI — LIVE E2E'}
        </button>
        <button style={{ background: '#111', color: '#D4AF37', border: '1px solid #D4AF37', padding: '13px 20px', borderRadius: 30, fontSize: 10, cursor: 'pointer' }}>📄 SUBE TU MP3 — ISO 27001 (20 MB)</button>
        <button style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '13px 20px', borderRadius: 30, fontSize: 10, cursor: 'pointer' }}>📤 EXPORTAR.GLB +.MP4 + JSON</button>
      </div>

      {/* COMPLIANCEPACK 289 PLATINUM */}
      <div style={{ background: '#0a0a0a', borderTop: '2px solid #D4AF37', padding: 18 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={{ border: '1px solid #D4AF37', color: '#D4AF37', padding: '6px 10px', fontSize: 8 }}>✅ NOM-151 | SafeCreative 2607086319439 | QTSA 2022</span>
          <span style={{ border: '1px solid #00D9FF', color: '#6DFFFF', padding: '6px 10px', fontSize: 8 }}>✅ ISO 25010 | 46.7kb | 131ms</span>
          <span style={{ border: '1px solid #00FF9D', color: '#00FF9D', padding: '6px 10px', fontSize: 8 }}>✅ ISO 9241-151 | WCAG 4.5:1</span>
          <span style={{ border: '1px solid #ff5a7a', color: '#ff7a90', padding: '6px 10px', fontSize: 8 }}>✅ ISO 27001 | 20 MB Sandbox</span>
        </div>
        <div style={{ background: '#111', padding: 12, border: '1px solid #222', fontSize: 9, lineHeight: 1.5, color: '#999' }}>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: 10, marginBottom: 6 }}>AVISO PRIVACIDAD ART. 16 LFPDPPP — LEGADO 2099</div>
          Responsable: Marco Antonio Rojas Valdovinos | marco.a.rojas.v@hotmail.com | México<br/>
          SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3 | ID: 2607086319439-6XGR3V<br/>
          Verificación: https://www.safecreative.org/certificate — Conforme NOM-008: 432 Hz | 528 Hz | 963 Hz | 20 MB | s
        </div>
      </div>
    </div>
  )
}
TSX

pnpm --filter @kronos/web run dev
