const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ", function (number) {
    let result = 0
    let binaryNum = Number(number)
    rl.close();


    let i = 0

    while (binaryNum !== 0) {

        if (binaryNum % 10) {
            result = result + (2 ** i)
        }
        i++
        binaryNum = parseInt(binaryNum / 10)

    }

    console.log(result)

});