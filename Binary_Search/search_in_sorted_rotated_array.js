function peak_in_a_mountain_of_array(arr) {

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

function binarySearch(arr, start, end, target) {

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == target) {
            return mid
        }

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return false
}

function searchInSortedRotatedArray(arr, target) {

    const pivotIndex = peak_in_a_mountain_of_array(arr)
    if (target >= arr[pivotIndex] && target <= arr[arr.length - 1]) {
        return binarySearch(arr, pivotIndex, (arr.length - 1), target)
    }
    else {
        return binarySearch(arr, 0, pivotIndex - 1, target)
    }
}

const arr = [7, 9, 1, 2, 3]
const target = 7

const result = searchInSortedRotatedArray(arr, target)

if (result !== false)
    console.log(`The element ${target} is present at : ${result}`)
else
    console.log(`The element ${target} is not present.`)