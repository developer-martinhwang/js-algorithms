// Length of Arry
let arr = [[1,2,3], [4,5,6], [9,8,9,4]]
console.log('Array Length:',arr[2].length)
// Difference between two numbers
console.log('Difference:', Math.abs(5-2-2))
// Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let sum_L_Diagonal = 0;
    let sum_R_Diagonal = 0;
    
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            if(i == j) {
                sum_L_Diagonal += arr[i][j];
            }
            if(i == n - j - 1) {
                sum_R_Diagonal += arr[i][j];
            }
        }
    }
    let absoluteDifference = Math.abs(sum_L_Diagonal - sum_R_Diagonal);
    return absoluteDifference
}