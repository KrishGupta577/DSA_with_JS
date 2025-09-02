function pivot_element(arr) {

    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] >= arr[0]) {
            start = mid + 1
        }
        else {
            end = mid
        }
    }
    return start
}

const arr = [2, 3, 4, 5, 6, 7, 1]

const result = pivot_element(arr)

console.log("Result :", arr[result])