// KRONOS-28-ITZA • 289 PLATINUM • FRECUENCIAS SAGRADAS • NO 440Hz
// BANAMEX CLABE: 002438701524066473
// SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3
// SafeCreative: 2607086319439-6XGR3V

export const FREQUENCIES = {
  TIERRA: 432,
  CORAZON: 528,
  COSMOS: 963,
  VIDA: 0,
};

export const SOLFEGGIO = [174, 285, 396, 417, 528, 639, 741, 852, 963];

export const SCHUMANN = 7.83;

export const FORBIDDEN_FREQ = 440;

export function getLabel(hz) {
  const n = Number(hz);
  if (n <= 0) return `VIDA LÍQUIDA • Diamante Eterno • MIN4`;
  if (n <= 444) return `${n}Hz TIERRA • Om • Círculo Vida • MIN1`;
  if (n <= 600) return `${n}Hz CORAZÓN • 528 • Merkaba • MIN2`;
  return `${n}Hz COSMOS • 963 • Portal Cuántico • MIN3`;
}

export function getColor(hz) {
  const n = Number(hz);
  if (n <= 444) return '#D4AF37';
  if (n <= 600) return '#6DFFFF';
  return '#00FF9D';
}

export function getMin(hz) {
  const n = Number(hz);
  if (n <= 0) return 'MIN4';
  if (n <= 444) return 'MIN1';
  if (n <= 600) return 'MIN2';
  return 'MIN3';
}

export function isForbidden(hz) {
  return Number(hz) === 440;
}

export function validateFrequency(hz) {
  if (isForbidden(hz)) {
    console.warn(`[KRONOS 289] 440Hz PROHIBIDO - Rockefeller 1939 - Usa 432Hz`);
    return 432;
  }
  return hz;
}

export const LEGAL = {
  safecreative: '2607086319439-6XGR3V',
  sha256: '41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3',
  banamex: '002438701524066473',
  whatsapp: '7225862335',
};

export default FREQUENCIES;
