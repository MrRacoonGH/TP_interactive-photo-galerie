# Sujet d'examen A1 - Galerie de photos interactive

Sujet d'examen dédié au JavaScript et au DOM.

![Projet de gallerie de photos interactive. Une photo est ouverte dans une lightbox](./interactive-photo-gallery.png)


## 1. Informations à savoir

- Durée de l'examen : 3 heures.
- L'évaluation concerne uniquement la partie JavaScript et DOM. Elle vise à créer une galerie d'images intéractive. Elle comprend une fenêtre modale et une fonctionnalité de recherche. Le code HTML et CSS est fourni.
- La maquette du projet est accessible [sur Figma](https://www.figma.com/design/FsNCpuBrzebZRlJ4KlOQNX/interactive-photo-gallery?node-id=0-1&t=3GLlhdmpdMFerloa-1).


## 2. Consignes

Bienvenue dans cet examen dédié au JavaScript et au DOM.

Vous êtes travailleur freelance et offrez vos services à des petites et moyennes entreprises ainsi qu'à des indépendants.

Vous avez récemment commencé une mission pour une photographe spécialisée dans les photos de paysage naturel. Cette dernière souhaite refaire son portfolio. Elle aimerait un système de recherche et une galerie d'images interactive.

Une de vos amis designeuse vous a préparé une première version de la maquette et a écrit la partie HTML et CSS du site. Vous devez maintenant intégrer la partie interactive avec le JavaScript.

Prenez bien le temps de découvrir la maquette Figma, les fonctionnalités demandées ainsi que le code HTML et CSS avant de commencer à travailler.

### 2.1. Fonctionnalités
Les fonctionnalités suivantes sont attendues :

- Quand un utilisateur clique sur une image, elle doit s'afficher dans une **lightbox** (une popup).
- Une fois la lightbox ouverte, l'utilisateur a le choix de passer à la photo suivante, à la photo précédente ou de fermer la lightbox. Il réalise ces actions grâce à sa souris.
- L'utilisateur peut rechercher une photographie via la barre de recherche. Cette recherche s'effectue sur la description de l'image. Cette description est contenue dans l'attribut `title`.
- Si aucune image ne correspond à la recherche, un message approprié doit être affiché.
- Les images n'ont pas  être chargées à partir d'un fichier JSON.

### 2.2. Code JavaScript
- Le code JavaScript doit être écrit au minimum en ES6/ES2015. Autrement dit, le mot clé `var` n'est pas autorisé.
- Écrivez un code JavaScript clair et bien organisé pour rendre votre galerie fonctionnelle.
- Faites particulièrement attention au nommage de votre code et respectez les conventions. Le code JavaScript doit être écrit en camelCase.
- Vous devez créer au moins deux fonctions en JavaScript. 
- Vous avez la possibilité de modifier le HTML et le CSS du projet dans les limites du raisonable.

### BONUS - Ajouter la navigation au clavier.

Implémentez la navigation dans la lightbox en utilisant les touches du clavier (flèches gauche/droite pour naviguer entre les images, touche Échap pour fermer la lightbox).

---

Conseils :

Voici quelques conseils pour vous aider à réussir ce projet :

- Analysez attentivement la structure HTML et CSS existantes pour bien comprendre comment les différentes parties sont organisées.
- Planifiez votre approche avant de commencer à coder, en identifiant les étapes nécessaires à l'implémentation de chaque fonctionnalité.
- Testez régulièrement votre script JavaScript pour vous assurer que toutes les fonctionnalités de la galerie fonctionnent correctement.
- Utilisez des commentaires dans votre code pour expliquer les sections importantes et les parties complexes.



## 3. Barème de notation

### 3.1. Réalisation de la lightbox
- Affichage de l'image en lightbox : l'image s'affiche correctement dans une popup lorsqu'on clique dessus.
- Navigation dans la lightbox : l'utilisateur peut naviguer entre les images avec les boutons suivant et précédent.
- Fermeture de la lightbox : l'utilisateur peut fermer la lightbox via un bouton ou en cliquant en dehors de l'image.


### 3.2. Système de recherche
- Recherche fonctionnelle : l'utilisateur peut rechercher des images par leur description (title).
- Message d'erreur : un message approprié s'affiche si aucune image ne correspond à la recherche.

### 3.2. Code JavaScript
- Respect des standards ES6/ES2015 : utilisation de let et const au lieu de var.
- Organisation et clarté du code : le code est bien structuré, lisible et bien commenté.
- Nommage et conventions : les noms de variables et de fonctions suivent la convention camelCase et sont nommées de manière compréhensibles.
- Création de fonctions : au moins deux fonctions JavaScript sont créées et utilisées.


### 3.3. Bonus
Navigation au clavier - implémentation de la navigation dans la lightbox en utilisant les touches du clavier (flèches gauche/droite pour naviguer entre les images, touche Échap pour fermer la lightbox).


## 4. Organisation des dossiers

- [01-startup-files](./01-startup-files/) - Le projet dans son été initial. Il contient un guide de style. **Il contient le code HTML et CSS du projet**.
- [02-with-solution](./02-with-solution/) - Le projet complet avec le code HTML et CSS.

