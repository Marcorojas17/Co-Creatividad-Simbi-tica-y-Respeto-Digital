// Usa: gpg_sign_engine.sh + certificado.html
import Stripe from 'stripe'
import { execSync } from 'child_process'
import { hideData } from '../../web/src/security/steganography.js'

export async function handleStripeWebhook(req, res) {
  const event = req.body
  if(event.type === 'checkout.session.completed'){
    const email = event.data.object.customer_details?.email
    const product = event.data.object.metadata?.product // 'certificado' | 'booth' | 'dashboard'

    if(product === 'certificado'){
      // 1. Genera huella Chladni con chladni_plate.py
      execSync(`python packages/core-dsp/chladni_plate.py --freq 440 --out /tmp/pattern.png`)
      // 2. Inyecta marca invisible con steganography.js
      const signed = hideData({ email, ts: Date.now() })
      // 3. Firma GPG con gpg_sign_engine.sh
      execSync(`bash security/gpg_sign_engine.sh /tmp/pattern.png`)
      // 4. Guarda métrica en InfluxDB
      // influx_bridge.py -> log venta
    }
    // 5. Envía PDF certificado.html
    return res.json({ received: true })
  }
  res.json({ ok: true })
}
