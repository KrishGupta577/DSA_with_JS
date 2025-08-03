function pattern(n) {
    for(let i = 1; i<=n; i++){
        for (let j = 0; j < i; j++) {
            process.stdout.write(String.fromCharCode((65 + j )))
            process.stdout.write(" ")
        }
        console.log()
    }
}

pattern(5)
