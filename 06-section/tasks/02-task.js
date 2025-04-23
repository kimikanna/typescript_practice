"use strict";
// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.
Object.defineProperty(exports, "__esModule", { value: true });
function echo(something) {
    return something;
}
// 2. Создайте стрелочную функцию echo2 c
// аналогичным функционалом.
var echo2 = function (something) {
    return something;
};
console.log(echo(1));
console.log(echo("Hello 1"));
console.log(echo2(2));
console.log(echo2("Hello 2"));
