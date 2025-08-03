function pattern(n) {
    for(let i = 1; i<=n; i++){
        for (let j = 0; j < i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
    for(let i = n-1; i>=1; i--){
        for (let j = 0; j < i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

pattern(5)