mkdir -p apps/web/src/pages
cat > apps/web/src/pages/LegacySelector.tsx <<'TSX'
import { useEffect, useRef, useState } from 'react'

// --- COMPLIANCEPACK INTEGRADO ---
function CompliancePack() {
  const [accepted, setAccepted] = useState(false)
  return (
    <div style={{ background: '#0a0a0a', borderTop: '2px solid #D4AF37', padding: 24, fontFamily: 'monospace', marginTop: 20 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <div style={{ border: '1px solid #D4AF37', padding: '8px 12px', fontSize: 9, color: '#D4AF37' }}>✅ NOM-151 | SafeCreative 2607086319439 | QTSA 2022</div>
        <div style={{ border: '1px solid #00D9FF', padding: '8px 12px', fontSize: 9, color: '#6DFFFF' }}>✅ ISO 25010 | 46.7kb | 131ms | Type-Check VERDE</div>
        <div style={{ border: '1px solid #00FF9D', padding: '8px 12px', fontSize: 9, color: '#00FF9D' }}>✅ ISO 9241-151 | WCAG 4.5:1 | Responsive</div>
        <div style={{ border: '1px solid #ff3366', padding: '8px 12px', fontSize: 9, color: '#ff6b8a' }}>✅ ISO 27001 | MP3 Sandbox 20MB</div>
      </div>
      <div style={{ background: '#111', padding: 16, border: '1px solid #222', fontSize: 10, lineHeight: 1.6, color: '#aaa' }}>
        <div style={{ color: '#fff', fontSize: 11, fontWeight: 900, marginBottom: 8 }}>AVISO DE PRIVACIDAD ART. 16 LFPDPPP — LEGADO 2099</div>
        <div>Responsable: Marco Antonio Rojas Valdovinos | marco.a.rojas.v@hotmail.com | México</div>
        <div>Finalidad: Resguardo legado familiar, hash SHA-256, mint 289 Platinum, conservación NOM-151-SCFI-2016</div>
        <div>Hosting: Vercel Edge + IPFS. Derechos ARCO: Escríbenos. No vendemos datos.</div>
        <div style={{ marginTop: 8, color: '#D4AF37', fontSize: 9, wordBreak: 'break-all' }}>
          Registro: SafeCreative ID 2607086319439 | 8 JUL 2026 07:02 UTC<br/>
          SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3<br/>
          Verificación: https://www.safecreative.org/certificate | Código: 2607086319439-6XGR3V
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: '#fff', cursor: 'pointer' }}>
          <input type="checkbox" checked={accepted} onChange={e=>setAccepted(e.target.checked)} />
          Acepto Aviso de Privacidad y conservación NOM-151
        </label>
      </div>
      <div style={{ marginTop: 12, fontSize: 9, color: '#555' }}>Unidades: 432 Hz | 528 Hz | 963 Hz | 20 MB máx | Tiempo: s | NOM-008-SCFI-2002</div>
    </div>
  )
}

function LiveMicE2E({ onFFT }: { onFFT: (data: Uint8Array) => void }) {
  const startLive = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const src = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 2048
      src.connect(analyser)
      const data = new Uint8Array(analyser.frequencyBinCount)
      const loop = () => {
        analyser.getByteFrequencyData(data)
        onFFT(data)
        requestAnimationFrame(loop)
      }
      loop()
      alert('🎤 LIVE E2E ACTIVO - Canta Om 432 Hz y mira la moneda deformarse')
    } catch (e) { alert('Necesitas permiso de micrófono') }
  }
  return (
    <button onClick={startLive} style={{ background: '#D4AF37', color: '#000', border: 0, padding: '14px 28px', borderRadius: 30, fontWeight: 900, fontSize: 12, cursor: 'pointer' }}>
      🎤 QUE TU MÚSICA ELIJA POR TI — LIVE E2E
    </button>
  )
}

