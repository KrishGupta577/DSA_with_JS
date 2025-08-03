function pattern(n) {
    for(let i = 0; i<n; i++){
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode((65 + i )))
            process.stdout.write(" ")
        }
        console.log()
    }
}

pattern(5)
