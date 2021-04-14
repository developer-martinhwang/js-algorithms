let arr = [0, -1, -2, 3, 4]
const checkPlusMinus = (arr) => {
    let number = {
        sizeArray: arr.length,
        numPostive: 0,
        numNegative: 0,
        numZero: 0
    }
    arr.forEach( e => {
        if(Math.sign(e) === 1) {
            number.numPostive ++
        }
        if(Math.sign(e) === -1) {
            number.numNegative ++
        }
        if(Math.sign(e) === 0) {
            number.numZero ++
        }
    })
    return number
}
const ratiosElements = (obj) => {
    let ratios = {
        proportionOfPostive: Number.parseFloat(obj.numPostive / obj.sizeArray).toFixed(6),
        proportionOfNegative: Number.parseFloat(obj.numNegative / obj.sizeArray).toFixed(6),
        proportionOfZeros: Number.parseFloat(obj.numZero / obj.sizeArray).toFixed(6),
    } 
    return ratios.proportionOfPostive + '\n' + ratios.proportionOfNegative + '\n' + ratios.proportionOfZeros
}
const number = checkPlusMinus(arr)

console.log('size:', number.sizeArray,'\n',
            'numPositive:', number.numPostive,'\n',
            'numNegative:', number.numNegative,'\n',
            'numZero:', number.numZero)       

console.log('ratios:',ratiosElements(number))