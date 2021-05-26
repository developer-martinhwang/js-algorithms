const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

function migratoryBirds(arr) {
    let sortedArr = arr.sort((a, b) => a - b) // ascending order
    let number = sortedArr[0]
    let newSortedArr = []
   
    return newSortedArr
}

function sortDescendingOrder(arr) {
    let sortedArr = arr.sort((a, b) => b - a) // descending order
    return sortedArr
}

console.log(migratoryBirds(arr))
// console.log(sortDescendingOrder(arr))
