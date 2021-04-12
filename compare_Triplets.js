// Compare Triplets
function compareTriplets(a, b) {
    let i = 0;
    let score= [0, 0];
    while(i < a.length) {
        if (a[i] > b[i]) {
          scoreBoard[0]++;
        } else if (a[i] < b[i]) {
          scoreBoard[1]++;
        }
    }
    return score;
  }