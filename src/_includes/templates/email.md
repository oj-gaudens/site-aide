# Template Email

Ce template est optimisé pour la création d'emails avec des composants DSFR.

## Exemples de composants pour emails

### Alerte

/// alert | Information importante
    type: info
Ceci est une information importante pour votre email.
///

### Mise en avant (Callout)

/// callout | Ne manquez pas
    color: green-menthe
    icon: info-line
Profitez de notre offre spéciale jusqu'au 31 décembre !
///

### Badge

/// badge
    type: success
Nouveau
///

### Cards horizontales pour liens

/// row | fr-grid-row--gutters
/// col
/// card | Visitez notre site
    image: https://via.placeholder.com/300x200
    target: https://www.example.com
    horizontal: true
    markup: h4
Découvrez toutes nos actualités sur notre site web.
///
///
///

## Conseils pour les emails

- Utilisez des composants simples
- Évitez les grilles complexes
- Préférez les cards horizontales
- Utilisez les alertes pour les informations importantes
- Les badges sont parfaits pour les nouveautés

## Exemple d'email complet

---

# Newsletter Janvier 2026

Bonjour à tous,

/// callout | Nouvelle fonctionnalité
    color: blue-cumulus
    icon: medal-fill
Découvrez notre nouvel éditeur Markdown avec support DSFR !
///

## Actualités du mois

/// alert | Rappel important
    type: warning
La mise à jour sera effectuée le 15 janvier.
///

/// row | fr-grid-row--gutters
/// col
/// card | Article 1
    image: https://via.placeholder.com/300x200
    target: https://www.example.com/article1
    markup: h4
Titre de l'article avec un résumé captivant...
///
///

/// col
/// card | Article 2
    image: https://via.placeholder.com/300x200
    target: https://www.example.com/article2
    markup: h4
Un autre article intéressant avec son résumé...
///
///
///

Cordialement,  
L'équipe
