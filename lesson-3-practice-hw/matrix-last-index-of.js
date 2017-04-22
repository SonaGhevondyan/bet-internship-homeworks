//matrixLastIndexOf
'use strict'
function matrixLastIndexOf(matrix, item) {
    for(let i = matrix.length-1; i >=0; i--) {
        for(let j = matrix[i].length-1; j >=0; j--) {
            if(matrix[i][j] === item) {
                return [i, j];
            }
        }
    }
    return -1;
}
