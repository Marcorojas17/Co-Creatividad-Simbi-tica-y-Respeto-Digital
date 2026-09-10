export const a11yInit = () => {
  document.documentElement.lang = 'es-MX';
  // focus visible militar
  const style = document.createElement('style');
  style.innerHTML = `:focus-visible{outline:2px solid #fde68a; outline-offset:2px} [aria-hidden]{pointer-events:none}`;
  document.head.appendChild(style);
};
