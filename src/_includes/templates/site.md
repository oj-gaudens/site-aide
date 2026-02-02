# Template Site Web

Ce template est optimisé pour créer des pages web complètes avec tous les composants DSFR.

## Tous les composants disponibles

### 1. Alertes

/// alert | Alerte d'information
    type: info
    markup: h4
C'est une **information** importante.
///

/// alert | Alerte de succès
    type: success
    markup: h4
Opération réussie avec **succès** !
///

/// alert | Alerte d'avertissement
    type: warning
    markup: h4
Attention, ceci est un **avertissement**.
///

/// alert | Alerte d'erreur
    type: error
    markup: h4
Une **erreur** s'est produite.
///

---

### 2. Mise en avant (Callout)

/// callout | Information importante
    markup: h3
    color: green-menthe
    icon: info-line
C'est une mise en avant **importante** avec un titre h3.
///

/// callout | Avec un bouton
    markup: h4
    color: blue-cumulus
    icon: medal-fill
    link_label: En savoir plus
    link_url: https://www.example.com/
    link_newtab: true
C'est une mise en avant avec un **bouton** cliquable.
///

---

### 3. Accordéons

/// accordion | Premier accordéon
Contenu du premier accordéon avec du **texte formaté**.

- Point 1
- Point 2
///

/// accordion | Deuxième accordéon (ouvert par défaut)
    open: true
Contenu du deuxième accordéon.

1. Élément numéroté 1
2. Élément numéroté 2
///

---

### 4. Badges

/// badge
Badge par défaut
///

/// badge
    type: success
    icon: true
Validé
///

/// badge
    type: error
    icon: false
Périmé
///

/// badge
    color: green-menthe
Badge vert menthe
///

/// badge
    color: yellow-tournesol
Badge jaune tournesol
///

---

### 5. Grille de mise en page

#### Deux colonnes égales

/// row | fr-grid-row--gutters
    valign: top

/// col
**Colonne 1**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
///

/// col
**Colonne 2**

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
///
///

#### Trois colonnes égales

/// row | fr-grid-row--gutters
/// col | 12 lg-4
**Colonne 1/3**

Premier tiers de contenu.
///

/// col | 12 lg-4
**Colonne 2/3**

Deuxième tiers de contenu.
///

/// col | 12 lg-4
**Colonne 3/3**

Troisième tiers de contenu.
///
///

#### Colonnes de tailles différentes (8/4)

/// row | fr-grid-row--gutters
    valign: top

/// col | 12 lg-8
**Grande colonne (8/12)**

Contenu principal de la page avec plus d'espace pour le texte et les détails importants.
///

/// col | 12 lg-4
**Petite colonne (4/12)**

Sidebar ou contenu secondaire.
///
///

---

### 6. Cartes (Cards)

/// row | fr-grid-row--gutters
/// col
/// card | Carte simple
    image: https://via.placeholder.com/300x200
    target: https://www.example.com
    markup: h4
Description de la carte avec du contenu intéressant.
///
///

/// col
/// card | Avec description
    description: Sous-titre ou description courte
    image: https://via.placeholder.com/300x200
    target: https://www.example.com
    markup: h4
Le Bnum c'est votre Bureau numérique.
///
///

/// col
/// card | Avec badge
    image: https://via.placeholder.com/300x200
    target: https://www.example.com
    badge: Favori | green-menthe
    markup: h4
Carte avec un badge pour mettre en avant.
///
///
///

#### Cartes horizontales

/// row | fr-grid-row--gutters
/// col
/// card | Carte horizontale 50%
    image: https://via.placeholder.com/300x200
    target: https://www.example.com
    horizontal: true
    horizontal_pos: half
    markup: h4
Description de la carte horizontale avec l'image à 50%.
///
///
///

---

### 7. Tuiles (Tiles)

/// row | fr-grid-row--gutters
/// col
/// tile | Tuile simple
    picto: digital/application
    target: https://www.example.com
    markup: h4
Description succincte de la tuile.
///
///

/// col
/// tile | Avec description
    description: Sous-titre de la tuile
    picto: environment/leaf
    target: https://www.example.com
    markup: h4
Autre description succincte.
///
///

/// col
/// tile | Avec badge
    picto: health/health
    target: https://www.example.com
    badge: Nouveau | green-menthe
    markup: h4
Tuile avec un badge.
///
///
///

---

### 8. Exemple de page complète

# Bienvenue sur notre site

/// callout | Annonce importante
    color: blue-cumulus
    icon: info-line
    markup: h3
Découvrez nos nouvelles fonctionnalités !
///

## Nos services

/// row | fr-grid-row--gutters
/// col | 12 lg-4
/// card | Service 1
    image: https://via.placeholder.com/300x200
    target: /service1
    markup: h4
Description du premier service proposé.
///
///

/// col | 12 lg-4
/// card | Service 2
    image: https://via.placeholder.com/300x200
    target: /service2
    markup: h4
Description du deuxième service proposé.
///
///

/// col | 12 lg-4
/// card | Service 3
    image: https://via.placeholder.com/300x200
    target: /service3
    markup: h4
Description du troisième service proposé.
///
///
///

## Questions fréquentes

/// accordion | Comment ça marche ?
Explication détaillée du fonctionnement avec toutes les étapes nécessaires.
///

/// accordion | C'est payant ?
Détails sur les tarifs et les différentes offres disponibles.
///

/// accordion | Comment nous contacter ?
Informations de contact et horaires d'ouverture.
///

---

## Pour aller plus loin

/// alert | Besoin d'aide ?
    type: info
Consultez notre documentation complète ou contactez notre support.
///
