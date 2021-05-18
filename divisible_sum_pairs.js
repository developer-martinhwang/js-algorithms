const ar = [1, 3, 2, 6, 1, 2]
const k = 3
const n = 6
function divisibleSumPairs (n, k, ar) {
   let output = []
   let i = 0
   while (i < n) {
       for (let j = 1; j < n; j++){
          if(i < j) {
              if((ar[i]+ar[j])%k === 0) {
                  output.push('ar'+[i] + ',' + 'ar'+[j])
              }
          }
       }
       i++
   }
   return output.length
}

divisibleSumPairs(n, k, ar)