//lastIndexOf
'use strict'
function lastIndexOf(array, item) {
    for(let i = array.length-1; i >= 0; i--) {
        if(array[i] === item) {
            return i;
        }
    }
    return -1;
}