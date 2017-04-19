//API

var values = {};
(function() {
    function setPrimitive(object, primitive) {
        object.x = primitive;
        function valueOf() {
            return this.x;
        }
        object.valueOf = valueOf;
    }

    function changePrimitive(object, newPrimitive) {
        setPrimitive(object, newPrimitive);
    }

    window.setPrimitive = setPrimitive;
    window.changePrimitive = changePrimitive;
})();

setPrimitive(values, 4);
console.log(values.valueOf());

changePrimitive(values, "hello");
console.log(values.valueOf());