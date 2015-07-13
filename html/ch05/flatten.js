var arrays = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10]];
// reduce
// concat
function flatten(array) {
    "use strict";
    return array.reduce( function(prevVal, curVal) {
        return prevVal.concat(curVal);
    });
}
// [1, 2, 3, 4, 5, 6]
