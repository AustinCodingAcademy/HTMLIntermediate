try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}

function look() {
    "use strict";
    if (promptDirection("Which way?") === "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

function promptDirection(question) {
    "use strict";
    var result = prompt(question, "");
    if (result.toLowerCase() === "left") { return "L"; }
    if (result.toLowerCase() === "right") { return "R"; }
    throw new Error("Invalid direction: " + result);
}

