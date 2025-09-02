const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ", function (number) {
    let result = 0
    let num = Number(number)
    rl.close();


    let i = 0

    while (num !== 0) {
        const bit = num & 1
        result = (bit * (10 ** i)) + result

        num = num >> 1
        i++
    }

    console.log(result)

});