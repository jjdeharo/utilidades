# Repository Guidelines

## Estructura del proyecto
- Monorepo de utilidades web estáticas. Cada herramienta vive en su carpeta con `index.html` y, si aplica, `scripts.js` y `styles.css` (ej.: `estadistica/Boot_Media_IC/index.html`, `grup_coop/`).
- Raíz: `README.md`/`index.md` (texto principal), `git.sh` (atajo para commits), subcarpetas temáticas (`estadistica/`, `prompts_edu/`, `licencias-libres/`, etc.), y algunos activos (`*.png`, `*.mp3`).
- No hay build ni framework: HTML/CSS/JS vanilla servidos como archivos estáticos.

## Desarrollo, build y pruebas locales
- Abrir directo en navegador: `xdg-open ruta/a/index.html`.
- Servir estático (útil para rutas relativas): `python3 -m http.server 8080` y visitar `http://localhost:8080/`.
- Commits rápidos: `bash git.sh` (pide mensaje, hace `add/commit/push`). Alternativa manual: `git add . && git commit -m "mensaje" && git push`.
- Publicación (GitHub Pages u otro estático): subir la carpeta correspondiente y apuntar a su `index.html`.

## Estilo de código y convenciones
- HTML5 semántico, indentación de 2 espacios, atributos en minúsculas y comillas dobles.
- CSS: preferible local; clases en `kebab-case`. Evitar CDNs. Si se usa Tailwind, compilar localmente (CLI/PostCSS), no `cdn.tailwindcss.com`.
- JS: vanilla, `const`/`let`, funciones pequeñas y puras. Nombres en `camelCase` para variables/funciones; archivos en `kebab-case`.
- Estructura por carpeta: `index.html`, `scripts.js`, `styles.css`, `assets/` cuando haya recursos.

## Pruebas
- Verificación manual en Firefox y Chromium: interacción, estados de error y enlaces.
- Responsive: DevTools → modo dispositivo; comprobar tipografías, scroll y toques.
- Consola sin errores y rutas relativas correctas. Validación opcional: `tidy -q -errors index.html` o validador W3C.
- Cobertura: no aplica; priorizar casos de uso de cada herramienta y accesibilidad básica (etiquetas, contrastes, `alt`).

## Commits y Pull Requests
- Mensajes en imperativo y en español. Sugerido: `tipo(alcance): resumen breve` (tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`).
- Incluir en el PR: qué cambia y por qué, carpeta afectada, captura antes/después (si hay UI) y pasos de prueba.
- Mantener cambios acotados a una utilidad por PR. No introducir dependencias ni CDNs sin discutir.

## Seguridad y licencias
- Usar rutas relativas; no exponer tokens ni telemetría. Medios (`.mp3`, imágenes) con licencias adecuadas.
- Respetar y actualizar `licencias-libres/` si se añaden referencias o textos de licencia.
