function sort_0_and_1(arr) {

    let start = 0
    let end = arr.length - 1

    while (start < end) {

        if (arr[start] === 0) {
            start = start + 1
        }

        if (arr[end] === 1) {
            end = end - 1
        }

        if (arr[start] !== 0 && arr[end] !== 1) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
    }

    return arr;
}

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]

console.log("Original Arrays :", arr)

const result = sort_0_and_1(arr)

console.log("Sorted Arrays :", result)