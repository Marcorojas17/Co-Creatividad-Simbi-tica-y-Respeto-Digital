// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036
// core-dsp/frequency_engine.js
import { chladniMode, cymaticSample, frequencyAt, BASE_FREQUENCY_HZ, FRAME_BUDGET_MS } from '../cymaticFrequency.js';

export const BASE = BASE_FREQUENCY_HZ;
export const BUDGET_MS = FRAME_BUDGET_MS;

export function sample(x, y, t, f = BASE_FREQUENCY_HZ) {
  return cymaticSample(x, y, t, f);
}

export function chladni(x, y, m = 3, n = 1, f = BASE_FREQUENCY_HZ) {
  return chladniMode(x, y, m, n, f);
}

export function freqFromNote(note) {
  return frequencyAt(note);
}

export default {
  BASE,
  BUDGET_MS,
  sample,
  chladni,
  freqFromNote
};
