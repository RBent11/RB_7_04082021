const db = require('../db/db-config');

const uniqid = require('uniqid');



exports.createPost = (req, res) => {

    db.run('INSERT INTO post(id, userId, title, content,) VALUES(?,?,?,?)', [
        uniqid.time(),
        req.body.userId,
        req.body.title,
        req.body.content,
        
      ]);
      res.status(201).json({
        message: 'Post créé'
      })
};


exports.modifyPost = (req, res) => {
  db.run(`UPDATE post
  SET title = ?,
    content = ?,
    attachment= ?
  WHERE id = ?
  `,[
    req.body.title,
    req.body.content,
    req.body.attachment,
    req.params.id
  ])
  ;
      res.status(201).json({
        message: 'Post modifié'
      })
};


exports.deletePost = (req, res) => {

  db.run('DELETE FROM post WHERE id = ? ', req.params.id)
  res.status(200).json({message : "Post supprimé"})

};


exports.getOnePost = (req, res) => {

  db.each(`SELECT * FROM post WHERE id = ?`, req.params.id, (err, data)=>{
    if(err){throw err}
    
    console.log(data)
    res.status(200).json({message : "Post affiché"})
  })
  

};


exports.getAllPost = (req, res) => {
  db.each(`SELECT * FROM post`, (err, data) =>{
    if(err){throw err}

    console.log(data)
    res.status(200).json({message : "Tous les post"})
  })
};


exports.likeDislike = (req, res) => {

  

};

