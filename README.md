# Express-server-modele

Il s'agit d'un modèle d'une API Rest Nodejs/Express

## Quick start

1. **Installation des modules**
```npm install```

2. **Configuration du client BDD**
Dans le fichier [client.js](./app/dataMappers/client.js), se trouve la TODO selon si l'on veut brancher l'API sur une BDD MySQL ou PostgresQL.
En l'état l'API fonctionne avec des fake data.
NB : pense à supprimer la logique avec les fakeData !!

3. **Pour démarrer le server** : ```npm start```

## Routes test

Welcome : [http://localhost:3000/](http://localhost:3000/)

FindAll : [http://localhost:3000/user/all](http://localhost:3000/user/all)

FindById : [http://localhost:3000/user/1](http://localhost:3000/user/1)

## Structure

1. **Le point d'entrée de l'API : ```app.js```**

2. **Les routers**
Ils s'occupent du routing (1 route appelle une méthode d'un controller), il est possible de les décomposer en un index (router principal) et des routers secondaires.
Exemple : un router qui gère les routes "user", un autre pour les "article", etc...

3. **Les controllers**
Leurs méthodes s'exécutent selon la route demandée. Methodes qui généralement (mais ce n'est pas obligé), peuvent demander des Data par l'intermédaire des dataMappers. Ensuite les controllers traitent ces Data et les renvoient au client.
NB : même chose que les routers, il est possible de les "spliter" : un controller pour les routes "user", un pour les "articles", etc...

4. **Les dataMappers**
Leur rôle est d'aller chercher des Data dans une BDD. Ils utilisent le ```client.js``` pour s'y connecter. Ils retounenent les Data aux controllers, ils ne les traitent pas.
NB : même chose que les routers & controller, il est possible de les "spliter" : un dataMapper pour les routes "user", un pour les "articles", etc...

## Les middlewares spéciaux

 - **errorsMiddleware**

Il gère les erreurs suivantes :
    - les 404 : aucune route ne correspond à la demande du client
    - les 500 : erreurs server (en provenance de la BDD par exemple)
Il renvoie au client une erreur détaillée.

- **bodySanitizer**

Il permet de "nettoyer" le body en écartant les caractères HTML = évite les injections de code malveillant.
