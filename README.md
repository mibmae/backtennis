# Express-server-modele

Il s'agit d'un modèle d'une API Rest Nodejs/Express pour aider les noobs qui ont fait la spé REACT hahahahah

## Quick start

1. **Installation des modules**
```npm install```
    - Express
    - dotenv
    - argon2 : Chiffrage des mots de passe
    - joi : Validation du body
    - sanitizer : "Nettoyage" du body
    - jsonwebtoken : Gestion des tokens

2. **Configuration du client BDD**
Dans le fichier [client.js](./app/dataMappers/client.js), se trouve la TODO selon si l'on veut brancher l'API sur une BDD MySQL ou PostgresQL.
En l'état l'API fonctionne avec des fake data.

NB : Pense à supprimer la logique avec les fakeData !!

3. **Pour démarrer le server** : ```npm start```

## Structure

1. **Le point d'entrée de l'API** :

```app.js```

2. **Les routers**

Ils s'occupent du routing (1 route appelle une méthode d'un controller), il est possible de les décomposer en un index (router principal) et des routers secondaires.
Exemple : un router qui gère les routes "user", un autre pour l'authentification, etc...

3. **Les controllers**

Leurs méthodes s'exécutent selon la route demandée. Methodes qui généralement (mais ce n'est pas obligé), peuvent demander des Data par l'intermédaire des dataMappers. Ensuite les controllers traitent ces Data et les renvoient au client.

NB : même chose que les routers, il est préférable de spliter les controllers : un pour les routes "user", un autre pour l'authentification, etc...

4. **Les dataMappers**

Leur rôle est d'aller chercher des Data dans une BDD. Ils utilisent le ```client.js``` pour s'y connecter. Ils retounenent les Data aux controllers, ils ne les traitent pas.

NB : même chose que les routers et les controllers, il est préférable de spliter les dataMappers : un pour les routes "user", un autre pour l'authentification, etc...

## Les middlewares spéciaux

- **errorsMiddleware**

Il gère les erreurs suivantes :

    - les 404 : aucune route ne correspond à la demande du client
    - les 500 : erreurs server (en provenance de la BDD par exemple)
Il renvoie au client une erreur détaillée.

- **bodySanitizer**

Il permet de "nettoyer" le body en écartant les caractères HTML = évite les injections de code malveillant.

- **validationMiddleware**

Il permet de contrôler si les éléments du body répondent à certains critères, cf. [userSchema.js](app/middlewares/validationSchema/userSchema.js)
Ici, l'email et le mot de passe doivent respecter des Regex, cf. [https://regex101.com/](https://regex101.com/).

## Les services

- **tokenHandler**

Il permet de générer ou de vérifier les token.

- **Autre service**

Ici on pourrait rajouter un service qui gère l'envoie de mail par exemple.

----

## Routes GET

Welcome : [http://localhost:3000/](http://localhost:3000/)

- **userRouter**

findAll : [http://localhost:3000/user/all](http://localhost:3000/user/all)

findById : [http://localhost:3000/user/1](http://localhost:3000/user/1)

## Routes POST

- **authRouter**

signup : [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)
Body :
```js
{
	"name": "John",
	"email": "john@gmail.com",
	"password": "Azerty47!"
}
```


signin : [http://localhost:3000/auth/signin](http://localhost:3000/auth/signin)
Body :
```js
{
	"email": "bob@gmail.com",
	"password": "Azerty47!"
}
```

## Routes sécurisées par un token

Il faut ajouter dans le header de la requête :
```js
  headers: {
    "x-access-token": token
  }
```

findAll : [http://localhost:3000/user/secure/all](http://localhost:3000/user/secure/all)

findById : [http://localhost:3000/user/secure/1](http://localhost:3000/user/secure/1)
