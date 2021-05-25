const s = [2,2,1,3,2]
const d = 4
const m = 2

// const birthday = (s, d, m) => {
//     let i = 0
//     let r = 0
//     while (i < s.length) {
//         let sum = 0
//         let slice = s.slice(i, i+m)
//         sum = slice.reduce((accumulator, currentValue) => {
//             accumulator + currentValue
//         })
//         if(sum === d && slice.length === m) r++
//         i++
//     } 
//     return r
// }
function birthday(s, d, m) {
    let r = 0;
    for (let i = 0; i < s.length; i++) {
      let sum = 0;
      let slice = s.slice(i, i + m);
      const reducer = 
      sum = slice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      if (sum === d && slice.length === m) {
        r ++
      }
    }
    return r
  }
console.log(birthday(s, d, m))
