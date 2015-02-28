

var double = function(num) {
    return num * 2;
}

function double2(num) {
    return num * 2;
}

function clutch() {
    var output = "";
    var one = function(length) {
        for (var count = 0; count < length; count++) {
            output += "1";
        }
    }
    var zero = function(length) {
        for (var count = 0; count < length; count++) {
            output += "0";
        }
    }

    one(1);
    zero(3);
    one(3);
    zero(1);
    one(1);
    zero(1);
    one(1);

    return output + "\nPeriodic table with a centerpiece of mind.";
}

function back() {
    return forth();
}

function forth() {
    return back();
}

function arguments(arg) {
    console.log(arg);
    console.log(arguments);
}

function not_enough_args(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

function wrapFunction(val) {
    var local_variable = val;

    return function() {
        return local_variable;
    }
}

function object_creator(name, age) {
    var my_name = name;
    var my_age  = age;

    return (function() {
            return {name: my_name, age: my_age};
    })();
}

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function power2(base, exponent) {
    var output = 1;
    for (var i = 0; i < exponent; i++) {
        output *= base;
    };
    return output;
}
