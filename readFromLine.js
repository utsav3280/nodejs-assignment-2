const readline = require("readline");

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInput.question("Please enter your name:- ", (ans) => {
    console.log("Hello", ans);
    readInput.close();
});