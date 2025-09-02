function peak_in_a_mountain_of_array(arr) {

    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        }
        else {
            end = mid
        }
    }
    return start
}

const arr = [0, 10, 5, 2]

const result = peak_in_a_mountain_of_array(arr)

console.log("Result :", arr[result])