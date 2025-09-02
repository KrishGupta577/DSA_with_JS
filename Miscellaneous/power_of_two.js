function power_of_two(num) {

    let n = num
    let binary_sum = 0

    while (n != 0) {

        binary_sum = binary_sum + (n & 1)
        n = n >> 1
    }

    if (binary_sum === 1) console.log("True")
    else console.log("False")
}

let num = 8

power_of_two(num)