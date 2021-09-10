/**
 * Import d'express
 * Import du module bodyParser
 * Import du module path pour les chemins de fichiers
 */

 const express = require('express');
 const bodyParser = require('body-parser');
 const sqlite3 = require('sqlite3');
 const dbname = './db/main.db';
 const uniqid = require('uniqid');
 const path = require('path');
 const db = require('./db/db-config');
 const app = express();

 //Routes
 const userRoutes = require('./routes/userRoutes');
 const postRoutes = require('./routes/postRoutes');
 
 /**
  * Configuration des headers pour autoriser les accès à notre application
  */
 
 app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
     next();
 });
 
 //transformation du corps de la requête en objet JSON
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(bodyParser.json());



 
 app.use('/images', express.static(path.join(__dirname, 'images')));
 
 app.use('/api', userRoutes);

 app.use('/api/post', postRoutes);
 
 


 
 
 
 
 
 
 
 module.exports = app;