// Elements
const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const template = document.getElementById("template-selector");
const theme = document.getElementById("theme-selector");

let currentSlide = 0;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Générer un ID à partir d'un texte
function generateId(text) {
  return text.toLowerCase()
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Parser les options d'un composant
function parseOptions(optionsText) {
  const options = {};
  if (!optionsText) return options;
  
  const lines = optionsText.trim().split('\n');
  lines.forEach(line => {
    const match = line.match(/^\s*(\w+):\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      
      // Convertir les booléens
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      
      options[key] = value;
    }
  });
  
  return options;
}

// ============================================================================
// COMPOSANTS DSFR
// ============================================================================

// Process ALERT components
function processAlerts(md) {
  const regex = /\/\/\/\s*alert\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  
  return md.replace(regex, (match, header, body) => {
    const parts = header.split('\n');
    const title = parts[0].trim();
    const optionsText = parts.slice(1).join('\n');
    const options = parseOptions(optionsText);
    
    const content = body.trim();
    const type = options.type || 'info';
    const markup = options.markup || 'h5';
    const id = generateId(title);
    
    return `<div class="fr-alert fr-alert--${type}">
<${markup} class="fr-alert__title" id="${id}">${title}</${markup}>
<p>${content}</p>
</div>`;
  });
}

// Process CALLOUT components
function processCallouts(md) {
  const regex = /\/\/\/\s*callout\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  
  return md.replace(regex, (match, header, body) => {
    const parts = header.split('\n');
    const title = parts[0].trim();
    const optionsText = parts.slice(1).join('\n');
    const options = parseOptions(optionsText);
    
    const content = body.trim();
    const markup = options.markup || 'p';
    const color = options.color || '';
    const icon = options.icon || '';
    const linkLabel = options.link_label || '';
    const linkUrl = options.link_url || '';
    const linkNewTab = options.link_newtab || false;
    
    let colorClass = color ? `fr-callout--${color}` : '';
    let iconHtml = icon ? `<span class="fr-icon-${icon}" aria-hidden="true"></span>` : '';
    let linkHtml = '';
    
    if (linkLabel && linkUrl) {
      const target = linkNewTab ? ' target="_blank" rel="noopener"' : '';
      linkHtml = `<a class="fr-btn" href="${linkUrl}"${target}>${linkLabel}</a>`;
    }
    
    return `<div class="fr-callout ${colorClass}">
<${markup} class="fr-callout__title">${iconHtml}${title}</${markup}>
<p class="fr-callout__text">${content}</p>
${linkHtml}
</div>`;
  });
}

// Process ACCORDION components
function processAccordions(md) {
  const regex = /\/\/\/\s*accordion\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  let accordionId = 0;
  
  return md.replace(regex, (match, header, body) => {
    accordionId++;
    const parts = header.split('\n');
    const title = parts[0].trim();
    const optionsText = parts.slice(1).join('\n');
    const options = parseOptions(optionsText);
    
    const content = body.trim();
    const isOpen = options.open || false;
    const collapseClass = isOpen ? '' : ' fr-collapse--collapsed';
    
    return `<section class="fr-accordion">
<h3 class="fr-accordion__title">
<button class="fr-accordion__btn" aria-expanded="${isOpen}" aria-controls="accordion-${accordionId}">${title}</button>
</h3>
<div class="fr-collapse${collapseClass}" id="accordion-${accordionId}">
${content}
</div>
</section>`;
  });
}

// Process BADGE components
function processBadges(md) {
  const regex = /\/\/\/\s*badge\s*\n([\s\S]*?)\/\/\//g;
  
  return md.replace(regex, (match, body) => {
    const parts = body.trim().split('\n');
    const optionsText = parts.slice(0, -1).join('\n');
    const options = parseOptions(optionsText);
    const text = parts[parts.length - 1].trim();
    
    const type = options.type || '';
    const color = options.color || '';
    const hasIcon = options.icon !== false;
    
    let badgeClass = 'fr-badge';
    if (type) badgeClass += ` fr-badge--${type}`;
    if (color) badgeClass += ` fr-badge--${color}`;
    if (hasIcon && type) badgeClass += ' fr-badge--icon-left';
    
    return `<span class="${badgeClass}">${text}</span>`;
  });
}

// Process CARD components
function processCards(md) {
  const regex = /\/\/\/\s*card\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  
  return md.replace(regex, (match, header, body) => {
    const parts = header.split('\n');
    const title = parts[0].trim();
    const optionsText = parts.slice(1).join('\n');
    const options = parseOptions(optionsText);
    const content = body.trim();
    
    const description = options.description || '';
    const markup = options.markup || 'h5';
    const image = options.image || '';
    const imageAlt = options.image_alt || title;
    const target = options.target || '';
    const targetNew = options.target_new ? ' target="_blank" rel="noopener"' : '';
    const enlarge = options.enlarge !== false;
    const badge = options.badge || '';
    const download = options.download || false;
    const horizontal = options.horizontal || false;
    const horizontalPos = options.horizontal_pos || '';
    const variations = options.variations || '';
    
    let cardClasses = 'fr-card';
    if (enlarge) cardClasses += ' fr-enlarge-link';
    if (horizontal) cardClasses += ' fr-card--horizontal';
    if (horizontalPos === 'tier') cardClasses += ' fr-card--horizontal-tier';
    if (horizontalPos === 'half') cardClasses += ' fr-card--horizontal-half';
    if (download) cardClasses += ' fr-card--download';
    if (variations) cardClasses += ` ${variations.split(',').map(v => `fr-card--${v.trim()}`).join(' ')}`;
    
    let imageHtml = '';
    if (image) {
      imageHtml = `<div class="fr-card__header">
<div class="fr-card__img">
<img src="${image}" class="fr-responsive-img" alt="${imageAlt}">
</div>
</div>`;
    }
    
    let badgeHtml = '';
    if (badge) {
      const badgeParts = badge.split('|').map(b => b.trim());
      const badgeText = badgeParts[0];
      const badgeColor = badgeParts[1] || 'info';
      badgeHtml = `<p class="fr-badge fr-badge--${badgeColor}">${badgeText}</p>`;
    }
    
    let descriptionHtml = '';
    if (description) {
      descriptionHtml = `<p class="fr-card__desc">${description}</p>`;
    }
    
    let detailHtml = '';
    if (download && options.assess) {
      detailHtml = `<p class="fr-card__detail">Fichier à télécharger</p>`;
    }
    
    return `<div class="${cardClasses}">
${imageHtml}
<div class="fr-card__body">
<div class="fr-card__content">
<${markup} class="fr-card__title">
<a href="${target}"${targetNew}>${title}</a>
</${markup}>
${descriptionHtml}
<p class="fr-card__desc">${content}</p>
${detailHtml}
</div>
<div class="fr-card__footer">
${badgeHtml}
</div>
</div>
</div>`;
  });
}

// Process TILE components
function processTiles(md) {
  const regex = /\/\/\/\s*tile\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  
  return md.replace(regex, (match, header, body) => {
    const parts = header.split('\n');
    const title = parts[0].trim();
    const optionsText = parts.slice(1).join('\n');
    const options = parseOptions(optionsText);
    const content = body.trim();
    
    const description = options.description || '';
    const markup = options.markup || 'h5';
    const picto = options.picto || '';
    const target = options.target || '';
    const targetNew = options.target_new ? ' target="_blank" rel="noopener"' : '';
    const enlarge = options.enlarge !== false;
    const badge = options.badge || '';
    const download = options.download || false;
    const horizontal = options.horizontal || false;
    const variations = options.variations || '';
    
    let tileClasses = 'fr-tile';
    if (enlarge) tileClasses += ' fr-enlarge-link';
    if (horizontal) tileClasses += ' fr-tile--horizontal';
    if (download) tileClasses += ' fr-tile--download';
    if (variations) tileClasses += ` ${variations.split(',').map(v => `fr-tile--${v.trim()}`).join(' ')}`;
    
    let pictoHtml = '';
    if (picto) {
      pictoHtml = `<div class="fr-tile__header">
<div class="fr-tile__pictogram">
<svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
<use class="fr-artwork-decorative" href="/artwork/pictograms/${picto}.svg#artwork-decorative"></use>
<use class="fr-artwork-minor" href="/artwork/pictograms/${picto}.svg#artwork-minor"></use>
<use class="fr-artwork-major" href="/artwork/pictograms/${picto}.svg#artwork-major"></use>
</svg>
</div>
</div>`;
    }
    
    let badgeHtml = '';
    if (badge) {
      const badgeParts = badge.split('|').map(b => b.trim());
      const badgeText = badgeParts[0];
      const badgeColor = badgeParts[1] || 'info';
      badgeHtml = `<p class="fr-badge fr-badge--${badgeColor}">${badgeText}</p>`;
    }
    
    let descriptionHtml = '';
    if (description) {
      descriptionHtml = `<p class="fr-tile__desc">${description}</p>`;
    }
    
    let detailText = content || '';
    if (download && options.assess) {
      detailText = 'Fichier à télécharger';
    }
    
    return `<div class="${tileClasses}">
<div class="fr-tile__body">
<div class="fr-tile__content">
<${markup} class="fr-tile__title">
<a href="${target}"${targetNew}>${title}</a>
</${markup}>
${descriptionHtml}
<p class="fr-tile__detail">${detailText}</p>
</div>
</div>
${pictoHtml}
${badgeHtml}
</div>`;
  });
}

// Process ROW/COL components (grid system)
function processGrid(md) {
  // D'abord, traiter les colonnes
  const colRegex = /\/\/\/\s*col(?:\s*\|\s*([^\n]+))?\n([\s\S]*?)\/\/\//g;
  let processedMd = md.replace(colRegex, (match, classes, content) => {
    const colClasses = classes ? classes.trim().split(/\s+/).map(c => `fr-col-${c}`).join(' ') : 'fr-col';
    return `<div class="${colClasses}">
${content.trim()}
</div>`;
  });
  
  // Ensuite, traiter les lignes
  const rowRegex = /\/\/\/\s*row(?:\s*\|\s*([^\n]+))?\n([\s\S]*?)\/\/\//g;
  processedMd = processedMd.replace(rowRegex, (match, header, content) => {
    let rowClasses = 'fr-grid-row';
    let options = {};
    
    if (header) {
      const parts = header.split('\n');
      const firstLine = parts[0].trim();
      
      // Si la première ligne contient des classes CSS
      if (firstLine && !firstLine.includes(':')) {
        rowClasses += ` ${firstLine}`;
      }
      
      // Parser les options
      const optionsText = parts.slice(1).join('\n');
      options = parseOptions(optionsText);
    }
    
    if (options.halign) rowClasses += ` fr-grid-row--${options.halign}`;
    if (options.valign) rowClasses += ` fr-grid-row--${options.valign}`;
    
    return `<div class="${rowClasses}">
${content.trim()}
</div>`;
  });
  
  return processedMd;
}

// ============================================================================
// MAIN PROCESSING FUNCTION
// ============================================================================

function processAllComponents(md) {
  // Ordre important : traiter les composants imbriqués d'abord
  let processed = md;
  
  // 1. Traiter les cartes et tuiles (avant la grille)
  processed = processCards(processed);
  processed = processTiles(processed);
  
  // 2. Traiter la grille (qui contient les cartes/tuiles)
  processed = processGrid(processed);
  
  // 3. Traiter les autres composants
  processed = processAlerts(processed);
  processed = processCallouts(processed);
  processed = processAccordions(processed);
  processed = processBadges(processed);
  
  return processed;
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function render() {
  const md = textarea.value;

  if (template.value === "slides") {
    renderSlides(md);
  } else {
    renderNormal(md);
  }
}

function renderNormal(md) {
  // Traiter tous les composants DSFR
  const processedMd = processAllComponents(md);
  // Ensuite parser le markdown restant
  preview.innerHTML = marked.parse(processedMd);
}

function renderSlides(md) {
  const slides = md.split("---").map(s => s.trim()).filter(Boolean);
  preview.innerHTML = "";
  
  slides.forEach((slideContent, index) => {
    const div = document.createElement("div");
    div.className = "slide" + (index === currentSlide ? " current" : "");
    // Traiter les composants dans chaque slide
    const processedContent = processAllComponents(slideContent);
    div.innerHTML = marked.parse(processedContent);
    div.addEventListener("click", () => {
      currentSlide = index;
      updateSlides();
    });
    preview.appendChild(div);
  });
}

function updateSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.toggle("current", index === currentSlide);
  });
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

