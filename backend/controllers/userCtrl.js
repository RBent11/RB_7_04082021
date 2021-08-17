const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/db-config');
const uniqid = require('uniqid');

exports.signup = (req, res) => {

  bcrypt.hash(req.body.password, 10)
    .then(hash => {

      let buffer = new Buffer(req.body.email);
      let emailInbase64 = buffer.toString('base64');

      db.run('INSERT INTO users(id, last_name, first_name, email, password) VALUES(?,?,?,?,?)', [
        uniqid(),
        req.body.last_name,
        req.body.first_name,
        emailInbase64,
        hash
      ]);
      res.status(201).json({
        message: 'utilisateur créé'
      })
    })

    .catch(error => res.status(500).json({
      error: error
    }));

};



exports.login = (req, res) => {

  let buffer = new Buffer(req.body.email);
  let emailInbase64 = buffer.toString('base64');


  db.each('SELECT * FROM users WHERE email = ?', emailInbase64 , (err, data)=>{
    if(err){throw err}

    
    bcrypt.compare(req.body.password, `${data.password}`)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({
          error: 'Mot de passe incorrect !'
        });
      }
      res.status(200).json({
        userId: `${data.id}`,
        token: jwt.sign({
            userId: `${data.id}`
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
  
  let buffer = new Buffer(req.body.email);
  let emailInbase64 = buffer.toString('base64');


  db.each('SELECT * FROM users WHERE email = ?', emailInbase64 , (err, data)=>{
    if(err){throw err}

    
    bcrypt.compare(req.body.password, `${data.password}`)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({
          error: 'Mot de passe incorrect !'
        });
      }
      
      db.run('DELETE FROM users WHERE email = ? ', emailInbase64)
      res.status(200).json({message : "utilisateur supprimé"})
      
    })
})
  

};