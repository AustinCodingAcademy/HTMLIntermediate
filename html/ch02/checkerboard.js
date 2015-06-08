console.groupCollapsed('checkerboard');
var size = 8;
var output = '';
for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
        stringVariation1 = '#';
        stringVariation2 = ' ';
    } else {
        stringVariation1 = ' ';
        stringVariation2 = '#';
    }

    for (var j = 0; j < size; j++) {
        if (j % 2 === 0) {
            output += stringVariation1;
        } else {
            output += stringVariation2;
        }
    }

    output += '\n';
};
console.log(output);
console.groupEnd();
