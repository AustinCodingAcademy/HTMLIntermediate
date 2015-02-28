function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

forEach(["Moe", "Larry", "Curly"], function(item) {
    console.log(item.toUpperCase());
});

var stooges = ["Moe", "Larry", "Curly"];
stooges.forEach(function(name) {
    console.log(name.toUpperCase());
})

function greaterThan(n) {
    return function(m) { return m > n; };
}

function typeSet(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}

function unless(test, then) {
    if (!test) { then() };
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) { body(i) };
}
