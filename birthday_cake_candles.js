const num = [3, 1, 3, 0, 4, 0, 4, 4]
const howMuchMax = (num) => {
    const max = Math.max(...num)
    let howMuch = 0
    num.forEach(e => {
        if(max === e){
            howMuch ++
        }
    })
    return console.log(howMuch)
}
howMuchMax(num)