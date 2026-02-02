// Elements
const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const template = document.getElementById("template-selector");
const theme = document.getElementById("theme-selector");

let currentSlide = 0;

// Render markdown based on selected template
function render() {
  const md = textarea.value;

  if (template.value === "slides") {
    renderSlides(md);
  } else {
    renderNormal(md);
  }
}

// Render normal mode (site/email)
function renderNormal(md) {
  preview.innerHTML = marked.parse(md);
}

// Render slides mode
function renderSlides(md) {
  const slides = md.split("---").map(s => s.trim()).filter(Boolean);
  preview.innerHTML = "";
  
  slides.forEach((slideContent, index) => {
    const div = document.createElement("div");
    div.className = "slide" + (index === currentSlide ? " current" : "");
    div.innerHTML = marked.parse(slideContent);
    div.addEventListener("click", () => {
      currentSlide = index;
      updateSlides();
    });
    preview.appendChild(div);
  });
}

// Update slides current state
function updateSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.toggle("current", index === currentSlide);
  });
}

// Event listeners
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
  <style>
    body {
      font-family: 'Inter', Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #1e293b;
    }
    h1 { color: #4f6edb; border-bottom: 3px solid #4f6edb; padding-bottom: 10px; }
    a { color: #4f6edb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; }
    pre { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; overflow-x: auto; }
  </style>
</head>
<body>
${preview.innerHTML}
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "export-markdown.html";
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

// Load saved content (optional)
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
