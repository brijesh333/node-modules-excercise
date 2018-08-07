const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let a=[];
let i=5;
rl.write("write");
rl.on('line',(input)=>{
    a.push(input);
    i--;
    if(i==3){
        // rl.pause();
        // console.log(a);
    }
    else if(i==1){
        rl.resume();
    }
    else if(i==0){
        rl.close();
        // rl.write(a);
        console.log(a);
    }
})