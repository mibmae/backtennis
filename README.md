# Express-server-modele

Il s'agit d'un modèle d'une API Rest Nodejs/Express

## Quick start
```npm install```

Dans le fichier [client.js](./app/dataMappers/client.js), se trouve la TODO selon si l'on veut brancher l'API sur une BDD MySQL ou PostgresQL.
En l'état l'API fonctionne avec des fake data.

## Structure :

### Le point d'entrée de l'API : ```app.js```

### Les routers
Ils s'occupent du routing (1 route appelle une méthode d'un controller), il est possible de les décomposer en un index (router principal) et des routers secondaires.
Exemple : un router qui gère les routes "user", un autre pour les "article"...etc.

### Les controllers
Leurs méthodes s'exécutent selon la route demandée. Methodes qui généralement (mais ce n'est pas obligé), peuvent demander des Data par l'intermédaire des dataMappers. Ensuite les controllers traitent ces Data et les renvoient au client.

### Les dataMappers
Leur rôle est d'aller chercher des Data dans une BDD. Ils utilisent le ```client.js``` pour s'y connecter. Ils retounenent les Data aux controllers, ils ne les traitent pas.

## Les middlewares spéciaux

### errorsMiddleware
Il gère les erreurs suivantes :
    - les 404 : aucune route ne correspond à la demande du client
    - les 500 : erreurs server (en provenance de la BDD par exemple)
Il renvoie au client une erreur détaillée.

### bodySanitizer
Il permet de "nettoyer" le body en écartant les caractères HTML = évite les injections de code malveillant.