textarea.addEventListener("input", render);

template.addEventListener("change", () => {
  currentSlide = 0;
  render();
});

theme.addEventListener("change", e => {
  document.body.className = e.target.value;
  localStorage.setItem("theme", e.target.value);
});

// Copy HTML
document.getElementById("copy-html").onclick = () => {
  navigator.clipboard.writeText(preview.innerHTML)
    .then(() => showNotification("HTML copié !"))
    .catch(() => showNotification("Erreur de copie", true));
};

// Copy text
document.getElementById("copy-text").onclick = () => {
  navigator.clipboard.writeText(textarea.value)
    .then(() => showNotification("Texte copié !"))
    .catch(() => showNotification("Erreur de copie", true));
};

// Download HTML
document.getElementById("download-html").onclick = () => {
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Export Markdown PRO MAX</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@latest/dist/dsfr.min.css">
  <style>
    body {
      font-family: 'Marianne', Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
${preview.innerHTML}
<script src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@latest/dist/dsfr.min.js"></script>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "export-markdown-dsfr.html";
  a.click();
  showNotification("Fichier téléchargé !");
};

// Export PDF
document.getElementById("export-pdf").onclick = () => {
  window.print();
};

// Clear all
document.getElementById("clear-all").onclick = () => {
  if (confirm("Voulez-vous vraiment tout effacer ?")) {
    textarea.value = "";
    render();
    showNotification("Contenu effacé");
  }
};

// Fullscreen
document.getElementById("fullscreen").onclick = () => {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen().catch(err => {
      showNotification("Erreur plein écran", true);
    });
  } else {
    document.exitFullscreen();
  }
};

