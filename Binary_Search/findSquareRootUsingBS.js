function findSquareRootBinarySearch(number) {

    let start = 0
    let end = number

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (mid * mid == number) {
            return mid
        }

        if (mid * mid < number) {
            start = mid + 1
        }

        if (mid * mid > number) {
            end = mid - 1
        }
    }
    return end
}

function squareRootWithMorePrecision(number, precision, tempResult) {

    let factor = 1
    let ans = tempResult

    for (let i = 0; i < precision; i++) {
        factor = factor / 10

        for (let j = ans; j * j < number; j = j + factor) {
            ans = j
        }
    }
    return ans.toFixed(precision)
}

let number = 37
let precision = 4

console.log("Given number :", number)
const tempResult = findSquareRootBinarySearch(number)

const result = squareRootWithMorePrecision(number, precision, tempResult)

console.log(`The square root of given number (approx) is ${result}`)