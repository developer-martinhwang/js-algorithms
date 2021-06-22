// const n = 7;
// const ar = [1,2,1,2,1,3,2];
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(n, ar) {
    // Write your code here
    let sortedArray = ar.sort(function(a,b){return a-b});
    let pariedSocks = 0;
    for (let i  = 0; i < n; i++){
        if(sortedArray[i] === sortedArray[i+1]){
            pariedSocks ++;
            i++;
        }
    }
    return pariedSocks
}

console.log(sockMerchant(n, ar))