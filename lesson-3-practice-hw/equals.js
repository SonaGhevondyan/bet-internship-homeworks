// Equals
'use strict'
function equals(arg1, arg2) {
    if((arg1 === undefined || arg1 === null) && (arg2 === undefined || arg2 === null)) {
        return true;
    }
    if((typeof arg1 !== 'object' && typeof arg1 !== 'function') && (typeof arg2 !== 'object' && typeof arg2 !== 'function')) {
        return arg1 === arg2;
    }
    if(typeof arg1 !== typeof arg2) {
        return false;
    }
    if(Object.getOwnPropertyNames(arg1).toString() !== Object.getOwnPropertyNames(arg2).toString()) {
        return false;
    }
    for(prop in arg1) {
        if(!equals(arg1[prop], arg2[prop])) {
            return false;
        }
    }
    return true;
}