function pattern(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {

            if (j >= i) {
                process.stdout.write("* ")
            }
            else {
                process.stdout.write("  ")
            }
        }
        console.log()
    }
}

pattern(5)