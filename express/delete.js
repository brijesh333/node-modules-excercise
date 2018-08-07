var url="mongodb://localhost:27017";

var MongoClient=require('mongodb').MongoClient;

MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connection successfull");
        var db=client.db('mydb');
        var obj={address:"USA"}
        db.collection('customer').deleteOne(obj,function(err,res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
            client.close();
        });
    }
});