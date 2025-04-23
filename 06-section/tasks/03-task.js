"use strict";
// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(arg) {
    return arg.length;
}
console.log(getLength(['Я', 'люблю', 'Тинькофф']) === 3);
console.log(getLength('Я люблю Тинькофф') === 16);
