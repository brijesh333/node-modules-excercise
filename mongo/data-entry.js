var url = "mongodb://localhost:27017";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection successful");
        var db=client.db('mydb');
        var myobj = { name: "Apple Inc", address: "USA" };
        db.collection('customer').insertOne(myobj,function(err,res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                console.log("Record inserted successfully")
            }
            client.close();
        })

    }
})