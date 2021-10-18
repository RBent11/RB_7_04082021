const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/db-config');
const uniqid = require('uniqid');
const md5 = require('md5');



exports.signup = (req, res) => {

  

  db.all('SELECT * FROM users WHERE email = ?', req.body.email , (err, rows)=>{
    
    if(err != null){
      console.log(err);
      return res.status(500).json({error : err})
    }

    if(rows.length > 0){
      return res.status(409).json({error : 'Utilisateur existant'})
    }

    bcrypt.hash(req.body.password, 10)
    .then(hash => {

      db.run('INSERT INTO users(id, lastName, firstName, email, password) VALUES(?,?,?,?,?)', [
        uniqid(),
        req.body.lastName,
        req.body.firstName,
        req.body.email,
        hash
      ]);
      return res.status(201).json({
        message: 'Utilisateur créé'
      })

    })
    .catch(error => res.status(500).json({
      error: error
    }));
  })
};



exports.login = (req, res) => {

  db.get('SELECT * FROM users WHERE email = ?', req.body.email , (err, row)=>{

    console.log(row)

    if(row == undefined){
      return res.status(401).json({
        error: 'Utilisateur inexistant'
      });
      
    }
    
    bcrypt.compare(req.body.password, row.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({
          error: 'Mot de passe incorrect !'
        });
      }
      res.status(200).json({
        userId: row.id,
        token: jwt.sign({
            userId: row.id
          },
          'RANDOM_TOKEN_SECRET', {
            expiresIn: '24h'
          }
        ) 
      });
    
      
    })
    
  })

};

exports.deleteUser = (req,res) => {

  db.each('SELECT * FROM users WHERE email = ?', req.body.email , (err, data)=>{
    if(err){console.log(err)}

    
    bcrypt.compare(req.body.password, `${data.password}`)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({
          error: 'Mot de passe incorrect !'
        });
      }
      
      db.run('DELETE FROM users WHERE email = ? ', req.body.email)
      res.status(200).json({message : "Utilisateur supprimé"})
      
    })
    .catch(error => res.status(500).json({
      error: error
    }))
  
  
})
  

};  