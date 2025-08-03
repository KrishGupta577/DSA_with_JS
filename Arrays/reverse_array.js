function reverse_array(arr) {
    
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let temp = arr[start]

        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }
}

let arr = [1, 2, 3, 4, 5, 7, 8,9]

console.log("Array :", arr)

reverse_array(arr)

console.log("Reversed array :", arr)