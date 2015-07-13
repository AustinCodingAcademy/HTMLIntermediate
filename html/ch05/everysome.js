//[NaN, NaN, NaN]
//[NaN, NaN, 4]

function every(array, test) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

function some(array, test) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}
