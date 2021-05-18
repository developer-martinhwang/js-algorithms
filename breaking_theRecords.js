let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
let scores2 = [10, 5, 20, 20, 4, 5, 2, 25, 1]
const breakingRecords = (scores) => {
    let i = 0
    let r = [0, 0]
    let most = scores[0];
    let least = scores[0];
    while (i < scores.length) {
        if(most < scores[i]) {
            r[0]++
            most = scores[i]
        }
        if(least > scores[i]){
            r[1]++
            least = scores[i]
        } 
        i++
    }
    return console.log('most:', r[0], 'least:', r[1])
}

breakingRecords(scores2)

var num = 5.56789;
var n = num.toFixed(2);
var type = typeof(n)
console.log(typeof(num10:00pm))
console.log('type:',type)