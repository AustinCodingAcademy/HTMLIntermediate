function speak(line) {
    console.log(`The ${this.type} cow says, "${line}".`);
}

var ongoleCow = { type: "Ongole", speak: speak };
var herefordCow = { type: "Hereford", speak: speak };
