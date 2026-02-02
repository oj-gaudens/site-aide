https://oj-gaudens.github.io/site-aide/
# Markdown PRO MAX - Site Eleventy (11ty)

Un éditeur Markdown puissant avec prévisualisation en direct, construit avec Eleventy (11ty).

## 🚀 Fonctionnalités

- ✏️ **Éditeur Markdown en temps réel** avec prévisualisation instantanée
- 🎨 **3 modes** : Site Web, Email, Slides
- 🌓 **Thèmes** : Clair et Sombre
- 📋 **Export** : Copier HTML, Télécharger HTML, Exporter en PDF
- ⌨️ **Navigation clavier** pour les slides (flèches, Home, End)
- 💾 **Sauvegarde automatique** dans le localStorage
- 📱 **Responsive** et adapté mobile

## 📦 Installation

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Étapes

1. **Extraire le fichier ZIP**
   ```bash
   unzip markdown-promax-11ty.zip
   cd markdown-promax-11ty
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```
   
   Le site sera accessible à l'adresse : `http://localhost:8080`

4. **Construire pour la production**
   ```bash
   npm run build
   ```
   
   Les fichiers générés seront dans le dossier `_site/`

## 📁 Structure du projet

```
markdown-promax-11ty/
├── src/
│   ├── _layouts/          # Templates Nunjucks
│   │   └── base.njk       # Layout de base
│   ├── assets/            # Fichiers CSS
│   │   └── style.css      # Styles principaux
│   ├── js/                # Fichiers JavaScript
│   │   └── script.js      # Logique de l'éditeur
│   └── index.njk          # Page d'accueil
├── .eleventy.js           # Configuration Eleventy
├── package.json           # Dépendances npm
└── README.md             # Ce fichier
```

## 🎯 Utilisation

### Mode Site Web
Éditez votre contenu Markdown dans le panneau de gauche et voyez le rendu en temps réel à droite.

### Mode Email
Similaire au mode Site Web, optimisé pour la création de contenu d'email.

### Mode Slides
Séparez vos slides avec `---` (trois tirets) dans votre Markdown :

```markdown
# Slide 1
Contenu de la première slide

---

# Slide 2
Contenu de la deuxième slide

---

# Slide 3
Contenu de la troisième slide
```

**Navigation :**
- ← → (ou ↑ ↓) : Naviguer entre les slides
- Home : Première slide
- End : Dernière slide
- Clic sur une slide : Aller à cette slide

### Export

- **Copier HTML** : Copie le HTML rendu dans le presse-papier
- **Copier texte** : Copie le Markdown brut
- **Télécharger HTML** : Télécharge un fichier HTML standalone
- **Exporter PDF** : Ouvre la boîte de dialogue d'impression (Ctrl+P)

### Thèmes

Basculez entre les thèmes Clair et Sombre avec le sélecteur dans la barre d'outils. Votre choix est sauvegardé automatiquement.

## 🛠️ Technologies utilisées

- **Eleventy (11ty)** : Générateur de site statique
- **Nunjucks** : Moteur de templates
- **Marked.js** : Parser Markdown
- **Vanilla JavaScript** : Interactivité côté client
- **CSS3** : Styles modernes et responsive

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `src/assets/style.css` et modifiez les variables de couleur :
- Couleur principale : `#4f6edb`
- Couleur d'accentuation : `#5b8cff`

### Ajouter des templates
Modifiez `src/js/script.js` pour ajouter de nouveaux types de templates dans la fonction `render()`.

### Personnaliser le layout
Éditez `src/_layouts/base.njk` pour modifier la structure HTML globale.

## 📝 Syntaxe Markdown supportée

- Titres (`#`, `##`, `###`)
- **Gras** (`**texte**`)
- *Italique* (`*texte*`)
- Listes (ordonnées et non ordonnées)
- [Liens](url) (`[texte](url)`)
- Images (`![alt](url)`)
- Code inline (`` `code` ``)
- Blocs de code (` ```langue `)
- Citations (`> texte`)
- Et plus encore !

## 🚀 Déploiement

### Netlify
1. Poussez votre code sur GitHub
2. Connectez votre repo à Netlify
3. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `_site`

### Vercel
1. Importez votre projet
2. Vercel détectera automatiquement Eleventy
3. Déployez !

### GitHub Pages
1. Construisez le site : `npm run build`
2. Poussez le contenu de `_site/` sur la branche `gh-pages`
3. Activez GitHub Pages dans les paramètres du repo

## 📄 Licence

MIT - Utilisez librement pour vos projets personnels et commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📧 Support

Pour toute question ou problème, ouvrez une issue sur le dépôt GitHub.

---

**Créé avec ❤️ et Eleventy**
