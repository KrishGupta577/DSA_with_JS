function swap_alternatives(arr) {

    let start = 0
    let end = 1

    while (end <= (arr.length - 1)) {

        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start = start + 2
        end = end + 2
    }
}

let arr = [1, 2, 3, 4, 5, 6]

console.log("Original Array :", arr)

swap_alternatives(arr)

console.log("Final array :", arr)