// Keyboard navigation for slides
document.addEventListener("keydown", e => {
  if (template.value !== "slides") return;
  
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
    slides[currentSlide].scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
    slides[currentSlide].scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (e.key === "Home") {
    e.preventDefault();
    currentSlide = 0;
    updateSlides();
    slides[0].scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (e.key === "End") {
    e.preventDefault();
    currentSlide = slides.length - 1;
    updateSlides();
    slides[currentSlide].scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// Notification system
function showNotification(message, isError = false) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    background: ${isError ? '#ef4444' : '#10b981'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.className = savedTheme;
  theme.value = savedTheme;
}

// Load saved content
const savedContent = localStorage.getItem("markdown-content");
if (savedContent) {
  textarea.value = savedContent;
}

// Auto-save content
let saveTimeout;
textarea.addEventListener("input", () => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem("markdown-content", textarea.value);
  }, 1000);
});

// Initial render
render();

// ============================================================================
// TOOLBAR COMPONENTS INSERTION
// ============================================================================

// Toggle dropdown menus
document.querySelectorAll('.group-toggle').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const groupButtons = button.nextElementSibling;
    
    // Close all other dropdowns
    document.querySelectorAll('.group-buttons').forEach(menu => {
      if (menu !== groupButtons) {
        menu.classList.add('hidden');
      }
    });
    
    // Toggle current dropdown
    groupButtons.classList.toggle('hidden');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.group-buttons').forEach(menu => {
    menu.classList.add('hidden');
  });
});

