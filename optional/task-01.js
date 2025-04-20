"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sharingCookies(name) {
    return "One for ".concat(name || 'you', ", one for me.");
}
console.log(sharingCookies('John'));
console.log(sharingCookies());
