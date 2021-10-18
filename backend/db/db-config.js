const sqlite3 = require('sqlite3').verbose();
const dbname = './db/main.db';
// const dbname = ':memory:';
const uniqid = require('uniqid');


let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err

    console.log('Database démarrée')
});

//email varchar(120) UNIQUE

db.run(`CREATE TABLE IF NOT EXISTS users(
    id varchar(50) primary key, 
    lastName varchar(50), 
    firstName varchar(50), 
    email varchar(120), 
    password varchar(255)
    )`);

db.run(`CREATE TABLE IF NOT EXISTS post(
    id varchar(50), 
    userCode varchar(50),
    title varchar(255), 
    content varchar(255), 
    attachment varchar(255), 
    like integer, 
    dislike integer,
    usersLiked array,
    usersDisliked array,
    FOREIGN KEY(userCode) REFERENCES users(id)
    
    )`);


module.exports = db;