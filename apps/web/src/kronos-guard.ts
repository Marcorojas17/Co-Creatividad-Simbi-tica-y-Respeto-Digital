export const KRONOS_SEAL = "2607086319439-2036-GPG";
export const verifyOrigin = () => {
  const ok = ["vercel.app", "localhost", "127.0.0.1"];
  const isOk = ok.some(d => location.hostname.includes(d));
  if (!isOk) {
    document.body.innerHTML = "<div style='min-height:100vh;background:#000;color:#fde68a;display:grid;place-items:center;font-family:monospace;padding:2rem;text-align:center'><div><h1>⬢ KRONOS 2099</h1><p>ACCESO DENEGADO - ORIGEN NO AUTORIZADO</p><p>SafeCreative 2607086319439 - Vigencia 2036</p></div></div>";
  }
};
