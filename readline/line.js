const readline = require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// rl.on('line',(input)=>{
//     console.log(input);
//     rl.close();
// })



let a=[];
let i=3;
let b=[];
rl.on('line',(input)=>{

    rl.on('line',(ii)=>{
        b.push(ii);
        i--;
        if(i==0){
            rl.close();
        }
        
    });    
    a.push(b)
    i--;
    if(i==0){
        rl.close();
        console.log(a);
    }
});

// var test=require("./test.js");
// console.log(test(3));