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
| UTyPCB — plataforma institucional | `demos/utypcb/` | [institutional-management-platform-django](https://github.com/vmomo134/institutional-management-platform-django) | 12 capturas reales en `assets/capturas/utypcb-real/`: portal del alumno, sitio público, transparencia, administración de Django y centro docente; datos de una base SQLite de demo |
| Sistema de control de pagos | `demos/pagos/` | [school-payments-control-flask](https://github.com/vmomo134/school-payments-control-flask) | 9 capturas reales en `assets/capturas/pagos-real/`: acceso, panel del director con gráficas, morosidad, gestión de pagos, recibo con folio y bitácora; 120 alumnos y 1 200 pagos ficticios en SQLite aislado |
| CENTINELA — monitoreo de incendios | `demos/centinela/` | [centinela-wildfire-monitoring](https://github.com/vmomo134/centinela-wildfire-monitoring) | 5 capturas reales en `assets/capturas/centinela-real/`: mapa y alertas, fuentes satelitales, zonas, bitácora y vista móvil |
| Fábrica de Reels | `demos/reels/` | [automated-reels-pipeline-python](https://github.com/vmomo134/automated-reels-pipeline-python) | Frames reales en `assets/capturas/reels-real/` de una ejecución real del pipeline |

## Política de publicación segura

El archivo `.gitignore` bloquea archivos sensibles comunes. Antes de subir cambios a GitHub se revisan:

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
cd portfolio
git add .
git commit -m "Document portfolio projects and visual evidence"
git push origin main
```

Después, en GitHub: **Settings → Pages → Deploy from a branch → main → / (root)**.
