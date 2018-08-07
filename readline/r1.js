const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    input=answer;
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});
