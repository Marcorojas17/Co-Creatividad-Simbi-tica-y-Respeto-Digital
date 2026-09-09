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
