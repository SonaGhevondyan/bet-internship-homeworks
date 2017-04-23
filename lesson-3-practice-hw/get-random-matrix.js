// GetRandomMatrix
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

function getRandomMatrix(n, m) {
    var array2D = [];
    for(var i = 0; i < n; i++) {
        array2D[i] = [];
        for(var j = 0; j < m; j++) {
            array2D[i][j] = getRandomInt(100);
        }
    }
    return array2D;
}