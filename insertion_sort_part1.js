// let arr = [1,2,4,5,3]
let arr = [2,4,6,8,3]


function insertionSort1(n, arr) {
    let rightMostIndex = arr[n-1]
    arr[n-1] = arr[n-2]
    for (let i = n-1; i >= 0; i--) {
        if(arr[i] > rightMostIndex && arr[i-1] > rightMostIndex) {
            arr[i] = arr[i-1]
            let str = arr.join(' ')
            console.log(str)
        }else {
            arr[i] = rightMostIndex
            let str = arr.join(' ')
            console.log(str)
            break
        }
    }
}

insertionSort1(arr.length, arr)