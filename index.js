// program to generate random strings

// declare all characters

function generateOtp(length,need) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = ' ';
    console.log(characters.length)
    const charactersLength = characters.length;
    if(need == "text"){
        for ( let i = 0; i < length; i++ ) {
        result += characters.slice(0,26).charAt(Math.floor(Math.random() * 26));
    }   
    } else if(need == "num"){
    for ( let i = 0; i < length; i++ ) {
        result += characters.slice(26,35).charAt(Math.floor(Math.random() * 10));
    }       
    } else if(need == "varchar"){
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }   
    }

    return result;
}


module.exports = generateOtp