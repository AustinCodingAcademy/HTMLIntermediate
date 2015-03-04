function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

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

function transparentWrapping(f) {
    return function() {
        return f.apply(null, arguments);
    };
}

function rconsole(arg) {
    arg.forEach( function(item){
        console.log(item);
    });
}

function filter(array, test) {
    var passed = [];
    for(var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            passed.push(array[i]);
        }
    }
    return passed;
}

var movies80s = movie_list.filter( function(movie) {
    return movie.release_date > 1979 && movie.release_date < 1990;
});

function map(array, transform) {
    var mapped = [];
    for(var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

directors80s = movies80s.map( function(movie) {
    return movie.director;
});

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function year(movie) {
    return movie.release_date;
}
function director(movie) {
    return movie.director === "James Cameron";
}
function genre(movie) {
    return movie.genre === "Sci-Fi";
}
