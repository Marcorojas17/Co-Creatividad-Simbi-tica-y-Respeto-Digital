# Co-Creatividad Simbiótica y Respeto Digital
### KRONOS-28-ITZA-CYMATIC-ELITE

[![ISO 9001](https://img.shields.io/badge/ISO%209001-Aligned-blue?style=for-the-badge)](#estado-del-proyecto)
[![ISO 27001](https://img.shields.io/badge/ISO%2027001-Prepared-blue?style=for-the-badge)](#estado-del-proyecto)
[![NOM-151](https://img.shields.io/badge/NOM--151-Legal%20review%20required-lightgrey?style=for-the-badge)](#trazabilidad-técnica--prototipo)
[![PWA](https://img.shields.io/badge/PWA-Offline%20ready-blue?style=for-the-badge)](#estado-del-proyecto)
[![CI](https://img.shields.io/badge/CI-Configured-green?style=for-the-badge)](#estado-del-proyecto)

> *Plataforma experimental* de visualización cimática, co-creatividad digital y trazabilidad técnica.  
> Diseñada con controles de calidad y seguridad alineados a ISO 9001 e ISO/IEC 27001, y preparada para su validación técnica y auditoría independiente.

---

## ⚠️ Aviso legal

La alineación declarada *no constituye certificación ISO, certificación NOM, garantía de validez jurídica ni declaración de infraestructura crítica*.  
Las referencias a *NOM-151, NOM-024, valor probatorio, disponibilidad, seguridad o rendimiento* requieren validación técnica, legal y operativa independiente.  
Este README es un borrador técnico para revisión y no debe interpretarse como una declaración de cumplimiento formal.

---

## 🌐 Live Demo

- *Landing page:* https://Marcorojas17.github.io/Co-Creatividad-Simbiotica-y-Respeto-Digital/
- *Visualizador en vivo:* https://Marcorojas17.github.io/Co-Creatividad-Simbiotica-y-Respeto-Digital/live.html

> El visualizador requiere *micrófono* y *HTTPS o localhost*. Usa navegador compatible con `MediaDevices` y `AudioContext`.

---

## 📊 Estado del proyecto

| Área | Estado actual | Evidencia requerida |
|------|---------------|----------------------|
| PWA offline | Por verificar | Pruebas en navegadores y móviles |
| Visualizador cimático | Prototipo funcional | Pruebas de frecuencia y estabilidad |
| CI/CD | Configurado parcialmente | Ejecuciones exitosas en GitHub Actions |
| SBOM CycloneDX | Por generar y verificar | Archivo SBOM y validación reproducible |
| Firma digital | Prototipo técnico GPG | Verificación y custodia de claves |
| Kubernetes | Manifiestos por validar | `kubectl dry-run` exitoso |
| Benchmark GPU | Pendiente reproducible | Reporte con dispositivo y condiciones |
| ISO 9001 | Alineación documental | Auditoría independiente |
| ISO/IEC 27001 | Preparación técnica | SGSI, riesgos, controles y evidencias |
| NOM-151 | Revisión legal pendiente | Proveedor y validación aplicables |
| Certificación formal | No disponible | Auditoría de organismo competente |

---

## 🚀 Inicio rápido

```bash
git clone https://github.com/Marcorojas17/Co-Creatividad-Simbiotica-y-Respeto-Digital.git
cd Co-Creatividad-Simbiotica-y-Respeto-Digital

git status
find . -maxdepth 3 -type f | sort

# Servidor HTTP básico (Python 3)
python3 -m http.server 8000