// Expand all dropdowns
document.getElementById('expand-all')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelectorAll('.group-buttons').forEach(menu => {
    menu.classList.remove('hidden');
  });
});

// Collapse all dropdowns
document.getElementById('collapse-all')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelectorAll('.group-buttons').forEach(menu => {
    menu.classList.add('hidden');
  });
});

// Insert component when button is clicked
document.querySelectorAll('[data-insert]').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const textToInsert = button.getAttribute('data-insert');
    
    // Get current cursor position
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentValue = textarea.value;
    
    // Insert text at cursor position
    const newValue = currentValue.substring(0, start) + '\n\n' + textToInsert + '\n\n' + currentValue.substring(end);
    textarea.value = newValue;
    
    // Set cursor position after inserted text
    const newCursorPos = start + textToInsert.length + 4;
    textarea.selectionStart = newCursorPos;
    textarea.selectionEnd = newCursorPos;
    
    // Focus textarea and render
    textarea.focus();
    render();
    
    // Close dropdown
    button.closest('.group-buttons').classList.add('hidden');
    
    // Show notification
    showNotification('Composant inséré !');
  });
});

// ============================================================================
// TEMPLATE LOADING
// ============================================================================

// Load Site template
document.getElementById('load-template-site')?.addEventListener('click', () => {
  const siteTemplate = `# Bienvenue sur notre site

/// callout | Nouvelle version disponible
    color: blue-cumulus
    icon: info-line
    markup: h3
    link_label: Télécharger maintenant
    link_url: https://example.com/download
    link_newtab: true
Découvrez toutes les nouvelles fonctionnalités de notre dernière mise à jour !
///

## Nos services

/// row | fr-grid-row--gutters
/// col | 12 lg-4
/// card | Service Premium
    image: https://via.placeholder.com/400x250
    target: /premium
    badge: Populaire | yellow-tournesol
    markup: h4
Notre service le plus demandé avec toutes les fonctionnalités avancées.
///
///

/// col | 12 lg-4
/// card | Service Standard
    image: https://via.placeholder.com/400x250
    target: /standard
    badge: Nouveau | green-menthe
    markup: h4
Le parfait équilibre entre fonctionnalités et prix.
///
///

/// col | 12 lg-4
/// card | Service Basic
    image: https://via.placeholder.com/400x250
    target: /basic
    markup: h4
Pour débuter en douceur avec l'essentiel.
///
///
///

## Questions fréquentes

/// accordion | Comment ça fonctionne ?
Notre service est simple à utiliser. Inscrivez-vous, configurez votre compte et commencez à utiliser toutes les fonctionnalités en quelques minutes.
///

/// accordion | Quels sont les tarifs ?
    open: true
Nous proposons plusieurs formules adaptées à vos besoins :
- Basic : 9€/mois
- Standard : 19€/mois
- Premium : 29€/mois
///

/// accordion | Comment nous contacter ?
Vous pouvez nous joindre par email à contact@example.com ou par téléphone au 01 23 45 67 89.
///

## Témoignages clients

/// row | fr-grid-row--gutters
/// col
> "Un service exceptionnel ! Je recommande vivement."

**Marie Dupont** - Directrice Marketing
///

/// col
> "Exactement ce dont j'avais besoin. Équipe très réactive."

**Jean Martin** - CEO
///

/// col
> "Le meilleur choix que j'ai fait cette année."

**Sophie Bernard** - Freelance
///
///

/// alert | Offre limitée
    type: warning
    markup: h3
🎁 Profitez de -20% sur tous nos services jusqu'au 31 décembre !
///`;

  textarea.value = siteTemplate;
  template.value = 'site';
  render();
  showNotification('Template Site chargé !');
});

