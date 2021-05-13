/*
* You are choreographing a circus show with various animals. 
* For one act, you are given two kangaroos on a number line ready to jump in the positive direction 
* (i.e, toward positive infinity).
* The first kangaroo starts at location  and moves at a rate of  meters per jump.
* The second kangaroo starts at location  and moves at a rate of  meters per jump.
* You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
* If it is possible, return YES, otherwise return NO.
*/

// Solution with Math
/*  x1 + n*v1 = x2 + n*v2
    n*v1 — n*v2 = x2 — x1
    n(v1-v2) = x2-x1
    n = (x2-x1)/(v1-v2)
    if (x2-x1)%(v1-v2) == 0, remainer is 0 then we can safely print out YES.
    V2 should be bigger than v1 to prevent negative integer.
*/

const numberLineJumps = (x1, v1, x2, v2) => {
    if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}

console.log(numberLineJumps(0,2,5,3))