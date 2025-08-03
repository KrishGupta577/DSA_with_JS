function distinct_element(arr) {

    let hash = {}

    for (let i = 0; i < arr.length; i++) {

        hash[arr[i]] = hash[arr[i]] + 1 || 1

    }
    for (let key in hash){
        console.log("Distinct elements in array are :",key)
    }
}

let arr = [1, 2, 2, 4, 4, 6]

console.log("Original Array :", arr)

distinct_element(arr)