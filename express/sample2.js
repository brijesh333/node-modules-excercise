var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
    


var db = new Db('mydb', new Server('localhost', 27017));
// Fetch a collection to insert document into
db.open(function(err, db) {

});