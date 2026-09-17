# Portafolio profesional — Oliver Molina de La O

Sitio de presentación para mostrar proyectos de desarrollo web, automatización y sistemas institucionales.

## Qué puede revisar un visitante

Cada proyecto incluye:

- una descripción del problema y la solución;
- una demo visual navegable con datos ficticios;
- el enlace al repositorio público;
- capturas reales únicamente cuando pueden publicarse de forma segura.

Las demos visuales son demostraciones de interfaz y flujo. No son sistemas productivos ni contienen credenciales, bases de datos, expedientes, comprobantes ni información de usuarios reales.

## Proyectos

| Proyecto | Demo | Repositorio | Evidencia |
| --- | --- | --- | --- |
| UTyPCB — plataforma institucional | `demos/utypcb/` | [python_version](https://github.com/vmomo134/python_version) | Capturas de revisión visual, pendientes de validación final antes de publicar |
| Sistema de control de pagos | `demos/pagos/` | [school-payments-control-flask](https://github.com/vmomo134/school-payments-control-flask) | Demo segura con datos ficticios; no se publican comprobantes reales |
| CENTINELA — monitoreo de incendios | `demos/centinela/` | [centinela-wildfire-monitoring](https://github.com/vmomo134/centinela-wildfire-monitoring) | Capturas reales públicas en `assets/capturas/` |
| Fábrica de Reels | `demos/reels/` | [automated-reels-pipeline-python](https://github.com/vmomo134/automated-reels-pipeline-python) | Frames reales de salida, pendientes de validación final antes de publicar |

## Política de publicación segura

Antes de subir cambios a GitHub se revisan:

- secretos, tokens, contraseñas y URLs de conexión;
- archivos `.env`, bases de datos, respaldos y cargas de usuarios;
- comprobantes, nombres, correos, teléfonos y expedientes;
- logs, archivos temporales y configuraciones de producción.

La copia pública de `SistemaControlPagos` usa variables de entorno para la configuración sensible. El proyecto original debe conservarse privado y la credencial que estuvo embebida en el código debe rotarse.

## Contacto

- GitHub: [vmomo134](https://github.com/vmomo134)
- LinkedIn: [Oliver Molina de La O](https://www.linkedin.com/in/oliver-molina-a45b81266)

## Publicación del sitio

El sitio está preparado como página estática para GitHub Pages. Después de revisar las capturas localmente:

```powershell
cd "C:\Users\olive\Documents\Portafolio_Publico\portfolio"
git add .
git commit -m "Document portfolio projects and visual evidence"
git push origin main
```

Después, en GitHub: **Settings → Pages → Deploy from a branch → main → / (root)**.
