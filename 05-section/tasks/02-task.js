"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stoveType;
(function (stoveType) {
    stoveType[stoveType["electro"] = 0] = "electro";
    stoveType[stoveType["gas"] = 1] = "gas";
})(stoveType || (stoveType = {}));
var kitchen = {
    chairsCount: 4,
    hasPlants: true,
    stoveType: stoveType.electro,
};
console.log(kitchen);
