function pattern(n) {
    for(let i = 1; i<=n; i++){
        for (let j = i; j < n; j++) {
            process.stdout.write(" ")
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

pattern(5)