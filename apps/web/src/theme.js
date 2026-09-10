export const theme = {
  // ORO 289 PLATINUM - TU ORO REAL
  gold: '#D4AF37',
  goldLight: '#FFD700',
  goldSoft: '#d6a84f',
  goldDark: '#8B6914',
  
  // FONDOS PREMIUM
  bg: '#040a14',
  bgBlack: '#000000',
  bgDark: '#0a0a0a',
  bgCard: '#111111',
  bgModal: 'rgba(0,0,0,0.92)',

  // NEÓN KRONOS
  cyan: '#6DFFFF',
  cyanNeon: '#00D9FF',
  green: '#00FF9D',
  violet: '#9D00FF',
  pink: '#ff7a90',
  white: '#ffffff',

  // FRECUENCIAS OFICIALES - NOM-008
  freq: {
    tierra: { hz: 432, color: '#D4AF37', label: 'Tierra • Om • Círculo de la Vida', min: 'MIN1' },
    corazon: { hz: 528, color: '#6DFFFF', label: 'Corazón • Merkaba • Architect', min: 'MIN2' },
    cosmos: { hz: 963, color: '#00FF9D', label: 'Cosmos • Túnel Cuántico', min: 'MIN3' },
    vida: { hz: 0, color: '#ffffff', label: 'Vida Líquida • Diamante Eterno', min: 'MIN4' },
  },

  // REGISTRO LEGAL 10/10
  legal: {
    safecreative: '2607086319439-6XGR3V',
    sha256: '41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3',
    nom151: true,
    qtsa: '2022',
    iso25010: '46.7kb | 131ms | TURBO 85% cache',
    iso9241: 'WCAG 4.5:1',
  },

  // PAGOS BANAMEX - OFICIAL
  pagos: {
    banco: 'BANAMEX',
    beneficiario: 'Marco Antonio Rojas Valdovinos',
    clabe: '002438701524066473',
    monto: 150000,
    moneda: 'MXN',
    concepto: 'LEGADO 289 + nombre',
    whatsapp: '7225862335',
    whatsappLink: 'https://wa.me/527225862335',
    emails: ['marco.a.rojas.v@hotmail.com', 'proyectokronos@hotmail.com'],
  },

  // BOOTH ZAMNA
  booth: {
    madera: 'Pino certificado',
    qr: 'Tallado láser',
    dome: '60° Dome',
    cymatics: true,
  },

  // SHADOWS & GLOW - HD 8K
  glow: {
    gold: '0 0 20px rgba(212,175,55,0.6)',
    cyan: '0 0 20px rgba(0,217,255,0.6)',
    green: '0 0 20px rgba(0,255,157,0.6)',
    violet: '0 0 30px rgba(157,0,255,0.8)',
  }
};

// Helper para usar en tus canvas
export const getThemeColor = (type) => {
  switch(type) {
    case 'MIN1': return theme.freq.tierra.color;
    case 'MIN2': return theme.freq.corazon.color;
    case 'MIN3': return theme.freq.cosmos.color;
    case 'MIN4': return theme.freq.vida.color;
    default: return theme.gold;
  }
};

export const getPaymentMessage = (codigo) => 
  `Hola Marco, ya transferí BANAMEX a la CLABE ${theme.pagos.clabe}. Mi código es: ${codigo} - Monto $150K - Adjunto comprobante`;

export default theme;
