# Repository Guidelines

## Estructura del proyecto
- `index.html`: widget auto‑contenido (HTML, CSS y JS) para incrustar vía `iframe`.
- `licencias/`: resúmenes en Markdown de licencias (p. ej., `GPL-3.0.md`).
- `img/`: recursos gráficos (p. ej., `atribucion.svg`).
- `LICENSE.txt` y `LICENSE-CONTENT.txt`: textos completos aplicados al propio proyecto.

## Desarrollo local
- Abrir directamente: `xdg-open index.html` (o navegador de tu elección).
- Servir estático (opcional): `python3 -m http.server 8080` y visitar `http://localhost:8080/`.
- GitHub Pages: publica la carpeta en `/utilidades/licencias-libres/` y enlaza `index.html`.

## Estilo y convenciones
- HTML5 semántico, indentación de 2 espacios, atributos en minúsculas y comillas dobles.
- CSS en línea dentro de `index.html`. Nombres de clases en `kebab-case`.
- JS vanilla, `const`/`let`, funciones puras cuando sea posible; evita dependencias.
- No cargar recursos externos por CDN. Si alguna vez se usa un framework (p. ej., Tailwind), preferir build local (CLI/PostCSS) y dejarlo documentado.
- Nombres de archivos: claros y en inglés cuando sean genéricos (`img/`, `licenses/`), o con el identificador estándar de la licencia (`CC-BY-4.0.md`).

## Pruebas y verificación
- Pruebas manuales en Firefox y Chromium: funcionalidad del generador, presets (`reciprocity`, `adoption`, `intermediate`), selector de idioma y enlaces de licencia.
- Diseño responsive: inspeccionar en móvil (DevTools > Toggle device toolbar) y comprobar scroll dentro del `iframe`.
- Validación (opcional): `tidy -q -errors index.html` o validar HTML/CSS con el validador W3C.

## Commits y Pull Requests
- Mensajes de commit en imperativo y en español; sé específico. Formato sugerido: `tipo(alcance): resumen breve`.
  - Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
  - Ejemplos: `feat(ui): añadir preset "adoption"` · `fix(i18n): corregir etiqueta en ca`.
- Pull Request: descripción clara (qué y por qué), enlace a issue, captura antes/después del `index.html`, y checklist de pruebas (navegadores, responsive, enlaces válidos).
- No introducir nuevas dependencias ni CDNs sin discutirlo primero.

## Seguridad y configuración
- Enlaces relativos siempre que sea posible; no exponer tokens ni telemetría.
- Mantén la guía de licencias alineada con `README.md` y actualiza `licencias/*.md` si añades nuevas opciones.
