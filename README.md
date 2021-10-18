# Lancement du back-end 

### Installation du back-end

Aller dans le dossier back et lancer la commande suivante :
```
npm install
```

##### Dépendances installées 

+ bcrypt: ^5.0.1,
+ body-parser: ^1.19.0,
+ express: ^4.17.1,
+ fs: ^0.0.1-security,
+ jsonwebtoken: ^8.5.1,
+ md5: ^2.3.0,
+ multer: ^1.4.3,
+ password-validator: ^5.1.1,
+ path: ^0.12.7,
+ sqlite3: ^4.2.0,
+ uniqid: ^5.3.0


### Lancement du serveur

Dans le terminal, toujours dans le dossier back, lancer la commande suivante :

```
nodemon server
```

ou

```
node server
```


Le serveur doit se lancer sur le port 3000

Pour y accéder depuis le navigateur, l'adresse est la suivante : 

http://localhost:3000

![Chargement back-end](/assets/back.png "Chargement back-end")


<!-- 
See [Configuration Reference](https://cli.vuejs.org/config/). -->


# Lancement du front-end 

### Installation du front-end

Aller dans le dossier front et lancer la commande suivante :
```
npm install
```

##### Dépendances installées 

+ bootstrap: ^5.1.1
+ core-js: ^3.6.5
+ jquery: ^3.6.0
+ popper.js: ^1.16.1
+ vue: ^3.0.0
+ vue-vetur-gen: ^0.0.1


### Lancement du serveur

Dans le terminal, toujours dans le dossier front, lancer la commande suivante :

```
npm run serve
```

Le serveur doit se lancer sur le port 8080

Pour y accéder depuis le navigateur, l'adresse est la suivante : 

http://localhost:8080

![Chargement front-end](/assets/front.png "Chargement front-end")