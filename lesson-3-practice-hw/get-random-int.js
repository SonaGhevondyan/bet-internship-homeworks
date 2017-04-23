// getRandomInt
'use strict'
function getRandomInt(max) {
    var randomFloat = (max + 1) * Math.random() + '';
    var randomInt = '';
    var i = 0;
    while(randomFloat[i] !== '.') {
        randomInt += randomFloat[i];
        i++;
    }
    return Number(randomInt);
}