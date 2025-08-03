function pattern(n) {
    for(let i = n; i>=1; i--){
        for (let j = 0; j < i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

pattern(5)