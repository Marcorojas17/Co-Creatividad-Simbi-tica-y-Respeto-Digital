// KRONOS 28 ITZA • 8 GATITOS GUARDIANES • 289 PLATINUM
// Todos son gatos - Templo de Diamante Eterno

export const GATOS_GUARDIANES = [
  {
    id: 1, nombre: "ITZA DORADO", emoji: "🐱",
    color: "Dorado", hex: "#D4AF37", freq: 432, 
    tipo: "Tabby Naranja", 
    aura: "Oro puro • Mandala 432Hz",
    rol: "Líder del Círculo • MIN1 Tierra",
    poder: "Ronronea a 432Hz y abre el templo",
    miau: "Miauuu 432Hz... Om..."
  },
  {
    id: 2, nombre: "NIEVE", emoji: "🐱",
    color: "Blanco Nieve", hex: "#FFFFFF", freq: 528,
    tipo: "Persa Blanco",
    aura: "Cyan • Merkaba 528Hz",
    rol: "Guardiana del Corazón • MIN2",
    poder: "Guarda recuerdos familiares en su pelito 100 años",
    miau: "Miau 528Hz... tu familia vive..."
  },
  {
    id: 3, nombre: "MOKA", emoji: "🐱",
    color: "Café Rayado", hex: "#d6a84f", freq: 432,
    tipo: "Tabby Marrón",
    aura: "Cyan • Cubo Metatron",
    rol: "Guardián del Código",
    poder: "Esconde tu SHA-256 41a3683b en sus rayitas",
    miau: "Miau... tu código está a salvo..."
  },
  {
    id: 4, nombre: "CALICÓ", emoji: "🐱",
    color: "Tricolor", hex: "#FFD700", freq: 963,
    tipo: "Calicó con moño rosa",
    aura: "Oro + Verde • Flor de Vida",
    rol: "Guardiana de la Vida Líquida • MIN4",
    poder: "Tres colores = tres frecuencias 432/528/963",
    miau: "Miau tricolor... vida eterna..."
  },
  {
    id: 5, nombre: "GRIS", emoji: "🐱",
    color: "Gris Platino", hex: "#8B8B8B", freq: 963,
    tipo: "British Shorthair Gris",
    aura: "Oro + Cyan • Doble aura",
    rol: "Guardián del PWA • 100 años",
    poder: "Su ronroneo activa el cache offline",
    miau: "Miau 963Hz... siempre online..."
  },
  {
    id: 6, nombre: "NOIR", emoji: "🐈‍⬛",
    color: "Negro", hex: "#000000", freq: 963,
    tipo: "Bombay Negro",
    aura: "Verde Esmeralda • Portal Cuántico",
    rol: "Guardián del SHA-256 • Noche",
    poder: "Protege el SafeCreative 2607086319439 en la oscuridad",
    miau: "Miau... tu sello nadie lo roba..."
  },
  {
    id: 7, nombre: "CREMITA", emoji: "🐱",
    color: "Crema", hex: "#FFF8DC", freq: 432,
    tipo: "Ragdoll Crema",
    aura: "Oro • Círculo Vida",
    rol: "Guardiana del BANAMEX",
    poder: "Cuando llega $150K MXN ronronea más fuerte",
    miau: "Miau... CLABE 002438701524066473 recibida..."
  },
  {
    id: 8, nombre: "CANELITA", emoji: "🐱",
    color: "Naranja Claro", hex: "#FFA500", freq: 528,
    tipo: "Tabby Naranja",
    aura: "Verde + Cyan • Merkaba dual",
    rol: "Mensajera de Patrocinadores",
    poder: "Lleva tu WhatsApp 7225862335 en su collar verde",
    miau: "Miau 528Hz... patrocinio en camino..."
  }
];

export const getGatoPorFrecuencia = (hz: number) => {
  return GATOS_GUARDIANES.filter(g => g.freq === hz);
};

export const getGatoRandom = () => {
  return GATOS_GUARDIANES[Math.floor(Math.random() * 8)];
};
