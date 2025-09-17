const I18N = {
  "es": {
    "ui": {
      "title": "Generador de licencias para recursos educativos abiertos (REA)",
      "lead": "Elige las licencias recomendadas para contenidos y/o código y genera un prompt listo para pedir el texto de licencia (README / página web).",
      "presets": {
        "reciprocity": "Reciprocidad (recomendado)",
        "adoption": "Máxima adopción",
        "intermediate": "Intermedia"
      },
      "presetTitles": {
        "reciprocity": "CC BY-SA + AGPL v3",
        "adoption": "CC BY + Apache 2.0",
        "intermediate": "CC BY-SA + MPL 2.0"
      },
      "resourceType": "Tipo de recurso",
      "options": {
        "both": "Ambos (contenidos + código)",
        "content": "Solo contenidos educativos",
        "code": "Solo código (apps/herramientas)"
      },
      "contentLicenses": "Licencias para contenidos educativos",
      "contentLicenseLabels": {
        "CC BY-SA 4.0": "CC BY-SA 4.0 — Atribución + compartir igual (recomendada)",
        "CC BY 4.0": "CC BY 4.0 — Atribución",
        "CC BY-NC-SA 4.0": "CC BY-NC-SA 4.0 — No comercial (con reservas)"
      },
      "contentDetails": [
        "• CC BY-SA 4.0: uso libre, requiere atribución y compartir con la misma licencia.",
        "• CC BY 4.0: máxima difusión con atribución; las mejoras pueden cerrarse.",
        "• CC BY-NC-SA 4.0: prohíbe usos comerciales; «NC» puede generar ambigüedad."
      ],
      "codeLicenses": "Licencias para código",
      "codeLicenseLabels": {
        "AGPL v3": "AGPL v3 — Copyleft fuerte orientado a red (recomendada)",
        "MPL 2.0": "MPL 2.0 — Copyleft moderado",
        "Apache 2.0": "Apache 2.0 — Adopción amplia",
        "MIT": "MIT — Simplicidad"
      },
      "codeDetails": [
        "• AGPL v3: garantiza que las mejoras permanezcan libres (copyleft) e incluye uso a través de red.",
        "• MPL 2.0: obliga a compartir cambios por archivo; permite combinar con código cerrado.",
        "• Apache 2.0: permisiva, sin obligación de devolver mejoras; protección de patentes.",
        "• MIT: muy permisiva y simple, sin garantías de retorno ni patentes."
      ],
      "codeLinkHint": "Dónde enlazar la licencia del código",
      "codeLinkOptions": {
        "archivo": "Crear LICENSE.txt y enlazar al archivo",
        "oficial": "Enlazar al sitio oficial de la licencia"
      },
      "detailsLabel": "Ver detalles",
      "attribution": "Datos opcionales para atribución",
      "fields": {
        "title": "Título o proyecto",
        "titlePlaceholder": "p. ej., App de ecuaciones de 1º Bach",
        "author": "Autoría",
        "authorPlaceholder": "p. ej., Ana Pérez",
        "year": "Año",
        "url": "URL del recurso",
        "urlPlaceholder": "https://tu-centro.edu/recurso",
        "authorUrl": "Enlace del autor",
        "authorUrlPlaceholder": "https://tu-perfil-o-autor.example",
        "language": "Idioma"
      },
      "outputsLegend": "Resultados generados",
      "outputsIntro": "Copia el formato que necesites: prompt para IA, texto listo para pegar o HTML con enlaces.",
      "format": {
        "prompt": "Prompt para IA",
        "promptDesc": "(para pedir a una IA que redacte el aviso)",
        "text": "Texto plano",
        "textDesc": "(para pegar directamente en documentos o webs)",
        "html": "Bloque HTML",
        "htmlDesc": "(para incrustar en tu página con enlaces oficiales)",
        "copy": "Copiar",
        "copied": "Copiado",
        "copyFallback": "Copia manual: Ctrl+C"
      },
      "licensesIncluded": "Licencias incluidas (enlaces oficiales)",
      "licensesList": [
        "• CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/",
        "• CC BY 4.0: https://creativecommons.org/licenses/by/4.0/",
        "• CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "• AGPL v3: https://www.gnu.org/licenses/agpl-3.0.html",
        "• MPL 2.0: https://www.mozilla.org/MPL/2.0/",
        "• Apache 2.0: https://www.apache.org/licenses/LICENSE-2.0",
        "• MIT: https://opensource.org/license/mit"
      ],
      "clear": "Borrar datos",
      "footer": {
        "owner": "© 2025",
        "license": "Licencia: "
      }
    },
    "prompt": {
      "respondIn": "Responde en: {{language}}.",
      "intro": "Añade a mi app educativa las licencias recomendadas para proyectos de código y contenidos.",
      "attribution": "Datos para la atribución: {{data}}.",
      "attribLabels": {
        "title": "título",
        "author": "autoría",
        "year": "año",
        "url": "enlace"
      },
      "codeTitle": "Para el código:",
      "apply": "- Aplica la licencia {{license}}.",
      "fileSteps": [
        "- Crea un archivo LICENSE.txt con el texto completo de la licencia.",
        "- Añade una nota breve al inicio de cada archivo de código indicando la licencia.",
        "- Menciona la licencia también en la documentación del proyecto."
      ],
      "fileFooterSingle": "- En el pie de la página principal o en un lugar destacado del proyecto, muestra “Licencia del código: {{license}}” y enlaza ese texto a LICENSE.txt.",
      "fileFooterBoth": "- En el pie, incluye “Licencia del código: {{license}}” enlazando a LICENSE.txt (ver Línea 2).",
      "officialIntro": "- No crees LICENSE.txt; enlaza el nombre de la licencia al texto oficial: {{link}}.",
      "officialFooterSingle": "- En el pie de la página principal o en un lugar destacado del proyecto, muestra “Licencia del código: {{license}}” y enlaza ese texto al sitio oficial.",
      "officialFooterBoth": "- En el pie, incluye “Licencia del código: {{license}}” enlazando al sitio oficial (ver Línea 2).",
      "contentTitle": "Para los contenidos educativos (textos, ejercicios, vídeos, imágenes):",
      "contentApply": "- Aplica la licencia {{license}}.",
      "contentFooterBoth": "- En el pie, añade “Esta obra está bajo licencia {{license}}” enlazando al sitio oficial: {{link}}.",
      "contentFooterSingleIntro": "- En el pie de la página principal o en un lugar destacado del proyecto, añade el texto:",
      "contentFooterSingleLine": "  “Esta obra está bajo licencia {{license}}” con el enlace oficial a la licencia correspondiente: {{link}}.",
      "contentIcon": "- Si es posible, acompáñalo con el icono oficial de la licencia.",
      "footerTitle": "Pie de página (centrado):",
      "footerLine1Link": "- Línea 1: \"© {{value}}\" con el nombre enlazando a {{url}}.",
      "footerLine1": "- Línea 1: \"© {{value}}\".",
      "footerLine2File": "- Línea 2: \"Licencia del código: {{code}} (el texto de la licencia enlaza a LICENSE.txt) · Contenido: {{content}} (el texto de la licencia enlaza a {{link}})\".",
      "footerLine2Official": "- Línea 2: \"Licencia del código: {{code}} (el texto de la licencia enlaza al sitio oficial) · Contenido: {{content}} (el texto de la licencia enlaza a {{link}})\".",
      "footerCodeOnlyFile": "- Pie: Licencia del código: {{license}} (enlazar a LICENSE.txt).",
      "footerCodeOnlyOfficial": "- Pie: Licencia del código: {{license}} (enlazar a {{link}}).",
      "footerContentOnly": "- Pie: Esta obra está bajo licencia {{license}} (enlazar a {{link}})."
    },
    "plain": {
      "headingFallback": "Licencias del proyecto",
      "authorLabel": "Autoría",
      "resourceLabel": "Recurso",
      "codeWithLink": "El código de esta aplicación está disponible bajo licencia {{license}}. Consulta el texto completo en {{link}}.",
      "codeNoLink": "El código de esta aplicación está disponible bajo licencia {{license}}.",
      "contentWithLink": "Los contenidos educativos (textos, ejercicios, vídeos e imágenes) están bajo licencia {{license}}. Consulta el texto completo en {{link}}.",
      "contentNoLink": "Los contenidos educativos (textos, ejercicios, vídeos e imágenes) están bajo licencia {{license}}."
    },
    "html": {
      "headingFallback": "Licencias del proyecto",
      "codeWithLink": "El código de esta aplicación está disponible bajo licencia <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "codeNoLink": "El código de esta aplicación está disponible bajo licencia {{license}}.",
      "contentWithLink": "Los contenidos educativos (textos, ejercicios, vídeos e imágenes) están bajo licencia <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "contentNoLink": "Los contenidos educativos (textos, ejercicios, vídeos e imágenes) están bajo licencia {{license}}."
    },
    "common": {
      "selectLicense": "[selecciona licencia]",
      "officialLinkPlaceholder": "[enlace oficial]",
      "languages": {
        "es": "español",
        "ca": "catalán",
        "en": "inglés",
        "ga": "gallego",
        "eu": "euskera"
      }
    }
  },
  "en": {
    "ui": {
      "title": "Open educational resources license generator (OER)",
      "lead": "Choose the recommended licenses for content and/or code and generate a prompt ready to request the license text (README / web page).",
      "presets": {
        "reciprocity": "Reciprocity (recommended)",
        "adoption": "Maximum adoption",
        "intermediate": "Intermediate"
      },
      "presetTitles": {
        "reciprocity": "CC BY-SA + AGPL v3",
        "adoption": "CC BY + Apache 2.0",
        "intermediate": "CC BY-SA + MPL 2.0"
      },
      "resourceType": "Resource type",
      "options": {
        "both": "Both (content + code)",
        "content": "Educational content only",
        "code": "Code only (apps/tools)"
      },
      "contentLicenses": "Licenses for educational content",
      "contentLicenseLabels": {
        "CC BY-SA 4.0": "CC BY-SA 4.0 — Attribution + share alike (recommended)",
        "CC BY 4.0": "CC BY 4.0 — Attribution",
        "CC BY-NC-SA 4.0": "CC BY-NC-SA 4.0 — Non-commercial (with caveats)"
      },
      "contentDetails": [
        "• CC BY-SA 4.0: free use, requires attribution and share alike.",
        "• CC BY 4.0: widest distribution with attribution; improvements may be closed.",
        "• CC BY-NC-SA 4.0: forbids commercial use; “NC” may create ambiguity."
      ],
      "codeLicenses": "Licenses for code",
      "codeLicenseLabels": {
        "AGPL v3": "AGPL v3 — Strong copyleft for network use (recommended)",
        "MPL 2.0": "MPL 2.0 — Moderate copyleft",
        "Apache 2.0": "Apache 2.0 — Broad adoption",
        "MIT": "MIT — Simplicity"
      },
      "codeDetails": [
        "• AGPL v3: keeps improvements free (copyleft) and covers software offered over a network.",
        "• MPL 2.0: requires sharing changes per file; allows combining with proprietary code.",
        "• Apache 2.0: permissive, no obligation to return improvements; patent protection.",
        "• MIT: very permissive and simple, no requirement to share improvements or patents."
      ],
      "codeLinkHint": "Where to link the code license",
      "codeLinkOptions": {
        "archivo": "Create LICENSE.txt and link to that file",
        "oficial": "Link to the official license text"
      },
      "detailsLabel": "See details",
      "attribution": "Optional attribution data",
      "fields": {
        "title": "Project title",
        "titlePlaceholder": "e.g., Algebra app for grade 11",
        "author": "Author",
        "authorPlaceholder": "e.g., Ana Pérez",
        "year": "Year",
        "url": "Resource URL",
        "urlPlaceholder": "https://your-school.example/resource",
        "authorUrl": "Author link",
        "authorUrlPlaceholder": "https://your-profile.example",
        "language": "Language"
      },
      "outputsLegend": "Generated outputs",
      "outputsIntro": "Copy whichever format you need: AI prompt, ready-to-paste text, or HTML with links.",
      "format": {
        "prompt": "AI prompt",
        "promptDesc": "(to ask the assistant to draft the notice)",
        "text": "Plain text",
        "textDesc": "(to paste directly into documents or web pages)",
        "html": "HTML snippet",
        "htmlDesc": "(to embed on your site with official links)",
        "copy": "Copy",
        "copied": "Copied",
        "copyFallback": "Copy manually: Ctrl+C"
      },
      "licensesIncluded": "Included licenses (official links)",
      "licensesList": [
        "• CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/",
        "• CC BY 4.0: https://creativecommons.org/licenses/by/4.0/",
        "• CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "• AGPL v3: https://www.gnu.org/licenses/agpl-3.0.html",
        "• MPL 2.0: https://www.mozilla.org/MPL/2.0/",
        "• Apache 2.0: https://www.apache.org/licenses/LICENSE-2.0",
        "• MIT: https://opensource.org/license/mit"
      ],
      "clear": "Clear data",
      "footer": {
        "owner": "© 2025",
        "license": "License: "
      }
    },
    "prompt": {
      "respondIn": "Reply in: {{language}}.",
      "intro": "Add the recommended licenses for code and content to my educational project.",
      "attribution": "Attribution data: {{data}}.",
      "attribLabels": {
        "title": "title",
        "author": "author",
        "year": "year",
        "url": "link"
      },
      "codeTitle": "For the code:",
      "apply": "- Apply the {{license}} license.",
      "fileSteps": [
        "- Create a LICENSE.txt file containing the full license text.",
        "- Add a short note at the start of each source file mentioning the license.",
        "- Mention the license in the project documentation as well."
      ],
      "fileFooterSingle": "- On the homepage or another prominent place, show “Code license: {{license}}” and link that text to LICENSE.txt.",
      "fileFooterBoth": "- In the footer, include “Code license: {{license}}” linking to LICENSE.txt (see line 2).",
      "officialIntro": "- Do not create LICENSE.txt; link the license name to the official text: {{link}}.",
      "officialFooterSingle": "- On the homepage or another prominent place, show “Code license: {{license}}” and link that text to the official site.",
      "officialFooterBoth": "- In the footer, include “Code license: {{license}}” linking to the official site (see line 2).",
      "contentTitle": "For the educational content (texts, exercises, videos, images):",
      "contentApply": "- Apply the {{license}} license.",
      "contentFooterBoth": "- In the footer, add “This work is licensed under {{license}}” linking to the official site: {{link}}.",
      "contentFooterSingleIntro": "- On the homepage or another prominent place, add this text:",
      "contentFooterSingleLine": "  “This work is licensed under {{license}}” with the official link to the corresponding license: {{link}}.",
      "contentIcon": "- Include the official license icon when possible.",
      "footerTitle": "Footer (centered):",
      "footerLine1Link": "- Line 1: \"© {{value}}\" with the name linking to {{url}}.",
      "footerLine1": "- Line 1: \"© {{value}}\".",
      "footerLine2File": "- Line 2: \"Code license: {{code}} (link text points to LICENSE.txt) · Content: {{content}} (link text points to {{link}})\".",
      "footerLine2Official": "- Line 2: \"Code license: {{code}} (link text points to the official site) · Content: {{content}} (link text points to {{link}})\".",
      "footerCodeOnlyFile": "- Footer: Code license: {{license}} (link to LICENSE.txt).",
      "footerCodeOnlyOfficial": "- Footer: Code license: {{license}} (link to {{link}}).",
      "footerContentOnly": "- Footer: This work is licensed under {{license}} (link to {{link}})."
    },
    "plain": {
      "headingFallback": "Project licenses",
      "authorLabel": "Author",
      "resourceLabel": "Resource",
      "codeWithLink": "This application's code is available under the {{license}} license. Read the full text at {{link}}.",
      "codeNoLink": "This application's code is available under the {{license}} license.",
      "contentWithLink": "The educational content (texts, exercises, videos, and images) is licensed under {{license}}. Read the full text at {{link}}.",
      "contentNoLink": "The educational content (texts, exercises, videos, and images) is licensed under {{license}}."
    },
    "html": {
      "headingFallback": "Project licenses",
      "codeWithLink": "This application's code is available under the <a rel=\"license\" href=\"{{link}}\">{{license}}</a> license.",
      "codeNoLink": "This application's code is available under the {{license}} license.",
      "contentWithLink": "The educational content (texts, exercises, videos, and images) is licensed under <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "contentNoLink": "The educational content (texts, exercises, videos, and images) is licensed under {{license}}."
    },
    "common": {
      "selectLicense": "[select a license]",
      "officialLinkPlaceholder": "[official link]",
      "languages": {
        "es": "Spanish",
        "ca": "Catalan",
        "en": "English",
        "ga": "Galician",
        "eu": "Basque"
      }
    }
  },
  "ca": {
    "ui": {
      "title": "Generador de llicències per a recursos educatius oberts (REO)",
      "lead": "Tria les llicències recomanades per a continguts i/o codi i genera un prompt llest per demanar el text de llicència (README / pàgina web).",
      "presets": {
        "reciprocity": "Reciprocitat (recomanat)",
        "adoption": "Màxima adopció",
        "intermediate": "Intermèdia"
      },
      "presetTitles": {
        "reciprocity": "CC BY-SA + AGPL v3",
        "adoption": "CC BY + Apache 2.0",
        "intermediate": "CC BY-SA + MPL 2.0"
      },
      "resourceType": "Tipus de recurs",
      "options": {
        "both": "Tots dos (continguts + codi)",
        "content": "Només continguts educatius",
        "code": "Només codi (apps/eines)"
      },
      "contentLicenses": "Llicències per a continguts educatius",
      "contentLicenseLabels": {
        "CC BY-SA 4.0": "CC BY-SA 4.0 — Reconeixement + compartir igual (recomanada)",
        "CC BY 4.0": "CC BY 4.0 — Reconeixement",
        "CC BY-NC-SA 4.0": "CC BY-NC-SA 4.0 — No comercial (amb reserves)"
      },
      "contentDetails": [
        "• CC BY-SA 4.0: ús lliure, requereix atribució i compartir amb la mateixa llicència.",
        "• CC BY 4.0: difusió màxima amb atribució; les millores es poden tancar.",
        "• CC BY-NC-SA 4.0: prohibeix usos comercials; «NC» pot generar ambigüitat."
      ],
      "codeLicenses": "Llicències per al codi",
      "codeLicenseLabels": {
        "AGPL v3": "AGPL v3 — Copyleft fort orientat a xarxa (recomanada)",
        "MPL 2.0": "MPL 2.0 — Copyleft moderat",
        "Apache 2.0": "Apache 2.0 — Amplia adopció",
        "MIT": "MIT — Simplicitat"
      },
      "codeDetails": [
        "• AGPL v3: garanteix que les millores romanen lliures (copyleft) i inclou uses a través de la xarxa.",
        "• MPL 2.0: obliga a compartir canvis per fitxer; permet combinar amb codi tancat.",
        "• Apache 2.0: permissiva, sense obligació de retornar millores; protecció de patents.",
        "• MIT: molt permissiva i simple, sense obligació de compartir millores ni patents."
      ],
      "codeLinkHint": "On enllaçar la llicència del codi",
      "codeLinkOptions": {
        "archivo": "Crea LICENSE.txt i enllaça-hi el text complet",
        "oficial": "Enllaça al text oficial de la llicència"
      },
      "detailsLabel": "Veure detalls",
      "attribution": "Dades opcionals per a l’atribució",
      "fields": {
        "title": "Títol o projecte",
        "titlePlaceholder": "p. ex., App d’equacions de 1r Batx",
        "author": "Autoria",
        "authorPlaceholder": "p. ex., Anna Pérez",
        "year": "Any",
        "url": "URL del recurs",
        "urlPlaceholder": "https://el-teu-centre.edu/recurs",
        "authorUrl": "Enllaç de l’autor",
        "authorUrlPlaceholder": "https://el-teu-perfil.example",
        "language": "Idioma"
      },
      "outputsLegend": "Resultats generats",
      "outputsIntro": "Copia el format que necessitis: prompt per a IA, text a punt per enganxar o HTML amb enllaços.",
      "format": {
        "prompt": "Prompt per a IA",
        "promptDesc": "(per demanar a la IA que redacti l’avís)",
        "text": "Text pla",
        "textDesc": "(per enganxar directament a documents o webs)",
        "html": "Bloc HTML",
        "htmlDesc": "(per incrustar a la teva pàgina amb enllaços oficials)",
        "copy": "Copia",
        "copied": "Copiat",
        "copyFallback": "Còpia manual: Ctrl+C"
      },
      "licensesIncluded": "Llicències incloses (enllaços oficials)",
      "licensesList": [
        "• CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/",
        "• CC BY 4.0: https://creativecommons.org/licenses/by/4.0/",
        "• CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "• AGPL v3: https://www.gnu.org/licenses/agpl-3.0.html",
        "• MPL 2.0: https://www.mozilla.org/MPL/2.0/",
        "• Apache 2.0: https://www.apache.org/licenses/LICENSE-2.0",
        "• MIT: https://opensource.org/license/mit"
      ],
      "clear": "Buida les dades",
      "footer": {
        "owner": "© 2025",
        "license": "Llicència: "
      }
    },
    "prompt": {
      "respondIn": "Respon en: {{language}}.",
      "intro": "Afegeix a la meva app educativa les llicències recomanades per a projectes de codi i continguts.",
      "attribution": "Dades per a l’atribució: {{data}}.",
      "attribLabels": {
        "title": "títol",
        "author": "autoria",
        "year": "any",
        "url": "enllaç"
      },
      "codeTitle": "Per al codi:",
      "apply": "- Aplica la llicència {{license}}.",
      "fileSteps": [
        "- Crea un fitxer LICENSE.txt amb el text complet de la llicència.",
        "- Afegeix una nota breu al començament de cada fitxer de codi indicant la llicència.",
        "- Esmenta la llicència també a la documentació del projecte."
      ],
      "fileFooterSingle": "- A la pàgina principal o en un lloc destacat mostra “Llicència del codi: {{license}}” i enllaça aquest text amb LICENSE.txt.",
      "fileFooterBoth": "- Al peu, inclou “Llicència del codi: {{license}}” enllaçant a LICENSE.txt (vegeu línia 2).",
      "officialIntro": "- No creïs LICENSE.txt; enllaça el nom de la llicència al text oficial: {{link}}.",
      "officialFooterSingle": "- A la pàgina principal o en un lloc destacat mostra “Llicència del codi: {{license}}” i enllaça aquest text al lloc oficial.",
      "officialFooterBoth": "- Al peu, inclou “Llicència del codi: {{license}}” enllaçant al lloc oficial (vegeu línia 2).",
      "contentTitle": "Per als continguts educatius (textos, exercicis, vídeos, imatges):",
      "contentApply": "- Aplica la llicència {{license}}.",
      "contentFooterBoth": "- Al peu afegeix “Aquesta obra està sota llicència {{license}}” enllaçant al lloc oficial: {{link}}.",
      "contentFooterSingleIntro": "- A la pàgina principal o en un lloc destacat afegeix el text:",
      "contentFooterSingleLine": "  “Aquesta obra està sota llicència {{license}}” amb l’enllaç oficial a la llicència corresponent: {{link}}.",
      "contentIcon": "- Si és possible, acompanya-ho amb la icona oficial de la llicència.",
      "footerTitle": "Peu de pàgina (centrat):",
      "footerLine1Link": "- Línia 1: \"© {{value}}\" amb el nom enllaçat a {{url}}.",
      "footerLine1": "- Línia 1: \"© {{value}}\".",
      "footerLine2File": "- Línia 2: \"Llicència del codi: {{code}} (el text de la llicència enllaça a LICENSE.txt) · Contingut: {{content}} (el text de la llicència enllaça a {{link}})\".",
      "footerLine2Official": "- Línia 2: \"Llicència del codi: {{code}} (el text de la llicència enllaça al lloc oficial) · Contingut: {{content}} (el text de la llicència enllaça a {{link}})\".",
      "footerCodeOnlyFile": "- Peu: Llicència del codi: {{license}} (enllaçar a LICENSE.txt).",
      "footerCodeOnlyOfficial": "- Peu: Llicència del codi: {{license}} (enllaçar a {{link}}).",
      "footerContentOnly": "- Peu: Aquesta obra està sota llicència {{license}} (enllaçar a {{link}})."
    },
    "plain": {
      "headingFallback": "Llicències del projecte",
      "authorLabel": "Autoria",
      "resourceLabel": "Recurs",
      "codeWithLink": "El codi d'aquesta aplicació està disponible sota la llicència {{license}}. Consulteu el text complet a {{link}}.",
      "codeNoLink": "El codi d'aquesta aplicació està disponible sota la llicència {{license}}.",
      "contentWithLink": "Els continguts educatius (textos, exercicis, vídeos i imatges) tenen la llicència {{license}}. Consulteu el text complet a {{link}}.",
      "contentNoLink": "Els continguts educatius (textos, exercicis, vídeos i imatges) tenen la llicència {{license}}."
    },
    "html": {
      "headingFallback": "Llicències del projecte",
      "codeWithLink": "El codi d'aquesta aplicació està disponible sota la llicència <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "codeNoLink": "El codi d'aquesta aplicació està disponible sota la llicència {{license}}.",
      "contentWithLink": "Els continguts educatius (textos, exercicis, vídeos i imatges) tenen la llicència <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "contentNoLink": "Els continguts educatius (textos, exercicis, vídeos i imatges) tenen la llicència {{license}}."
    },
    "common": {
      "selectLicense": "[tria una llicència]",
      "officialLinkPlaceholder": "[enllaç oficial]",
      "languages": {
        "es": "espanyol",
        "ca": "català",
        "en": "anglès",
        "ga": "gallec",
        "eu": "euskera"
      }
    }
  },
  "ga": {
    "ui": {
      "title": "Xerador de licenzas para recursos educativos abertos (REA)",
      "lead": "Escolle as licenzas recomendadas para contidos e/ou código e xera un prompt listo para pedir o texto da licenza (README / páxina web).",
      "presets": {
        "reciprocity": "Reciprocidade (recomendado)",
        "adoption": "Máxima adopción",
        "intermediate": "Intermedia"
      },
      "presetTitles": {
        "reciprocity": "CC BY-SA + AGPL v3",
        "adoption": "CC BY + Apache 2.0",
        "intermediate": "CC BY-SA + MPL 2.0"
      },
      "resourceType": "Tipo de recurso",
      "options": {
        "both": "Ambos (contidos + código)",
        "content": "Só contidos educativos",
        "code": "Só código (aplicacións/ferramentas)"
      },
      "contentLicenses": "Licenzas para contidos educativos",
      "contentLicenseLabels": {
        "CC BY-SA 4.0": "CC BY-SA 4.0 — Recoñecemento + compartir igual (recomendada)",
        "CC BY 4.0": "CC BY 4.0 — Recoñecemento",
        "CC BY-NC-SA 4.0": "CC BY-NC-SA 4.0 — Non comercial (con reservas)"
      },
      "contentDetails": [
        "• CC BY-SA 4.0: uso libre, require recoñecemento e compartir coa mesma licenza.",
        "• CC BY 4.0: máxima difusión con recoñecemento; as melloras poden pecharse.",
        "• CC BY-NC-SA 4.0: prohibe usos comerciais; «NC» pode xerar ambigüidade."
      ],
      "codeLicenses": "Licenzas para código",
      "codeLicenseLabels": {
        "AGPL v3": "AGPL v3 — Copyleft forte orientado á rede (recomendada)",
        "MPL 2.0": "MPL 2.0 — Copyleft moderado",
        "Apache 2.0": "Apache 2.0 — Amplia adopción",
        "MIT": "MIT — Sinxeleza"
      },
      "codeDetails": [
        "• AGPL v3: garante que as melloras sigan libres (copyleft) e inclúe uso a través da rede.",
        "• MPL 2.0: obriga a compartir cambios por ficheiro; permite combinar con código pechado.",
        "• Apache 2.0: permisiva, sen obriga de devolver melloras; protección de patentes.",
        "• MIT: moi permisiva e sinxela, sen obriga de compartir melloras nin patentes."
      ],
      "codeLinkHint": "Onde ligar a licenza do código",
      "codeLinkOptions": {
        "archivo": "Crear LICENSE.txt e ligar ao ficheiro",
        "oficial": "Ligar ao texto oficial da licenza"
      },
      "detailsLabel": "Ver detalles",
      "attribution": "Datos opcionais para atribución",
      "fields": {
        "title": "Título ou proxecto",
        "titlePlaceholder": "ex.: Aplicación de ecuacións de 1º Bacharelato",
        "author": "Autoría",
        "authorPlaceholder": "ex.: Ana Pérez",
        "year": "Ano",
        "url": "URL do recurso",
        "urlPlaceholder": "https://o-teu-centro.gal/recurso",
        "authorUrl": "Ligazón da autora",
        "authorUrlPlaceholder": "https://o-teu-perfil.example",
        "language": "Idioma"
      },
      "outputsLegend": "Resultados xerados",
      "outputsIntro": "Copia o formato que necesites: prompt para IA, texto listo para pegar ou HTML con ligazóns.",
      "format": {
        "prompt": "Prompt para IA",
        "promptDesc": "(para lle pedir á IA que redacte o aviso)",
        "text": "Texto plano",
        "textDesc": "(para pegar directamente en documentos ou webs)",
        "html": "Bloque HTML",
        "htmlDesc": "(para incrustar na túa páxina con ligazóns oficiais)",
        "copy": "Copiar",
        "copied": "Copiado",
        "copyFallback": "Copia manual: Ctrl+C"
      },
      "licensesIncluded": "Licenzas incluídas (ligazóns oficiais)",
      "licensesList": [
        "• CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/",
        "• CC BY 4.0: https://creativecommons.org/licenses/by/4.0/",
        "• CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "• AGPL v3: https://www.gnu.org/licenses/agpl-3.0.html",
        "• MPL 2.0: https://www.mozilla.org/MPL/2.0/",
        "• Apache 2.0: https://www.apache.org/licenses/LICENSE-2.0",
        "• MIT: https://opensource.org/license/mit"
      ],
      "clear": "Borrar datos",
      "footer": {
        "owner": "© 2025",
        "license": "Licenza: "
      }
    },
    "prompt": {
      "respondIn": "Responde en: {{language}}.",
      "intro": "Engade á miña aplicación educativa as licenzas recomendadas para proxectos de código e contidos.",
      "attribution": "Datos para a atribución: {{data}}.",
      "attribLabels": {
        "title": "título",
        "author": "autoría",
        "year": "ano",
        "url": "ligazón"
      },
      "codeTitle": "Para o código:",
      "apply": "- Aplica a licenza {{license}}.",
      "fileSteps": [
        "- Crea un arquivo LICENSE.txt co texto completo da licenza.",
        "- Engade unha nota breve ao comezo de cada ficheiro de código indicando a licenza.",
        "- Menciona tamén a licenza na documentación do proxecto."
      ],
      "fileFooterSingle": "- Na páxina principal ou nun lugar destacado amosa “Licenza do código: {{license}}” e liga ese texto con LICENSE.txt.",
      "fileFooterBoth": "- No pé, inclúe “Licenza do código: {{license}}” ligando a LICENSE.txt (ver liña 2).",
      "officialIntro": "- Non crees LICENSE.txt; liga o nome da licenza ao texto oficial: {{link}}.",
      "officialFooterSingle": "- Na páxina principal ou nun lugar destacado amosa “Licenza do código: {{license}}” e liga ese texto ao sitio oficial.",
      "officialFooterBoth": "- No pé, inclúe “Licenza do código: {{license}}” ligando ao sitio oficial (ver liña 2).",
      "contentTitle": "Para os contidos educativos (textos, exercicios, vídeos, imaxes):",
      "contentApply": "- Aplica a licenza {{license}}.",
      "contentFooterBoth": "- No pé engade “Esta obra está baixo a licenza {{license}}” ligando ao sitio oficial: {{link}}.",
      "contentFooterSingleIntro": "- Na páxina principal ou nun lugar destacado engade este texto:",
      "contentFooterSingleLine": "  “Esta obra está baixo a licenza {{license}}” coa ligazón oficial á licenza correspondente: {{link}}.",
      "contentIcon": "- Se é posible, acompáñao coa icona oficial da licenza.",
      "footerTitle": "Pé de páxina (centrado):",
      "footerLine1Link": "- Liña 1: \"© {{value}}\" co nome ligado a {{url}}.",
      "footerLine1": "- Liña 1: \"© {{value}}\".",
      "footerLine2File": "- Liña 2: \"Licenza do código: {{code}} (o texto da licenza liga a LICENSE.txt) · Contido: {{content}} (o texto da licenza liga a {{link}})\".",
      "footerLine2Official": "- Liña 2: \"Licenza do código: {{code}} (o texto da licenza liga ao sitio oficial) · Contido: {{content}} (o texto da licenza liga a {{link}})\".",
      "footerCodeOnlyFile": "- Pé: Licença do código: {{license}} (ligar a LICENSE.txt).",
      "footerCodeOnlyOfficial": "- Pé: Licenza do código: {{license}} (ligar a {{link}}).",
      "footerContentOnly": "- Pé: Esta obra está baixo a licenza {{license}} (ligar a {{link}})."
    },
    "plain": {
      "headingFallback": "Licenzas do proxecto",
      "authorLabel": "Autoría",
      "resourceLabel": "Recurso",
      "codeWithLink": "O código desta aplicación está dispoñible baixo a licenza {{license}}. Consulta o texto completo en {{link}}.",
      "codeNoLink": "O código desta aplicación está dispoñible baixo a licenza {{license}}.",
      "contentWithLink": "Os contidos educativos (textos, exercicios, vídeos e imaxes) están baixo a licenza {{license}}. Consulta o texto completo en {{link}}.",
      "contentNoLink": "Os contidos educativos (textos, exercicios, vídeos e imaxes) están baixo a licenza {{license}}."
    },
    "html": {
      "headingFallback": "Licenzas do proxecto",
      "codeWithLink": "O código desta aplicación está dispoñible baixo a licenza <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "codeNoLink": "O código desta aplicación está dispoñible baixo a licenza {{license}}.",
      "contentWithLink": "Os contidos educativos (textos, exercicios, vídeos e imaxes) están baixo a licenza <a rel=\"license\" href=\"{{link}}\">{{license}}</a>.",
      "contentNoLink": "Os contidos educativos (textos, exercicios, vídeos e imaxes) están baixo a licenza {{license}}."
    },
    "common": {
      "selectLicense": "[selecciona unha licenza]",
      "officialLinkPlaceholder": "[ligazón oficial]",
      "languages": {
        "es": "castelán",
        "ca": "catalán",
        "en": "inglés",
        "ga": "galego",
        "eu": "éuscaro"
      }
    }
  },
  "eu": {
    "ui": {
      "title": "Hezkuntza baliabide irekientzako lizentzia sortzailea (HBI)",
      "lead": "Hautatu edukietarako eta/edo koderako gomendatutako lizentziak eta sortu lizentzia testua eskatzeko prest dagoen prompta (README / webgunea).",
      "presets": {
        "reciprocity": "Elkarrekikotasuna (gomendatua)",
        "adoption": "Adopzio maximoa",
        "intermediate": "Tartekoa"
      },
      "presetTitles": {
        "reciprocity": "CC BY-SA + AGPL v3",
        "adoption": "CC BY + Apache 2.0",
        "intermediate": "CC BY-SA + MPL 2.0"
      },
      "resourceType": "Baliabide mota",
      "options": {
        "both": "Biak (edukiak + kodea)",
        "content": "Soilik edukiak",
        "code": "Soilik kodea (aplikazioak/tresnak)"
      },
      "contentLicenses": "Eduki hezitzaileetarako lizentziak",
      "contentLicenseLabels": {
        "CC BY-SA 4.0": "CC BY-SA 4.0 — Aitortza + lizentzia bera partekatzea (gomendatua)",
        "CC BY 4.0": "CC BY 4.0 — Aitortza",
        "CC BY-NC-SA 4.0": "CC BY-NC-SA 4.0 — Ez komertziala (erreserbekin)"
      },
      "contentDetails": [
        "• CC BY-SA 4.0: erabilera librea, aitortza eta lizentzia bera partekatzea eskatzen du.",
        "• CC BY 4.0: hedapen zabala aitortzarekin; hobekuntzak itxi daitezke.",
        "• CC BY-NC-SA 4.0: erabilera komertziala debekatzen du; «NC» anbiguoa izan daiteke."
      ],
      "codeLicenses": "Koderako lizentziak",
      "codeLicenseLabels": {
        "AGPL v3": "AGPL v3 — Copyleft sendoa sare erabilerarako (gomendatua)",
        "MPL 2.0": "MPL 2.0 — Copyleft moderatua",
        "Apache 2.0": "Apache 2.0 — Hedapen zabala",
        "MIT": "MIT — Sinpletasuna"
      },
      "codeDetails": [
        "• AGPL v3: hobekuntzak libre mantentzen ditu (copyleft) eta sare bidezko erabilera barne hartzen du.",
        "• MPL 2.0: fitxategi bakoitzean egindako aldaketak partekatzera behartzen du; kode itxiarekin konbinatzea ahalbidetzen du.",
        "• Apache 2.0: lizentzia baimendua, hobekuntzak itzultzeko betebeharrik gabe; patente babesa.",
        "• MIT: oso baimendua eta sinplea, hobekuntzak partekatzeko betebeharrik gabe."
      ],
      "codeLinkHint": "Kodearen lizentzia non estekatu",
      "codeLinkOptions": {
        "archivo": "Sortu LICENSE.txt eta estekatu fitxategi hori",
        "oficial": "Estekatu lizentzia ofizialaren testura"
      },
      "detailsLabel": "Xehetasunak ikusi",
      "attribution": "Aitorpen datu aukerakoak",
      "fields": {
        "title": "Izenburua edo proiektua",
        "titlePlaceholder": "adib., 1. Batxilergoaren ekuazio aplikazioa",
        "author": "Egiletza",
        "authorPlaceholder": "adib., Ana Pérez",
        "year": "Urtea",
        "url": "Baliabidearen URLa",
        "urlPlaceholder": "https://zure-ikastetxea.eus/baliabidea",
        "authorUrl": "Egileren esteka",
        "authorUrlPlaceholder": "https://zure-profila.example",
        "language": "Hizkuntza"
      },
      "outputsLegend": "Sortutako emaitzak",
      "outputsIntro": "Kopiatu behar duzun formatua: IA prompta, prest dagoen testua edo HTML esteka ofizialekin.",
      "format": {
        "prompt": "IA prompta",
        "promptDesc": "(lizentzia testua idazteko asistenteari eskatzeko)",
        "text": "Testu laua",
        "textDesc": "(dokumentu edo web batean zuzenean itsasteko)",
        "html": "HTML blokea",
        "htmlDesc": "(zure orrian esteka ofizialekin txertatzeko)",
        "copy": "Kopiatu",
        "copied": "Kopiatuta",
        "copyFallback": "Eskuz kopiatu: Ctrl+C"
      },
      "licensesIncluded": "Sartutako lizentziak (esteka ofizialak)",
      "licensesList": [
        "• CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/",
        "• CC BY 4.0: https://creativecommons.org/licenses/by/4.0/",
        "• CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "• AGPL v3: https://www.gnu.org/licenses/agpl-3.0.html",
        "• MPL 2.0: https://www.mozilla.org/MPL/2.0/",
        "• Apache 2.0: https://www.apache.org/licenses/LICENSE-2.0",
        "• MIT: https://opensource.org/license/mit"
      ],
      "clear": "Garbitu datuak",
      "footer": {
        "owner": "© 2025",
        "license": "Lizentzia: "
      }
    },
    "prompt": {
      "respondIn": "Erantzun: {{language}}.",
      "intro": "Gehitu nire hezkuntza proiektuari kode eta edukietarako gomendatutako lizentziak.",
      "attribution": "Aitorpen datuak: {{data}}.",
      "attribLabels": {
        "title": "izenburua",
        "author": "egiletza",
        "year": "urtea",
        "url": "esteka"
      },
      "codeTitle": "Kodearentzat:",
      "apply": "- Aplikatu {{license}} lizentzia.",
      "fileSteps": [
        "- Sortu LICENSE.txt fitxategi bat lizentziaren testu osoarekin.",
        "- Gehitu azalpen labur bat kode fitxategi bakoitzaren hasieran lizentzia adierazteko.",
        "- Aipatu lizentzia proiektuaren dokumentazioan ere."
      ],
      "fileFooterSingle": "- Hasiera-orrian edo nabarmendutako leku batean erakutsi “Kodearen lizentzia: {{license}}” eta estekatu testua LICENSE.txt-ra.",
      "fileFooterBoth": "- Behean sartu “Kodearen lizentzia: {{license}}” LICENSE.txt-ra estekatuta (ikus 2. lerroa).",
      "officialIntro": "- Ez sortu LICENSE.txt; estekatu lizentziaren izena testu ofizialera: {{link}}.",
      "officialFooterSingle": "- Hasiera-orrian edo nabarmendutako leku batean erakutsi “Kodearen lizentzia: {{license}}” eta estekatu testua gune ofizialera.",
      "officialFooterBoth": "- Behean sartu “Kodearen lizentzia: {{license}}” gune ofizialera estekatuta (ikus 2. lerroa).",
      "contentTitle": "Eduki hezitzaileentzat (testuak, ariketak, bideoak, irudiak):",
      "contentApply": "- Aplikatu {{license}} lizentzia.",
      "contentFooterBoth": "- Behean gehitu “Lan hau {{license}} lizentziapean dago” esteka ofizialarekin: {{link}}.",
      "contentFooterSingleIntro": "- Hasiera-orrian edo nabarmendutako leku batean gehitu testu hau:",
      "contentFooterSingleLine": "  “Lan hau {{license}} lizentziapean dago” lizentziaren esteka ofizialarekin: {{link}}.",
      "contentIcon": "- Aukera badago, erabili lizentziaren ikono ofiziala.",
      "footerTitle": "Oin-oharra (zentratua):",
      "footerLine1Link": "- 1. lerroa: \"© {{value}}\" izena {{url}} estekatuta.",
      "footerLine1": "- 1. lerroa: \"© {{value}}\".",
      "footerLine2File": "- 2. lerroa: \"Kodearen lizentzia: {{code}} (testua LICENSE.txt-era estekatuta) · Edukia: {{content}} (testua {{link}} estekatuta)\".",
      "footerLine2Official": "- 2. lerroa: \"Kodearen lizentzia: {{code}} (testua gune ofizialera estekatuta) · Edukia: {{content}} (testua {{link}} estekatuta)\".",
      "footerCodeOnlyFile": "- Oina: Kodearen lizentzia: {{license}} (estekatu LICENSE.txt-era).",
      "footerCodeOnlyOfficial": "- Oina: Kodearen lizentzia: {{license}} (estekatu {{link}}-ra).",
      "footerContentOnly": "- Oina: Lan hau {{license}} lizentziapean dago (estekatu {{link}}-ra)."
    },
    "plain": {
      "headingFallback": "Proiektuaren lizentziak",
      "authorLabel": "Egiletza",
      "resourceLabel": "Baliabidea",
      "codeWithLink": "Aplikazio honen kodea {{license}} lizentziapean dago. Ikusi testu osoa hemen: {{link}}.",
      "codeNoLink": "Aplikazio honen kodea {{license}} lizentziapean dago.",
      "contentWithLink": "Eduki hezitzaileak (testuak, ariketak, bideoak eta irudiak) {{license}} lizentziarekin argitaratuta daude. Ikusi testu osoa hemen: {{link}}.",
      "contentNoLink": "Eduki hezitzaileak (testuak, ariketak, bideoak eta irudiak) {{license}} lizentziarekin argitaratuta daude."
    },
    "html": {
      "headingFallback": "Proiektuaren lizentziak",
      "codeWithLink": "Aplikazio honen kodea <a rel=\"license\" href=\"{{link}}\">{{license}}</a> lizentziapean dago.",
      "codeNoLink": "Aplikazio honen kodea {{license}} lizentziapean dago.",
      "contentWithLink": "Eduki hezitzaileak (testuak, ariketak, bideoak eta irudiak) <a rel=\"license\" href=\"{{link}}\">{{license}}</a> lizentziarekin argitaratuta daude.",
      "contentNoLink": "Eduki hezitzaileak (testuak, ariketak, bideoak eta irudiak) {{license}} lizentziarekin argitaratuta daude."
    },
    "common": {
      "selectLicense": "[hautatu lizentzia]",
      "officialLinkPlaceholder": "[esteka ofiziala]",
      "languages": {
        "es": "gaztelania",
        "ca": "katalana",
        "en": "ingelesa",
        "ga": "galegoa",
        "eu": "euskara"
      }
    }
  }
};
