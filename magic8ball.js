//random comment 
function getRandom (){
    return Math.floor(Math.random() * 5 + 1);
}

if (getRandom() === 1) {
    document.write('Ask again later');  
} else if (getRandom() === 2) {
    document.write('As I see it, yes');
} else if (getRandom() === 3) {
    document.write('Don\'t count on it');
} else if (getRandom() === 4) {
    document.write('Concentrate and ask again');
} else {
    document.write('It is decidedly so');
}

