// @CERT: NOM-024-2019 aviso privacidad consentimiento titular | NOM-151 hash sello tiempo conservacion integridad | ISO-27001:2022 gpg crypto seal integrity cifrado trace | ISO-9001:2015 changelog version audit calidad test | ISO-27017 vercel sw.js manifest pwa offline | KRONOS-2099 440 cymatic kronos 2607086319439 voz - 10 AÑOS ADELANTO 2036
import numpy as np
import matplotlib.pyplot as plt

FREQUENCY_BASE = 440

class ChladniPlate:
    def __init__(self, size=500, mode_m=4, mode_n=1):
        self.size = size
        self.m = mode_m
        self.n = mode_n
        x = np.linspace(-1, 1, size)
        y = np.linspace(-1, 1, size)
        self.X, self.Y = np.meshgrid(x, y)

    def pattern(self, frequency=FREQUENCY_BASE):
        factor = frequency / FREQUENCY_BASE
        return np.sin(np.pi * self.m * self.X * factor) * np.sin(np.pi * self.n * self.Y * factor)

    def export_to_png(self, filename="chladni.png", dpi=150):
        Z = self.pattern()
        fig, ax = plt.subplots(figsize=(8,8))
        ax.imshow(Z, cmap='inferno', extent=(-1,1,-1,1), origin='lower', alpha=0.8)
        ax.contour(self.X, self.Y, Z, levels=[0], colors='#d4af37', linewidths=1.2)
        ax.set_facecolor('#070708')
        ax.axis('off')
        plt.savefig(filename, dpi=dpi, bbox_inches='tight', pad_inches=0)
        plt.close()
        print(f"✅ {filename} exportado")

if __name__ == "__main__":
    plate = ChladniPlate()
    plate.export_to_png()
