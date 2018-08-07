const fs=require('fs');
// fs.rename('./test.txt','test_renamed.txt',(err)=>{
//     console.log(err);
// });

// let stats=fs.stat('./test.txt',(err, stats)=>{
//     // console.log(stats);
//     console.log(stats.isFile());
// });


fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let a=[];        
        let arr=data.split('\n');
        // console.log(arr[0].split(" "));
        for(let row of arr){            
            let b=[]
            for(let col of row.split(' ')){
                b.push(col);
            }
            a.push(b);
        }
        console.log(a);
        // console.log("data from readfile : "+ data.split('\n'));
    }
});

// fs.open('./test.txt','r',(err,fd)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Data from fs.open command" + fd);
//     }
// })