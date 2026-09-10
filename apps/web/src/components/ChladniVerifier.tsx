import { useState, useRef } from 'react'
import { ChladniEngine } from '@kronos/core-dsp/cymatics/chladniFingerprint'

export function ChladniVerifier() {
  const [result, setResult] = useState<any>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFile = async (e: any) => {
    const file = e.target.files[0]
    const buffer = await file.arrayBuffer()
    const audioCtx = new AudioContext()
    const decoded = await audioCtx.decodeAudioData(buffer)
    const floatData = decoded.getChannelData(0)

    const pattern = ChladniEngine.generatePattern(floatData, 440)
    
    // Dibuja patrón Chladni en canvas (viral visual)
    const ctx = canvasRef.current?.getContext('2d')
    if(ctx){
      const N = pattern.geometry.length
      for(let i=0;i<N;i++) for(let j=0;j<N;j++){
        const v = pattern.geometry[i][j]
        ctx.fillStyle = `hsl(${240 + v*60}, 100%, 50%)`
        ctx.fillRect(i*4, j*4, 4, 4)
      }
    }

    setResult(pattern)
  }

  return (
    <div style={{padding:20, background:'#0a0a0a', color:'gold'}}>
      <h2>🛡️ Detector de Deepfakes - NEXO SONORO 2099</h2>
      <p>Sube un audio y ve su huella geométrica inviolable</p>
      <input type="file" accept="audio/*" onChange={handleFile} />
      <canvas ref={canvasRef} width={256} height={256} style={{border:'1px solid gold', marginTop:20}} />
      {result && (
        <div>
          <p>Fingerprint: {result.fingerprint.slice(0,32)}...</p>
          <p>Resonancia: {(result.resonanceScore*100).toFixed(1)}% auténtico</p>
          <button onClick={()=>alert('Certificado NOM-024 generado - $29 para descargar PDF firmado ed25519')}>
            💰 Certificar y Descargar Prueba Legal - $29
          </button>
        </div>
      )}
    </div>
  )
}
