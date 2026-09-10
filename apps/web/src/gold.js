// KRONOS-28-ITZA • 289 PLATINUM • ORO OFICIAL
// BANAMEX: 002438701524066473

export const gold = {
  platinum: '#D4AF37',
  light: '#FFD700',
  soft: '#d6a84f',
  dark: '#8B6914',
  deep: '#5a4a0a',
  
  cymatic: {
    432: '#D4AF37',
    528: '#6DFFFF',
    963: '#00FF9D',
    vida: '#ffffff',
  },

  glow: {
    platinum: '0 0 20px rgba(212,175,55,0.6)',
    strong: '0 0 40px rgba(212,175,55,0.8)',
    soft: '0 0 15px rgba(212,175,55,0.3)',
  },

  gradient: {
    gold: 'linear-gradient(135deg, #8B6914 0%, #D4AF37 50%, #FFD700 100%)',
    dark: 'linear-gradient(135deg, #040a14 0%, #0a0a0a 50%, #000 100%)',
    orb: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
  },

  getForFreq(hz) {
    const n = Number(hz);
    if (n <= 0) return this.cymatic.vida;
    if (n < 500) return this.cymatic[432];
    if (n < 700) return this.cymatic[528];
    return this.cymatic[963];
  },

  getGlow(hz) {
    const color = this.getForFreq(hz);
    if (color === '#D4AF37') return this.glow.platinum;
    if (color === '#6DFFFF') return '0 0 20px rgba(0,217,255,0.6)';
    return '0 0 20px rgba(0,255,157,0.6)';
  },

  legal: {
    clabe: '002438701524066473',
    banco: 'BANAMEX',
    sha256: '41a3683b',
  }
};

export const themeGold = gold;

export default gold;
