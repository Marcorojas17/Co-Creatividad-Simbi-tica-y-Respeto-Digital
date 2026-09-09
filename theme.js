import theme from './design-system/theme.json' assert { type: 'json' };
export const COLORS = theme.colors;
export const GLASS = theme.glass;
export const PERF = theme.performance;
export const CYMATIC = theme.cymatic;
export const PWA = theme.pwa;

export function applyThemeToRoot() {
  const root = document.documentElement;
  root.style.setProperty('--bg', COLORS.bg);
  root.style.setProperty('--bg-deep', COLORS.bg_deep);
  root.style.setProperty('--gold', COLORS.gold);
  root.style.setProperty('--gold-glow', COLORS.gold_glow);
  root.style.setProperty('--text', COLORS.text);
  root.style.setProperty('--text-muted', COLORS.text_muted);
  root.style.setProperty('--glass-bg', GLASS.bg);
  root.style.setProperty('--glass-blur', GLASS.blur);
  root.style.setProperty('--glass-border', GLASS.border);
}

if (typeof window !== 'undefined') {
  applyThemeToRoot();
}
