function binarySearch(arr, target) {

    let start = 0
    let end = arr.length - 1

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

const arr = [
    3, 8, 14, 22, 29, 41, 55, 60, 74, 89,
    95, 110, 130, 145, 160, 178, 200, 225, 260, 300
];
const target = 4

console.log("Original Arrays :", arr)
const result = binarySearch(arr, target)

if (result)
    console.log("Target Element :", target, "is at index :", result)
else
    console.log("Element not found.")