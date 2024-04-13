# projet_web_S2

CLAUS Damia - FAVRY Clarence - LEFEBVRE Mathias - SAINT-MAXENT Juliette






## Titre du Projet: Guessword
### Description: 
<div style="text-align : justify">
Le Guessword est une application web ludique qui permet aux utilisateurs de deviner un mot mystère chaque jour ou de continuer à deviner des mots à la suite. Le jeu propose également différentes options de thèmes visuels pour personnaliser l'expérience utilisateur.


### Utilisation: 
Une fois le jeu installé, ouvrez simplement le fichier home.html dans votre navigateur pour accéder à la page d'accueil du jeu. À partir de là, vous pouvez choisir de jouer au "Mot du Jour", à la "Suite du Jour" ou de régler les "Paramètres" du jeu pour choisir votre thème préféré. Suivez les instructions à l'écran pour jouer et deviner les mots proposés.

### Règles du Jeu :
Choix du Mode de Jeu : Le jeu propose deux modes de jeu, Mot du Jour et Suite du Jour".
  - Mot du Jour :
 
    - Chaque jour, un nouveau mot mystère est généré.
    - Le joueur doit deviner le mot en entrant une lettre à la fois.
    - Le joueur dispose de 6 chances pour deviner correctement le mot.
    -   Si le joueur entre une lettre correcte, elle est affichée dans le mot mystère à la position correspondante la lettre est de couleur rouge. Sinon si elle est correct mais mal placé elle est de couleur jaune .
    - Si la lettre est incorrecte, le joueur perd une chance, elle est grise.
    - Si le joueur devine correctement le mot avant d'utiliser toutes ses chances, il gagne la partie.
    - Sinon, s'il utilise toutes ses chances sans deviner correctement le mot, il perd la partie.

  - Suite du Jour :
    - Dans ce mode, le joueur doit deviner plusieurs mots à la suite.
    - Le joueur commence avec un score de 0.
    - Pour chaque mot deviné correctement, le joueur gagne des points.
    - Si le joueur devine incorrectement un mot, il ne gagne aucun point mais peut continuer à deviner les mots suivants.
    - Le jeu se poursuit jusqu'à ce que le joueur devine tous les mots ou qu'il atteigne un certain nombre de mots devinés.
    - Le joueur peut choisir de rejouer pour améliorer son score.


### Thèmes Visuels :
Le joueur peut choisir parmi différents thèmes visuels (bleu, violet, vert) dans les paramètres pour personnaliser l'apparence du jeu.

## Page HTML
### Home (home.html)
Cette page est la page d'accueil du jeu. Elle présente le titre du jeu et propose trois boutons pour naviguer vers différentes parties du jeu :

- Mot du jour : Permet de jouer au mot du jour.
- Suite du jour : Permet de deviner des mot a la suite
- Paramètre : Permet de choisir le thème préféré pour le jeu.

### Mot du jour (index.html)
La page "Mot du jour" permet de jouer au mot du jour. Elle affiche les lettres du mot à deviner sous forme de grid, ainsi qu'un clavier virtuel pour entrer les lettres.

### Suite du jour (suite.html)
La page "Suite du jour" permet de deviner des mots à la suite.  Elle affiche les lettres du mot à deviner sous forme de grid, ainsi qu'un clavier virtuel pour entrer les lettres. Ici nous avons un score est un compteur de nombre de mot deviné

### Paramètre (parametre.html)
La page "Paramètre" permet de choisir le thème préféré pour le jeu. Elle propose plusieurs options de thèmes (bleu, violet, vert) et permet à l'utilisateur de sélectionner celui qu'il préfère. On verra par la suite comment le thème est gardé sur chaque page.

## Pages JavaScript
### Page attribué au mot du jour, index et paramètre (script.js)
Ce script va permettre pour le mot du jour de détecter si le joueur appuie sur une touche qu’elle s’affiche dans la bonne case ou si il utilise le clavier virtuel cela fonctionne bien aussi. Si le joueur décide d’effacer sa lettre elle s’efface et de même pour le clavier virtuel.


Une fois que le joueur appuie sur entrer la fonction submiguess s’active est vérifié si le mot afficher contient des lettres du mot a deviné et que si certaines lettres sont a la bonne places il les affiches en rouges et que si elle sont mal placé les affiche en jaune.


Si le joueur a trouvé le mot, un message s’affiche pour dire qu’il a gagné sinon il a utilisé ses 6 chances alors le mot a trouver s’affiche. 

Pour changer de thème il suffit d'aller dans les paramètres, le thème par défaut est bleu. Dans l’url  on a ajouté une variable qui permet de faire le transfert entre les pages, dès le chargement de la page on va venir récupérer le mode et effectuer la fonction qui correspond à la couleur ce qui va permettre d’ajouter au élément une classe qui va changer le fond et les boutons des couleurs.

### Page attribué à suite (serieScript.js)
Cette page reprend toutes les fonctionnalités du script. js mais avec des modifications sur certaines fonctions.


Notamment lorsque le joueur gagne, ici nous attribuons des points à chaque mot qu’il devine et si à la fin il a tout deviné il gagne.


Nous avons aussi dû créer une nouvelle fonction resetTiles() qui permet de réinitialiser la grille et le clavier virtuel pour que l’utilisateur devienne un nouveau mot.


## Pages CSS
Toutes les pages qui suivent vont permettre de rajouter un style visuel pour l’utilisateur: comme par exemple des couleurs mais encore des animations.

### Page attribué à home (home.css)
Ce fichier contient les styles spécifiques à la page d'accueil de notre application. Il définit les couleurs de fond, la police de caractères et d'autres styles visuels pour améliorer l'apparence de la page.


### Page attribué à mot du jour (style.css)
Le fichier style.css est dédié à la page du mot du jour. Il permet de définir les styles visuels pour cette page, tels que la couleur de fond, la police de caractères et la couleur du texte.

### Page attribué à parametre (parametre.css)
Dans ce fichier, vous trouverez les styles pour la page des paramètres. Il est utilisé pour définir les couleurs de fond, la police de caractères et d'autres éléments visuels pour cette page spécifique.

### Page attribué à suite (suites.css)
Le fichier suites.css contient les styles spécifiques à la page de la suite. Il définit les couleurs de fond, la police de caractères et d'autres styles pour améliorer l'apparence de cette page particulière.


## Installation: 
Pour installer le jeu de devinettes, suivez ces étapes :
- Clonez le dépôt : ``git clone https://github.com/clausdamia/projet_web_S2.git`` 
- ouvrez les fichiers sur votre machine local.
- Assurez-vous d'avoir un navigateur web compatible tel que Chrome, Firefox ou Edge.

</div>