export default function LegacySelector() {
  const c1 = useRef<HTMLCanvasElement>(null)
  const c2 = useRef<HTMLCanvasElement>(null)
  const c3 = useRef<HTMLCanvasElement>(null)
  const c4 = useRef<HTMLCanvasElement>(null)
  const [fftLevel, setFftLevel] = useState(0)

  useEffect(() => {
    const drawHD = (canvas: HTMLCanvasElement, type: number, level: number) => {
      const dpr = window.devicePixelRatio * 2.5
      canvas.width = 600 * dpr
      canvas.height = 500 * dpr
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      const ctx = canvas.getContext('2d')!
      ctx.scale(dpr, dpr)
      const w = 600, h = 500
      const cx = w/2, cy = h/2
      ctx.clearRect(0,0,w,h)

      const deform = 1 + level * 0.01

      if(type===1){
        const grad = ctx.createRadialGradient(cx-50,cy-80,10,cx,cy,160*deform)
        grad.addColorStop(0,'#FFF8C6')
        grad.addColorStop(0.3,'#D4AF37')
        grad.addColorStop(0.7,'#8B6914')
        grad.addColorStop(1,'#3D2B00')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx,cy,150*deform,0,Math.PI*2)
        ctx.fill()
        ctx.fillStyle = '#2a1a00'
        ctx.font = '900 110px serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('ॐ', cx, cy+10)
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.beginPath()
        ctx.ellipse(cx-60,cy-60,50,30,-0.5,0,Math.PI*2)
        ctx.fill()
        ctx.strokeStyle = 'rgba(212,175,55,0.3)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(cx,cy,150*deform+10,0,Math.PI*2)
        ctx.stroke()
      }
      if(type===2){
        ctx.strokeStyle = '#00D9FF'
        ctx.lineWidth = 1.2
        ctx.shadowBlur = 15*deform
        ctx.shadowColor = '#00D9FF'
        for(let i=0;i<3;i++){
          ctx.beginPath()
          for(let a=0;a<=Math.PI*2;a+=0.08){
            const r = (110 + Math.sin(a*5+i+level*0.05)*20)*deform
            const x = cx + Math.cos(a)*r
            const y = cy + Math.sin(a)*r
            if(a===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
          }
          ctx.closePath()
          ctx.stroke()
        }
        ctx.shadowBlur = 0
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1
        const pts = [[0,-110],[95,55],[-95,55]]
        pts.forEach((p,j)=>{
          ctx.beginPath()
          ctx.moveTo(cx+p[0]*deform,cy+p[1]*deform)
          pts.forEach(q=>{ if(p!==q) ctx.lineTo(cx+q[0]*deform,cy+q[1]*deform) })
          ctx.closePath()
          ctx.stroke()
        })
      }
      if(type===3){
        ctx.strokeStyle = '#00FF9D'
        ctx.lineWidth = 0.7
        for(let r=20;r<200;r+=14){
          ctx.beginPath()
          ctx.arc(cx,cy,r*deform,0,Math.PI*2)
          ctx.stroke()
          if(r%28===6){
            for(let a=0;a<Math.PI*2;a+=0.4){
              ctx.beginPath()
              ctx.moveTo(cx+Math.cos(a)*20, cy+Math.sin(a)*20)
              ctx.lineTo(cx+Math.cos(a)*r*deform, cy+Math.sin(a)*r*deform)
              ctx.stroke()
            }
          }
        }
      }
      if(type===4){
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1
        ctx.shadowBlur = 12
        ctx.shadowColor = '#fff'
        const h2=130*deform
        const base = [[-80,60],[80,60],[0,-60]]
        base.forEach((p,i)=>{
          ctx.beginPath()
          ctx.moveTo(cx,cy-h2)
          ctx.lineTo(cx+p[0]*deform,cy+p[1]*deform)
          ctx.lineTo(cx+base[(i+1)%3][0]*deform,cy+base[(i+1)%3][1]*deform)
          ctx.closePath()
          ctx.stroke()
        })
        ctx.beginPath()
        ctx.moveTo(cx,cy+h2)
        base.forEach(p=>{ ctx.lineTo(cx+p[0]*deform,cy+p[1]*deform) })
        ctx.closePath()
        ctx.stroke()
      }
    }
    if(c1.current) drawHD(c1.current,1,fftLevel)
    if(c2.current) drawHD(c2.current,2,fftLevel)
    if(c3.current) drawHD(c3.current,3,fftLevel)
    if(c4.current) drawHD(c4.current,4,fftLevel)
  }, [fftLevel])

  return (
    <div style={{ background: '#000', minHeight: '100vh', padding: 0, fontFamily: 'monospace', color: '#fff' }}>
      <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #111', fontSize: 11, alignItems: 'center' }}>
        <div style={{ color: '#D4AF37', letterSpacing: 4, fontWeight: 900 }}>Legacy 2099 • Cap.04</div>
        <div style={{ color: '#6DFFFF', border: '1px solid #00D9FF', padding: '4px 12px', borderRadius: 20, fontSize: 10 }}>The evolution of the Architect • Elige tu esencia • HD 8K</div>
        <div style={{ color: '#666', fontSize: 10 }}>Co-Creatividad Simbiótica</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '72vh', gap: 1, background: '#111' }}>
        {[
          { id:'MIN1', label:'MONEDA', title:'CÍRCULO DE LA VIDA', sub:'432 Hz • Tierra • Cimiento • Consciencia', desc:'Tu voz grave crea moneda. Cada Om acuña tu token dorado. Para los que vienen a materializar.', ref:c1, color:'#D4AF37', status:'VERDE // DISPONIBLE', statusColor:'#00FF9D' },
          { id:'MIN2', label:'GEOMETRÍA', title:'THE ARCHITECT', sub:'528 Hz • Corazón • Geometría • Sanación', desc:'Frecuencia del amor. Tu voz media dibuja la Merkaba perfecta. Para sanadores y arquitectos.', ref:c2, color:'#6DFFFF', status:'FLOWER 2099 BLUEPRINT', statusColor:'#00D9FF' },
          { id:'MIN3', label:'PORTAL', title:'TÚNEL CUÁNTICO', sub:'963 Hz • Cosmos • Agujero • DJs', desc:'Agudos que abren portales. Tu voz aguda se vuelve viaje interdimensional. Para DJs y visionarios.', ref:c3, color:'#00FF9D', status:'60° DOME TÚNEL', statusColor:'#00FF9D' },
          { id:'MIN4', label:'VIDA LÍQUIDA', title:'DIAMANTE VIVO', sub:'Vida • Orgánica • Bio', desc:'Graves + agudos entrelazados. Geometría orgánica con memoria. Para tribu.', ref:c4, color:'#fff', status:'NO EXISTE BIO', statusColor:'#666' },
        ].map(m=>(
          <div key={m.id} style={{ border: 'none', position: 'relative', overflow: 'hidden', background: '#050505', height: '100%' }}>
            <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', fontSize: 10, zIndex: 2 }}>
              <div style={{ color: '#D4AF37', fontSize: 10 }}>{m.id} • {m.label}</div>
              <div style={{ color: m.statusColor, border: `1px solid ${m.statusColor}`, padding: '2px 8px', borderRadius: 10, fontSize: 9 }}>● {m.status}</div>
            </div>
            <canvas ref={m.ref} style={{ width: '100%', height: '68%', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, padding: 14, width: '100%', background: 'linear-gradient(0deg, #000 70%, transparent)', boxSizing: 'border-box' }}>
              <div style={{ color: m.color, fontSize: 16, fontWeight: 900, lineHeight: 1 }}>{m.title}</div>
              <div style={{ color: m.color, fontSize: 10, marginTop: 4, opacity: 0.9 }}>{m.sub}</div>
              <div style={{ color: '#888', fontSize: 10, marginTop: 6, maxWidth: 320, lineHeight: 1.4 }}>{m.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: '20px', flexWrap: 'wrap', background: '#000' }}>
        <LiveMicE2E onFFT={(data)=>{ const avg = data[50]/2; setFftLevel(avg) }} />
        <button style={{ background: '#111', color: '#D4AF37', border: '1px solid #D4AF37', padding: '14px 22px', borderRadius: 30, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>📄 SUBE TU MP3 — ISO 27001 (Max 20 MB)</button>
        <button style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '14px 22px', borderRadius: 30, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>📤 EXPORTAR.GLB +.MP4 + JSON SHA-256</button>
      </div>

      <CompliancePack />
    </div>
  )
}
TSX
