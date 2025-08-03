function intersection_of_two_arrays(arr1, arr2) {

    let hash = {}
    let intersection = []

    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = true
    }

    for (let i = 0; i < arr2.length; i++) {

        if (hash[arr2[i]]) {
            intersection.push(arr2[i])

            hash[arr2[i]] = false
        }
    }

    console.log("Intersection of two arrays is :",intersection)
}

let arr1 = [1, 2, 2, 4, 4, 6, 8]
let arr2 = [2, 6, 5, 4, 2, 1, 3]

console.log("Original Arrays :", arr1, arr2)

intersection_of_two_arrays(arr1, arr2)