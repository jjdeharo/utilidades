# Repository Guidelines

## Project Structure & Module Organization
Mantén este monorepo de utilidades estáticas organizado por carpetas. Cada herramienta vive en su propio directorio con `index.html`, más `scripts.js` y `styles.css` cuando aplica (ej.: `estadistica/Boot_Media_IC/`). Los resúmenes de licencias residen en `licencias/` y los recursos gráficos en `img/`. Respeta rutas relativas y agrupa activos adicionales dentro de `assets/` si la herramienta los requiere.

## Build, Test, and Development Commands
Ejecuta las utilidades directamente con `xdg-open ruta/al/index.html`. Para servir todo el repositorio, usa `python3 -m http.server 8080` y navega a `http://localhost:8080/`. Valida el HTML opcionalmente con `tidy -q -errors index.html` para capturar problemas de marcado antes de publicar.

## Coding Style & Naming Conventions
Escribe HTML5 semántico con indentación de 2 espacios y atributos en minúsculas con comillas dobles. Prefiere CSS local (en línea dentro de `index.html` para licencias o en `styles.css` por herramienta); define clases en `kebab-case`. En JavaScript usa `const`/`let`, funciones pequeñas y nombres en `camelCase`. No cargues dependencias externas vía CDN salvo que exista un build local documentado.

## Testing Guidelines
No hay suite automatizada; realiza comprobaciones manuales en Firefox y Chromium. Verifica funcionalidad, enlaces, textos de licencia y comportamiento responsive con las DevTools. Mantén la consola sin errores, revisa los presets disponibles y confirma que los `iframe` embeben correctamente cada utilidad.

## Commit & Pull Request Guidelines
Usa mensajes en imperativo y en español siguiendo `tipo(alcance): resumen breve`, p. ej. `feat(ui): añadir preset "adoption"`. Los PR deben centrarse en una sola herramienta, describir qué cambia y por qué, enlazar issues relevantes y aportar capturas del `index.html` cuando haya cambios visuales. Añade una checklist de pruebas (navegadores, responsive, enlaces) y evita introducir dependencias nuevas sin discusión previa.

## Security & Licensing
Respeta las licencias incluidas en `LICENSE.txt` y `LICENSE-CONTENT.txt`. Cuando añadas textos o medios, confirma compatibilidad y registra nuevos documentos en `licencias/`. No expongas tokens, telemetría ni enlaces absolutos; siempre utiliza rutas relativas.
