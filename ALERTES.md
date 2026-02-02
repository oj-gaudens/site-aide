# Documentation des Alertes Personnalisées

## Syntaxe de base

Pour créer une alerte, utilisez la syntaxe suivante :

```
/// alert | Titre de l'alerte
Contenu de l'alerte qui peut contenir du **Markdown**.
///
```

## Exemples

### Alerte simple
```
/// alert | Par défaut
C'est une alerte **importante**.
///
```

Résultat :
```html
<div class="fr-alert fr-alert--info">
  <h5 class="fr-alert__title" id="par-defaut">Par défaut</h5>
  <p>C'est une alerte <strong>importante</strong>.</p>
</div>
```

### Alerte avec du contenu riche
```
/// alert | Astuce de productivité
Vous pouvez utiliser du **Markdown** dans vos alertes :
- Listes
- Liens
- Etc.
///
```

## Types d'alertes (variantes CSS disponibles)

Le système utilise la classe `fr-alert--info` par défaut. Vous pouvez personnaliser les styles CSS pour créer d'autres types :

- `.fr-alert--info` : Bleu (par défaut)
- `.fr-alert--success` : Vert
- `.fr-alert--warning` : Orange
- `.fr-alert--error` : Rouge

## Personnalisation

### Modifier le type d'alerte

Pour changer le type d'alerte, vous pouvez modifier le code JavaScript dans `src/js/script.js` :

```javascript
function processCustomAlerts(md) {
  const alertRegex = /\/\/\/\s*alert\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;
  
  return md.replace(alertRegex, (match, title, content) => {
    const cleanTitle = title.trim();
    const cleanContent = content.trim();
    
    // Déterminer le type d'alerte selon le titre
    let alertType = 'info';
    if (cleanTitle.toLowerCase().includes('attention') || cleanTitle.toLowerCase().includes('avertissement')) {
      alertType = 'warning';
    } else if (cleanTitle.toLowerCase().includes('erreur') || cleanTitle.toLowerCase().includes('danger')) {
      alertType = 'error';
    } else if (cleanTitle.toLowerCase().includes('succès') || cleanTitle.toLowerCase().includes('validé')) {
      alertType = 'success';
    }
    
    const id = cleanTitle.toLowerCase()
      .replace(/[àâä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[îï]/g, 'i')
      .replace(/[ôö]/g, 'o')
      .replace(/[ùûü]/g, 'u')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    return `<div class="fr-alert fr-alert--${alertType}">
<h5 class="fr-alert__title" id="${id}">${cleanTitle}</h5>
<p>${cleanContent}</p>
</div>`;
  });
}
```

### Ajouter une syntaxe avec type explicite

Vous pouvez aussi modifier la regex pour accepter un type :

```
/// alert:warning | Attention
Ceci est un avertissement.
///
```

Et adapter le code :

```javascript
const alertRegex = /\/\/\/\s*alert(?::(\w+))?\s*\|\s*([^\n]+)\n([\s\S]*?)\/\/\//g;

return md.replace(alertRegex, (match, type, title, content) => {
  const alertType = type || 'info';
  const cleanTitle = title.trim();
  const cleanContent = content.trim();
  // ... reste du code
});
```

## Notes techniques

1. **Génération de l'ID** : Le titre est automatiquement converti en ID HTML valide (minuscules, sans accents, tirets pour les espaces)

2. **Support Markdown** : Le contenu de l'alerte supporte le Markdown (gras, italique, listes, etc.)

3. **Compatibilité slides** : Les alertes fonctionnent aussi dans le mode Slides

4. **Thème sombre** : Les alertes s'adaptent automatiquement au thème sombre

## Style DSFR

Les styles sont inspirés du Design System de l'État Français (DSFR) pour une apparence professionnelle et accessible.
