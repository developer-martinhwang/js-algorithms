const b = 60; //buget
const keyboards = [40,50,60];
const drives = [5,8,12];
function getMoneySpent(keyboards, drives, b) {
    let max = -1
    for (let i = 0; i < keyboards.length; i++){
        let temp = 0;
        for (let j = 0; j < drives.length; j++) {
            if(keyboards[i] + drives[j] <= b){
                temp = keyboards[i] + drives[j];
                max = temp > max ? temp: max;
            }
        }
    }
    return max
}
console.log(getMoneySpent(keyboards, drives, b));