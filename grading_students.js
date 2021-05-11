const grades = [73, 67, 38, 33, 35]
let units = []
let tens = []
let newGrades = []
grades.forEach(e => {
    if(e <= 100) units.push(e%10)
})
grades.forEach(e => {
    if(e <= 100) tens.push(Math.floor(e/10))
})
console.log(units)
console.log(tens)
units.forEach((e,i) => {
    let diff = 0
    if(e > 5) {
        diff = 10 - e
        if(diff < 3) {
            if((tens[i]+1)*10 >= 40) {
                newGrades.push((tens[i]+1)*10)
            }else{
                newGrades.push((tens[i])*10 + units[i])
            }
        }else{
            newGrades.push(tens[i]*10 + units[i])
        }
    }else {
        diff = 5 - e
        if(diff < 3) {
            if(tens[i] * 10 + 5 >= 40) {
                newGrades.push(tens[i] * 10 + 5)
            }else{
                newGrades.push(tens[i]*10 + units[i])
            }
        }else{
            newGrades.push(tens[i]*10 + units[i])
        }
    }
})
console.log(newGrades)