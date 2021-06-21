const s1 = "hello";
const s2 = "world";
const s3 = "hi";
const s4 = "world";

function twoStrings(s1, s2) {
    // Write your code here
    let lettersMap = {};
    for (const letter of s1) {
        if (!lettersMap[letter]) {
        lettersMap[letter] = 1;
        }
    }

    for (const letter of s2) {
        if (lettersMap[letter]) {
        return 'YES';
        }
    }
    return 'NO';
}
console.log(twoStrings(s1, s2));
console.log(twoStrings(s3, s4));
