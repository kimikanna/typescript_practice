"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function colorToNumber(colors) {
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
    var result = (_a = colorsDecoding[colors]) !== null && _a !== void 0 ? _a : -1;
    return result;
}
console.log(colorToNumber("Black")); // 0
console.log(colorToNumber("Orange")); // 3
console.log(colorToNumber("Pink")); // -1
