const x = 1 // cat A's location 
const y = 3 // cat B's location
const z = 2 // mouse C's location

function catAndMouse (x, y, z) {
    let aCatAway = Math.abs(x-z)
    let bCatAway = Math.abs(y-z)
    let result = ""
    if (aCatAway < bCatAway) {
        result = "Cat A"
    }else if (aCatAway > bCatAway) {
        result = "Cat B"
    }else {
        result = "Mouse C"
    }
    return result
}

console.log(catAndMouse(x,y,z))