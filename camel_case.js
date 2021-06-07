const s = "saveChangesInTheEditor"

function camelcase(s) {
    let word = 1;
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === s.charAt(i).toUpperCase()){
            word ++ ;
        }
    }
    return word;
}

console.log(camelcase(s))