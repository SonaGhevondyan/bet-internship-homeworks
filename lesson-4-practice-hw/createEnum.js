// createEnum

(function createEnum(array) {
    'use strict'
    var counter = 0;
    var enum = {};
    for(var i = 0; i < array.length; i++) {
        Object.defineProperty(enum, (array[i].name || array[i], {
            value: array[i].value || counter,
            writable: false,
            enumerable: true,
            configurable: false
        });
        counter = (array[i].value || counter) + 1;
    }
    return enum
})(this);