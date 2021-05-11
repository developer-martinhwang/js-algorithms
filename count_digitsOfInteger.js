let n = 457
let count = 0
if (n >=1) ++count
console.log(count)
while (n/10 >=1){
    n /= 10
    ++count
}
console.log(count)