var url="mongodb://localhost:27017";
var MongoClient=require('mongodb').MongoClient;

MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection successfull");
        var db=client.db("mydb");
        db.collection('customer').find({}).limit(2).toArray(function(err,res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
            client.close();
        })
    }
})