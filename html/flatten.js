var arrays = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10]];
// reduce
// concat
function crush_arrays(array) {
    return array.reduce( function(prevVal, curVal) {
        return prevVal.concat(curVal);
    });
}
// [1, 2, 3, 4, 5, 6]

//[NaN, NaN, NaN]
//[NaN, NaN, 4]

function every(array, f) {
    for (var i = 0; i < array.length; i++) {
        if (!f(array[i])) {
            return false;
        }
    };

    return true;
}
function some(array, f) {
    for (var i = 0; i < array.length; i++) {
        if (f(array[i])) {
            return true;
        }
    };

    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// true
console.log(every([NaN, NaN, 4, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN], isNaN));
// false
console.log(some([NaN, 3, 4], isNaN));
// true
console.log(some([2, 3, 4], isNaN));
// false

[NaN, NaN, NaN].some(isNaN);
