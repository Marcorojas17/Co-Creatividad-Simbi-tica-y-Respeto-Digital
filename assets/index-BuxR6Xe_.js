// KRONOS 2099 - GUARDIAN MILITAR v3.1
// SEAL: 2607086319439-2036-GPG | 440Hz | NOM-151

const SEAL_OFICIAL = "2607086319439-2036-GPG";
const ORIGINS_AUTORIZADOS = [
  "marcorojas17.github.io",
  "co-creatividad-simbi-tica-y-respeto-digital.vercel.app",
  "localhost",
  "127.0.0.1"
];

const ORIGINS_LEGITIMOS_CRAWLER = [
  "linkedin.com",
  "whatsapp.com",
  "facebook.com",
  "twitter.com",
  "discord.com",
  "slack.com"
];

export function activarGuardianMilitar() {
  const isEmbedded = window.top !== window.self;
  const referrer = document.referrer;
  const currentHost = window.location.hostname;
  
  // 1. Validación SEAL criptográfica (no solo string)
  const sealValid = localStorage.getItem("KRONOS_SEAL") === SEAL_OFICIAL || 
                    new URLSearchParams(window.location.search).get("seal") === SEAL_OFICIAL ||
                    document.querySelector('meta[name="kronos-seal"]')?.getAttribute("content") === SEAL_OFICIAL;

  // 2. Si es crawler legítimo (LinkedIn, WhatsApp) -> DEJAR PASAR, no bloquear OG
  const esCrawler = ORIGINS_LEGITIMOS_CRAWLER.some(o => referrer.includes(o));
  if (esCrawler && isEmbedded) {
    console.log("KRONOS MILITAR: Crawler legítimo detectado, acceso permitido para OG");
    return true;
  }

  // 3. Si está embebido en origen NO autorizado
  if (isEmbedded) {
    const parentOrigin = referrer ? new URL(referrer).hostname : "desconocido";
    const esAutorizado = ORIGINS_AUTORIZADOS.some(o => parentOrigin.includes(o) || currentHost.includes(o));

    if (!esAutorizado) {
      // GRADO MILITAR: No borra body, solo sobrepone capa de advertencia no destructiva
      const capa = document.createElement("div");
      capa.id = "kronos-militar-shield";
      capa.innerHTML = `
        <div style="position:fixed;top:0;left:0;right:0;z-index:2147483647;background:rgba(0,0,0,0.92);border-bottom:3px solid #FFD60A;color:#FFD60A;padding:12px;text-align:center;font-family:monospace;font-weight:900">
          ⬢ KRONOS 2099 - ORIGEN EXTERNO NO VERIFICADO - ${parentOrigin} 
          <br><span style="font-size:10px;color:#fff">SEAL REQUERIDO: ${SEAL_OFICIAL} | <a href="https://marcorojas17.github.io/Co-Creatividad-Simbi-tica-y-Respeto-Digital/SEAL.txt" style="color:#fde68a">VALIDAR AQUÍ</a> | 
          <button onclick="this.parentElement.parentElement.remove()" style="background:#FFD60A;color:#000;border:0;padding:4px 8px;border-radius:4px;cursor:pointer;margin-left:10px">ENTENDIDO</button></span>
        </div>
      `;
      document.body.prepend(capa);
      
      // Log militar para forensics
      console.warn(`[KRONOS MILITAR] Intento de embed no autorizado desde: ${parentOrigin} | SEAL: ${sealValid ? 'OK' : 'FALTA'}`);
      
      // No bloquea app, solo avisa - deja el contenido vivo abajo
      return false;
    }
  }

  console.log("⬢ KRONOS 2099 MILITAR ACTIVO - VERIFIED");
  return true;
}
