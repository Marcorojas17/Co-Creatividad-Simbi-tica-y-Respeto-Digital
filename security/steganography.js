// security/steganography.js
import { seal } from './crypto_seal.js';

export async function hide(text) {
  const sealed = await seal(text);
  const encoded = btoa(JSON.stringify(sealed));
  return encoded; // Simula ocultamiento (en producción, se incrusta en imagen)
}

export function reveal(encoded) {
  try {
    const decoded = JSON.parse(atob(encoded));
    return decoded;
  } catch {
    return null;
  }
}

export function hideInImage(imageData, text) {
  // Implementación LSB mínima – solo para demostración
  const data = imageData.data;
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);
  for (let i = 0; i < Math.min(bytes.length, data.length / 4); i++) {
    data[i * 4] = (data[i * 4] & 0xFE) | ((bytes[i] >> 7) & 1);
  }
  return imageData;
}
