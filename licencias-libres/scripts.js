document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const STORAGE_KEY = 'lic-gen:v1';

  const PRESETS = {
    reciprocity: { content: 'CC BY-SA 4.0', code: 'AGPL v3' },
    adoption: { content: 'CC BY 4.0', code: 'Apache 2.0' },
    intermediate: { content: 'CC BY-SA 4.0', code: 'MPL 2.0' }
  };

  const PRESET_BUTTONS = {
    reciprocity: '#preset-reciprocity',
    adoption: '#preset-adoption',
    intermediate: '#preset-intermediate'
  };

  const LINKS_CC = {
    'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
    'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
    'CC BY-NC-SA 4.0': 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
  };

  const LINKS_CODE = {
    'AGPL v3': 'https://www.gnu.org/licenses/agpl-3.0.html',
    'MPL 2.0': 'https://www.mozilla.org/MPL/2.0/',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'MIT': 'https://opensource.org/license/mit'
  };

  const DEFAULT_LANG = 'es';
  const SUPPORTED_LANGS = Object.keys(I18N || { [DEFAULT_LANG]: {} });
  let currentLang = DEFAULT_LANG;

  const sendHeight = () => {
    try {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(height, '*');
    } catch (error) {
      console.error('postMessage failed', error);
    }
  };

  const normalizeLang = (lang) => {
    if (!lang) return DEFAULT_LANG;
    const lower = lang.toLowerCase();
    if (SUPPORTED_LANGS.includes(lower)) return lower;
    const base = lower.split('-')[0];
    return SUPPORTED_LANGS.includes(base) ? base : DEFAULT_LANG;
  };

  const getLocale = (lang) => I18N[normalizeLang(lang)] || I18N[DEFAULT_LANG];

  const detectLanguage = () => {
    const langs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LANG];
    for (const lang of langs) {
      const normalized = normalizeLang(lang);
      if (SUPPORTED_LANGS.includes(normalized)) return normalized;
    }
    return DEFAULT_LANG;
  };

  const renderLanguageOptions = (locale, selected) => {
    const select = document.getElementById('idioma');
    if (!select) return;
    const target = SUPPORTED_LANGS.includes(selected) ? selected : normalizeLang(selected);
    const previous = select.value;
    select.innerHTML = '';
    SUPPORTED_LANGS.forEach((code) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = locale.common.languages[code] || code;
      if (code === target || (!target && code === previous)) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  };

  const applyGeneralLabels = (locale) => {
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value != null) el.textContent = value;
    };
    const setLabel = (id, value, leadingSpace = false) => {
      const el = document.getElementById(id);
      if (el && value != null) el.textContent = leadingSpace ? ` ${value}` : value;
    };

    document.title = locale.ui.title;
    setText('#app-title', locale.ui.title);
    setText('#app-lead', locale.ui.lead);

    Object.keys(PRESETS).forEach((preset) => {
      const btn = document.querySelector(`[data-preset="${preset}"]`);
      if (!btn) return;
      btn.textContent = locale.ui.presets[preset] || btn.textContent;
      btn.title = locale.ui.presetTitles[preset] || btn.title;
    });

    setText('#legend-resource', locale.ui.resourceType);
    setText('#opt-type-both', locale.ui.options.both);
    setText('#opt-type-content', locale.ui.options.content);
    setText('#opt-type-code', locale.ui.options.code);

    setText('#legend-content', locale.ui.contentLicenses);
    setLabel('label-content-cc-by-sa', locale.ui.contentLicenseLabels['CC BY-SA 4.0'], true);
    setLabel('label-content-cc-by', locale.ui.contentLicenseLabels['CC BY 4.0'], true);
    setLabel('label-content-cc-by-nc-sa', locale.ui.contentLicenseLabels['CC BY-NC-SA 4.0'], true);
    setText('#summary-content-details', locale.ui.detailsLabel);
    const contentDetailsEl = document.getElementById('content-details');
    if (contentDetailsEl) contentDetailsEl.innerHTML = locale.ui.contentDetails.join('<br/>');

    setText('#legend-code', locale.ui.codeLicenses);
    setLabel('label-code-agpl', locale.ui.codeLicenseLabels['AGPL v3'], true);
    setLabel('label-code-mpl', locale.ui.codeLicenseLabels['MPL 2.0'], true);
    setLabel('label-code-apache', locale.ui.codeLicenseLabels['Apache 2.0'], true);
    setLabel('label-code-mit', locale.ui.codeLicenseLabels['MIT'], true);
    setText('#code-link-hint', locale.ui.codeLinkHint);
    setLabel('label-code-link-file', locale.ui.codeLinkOptions.archivo, true);
    setLabel('label-code-link-official', locale.ui.codeLinkOptions.oficial, true);
    setText('#summary-code-details', locale.ui.detailsLabel);
    const codeDetailsEl = document.getElementById('code-details');
    if (codeDetailsEl) codeDetailsEl.innerHTML = locale.ui.codeDetails.join('<br/>');

    setText('#legend-attribution', locale.ui.attribution);
    setText('#label-field-title', locale.ui.fields.title);
    setText('#label-field-author', locale.ui.fields.author);
    setText('#label-field-year', locale.ui.fields.year);
    setText('#label-field-url', locale.ui.fields.url);
    setText('#label-field-author-url', locale.ui.fields.authorUrl);
    setText('#label-field-language', locale.ui.fields.language);

    const titleInput = document.getElementById('titulo');
    if (titleInput) titleInput.placeholder = locale.ui.fields.titlePlaceholder || '';
    const authorInput = document.getElementById('autor');
    if (authorInput) authorInput.placeholder = locale.ui.fields.authorPlaceholder || '';
    const yearInput = document.getElementById('anio');
    if (yearInput) yearInput.placeholder = locale.ui.fields.yearPlaceholder || locale.ui.fields.year || '';
    const urlInput = document.getElementById('url');
    if (urlInput) urlInput.placeholder = locale.ui.fields.urlPlaceholder || '';
    const authorUrlInput = document.getElementById('autor_url');
    if (authorUrlInput) authorUrlInput.placeholder = locale.ui.fields.authorUrlPlaceholder || '';

    renderLanguageOptions(locale, currentLang);

    const clearBtn = document.getElementById('btn-clear');
    if (clearBtn) {
      clearBtn.textContent = locale.ui.clear;
      clearBtn.title = locale.ui.clear;
    }

    setText('#legend-outputs', locale.ui.outputsLegend);
    const outputsIntro = document.getElementById('outputs-intro');
    if (outputsIntro) outputsIntro.textContent = locale.ui.outputsIntro;

    const licensesSummary = document.getElementById('summary-licenses');
    if (licensesSummary) licensesSummary.textContent = locale.ui.licensesIncluded;
    const licensesList = document.getElementById('licenses-list');
    if (licensesList) licensesList.innerHTML = locale.ui.licensesList.join('<br/>');

    setText('#footer-owner-label', locale.ui.footer.owner);
    setText('#footer-license-label', locale.ui.footer.license);
  };

  const applyFormatLabels = (locale) => {
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value != null) el.textContent = value;
    };

    setText('[data-i18n="title-prompt"]', locale.ui.format.prompt);
    setText('[data-i18n="desc-prompt"]', locale.ui.format.promptDesc);
    setText('[data-i18n="title-text"]', locale.ui.format.text);
    setText('[data-i18n="desc-text"]', locale.ui.format.textDesc);
    setText('[data-i18n="title-html"]', locale.ui.format.html);
    setText('[data-i18n="desc-html"]', locale.ui.format.htmlDesc);

    $$('.btn-copy').forEach((btn) => {
      btn.textContent = locale.ui.format.copy;
      btn.dataset.copyLabel = locale.ui.format.copy;
      btn.dataset.copiedLabel = locale.ui.format.copied;
      btn.dataset.copyFallback = locale.ui.format.copyFallback;
    });
  };

  const setLanguage = (lang, { skipUpdate = false } = {}) => {
    const normalized = normalizeLang(lang);
    currentLang = normalized;
    const locale = getLocale(normalized);
    document.documentElement.lang = normalized;
    applyGeneralLabels(locale);
    applyFormatLabels(locale);
    const select = document.getElementById('idioma');
    if (select && select.value !== normalized) select.value = normalized;
    if (!skipUpdate) update();
  };

  const interpolate = (template, values) => template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? '');

  const markPreset = (target) => {
    Object.entries(PRESET_BUTTONS).forEach(([preset, selector]) => {
      const button = $(selector);
      if (!button) return;
      if (target && preset === target) {
        button.classList.remove('btn-ghost');
      } else {
        button.classList.add('btn-ghost');
      }
    });
  };

  const detectAndMarkPreset = (state) => {
    const match = Object.entries(PRESETS).find(([, config]) => config.content === state.licContent && config.code === state.licCode);
    markPreset(match ? match[0] : null);
  };

  const setPreset = (preset, { emitUpdate = true } = {}) => {
    const config = PRESETS[preset];
    if (!config) return;
    const tipo = $('#tipo') ? $('#tipo').value : 'ambos';
    if (tipo !== 'codigo') {
      const contentRadio = $$("input[name='lic-content']").find((radio) => radio.value === config.content);
      if (contentRadio) contentRadio.checked = true;
    }
    if (tipo !== 'contenidos') {
      const codeRadio = $$("input[name='lic-code']").find((radio) => radio.value === config.code);
      if (codeRadio) codeRadio.checked = true;
    }
    markPreset(preset);
    if (emitUpdate) update();
  };

  const getSelected = (name) => {
    const radio = $$(`input[name='${name}']`).find((input) => input.checked);
    return radio ? radio.value : '';
  };

  const syncTypeVisibility = (tipo) => {
    const contentBox = document.getElementById('box-content');
    const codeBox = document.getElementById('box-code');
    if (contentBox) contentBox.style.display = (tipo === 'contenidos' || tipo === 'ambos') ? '' : 'none';
    if (codeBox) codeBox.style.display = (tipo === 'codigo' || tipo === 'ambos') ? '' : 'none';
  };

  const getState = () => {
    const idiomaSelect = document.getElementById('idioma');
    return {
      tipo: $('#tipo') ? $('#tipo').value : 'ambos',
      licContent: getSelected('lic-content'),
      licCode: getSelected('lic-code'),
      codeLinkMode: getSelected('code-link-mode'),
      titulo: $('#titulo') ? $('#titulo').value : '',
      autor: $('#autor') ? $('#autor').value : '',
      anio: $('#anio') ? $('#anio').value : '',
      url: $('#url') ? $('#url').value : '',
      autor_url: $('#autor_url') ? $('#autor_url').value : '',
      idioma: idiomaSelect ? idiomaSelect.value : currentLang
    };
  };

  const applyState = (state) => {
    if (!state) return;
    if ($('#tipo') && state.tipo) $('#tipo').value = state.tipo;
    if (state.licContent) {
      const contentRadio = $$("input[name='lic-content']").find((radio) => radio.value === state.licContent);
      if (contentRadio) contentRadio.checked = true;
    }
    if (state.licCode) {
      const codeRadio = $$("input[name='lic-code']").find((radio) => radio.value === state.licCode);
      if (codeRadio) codeRadio.checked = true;
    }
    if (state.codeLinkMode) {
      const codeLinkRadio = $$("input[name='code-link-mode']").find((radio) => radio.value === state.codeLinkMode);
      if (codeLinkRadio) codeLinkRadio.checked = true;
    }
    if ($('#titulo') && state.titulo != null) $('#titulo').value = state.titulo;
    if ($('#autor') && state.autor != null) $('#autor').value = state.autor;
    if ($('#anio') && state.anio != null) $('#anio').value = state.anio;
    if ($('#url') && state.url != null) $('#url').value = state.url;
    if ($('#autor_url') && state.autor_url != null) $('#autor_url').value = state.autor_url;
    syncTypeVisibility($('#tipo') ? $('#tipo').value : 'ambos');
  };

  const saveState = (state) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('No se pudo guardar el estado', error);
    }
  };

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('No se pudo cargar el estado', error);
      return null;
    }
  };

  const buildPromptText = (state) => {
    const lang = state.idioma || currentLang;
    const locale = getLocale(lang);
    const prompt = locale.prompt;
    const tipo = state.tipo;
    const licContent = state.licContent;
    const licCode = state.licCode;
    const codeLinkMode = state.codeLinkMode || 'archivo';
    const titulo = (state.titulo || '').trim();
    const autor = (state.autor || '').trim();
    const autorUrl = (state.autor_url || '').trim();
    const anio = (state.anio || '').trim();
    const url = (state.url || '').trim();

    const languageName = locale.common.languages[state.idioma] || locale.common.languages[lang] || lang;
    const placeholder = locale.common.selectLicense;
    const officialPlaceholder = locale.common.officialLinkPlaceholder;

    const lines = [];
    lines.push(interpolate(prompt.respondIn, { language: languageName }));
    lines.push('');
    lines.push(prompt.intro);
    lines.push('');

    const attribParts = [];
    if (titulo) attribParts.push(`${prompt.attribLabels.title}: ${titulo}`);
    if (autor) attribParts.push(`${prompt.attribLabels.author}: ${autor}`);
    if (anio) attribParts.push(`${prompt.attribLabels.year}: ${anio}`);
    if (url) attribParts.push(`${prompt.attribLabels.url}: ${url}`);
    if (attribParts.length) {
      lines.push(interpolate(prompt.attribution, { data: attribParts.join(', ') }));
      lines.push('');
    }

    if (tipo === 'codigo' || tipo === 'ambos') {
      const licenseName = licCode || placeholder;
      const officialLink = LINKS_CODE[licCode] || officialPlaceholder;
      lines.push(prompt.codeTitle);
      lines.push(interpolate(prompt.apply, { license: licenseName }));
      prompt.fileSteps.forEach((step) => lines.push(step));
      if (codeLinkMode === 'archivo') {
        const template = tipo === 'ambos' ? prompt.fileFooterBoth : prompt.fileFooterSingle;
        lines.push(interpolate(template, { license: licenseName }));
      } else {
        lines.push(interpolate(prompt.officialIntro, { link: officialLink }));
        const template = tipo === 'ambos' ? prompt.officialFooterBoth : prompt.officialFooterSingle;
        lines.push(interpolate(template, { license: licenseName, link: officialLink }));
      }
      lines.push('');
    }

    if (tipo === 'contenidos' || tipo === 'ambos') {
      const licenseName = licContent || placeholder;
      const contentLink = LINKS_CC[licContent] || officialPlaceholder;
      lines.push(prompt.contentTitle);
      lines.push(interpolate(prompt.contentApply, { license: licenseName }));
      if (tipo === 'ambos') {
        lines.push(interpolate(prompt.contentFooterBoth, { license: licenseName, link: contentLink }));
      } else {
        lines.push(prompt.contentFooterSingleIntro);
        lines.push(interpolate(prompt.contentFooterSingleLine, { license: licenseName, link: contentLink }));
      }
      lines.push(prompt.contentIcon);
      lines.push('');
    }

    const footerLineValues = {
      value: autor || anio || titulo ? (autor || titulo || anio) : '',
      url: autorUrl || url || ''
    };

    if (tipo === 'ambos') {
      const template = codeLinkMode === 'archivo' ? prompt.footerLine2File : prompt.footerLine2Official;
      lines.push(prompt.footerTitle);
      if (footerLineValues.url) {
        lines.push(interpolate(prompt.footerLine1Link, { value: footerLineValues.value || (anio || autor || titulo || ''), url: footerLineValues.url }));
      } else {
        lines.push(interpolate(prompt.footerLine1, { value: footerLineValues.value || (anio || autor || titulo || '') }));
      }
      lines.push(interpolate(template, {
        code: licCode || placeholder,
        content: licContent || placeholder,
        link: LINKS_CC[licContent] || officialPlaceholder
      }));
    } else if (tipo === 'codigo') {
      const template = codeLinkMode === 'archivo' ? prompt.footerCodeOnlyFile : prompt.footerCodeOnlyOfficial;
      lines.push(interpolate(template, { license: licCode || placeholder, link: LINKS_CODE[licCode] || officialPlaceholder }));
    } else if (tipo === 'contenidos') {
      lines.push(interpolate(prompt.footerContentOnly, { license: licContent || placeholder, link: LINKS_CC[licContent] || officialPlaceholder }));
    }

    return lines.join('\n');
  };

  const buildPlainText = (state) => {
    const lang = state.idioma || currentLang;
    const locale = getLocale(lang);
    const tipo = state.tipo;
    const licContent = state.licContent;
    const licCode = state.licCode;
    const titulo = (state.titulo || '').trim();
    const autor = (state.autor || '').trim();
    const autorUrl = (state.autor_url || '').trim();
    const anio = (state.anio || '').trim();
    const url = (state.url || '').trim();

    const lines = [];
    if (titulo) lines.push(titulo);

    const meta = [];
    if (anio || autor) {
      const parts = [];
      if (anio) parts.push(`© ${anio}`);
      if (autor) parts.push(autor);
      if (parts.length) meta.push(parts.join(' '));
    }
    if (autor && autorUrl) meta.push(`${locale.plain.authorLabel}: ${autorUrl}`);
    if (url) meta.push(`${locale.plain.resourceLabel}: ${url}`);
    if (meta.length) {
      lines.push(meta.join(' · '));
      lines.push('');
    }

    if (tipo === 'codigo' || tipo === 'ambos') {
      const name = licCode || locale.common.selectLicense;
      const link = LINKS_CODE[licCode] || '';
      lines.push(link
        ? interpolate(locale.plain.codeWithLink, { license: name, link })
        : interpolate(locale.plain.codeNoLink, { license: name }));
    }

    if (tipo === 'ambos') lines.push('');

    if (tipo === 'contenidos' || tipo === 'ambos') {
      const name = licContent || locale.common.selectLicense;
      const link = LINKS_CC[licContent] || '';
      lines.push(link
        ? interpolate(locale.plain.contentWithLink, { license: name, link })
        : interpolate(locale.plain.contentNoLink, { license: name }));
    }

    return lines.join('\n');
  };

  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));

  const buildHtmlOutput = (state) => {
    const lang = state.idioma || currentLang;
    const locale = getLocale(lang);
    const tipo = state.tipo;
    const licContent = state.licContent;
    const licCode = state.licCode;
    const titulo = (state.titulo || '').trim();
    const autor = (state.autor || '').trim();
    const autorUrl = (state.autor_url || '').trim();
    const anio = (state.anio || '').trim();
    const url = (state.url || '').trim();

    const heading = titulo ? escapeHtml(titulo) : escapeHtml(locale.html.headingFallback);
    const parts = [];
    parts.push('<section class="licenses-summary" aria-labelledby="licencias-resumen">');
    parts.push(`  <h2 id="licencias-resumen">${heading}</h2>`);

    const meta = [];
    if (anio || autor) {
      const segments = [];
      if (anio) segments.push(`© ${escapeHtml(anio)}`);
      if (autor) {
        const label = autorUrl ? `<a href="${escapeHtml(autorUrl)}" rel="author">${escapeHtml(autor)}</a>` : escapeHtml(autor);
        segments.push(label);
      }
      if (segments.length) meta.push(segments.join(' · '));
    }
    if (autor && autorUrl && !meta.length) {
      meta.push(`<a href="${escapeHtml(autorUrl)}" rel="author">${escapeHtml(autor)}</a>`);
    }
    if (url) {
      meta.push(`<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>`);
    }
    if (meta.length) {
      parts.push(`  <p>${meta.join(' · ')}</p>`);
    }

    if (tipo === 'codigo' || tipo === 'ambos') {
      const name = escapeHtml(licCode || locale.common.selectLicense);
      const link = LINKS_CODE[licCode] ? escapeHtml(LINKS_CODE[licCode]) : '';
      const template = link ? locale.html.codeWithLink : locale.html.codeNoLink;
      parts.push('  <p>' + interpolate(template, { license: name, link: link || '#' }) + '</p>');
    }

    if (tipo === 'contenidos' || tipo === 'ambos') {
      const name = escapeHtml(licContent || locale.common.selectLicense);
      const link = LINKS_CC[licContent] ? escapeHtml(LINKS_CC[licContent]) : '';
      const template = link ? locale.html.contentWithLink : locale.html.contentNoLink;
      parts.push('  <p>' + interpolate(template, { license: name, link: link || '#' }) + '</p>');
    }

    parts.push('</section>');
    return parts.join('\n');
  };

  const buildOutputs = (state) => ({
    prompt: buildPromptText(state),
    text: buildPlainText(state),
    html: buildHtmlOutput(state)
  });

  const update = () => {
    const state = getState();
    syncTypeVisibility(state.tipo);
    const outputs = buildOutputs(state);
    const promptOut = document.getElementById('out-prompt');
    const textOut = document.getElementById('out-text');
    const htmlOut = document.getElementById('out-html');
    if (promptOut) promptOut.value = outputs.prompt;
    if (textOut) textOut.value = outputs.text;
    if (htmlOut) htmlOut.value = outputs.html;
    saveState(state);
    detectAndMarkPreset(state);
    sendHeight();
  };

  if ($('#tipo')) {
    $('#tipo').addEventListener('change', () => {
      syncTypeVisibility($('#tipo').value);
      update();
    });
  }

  $$("input[name='lic-content']").forEach((radio) => radio.addEventListener('change', update));
  $$("input[name='lic-code']").forEach((radio) => radio.addEventListener('change', update));
  $$("input[name='code-link-mode']").forEach((radio) => radio.addEventListener('change', update));
  ['#autor', '#autor_url', '#anio', '#titulo', '#url'].forEach((selector) => {
    const input = $(selector);
    if (input) input.addEventListener('input', update);
  });

  const idiomaSelect = $('#idioma');
  if (idiomaSelect) idiomaSelect.addEventListener('change', () => setLanguage(idiomaSelect.value));

  $$('.btn-copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.copyTarget;
      const area = document.getElementById(targetId);
      if (!area) return;
      const copyLabel = btn.dataset.copyLabel || btn.textContent;
      const copiedLabel = btn.dataset.copiedLabel || 'Copiado';
      try {
        await navigator.clipboard.writeText(area.value);
        btn.textContent = copiedLabel;
        setTimeout(() => { btn.textContent = copyLabel; }, 1200);
      } catch (error) {
        alert(btn.dataset.copyFallback || 'Copia manual: Ctrl+C');
      }
    });
  });

  const resetState = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('No se pudo limpiar el estado', error);
    }
    if ($('#tipo')) $('#tipo').value = 'ambos';
    const defaultContent = $$("input[name='lic-content']").find((radio) => radio.value === PRESETS.reciprocity.content);
    if (defaultContent) defaultContent.checked = true;
    const defaultCode = $$("input[name='lic-code']").find((radio) => radio.value === PRESETS.reciprocity.code);
    if (defaultCode) defaultCode.checked = true;
    const defaultCodeLink = $$("input[name='code-link-mode']").find((radio) => radio.value === 'archivo');
    if (defaultCodeLink) defaultCodeLink.checked = true;
    ['#titulo', '#autor', '#anio', '#url', '#autor_url'].forEach((selector) => { const input = $(selector); if (input) input.value = ''; });
    const lang = detectLanguage();
    setLanguage(lang, { skipUpdate: true });
    syncTypeVisibility($('#tipo') ? $('#tipo').value : 'ambos');
    update();
  };

  const clearBtn = $('#btn-clear');
  if (clearBtn) clearBtn.addEventListener('click', resetState);

  const presetReciprocity = $('#preset-reciprocity');
  if (presetReciprocity) presetReciprocity.addEventListener('click', () => setPreset('reciprocity'));
  const presetAdoption = $('#preset-adoption');
  if (presetAdoption) presetAdoption.addEventListener('click', () => setPreset('adoption'));
  const presetIntermediate = $('#preset-intermediate');
  if (presetIntermediate) presetIntermediate.addEventListener('click', () => setPreset('intermediate'));

  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);

  const savedState = loadState();
  const initialLang = normalizeLang(savedState?.idioma || detectLanguage());
  setLanguage(initialLang, { skipUpdate: true });

  if (savedState) {
    applyState(savedState);
    update();
  } else {
    if ($('#tipo')) $('#tipo').value = 'ambos';
    setPreset('reciprocity', { emitUpdate: false });
    syncTypeVisibility('ambos');
    update();
  }
});
