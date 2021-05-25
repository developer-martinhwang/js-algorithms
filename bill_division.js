const bill = [3, 10, 2, 9]
const k = 1
const b = 12

function bonAppetit(bill, k, b) {
    let charged = b
    let actual = 0
    // let i = 0
    // while (i < bill.length) {
    //     if(i === k) {
    //         actual += 0
    //     }else {
    //         actual += bill[i]
    //     }
    //     i++
    // }
    for (let i = 0; i < bill.length; i++) {
        if(i === k) continue
        actual += bill[i]
    }
    actual /= 2
    if(actual === charged) {
        actual = actual.toString()
        actual = "Bon Appetit"
    }else {
        actual = charged - actual
    }
    return actual
}

console.log(bonAppetit(bill, k, b))