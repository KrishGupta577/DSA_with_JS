function pair_of_two(arr, sum) {

    let hash = {}

    for (let i = 0; i < arr.length; i++) {

        let complement = sum - arr[i]

        if (hash[complement] !== undefined) {
            return [hash[complement], i]
        }
        hash[arr[i]] = i
    }

    return null
}

let arr = [1, 2, 2, 4, 4, 6]
let sum = 9

console.log("Original Arrays :", arr)

const result = pair_of_two(arr, sum)


if (result !== null) {
    const [index1, index2] = result
    console.log("Pair of sum are :", arr[index1], "and", arr[index2], "which are at indexes", index1, "and", index2)
}
else console.log("There is no pair of sum")