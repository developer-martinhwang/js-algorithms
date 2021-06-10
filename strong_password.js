    const password = 'AUzs-nV'
    

    /*
    console.log('legnth', length)
    console.log('number',number.test(password))
    console.log('lowercase:', lowercase.test(password))
    console.log('uppercase:', uppercase.test(password))
    console.log('special character:', specialCharacter.test(password))
    */

    function minimumNuber(n, password) {
        // const number = new RegExp(/[0-9]/g);
        // const lowercase = new RegExp(/[a-z]/g);
        // const uppercase = new RegExp(/[A-Z]/g); 
        // const specialCharacter = new RegExp(/[!@#$%^&*()--+]/g); 
        // let noMatch = 0
        // let add = [0,0]
        // if(n < 6) {
        //     add[0] = 6-n
        // }
        // if (number.test(password) === false) {
        //     noMatch ++;
        //     console.log('number')
        // }
        // if (lowercase.test(password) === false){
        //     noMatch ++;
        //     console.log('lowercase')
        // }
        // if (uppercase.test(password) === false){
        //     noMatch ++;
        //     console.log('uppercase')
        // }
        // if (specialCharacter.test(password) === false) {
        //     noMatch ++;
        //     console.log('specialCharacter')
        // }
        // add[1] = noMatch;
        // return add;
        const number = password.match(/[0-9]/g); 
        const lowercase = password.match(/[a-z]/g)
        const uppercase = password.match(/[A-Z]/g)
        const specialCharacter = password.match(/[!@#$%^&*()--+]/g)
        let noMatch = 0
        let add = [0,0]
        if(n < 6) {
            add[0] = 6-n
        }
        if (number === null) {
            noMatch ++;
        }
        if (lowercase === null){
            noMatch ++;
        }
        if (uppercase === null){
            noMatch ++;
        }
        if (specialCharacter === null) {
            noMatch ++;
        }
        add[1] = noMatch;
        return Math.max(...add);
    }
    
    console.log(minimumNuber(password.length, password));
