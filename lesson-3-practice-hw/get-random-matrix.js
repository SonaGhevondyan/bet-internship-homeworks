//GetRandomMatrix
'use strict'
function getRandomMatrix(n, m) {
    let array2D = [];
    for(let i = 0; i < n; i++) {
        array2D[i] = [];
        for(let j = 0; j < m; j++) {
            array2D[i][j] = Math.floor(101 * Math.random());
        }
    }
    return array2D;
}