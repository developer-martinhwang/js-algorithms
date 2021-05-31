const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

function migratoryBirds(arr) {
    let sortedArr = arr.sort((a, b) => a - b) // ascending order
    let count = 1
    let occur = []
    let numHighestOccur = 0
    let typeOccur = []
    let typeHighestOccur = []
    let finalType = 0
    for (let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i+1]) {
            count++
        }else{
            typeOccur.push([sortedArr[i],count])
            occur.push(count)
            count = 1
        }
    }
    numHighestOccur = Math.max(...occur)
    for (let i = 0; i < typeOccur.length; i++){
        if(typeOccur[i][1] === numHighestOccur) {
            typeHighestOccur.push(typeOccur[i][0])
        }
    }
    finalType = Math.min(...typeHighestOccur)
    return finalType
}

function sortDescendingOrder(arr) {
    let sortedArr = arr.sort((a, b) => b - a) // descending order
    return sortedArr
}

console.log(migratoryBirds(arr))
// console.log(sortDescendingOrder(arr))
