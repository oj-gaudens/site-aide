# Guide d'utilisation rapide - Markdown PRO MAX

## 🚀 Démarrage rapide

1. **Choisir un template** : Site Web, Email ou Slides
2. **Utiliser la barre d'outils** : Cliquez sur les boutons pour insérer des composants
3. **Éditer** : Modifiez le markdown dans le panneau de gauche
4. **Prévisualiser** : Voyez le rendu en temps réel à droite
5. **Exporter** : Utilisez les boutons d'export en bas

## 📋 Barre d'outils

### 📝 Markdown de base
- **Gras** : `**texte**`
- **Italique** : `*texte*`
- **Lien** : `[texte](url)`
- **Image** : `![alt](url)`
- **Titre** : `###` (H3)
- **Liste** : `- item`
- **Tableau** : Structure de tableau markdown
- **Citation** : `> texte`

### 🚨 Alertes
Cliquez sur "Alertes ▼" pour insérer :
- Alerte Info (bleu)
- Alerte Succès (vert)
- Alerte Warning (orange)
- Alerte Erreur (rouge)

**Options personnalisables :**
- `type`: info, success, warning, error
- `markup`: h3, h4, h5 (niveau de titre)

### 📢 Callout (Mise en avant)
- **Callout Simple** : Mise en avant basique
- **Callout Icône** : Avec icône DSFR
- **Callout Bouton** : Avec bouton cliquable

**Options :**
- `color`: green-menthe, blue-cumulus, etc.
- `icon`: nom de l'icône DSFR
- `link_label` et `link_url`: pour ajouter un bouton

### 🏷️ Badges
- Badge par défaut
- Badge Succès (vert avec icône)
- Badge Erreur (rouge)
- Badge avec couleur personnalisée

**Couleurs disponibles :**
green-menthe, yellow-tournesol, blue-cumulus, pink-tuile, etc.

### 📋 Accordéons
- **Accordéon Fermé** : Par défaut fermé
- **Accordéon Ouvert** : Ouvert par défaut avec `open: true`

Parfait pour les FAQ et les sections pliables.

### 📐 Grilles
Système de grille 12 colonnes responsive :
- **2 Colonnes** : 50/50
- **3 Colonnes** : 33/33/33
- **Grille 8/4** : 66/33

**Classes responsive :**
- `12` : Pleine largeur mobile
- `lg-4` : 4/12 sur grand écran
- `lg-8` : 8/12 sur grand écran

### 🎴 Cartes
- **Carte Simple** : Avec image et description
- **Carte Badge** : Avec badge "Nouveau"
- **Carte Horizontale** : Image à côté du texte
- **Grille 3 Cartes** : Disposition en grille

**Options principales :**
- `image`: URL de l'image
- `target`: Lien
- `badge`: Texte | couleur
- `horizontal`: true/false
- `horizontal_pos`: half ou tier

### 🎯 Tuiles
- **Tuile Simple** : Avec pictogramme
- **Tuile Badge** : Avec badge
- **Tuile Horizontale** : Layout horizontal
- **Grille 3 Tuiles** : Disposition en grille

**Pictogrammes disponibles :**
- `digital/application`
- `environment/leaf`
- `health/health`
- `system/success`
- `institutions/firefighter`

## ⌨️ Raccourcis clavier (Mode Slides)

- **→** ou **↓** : Slide suivante
- **←** ou **↑** : Slide précédente
- **Home** : Première slide
- **End** : Dernière slide

## 💾 Export

- **Copier HTML** : Copie le HTML dans le presse-papier
- **Copier texte** : Copie le markdown brut
- **Télécharger HTML** : Fichier HTML standalone avec DSFR
- **Exporter PDF** : Ouvre la boîte d'impression

## 🎨 Thèmes

- **Clair** : Thème par défaut
- **Sombre** : Thème sombre pour les yeux

Le thème est sauvegardé automatiquement.

## 💡 Astuces

1. **Combinez les composants** : Mettez des cartes dans des grilles
2. **Utilisez les couleurs DSFR** : Cohérentes et accessibles
3. **Mode Slides** : Séparez avec `---`
4. **Sauvegarde auto** : Votre travail est sauvegardé dans le navigateur
5. **Templates** : Consultez les fichiers dans `src/_includes/templates/`

## 📚 Documentation complète

Pour tous les détails, consultez :
- **DSFR_COMPONENTS.md** : Guide complet des composants
- **ALERTES.md** : Documentation des alertes
- **README.md** : Documentation technique

## 🆘 Besoin d'aide ?

Les exemples sont pré-remplis dans chaque bouton de la barre d'outils. Cliquez pour insérer et personnalisez ensuite !
