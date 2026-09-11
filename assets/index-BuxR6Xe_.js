// GUARDIÁN KRONOS - EL QUE BLOQUEA
if (window.top !== window.self) {
  document.body.innerHTML = `
    <div style="background:#000;color:#FFD60A;display:flex;align-items:center;justify-content:center;height:100vh;font-family:monospace;text-align:center">
      <div>
        <h1>⬢ KRONOS 2099</h1>
        <h2>ACCESO DENEGADO</h2>
        <p>ORIGEN NO AUTORIZADO</p>
        <p>SEAL: 2607086319439-2036-GPG</p>
      </div>
    </div>
  `;
  throw new Error("KRONOS GUARD BLOCKED");
}
