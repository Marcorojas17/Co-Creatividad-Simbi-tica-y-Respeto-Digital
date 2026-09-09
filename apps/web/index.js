// apps/web/index.js
import { logSecurityEvent, verifyChain } from './security/trace.js';
import { initGold } from './gold.js';

(async () => {
  // 1. Trazabilidad criptográfica
  try {
    await logSecurityEvent({ type: 'pwa_load', page: 'index' });
    const chainStatus = await verifyChain();
    document.getElementById('chain-status').textContent = chainStatus.valid ? '🔒' : '⚠️';
    console.log('Chain status:', chainStatus);
  } catch (e) {
    console.warn('Trace error:', e);
  }

  // 2. Service Worker con manejo de errores
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      console.log('SW registered:', reg);
    } catch (e) {
      console.error('SW registration failed:', e);
      document.getElementById('status').innerHTML = '⚠️ SW falló';
    }
  }

  // 3. Gold canvas (shader)
  try {
    await initGold('gold-canvas');
  } catch (err) {
    console.warn('WebGL fallback:', err);
    document.getElementById('gold-canvas').style.display = 'none';
  }
})();
