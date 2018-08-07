var url = "mongodb://localhost:27017";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, client) {
    if (err){
        throw err;
    } 
    else{
        console.log("Connected to MongoDB!");
        var db=client.db('mydb');

        db.createCollection('customers',function(err,res){
            if(err){
                console.log(err)
            }
            else{
                console.log(res);
                console.log("Collection customer created");
            }            
            client.close();
        });
    }    
  });