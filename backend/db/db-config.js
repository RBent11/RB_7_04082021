const sqlite3 = require('sqlite3');
const dbname = './db/main.db';
// const dbname = ':memory:';
const uniqid = require('uniqid');


let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err

    console.log('Database démarrée')
});


db.run('CREATE TABLE IF NOT EXISTS users(id varchar(50), last_name varchar(50), first_name varchar(50), email varchar(120), password varchar(255))');

db.run('CREATE TABLE IF NOT EXISTS post(id varchar(50), title varchar(255), content varchar(255), attachment varchar(255), like boolean, dislike boolean)');


module.exports = db;