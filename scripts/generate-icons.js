#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = './';

const sizes = [192, 512];
const svgTemplate = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#070708" />
  <text x="50%" y="48%" font-family="Georgia,serif" font-size="${size*0.55}" fill="#d6a84f" text-anchor="middle" dy=".35em">◍</text>
  <text x="50%" y="80%" font-family="monospace" font-size="${size*0.07}" fill="#9aa8c2" text-anchor="middle">KRONOS</text>
</svg>`;

for (const size of sizes) {
  const svg = svgTemplate(size);
  const filename = `icon-${size}.png`;
  // Nota: necesita sharp instalado para convertir SVG a PNG
  console.log(`Generando ${filename}... (requiere sharp)`);
}
