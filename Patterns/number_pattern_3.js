function pattern(n) {
    let num = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {

            process.stdout.write(String(num))
            process.stdout.write(" ")

            num++
        }
        console.log()
    }
}

pattern(5)