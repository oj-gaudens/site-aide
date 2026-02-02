# Template Slides

Ce template est optimisé pour créer des présentations avec des slides.

## Comment utiliser

Séparez vos slides avec `---` (trois tirets)

---

# Ma Présentation

## Titre de la présentation

Par Votre Nom

---

# Slide 2 : Introduction

/// callout | Point clé
    color: green-menthe
Les composants DSFR fonctionnent aussi dans les slides !
///

- Point 1
- Point 2
- Point 3

---

# Slide 3 : Avec une alerte

/// alert | Attention
    type: warning
Information importante à retenir.
///

Texte explicatif après l'alerte.

---

# Slide 4 : Grille 2 colonnes

/// row | fr-grid-row--gutters
/// col
## Colonne 1

Contenu de la première colonne avec du texte et des **éléments** en gras.
///

/// col
## Colonne 2

Contenu de la deuxième colonne avec du texte et des *éléments* en italique.
///
///

---

# Slide 5 : Avec des cards

/// row | fr-grid-row--gutters
/// col
/// card | Fonctionnalité 1
    image: https://via.placeholder.com/300x200
    markup: h4
Description courte.
///
///

/// col
/// card | Fonctionnalité 2
    image: https://via.placeholder.com/300x200
    markup: h4
Description courte.
///
///
///

---

# Slide 6 : Avec des badges

Nos produits :

/// badge
    type: success
    icon: true
Validé
///

/// badge
    type: new
Nouveau
///

/// badge
    color: green-menthe
Populaire
///

---

# Slide 7 : Conclusion

## Merci !

/// callout | Questions ?
    color: blue-cumulus
N'hésitez pas à nous contacter.
///

---

# Fin

**Merci pour votre attention !**

Contact : email@example.com
