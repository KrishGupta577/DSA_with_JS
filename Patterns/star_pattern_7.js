function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n; j++) {
            process.stdout.write(" ")
        }
        for (let j = 0; j < (2 * i - 1); j++) {
            process.stdout.write("*")
        }
        console.log()
    }
    for (let i = n-1; i > 0; i--) {
        for (let j = i; j < n; j++) {
            process.stdout.write(" ")
        }
        for (let j = 0; j < (2 * i - 1); j++) {
            process.stdout.write("*")
        }
        console.log()
    }
}

pattern(5)