// Load Email template
document.getElementById('load-template-email')?.addEventListener('click', () => {
  const emailTemplate = `# Newsletter - Janvier 2026

Bonjour,

/// callout | Nouvelle fonctionnalité
    color: green-menthe
    icon: medal-fill
    markup: h3
Découvrez notre nouvel éditeur Markdown avec support DSFR complet !
///

## Les actualités du mois

/// alert | Événement à venir
    type: info
    markup: h4
Webinaire gratuit le 15 janvier à 14h : "Maîtriser le Markdown"
///

### Article 1 : Guide complet du Markdown

/// card | Lire l'article
    image: https://via.placeholder.com/600x300
    target: https://example.com/article1
    markup: h4
Tout ce que vous devez savoir sur le Markdown pour créer du contenu professionnel.
///

### Article 2 : Les composants DSFR

/// card | Découvrir
    image: https://via.placeholder.com/600x300
    target: https://example.com/article2
    badge: Populaire | yellow-tournesol
    markup: h4
Un guide complet des composants du Design System de l'État Français.
///

## Nos badges de qualité

/// badge
    type: success
    icon: true
Certifié
///

/// badge
    color: green-menthe
100% Gratuit
///

/// badge
    type: new
Nouveau
///

---

Cordialement,  
**L'équipe Markdown PRO MAX**

[Se désabonner](https://example.com/unsubscribe)`;

  textarea.value = emailTemplate;
  template.value = 'email';
  render();
  showNotification('Template Email chargé !');
});

