# Projet-mobile-cavelnoyerie
Application mobile basée sur une API web de citations issues de la série télévisée Kammelott.

Ce projet est sur le thème de Kaamelott, une série télévisée française diffusée par M6 mettant en scène le quotidien banal et burlesque du Roi Arthur et des chevaliers de la Table Ronde. Créée par Alexandre Astier, cette série humoristique offre une version décalée de la légende arthurienne et nous plonge dans univers unique “systématiquement débile mais toujours inattendu”. 

Le projet repose sur une API (https://kaamelott.chaudie.re/) de citations tirées de la série Kaamelott. Cette dernière recense ainsi plus de 800 citations accompagnées du nom du personnage qui l’a dite, du nom de l’acteur•trice correspondant•e, de son auteur (majoritairement Alexandre Astier, le créateur), de la saison (compté en “Livre”) et du numéro et du nom de l’épisode dans lequel elle a été dite.


L’application C’est Pas de la Kaamelott est une application mobile qui offre à l’utilisateur 2 modalités d’utilisation très différentes.
Tout d’abord un mode de jeu basé sur les citations,  et leurs auteurs et un mode “Random” qui proposera des citations aléatoires.

L’application propose également 2 jeux basés sur la connaissance des citations de Kaamelott. Le principe est simple, le joueur doit répondre à 5 questions en choisissant à chaque fois parmi 4 propositions. A la fin du jeu, il obtient donc un score sur 5. 
Chacun des jeu est proposé avec 3 niveaux de difficulté. 


Jeu 1 : Retrouver le personnage à l’origine de la citation proposée. 

  niveau débutant : le joueur doit choisir la bonne réponse parmi 4 propositions présentant l’image des personnages et leur nom,
  niveau intermédiaire : le joueur doit choisir la bonne réponse parmi 4 propositions affichant uniquement l’image des personnages, 
  niveau expert : le joueur doit choisir la bonne réponse parmi 4 propositions affichant uniquement le nom des personnages.

Jeu 2 : Retrouver la citation associée à un personnage donné. 

  niveau débutant : on fournit au joueur 4 citations et le nom d’un personnage. Le joueur doit sélectionner la citation qui n’a pas été dite par le personnage.
  niveau expert : on fournit au joueur 4 citations de personnages différents. Le joueur doit sélectionner la citation qui a été dite par un personnage spécifique.
  niveau intermédiaire : le joueur doit alternativement répondre à une question de niveau débutant et à une question du niveau expert. 
  
  
  
APPEL A L'API : 
  getRandomQuote : renvoie une citation aléatoire parmi toutes celles de l’API
  getRandomQuote1Perso : prend en entrée un nom de personnage et renvoie une de ses citations aléatoirement
  getAllQuote1Perso : prend en entrée un nom de personnages et renvoie un tableau de toutes ses citations
  
A partir de chaque appel, nous créons un objet Quote qui contient la citation, le personnage, le livre et le nom de l’épisode (le tout au format string). Ces différents éléments sont ensuite utilisés pour les jeux et la génération aléatoire de citations.
  

  
