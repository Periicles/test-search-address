# Recherche d'adresses (Base d'Adresses Nationale)

Application React + TypeScript permettant de rechercher des adresses françaises
via l'API officielle Base d'Adresses Nationale (api-adresse.data.gouv.fr).
Interface centrée, thème DaisyUI dark.

Documentation API : https://data.gouv.fr/dataservices/api-adresse-base-nationale-ban

Le projet est accessible à cette addresse : <https://test-search-address.vercel.app>

## Fonctionnalités

- Recherche à partir de 3 caractères, debounce pour limiter les requêtes.
- Résultats sans doublons, triés et affichés sous forme de cartes.
- Parsing du contexte Base d'Adresses Nationale pour afficher code/nom de
  département et région.
- Thème sombre DaisyUI et mise en page responsive.

## Stack

- React 19, TypeScript, Vite.
- Tailwind CSS.
- DaisyUI (composants et thèmes).

## Démarrage

1) Installer les dépendances : `npm install`
2) Lancer le dev server : `npm run dev`
3) Ouvrir l'URL affichée par Vite (par défaut <http://localhost:5173>)

## Structure rapide

- src/App.tsx : composition principale.
- src/components : barre de recherche et liste de résultats.
- src/hooks/useAddressSearch.ts : appel API, gestion erreurs/loading.
- src/utils/parseContext.ts : extraction département/région depuis le champ
  `context` Base d'Adresses Nationale.

## Notes

- DaisyUI est utilisé à titre non commercial ; licence MIT : <https://github.com/saadeghi/daisyui/blob/master/LICENSE>.
