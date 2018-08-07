var url="mongodb://localhost:27017";

var MongoClient=require('mongodb').MongoClient;

MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connection successful");
        var db=client.db('mydb');
        var myquery = { address: "USA" };
        var newvalues = { $set: {name: "Tesla Inc", address: "USA" } };
        db.collection('customer').updateOne(myquery,newvalues,function(err,res){
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