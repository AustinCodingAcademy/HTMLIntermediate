"use strict";
function fibonacci(length) {
    var output = [0, 1];
    var fibonacci_length = length || output.length;

    while (output.length < fibonacci_length) {
        var last = output[output.length - 1];
        var nextToLast = output[output.length - 2];
        output.push(last + nextToLast);
    }

    return output;
}
