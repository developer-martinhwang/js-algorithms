let arr = [3,4,7,5,6,2,1]

function insertionSort2 (n, arr) {
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[0];
        if(arr[i] < temp) {
            temp = arr[i]
        }
        let str = arr.join(' ');
        console.log(str)
    }
}

insertionSort2(arr.length, arr)