//getRandomInt
'use strict'
function getRandonInt(max) {
    let RandomFloat = max * Math.random();
    return RandomFloat.toFixed(0);
}