function firstOccurence(arr, target) {

    let start = 0
    let end = arr.length - 1
    let result = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == target) {
            result = mid
            end = mid - 1
        }

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return result
}

function lastOccurence(arr, target) {

    let start = 0
    let end = arr.length - 1
    let result = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == target) {
            result = mid
            start = mid + 1
        }

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] > target) {
            end = mid - 1
        }
    }
    return result
}

const arr = [
    5, 5, 5, 7, 7, 8, 10, 10, 10, 12,
    15, 15, 15, 15, 18, 18, 18, 20, 21, 21,
    22, 22, 22, 23, 25, 25, 25, 27, 27, 30
];
const target = 5

console.log("Original Arrays :", arr)
const firstOccurenceIndex = firstOccurence(arr, target)
const lastOccurenceIndex = lastOccurence(arr, target)

if (firstOccurence) {

    const totalOccurences = (lastOccurenceIndex - firstOccurenceIndex) + 1
    console.log("Total number of occurences of ", target, " are :", totalOccurences)
}
else
    console.log(result)