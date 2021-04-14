// Mini-Max sum
function sum(arr) {
    let sum  = arr.reduce((a,b) => {
        return a + b;
    })
    const min = sum - Math.max(...arr)
    const max = sum - Math.min(...arr)
    return min + " " + max
}
console.log(sum([1,2,3,4,5]))
