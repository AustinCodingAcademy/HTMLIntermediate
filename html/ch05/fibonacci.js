function fibonacci(length) {
    var output = [0,1];
    for (var i = 2; i < length; i++) {
        var last = output[output.length - 1];
        var nextToLast = output[output.length - 2];
        output.push(last + nextToLast);
    }
    return output;
}
