export const a11yInit = () => {
  document.documentElement.lang = 'es-MX';
  const style = document.createElement('style');
  style.innerHTML = `:focus-visible{outline:2px solid #fde68a; outline-offset:2px}`;
  document.head.appendChild(style);
};
