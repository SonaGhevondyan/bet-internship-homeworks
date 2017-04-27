// getClassName

(function getClassName(item) {
    'use strict';
    return Object.prototype.toString.call(item).slice(8, -1);
})(this);