// KRONOS-28-ITZA • 289 PLATINUM • INDEX CORE • 432Hz ONLY • NO 440Hz
// BANAMEX CLABE: 002438701524066473
// SafeCreative: 2607086319439-6XGR3V

import { theme } from './theme.js';
import { FREQUENCIES, getLabel, getColor, validateFrequency } from './cymaticFrequency.js';
import { gold } from './gold.js';

console.log(
  `%c KRONOS 289 PLATINUM • 432Hz TIERRA • BANAMEX ${theme.pagos.clabe} `,
  `background:${gold.platinum}; color:#000; font-weight:900; padding:4px 10px; border-radius:12px;`
);

export const config = {
  app: {
    name: 'KRONOS 28 ITZA - 289 PLATINUM',
    version: '10.0.0-platinum',
    freqDefault: FREQUENCIES.TIERRA,
    forbiddenFreq: 440,
  },
  frequencies: {
    tierra: { hz: 432, label: getLabel(432), color: getColor(432), min: 'MIN1' },
    corazon: { hz: 528, label: getLabel(528), color: getColor(528), min: 'MIN2' },
    cosmos: { hz: 963, label: getLabel(963), color: getColor(963), min: 'MIN3' },
    vida: { hz: 0, label: getLabel(0), color: getColor(0), min: 'MIN4' },
  },
  theme: theme,
  gold: gold,
  pagos: {
    banco: 'BANAMEX',
    clabe: '002438701524066473',
    beneficiario: 'Marco Antonio Rojas Valdovinos',
    monto: 150000,
    whatsapp: '7225862335',
    whatsappLink: 'https://wa.me/527225862335',
  },
  legal: {
    safecreative: '2607086319439-6XGR3V',
    sha256: '41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3',
    nom151: true,
    iso25010: true,
  },
  getFreq(hz) {
    const valid = validateFrequency(hz);
    return {
      hz: valid,
      label: getLabel(valid),
      color: getColor(valid),
      gold: gold.getForFreq(valid),
    };
  },
};

if (typeof window !== 'undefined') {
  window.KRONOS_289 = config;
  window.KRONOS_BANAMEX = config.pagos.clabe;
}

export default config;