// Load Slides template
document.getElementById('load-template-slides')?.addEventListener('click', () => {
  const slidesTemplate = `# Markdown PRO MAX

## Présentation complète

Par Votre Nom  
Date : 2 février 2026

---

# Introduction

/// callout | Objectif de la présentation
    color: blue-cumulus
    icon: info-line
    markup: h3
Découvrir tous les composants DSFR disponibles
///

**Au programme :**
- Les alertes
- Les callouts
- Les grilles
- Les cartes et tuiles

---

# Les Alertes

/// alert | Information
    type: info
    markup: h3
Les alertes permettent de mettre en avant des informations importantes.
///

/// alert | Succès
    type: success
Opération réussie !
///

/// alert | Attention
    type: warning
Point d'attention important.
///

---

# Les Grilles

/// row | fr-grid-row--gutters
/// col
**Colonne 1**

Contenu de la première colonne avec du texte.
///

/// col
**Colonne 2**

Contenu de la deuxième colonne avec du texte.
///
///

---

# Les Cartes

/// row | fr-grid-row--gutters
/// col
/// card | Service 1
    image: https://via.placeholder.com/300x200
    badge: Nouveau | green-menthe
    markup: h4
Description du service
///
///

/// col
/// card | Service 2
    image: https://via.placeholder.com/300x200
    badge: Populaire | yellow-tournesol
    markup: h4
Description du service
///
///
///

---

# Les Badges

Nos certifications :

/// badge
    type: success
    icon: true
Certifié
///

/// badge
    color: green-menthe
Écologique
///

/// badge
    type: new
Nouveau
///

---

# Conclusion

/// callout | Merci !
    color: green-menthe
    icon: medal-fill
    markup: h2
Des questions ?
///

**Contact :** contact@example.com

---

# Fin

**Merci pour votre attention !**

👏 Applaudissements`;

  textarea.value = slidesTemplate;
  template.value = 'slides';
  currentSlide = 0;
  render();
  showNotification('Template Slides chargé !');
});

// Print styles
const printStyles = document.createElement("style");
printStyles.textContent = `
  @media print {
    body { background: white !important; }
    .top-header, .intro, .editor textarea, .toolbar, .hint, .site-footer { display: none !important; }
    #preview { 
      width: 100% !important; 
      box-shadow: none !important; 
      border: none !important;
      padding: 0 !important;
    }
    .slide { page-break-after: always; }
  }
`;
document.head.appendChild(printStyles);
