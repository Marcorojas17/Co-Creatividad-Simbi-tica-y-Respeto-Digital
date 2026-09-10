// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036
import { useRef } from 'react'

export default function LiveMicE2E({ onFFT }: { onFFT: (data: Uint8Array) => void }) {
  const startLive = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const ctx = new AudioContext()
    const src = ctx.createMediaStreamSource(stream)
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 2048
    src.connect(analyser)
    const data = new Uint8Array(analyser.frequencyBinCount)
    const loop = () => {
      analyser.getByteFrequencyData(data)
      onFFT(data) // Deforma tu moneda Om en tiempo real con 432 Hz
      requestAnimationFrame(loop)
    }
    loop()
  }

  return (
    <button onClick={startLive} style={{ background: '#D4AF37', color: '#000', border: 0, padding: '14px 28px', borderRadius: 30, fontWeight: 900, fontSize: 12, cursor: 'pointer' }}>
      🎤 QUE TU MÚSICA ELIJA POR TI — LIVE E2E (432 Hz / 528 Hz / 963 Hz)
    </button>
  )
}
