# Documentation Composants DSFR

Guide complet de tous les composants DSFR disponibles dans Markdown PRO MAX.

## Table des matières

1. [Alertes](#alertes)
2. [Mise en avant (Callout)](#callout)
3. [Accordéons](#accordeons)
4. [Badges](#badges)
5. [Grilles](#grilles)
6. [Cartes](#cartes)
7. [Tuiles](#tuiles)

---

## Alertes

### Syntaxe de base

```
/// alert | Titre de l'alerte
Contenu de l'alerte
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| type | info | Type d'alerte : `info`, `success`, `warning`, `error` |
| markup | h5 | Type de balise pour le titre : `p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |

### Exemples

**Alerte par défaut (info) :**
```
/// alert | par defaut
C'est une alerte **importante**.
///
```

**Alerte de succès :**
```
/// alert | Opération réussie
    type: success
    markup: h4
Votre fichier a été téléchargé avec succès !
///
```

**Alerte d'avertissement :**
```
/// alert | Attention
    type: warning
Cette action est irréversible.
///
```

**Alerte d'erreur :**
```
/// alert | Erreur
    type: error
    markup: h3
Une erreur s'est produite lors du traitement.
///
```

---

## Callout (Mise en avant)

### Syntaxe de base

```
/// callout | Titre
Contenu de la mise en avant
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| markup | p | Type de balise pour le titre |
| color | | Couleur DSFR (ex: `green-menthe`, `blue-cumulus`) |
| icon | | Icône à afficher |
| link_label | | Texte du lien bouton |
| link_url | | URL du lien bouton |
| link_newtab | false | Ouvrir le lien dans un nouvel onglet |

### Couleurs DSFR disponibles

- `green-tilleul-verveine`
- `green-bourgeon`
- `green-emeraude`
- `green-menthe`
- `green-archipel`
- `blue-ecume`
- `blue-cumulus`
- `purple-glycine`
- `pink-macaron`
- `pink-tuile`
- `yellow-tournesol`
- `yellow-moutarde`
- `orange-terre-battue`
- `brown-cafe-creme`
- `brown-caramel`
- `brown-opera`
- `beige-gris-galet`

### Exemples

**Callout simple :**
```
/// callout | Information importante
    markup: h3
C'est une mise en avant **importante**.
///
```

**Callout avec icône et couleur :**
```
/// callout | Astuce
    icon: info-line
    color: green-menthe
    markup: h3
Utilisez les raccourcis clavier pour gagner du temps.
///
```

**Callout avec bouton :**
```
/// callout | En savoir plus
    markup: h4
    color: blue-cumulus
    icon: medal-fill
    link_label: Consulter la doc
    link_url: https://www.example.com/
    link_newtab: true
Cliquez pour accéder à la documentation complète.
///
```

---

## Accordéons

### Syntaxe de base

```
/// accordion | Titre de l'accordéon
Contenu de l'accordéon
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| open | false | Si `true`, l'accordéon est ouvert par défaut |

### Exemples

**Accordéon fermé par défaut :**
```
/// accordion | Question 1
Réponse à la première question avec du **texte formaté**.

- Point 1
- Point 2
///
```

**Accordéon ouvert par défaut :**
```
/// accordion | Question 2
    open: true
Cette réponse est visible dès le chargement.
///
```

---

## Badges

### Syntaxe de base

```
/// badge
Texte du badge
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| type | | Type : `success`, `error`, `info`, `warning`, `new` |
| color | | Couleur DSFR (voir liste des couleurs) |
| icon | true | Afficher l'icône (si type défini) |

### Exemples

**Badge par défaut :**
```
/// badge
Badge simple
///
```

**Badge avec type et icône :**
```
/// badge
    type: success
    icon: true
Validé
///
```

**Badge sans icône :**
```
/// badge
    type: error
    icon: false
Périmé
///
```

**Badge avec couleur personnalisée :**
```
/// badge
    color: green-menthe
Populaire
///
```

```
/// badge
    color: yellow-tournesol
En vedette
///
```

---

## Grilles

### Syntaxe de base

```
/// row
/// col
Contenu colonne 1
///
/// col
Contenu colonne 2
///
///
```

### Options row (ligne)

| Option | Description |
|--------|-------------|
| halign | Alignement horizontal : `left`, `center`, `right` |
| valign | Alignement vertical : `top`, `middle`, `bottom` |

Vous pouvez aussi ajouter des classes DSFR comme `fr-grid-row--gutters` directement :

```
/// row | fr-grid-row--gutters
```

### Options col (colonne)

Définissez les tailles de colonnes en utilisant le système de grille 12 colonnes :

```
/// col | 12 lg-4
```

- `12` : pleine largeur sur mobile
- `lg-4` : 4/12 (33.33%) sur grand écran

### Exemples de grilles

**Deux colonnes égales :**
```
/// row | fr-grid-row--gutters
/// col
Colonne 1
///
/// col
Colonne 2
///
///
```

**Trois colonnes égales :**
```
/// row | fr-grid-row--gutters
/// col | 12 lg-4
Colonne 1/3
///
/// col | 12 lg-4
Colonne 2/3
///
/// col | 12 lg-4
Colonne 3/3
///
///
```

**Colonnes de tailles différentes (8/4) :**
```
/// row | fr-grid-row--gutters
    valign: top
/// col | 12 lg-8
Grande colonne (8/12)
///
/// col | 12 lg-4
Petite colonne (4/12)
///
///
```

**Grille avec alignement :**
```
/// row | fr-grid-row--gutters
    halign: center
    valign: middle
/// col
Centré horizontalement et verticalement
///
///
```

---

## Cartes

### Syntaxe de base

```
/// card | Titre de la carte
    image: /chemin/image.png
    target: /lien
    markup: h4
Description de la carte.
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| description | | Description/sous-titre |
| markup | h5 | Type de balise pour le titre |
| image | | URL de l'image |
| image_alt | titre | Texte alternatif de l'image |
| target | | Lien de la carte |
| target_new | false | Ouvrir dans un nouvel onglet |
| enlarge | true | Agrandir la zone de clic |
| badge | | Badge au format `Texte \| couleur` |
| download | false | Mode téléchargement |
| assess | false | Évaluation auto du fichier |
| horizontal | false | Mode horizontal |
| horizontal_pos | | Position image : `tier` ou `half` |
| variations | | Variations : `grey`, `no-border`, `no-background`, `shadow` |

### Exemples

**Carte simple :**
```
/// card | Qu'est-ce que le Bnum ?
    image: /images/bnum.svg
    target: /bnum
    markup: h4
Le Bnum c'est votre Bureau numérique.
///
```

**Carte avec description :**
```
/// card | Premiers pas
    description: Guide de démarrage
    image: /images/guide.svg
    target: /guide
    markup: h4
Nous vous accompagnons dans vos premiers pas.
///
```

**Carte avec badge :**
```
/// card | Nouveau service
    image: /images/service.svg
    target: /service
    badge: Nouveau | green-menthe
    markup: h4
Découvrez notre tout nouveau service.
///
```

**Carte horizontale :**
```
/// card | Service premium
    image: /images/premium.svg
    target: /premium
    horizontal: true
    horizontal_pos: half
    markup: h4
Description du service premium avec image à 50%.
///
```

**Grille de 3 cartes :**
```
/// row | fr-grid-row--gutters
/// col
/// card | Carte 1
    image: /img1.png
    target: /1
    markup: h4
Description 1
///
///
/// col
/// card | Carte 2
    image: /img2.png
    target: /2
    markup: h4
Description 2
///
///
/// col
/// card | Carte 3
    image: /img3.png
    target: /3
    markup: h4
Description 3
///
///
///
```

---

## Tuiles

### Syntaxe de base

```
/// tile | Titre de la tuile
    picto: digital/application
    target: /lien
    markup: h4
Description de la tuile.
///
```

### Options disponibles

| Option | Valeur par défaut | Description |
|--------|-------------------|-------------|
| description | | Description/sous-titre |
| markup | h5 | Type de balise pour le titre |
| picto | | Pictogramme DSFR (ex: `digital/application`) |
| target | | Lien de la tuile |
| target_new | false | Ouvrir dans un nouvel onglet |
| enlarge | true | Agrandir la zone de clic |
| badge | | Badge au format `Texte \| couleur` |
| download | false | Mode téléchargement |
| assess | false | Évaluation auto du fichier |
| horizontal | false | Mode horizontal |
| variations | | Variations : `grey`, `no-border`, `no-background`, `shadow` |

### Pictogrammes disponibles

Les pictogrammes sont organisés par catégories :

**Digital :**
- `digital/application`
- `digital/internet`
- `digital/data`

**Environment :**
- `digital/leaf`
- `environment/food`

**Health :**
- `health/health`

**Institutions :**
- `institutions/firefighter`

**System :**
- `system/success`

(Liste non exhaustive - voir la documentation DSFR pour la liste complète)

### Exemples

**Tuile simple :**
```
/// tile | Exemple de tuile
    picto: digital/application
    target: /bureau
    markup: h4
Description succincte.
///
```

**Tuile avec description :**
```
/// tile | Service en ligne
    description: Accessible 24h/24
    picto: digital/internet
    target: /service
    markup: h4
Utilisez nos services en ligne.
///
```

**Tuile avec badge :**
```
/// tile | Nouveauté
    picto: health/health
    target: /nouveau
    badge: Nouveau | green-menthe
    markup: h4
Découvrez notre nouvelle fonctionnalité.
///
```

**Tuile horizontale :**
```
/// tile | Service premium
    picto: system/success
    target: /premium
    horizontal: true
    markup: h4
Description du service en mode horizontal.
///
```

**Grille de 3 tuiles :**
```
/// row | fr-grid-row--gutters
/// col
/// tile | Tuile 1
    picto: digital/application
    target: /1
    markup: h4
Description 1
///
///
/// col
/// tile | Tuile 2
    picto: environment/leaf
    target: /2
    markup: h4
Description 2
///
///
/// col
/// tile | Tuile 3
    picto: health/health
    target: /3
    markup: h4
Description 3
///
///
///
```

---

## Combinaisons et exemples avancés

### Page d'accueil complète

```
# Bienvenue

/// callout | Nouvelle version disponible
    color: blue-cumulus
    icon: info-line
    markup: h3
    link_label: Télécharger
    link_url: /download
Mise à jour majeure avec de nouvelles fonctionnalités.
///

## Nos services

/// row | fr-grid-row--gutters
/// col | 12 lg-4
/// card | Service 1
    image: /img1.png
    target: /service1
    badge: Populaire | green-menthe
    markup: h4
Description du service 1.
///
///
/// col | 12 lg-4
/// card | Service 2
    image: /img2.png
    target: /service2
    badge: Nouveau | yellow-tournesol
    markup: h4
Description du service 2.
///
///
/// col | 12 lg-4
/// card | Service 3
    image: /img3.png
    target: /service3
    markup: h4
Description du service 3.
///
///
///

## FAQ

/// accordion | Comment s'inscrire ?
Suivez ces étapes simples...
///

/// accordion | Tarifs
    open: true
Nos tarifs sont disponibles...
///
```

---

## Astuces et bonnes pratiques

1. **Utilisez les bonnes balises** : `markup: h4` pour les titres de sections
2. **Ajoutez des badges** pour mettre en avant les nouveautés
3. **Utilisez les grilles** pour organiser le contenu
4. **Les couleurs DSFR** sont cohérentes et accessibles
5. **Testez en mode responsive** : les colonnes `lg-X` s'adaptent au mobile
6. **Combinez les composants** : cards dans des grilles, badges dans des cards, etc.
7. **Les accordéons** sont parfaits pour les FAQ
8. **Les callouts** attirent l'attention sur les infos importantes
9. **Les alertes** transmettent le niveau d'urgence (info/warning/error)
10. **Les tuiles** sont idéales pour les grilles de liens

---

## Support et documentation

Pour plus d'informations sur le Design System de l'État Français (DSFR), consultez :
- [Documentation officielle DSFR](https://www.systeme-de-design.gouv.fr/)
- [Composants DSFR](https://www.systeme-de-design.gouv.fr/composants)
- [Couleurs DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-de-l-identite-de-l-etat/couleurs)
