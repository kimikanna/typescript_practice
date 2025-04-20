"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countResistance(colors) {
    var _a;
    var colorsDecoding = {
        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Purple: 7,
        Gray: 8,
        White: 9,
    };
    if (!Array.isArray(colors)) {
        return "Resistance is: ".concat((_a = colorsDecoding[colors]) !== null && _a !== void 0 ? _a : "Incorrect color");
    }
    try {
        var resistance = "";
        for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
            var color = colors_1[_i];
            resistance += colorsDecoding[color].toString();
        }
        return "Resistance is: ".concat(resistance);
    }
    catch (_b) {
        return "At least one of the colors are incorrect";
    }
    ;
}
console.log(countResistance(["Purple", "Black"])); // Resistance is: 70
console.log(countResistance(["Black", "Purple"])); // Resistance is: 07
console.log(countResistance(["White", "Gray", "Purple", "Blue", "Green"])); // Resistance is: 98765
console.log(countResistance("Yellow")); // Resistance is: 4
console.log(countResistance("Marshmallow")); // Resistance is: Incorrect color
console.log(countResistance(["Yellow", "Marshmallow"])); // At least one of the colors are incorrect
