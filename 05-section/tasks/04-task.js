"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Измените тип аргумента data в функции formattedUserData
// таким образом чтобы ее вызов ниже не вызывал ошибку
function formattedUserData(data) {
    return "\n    \u0418\u043C\u044F: ".concat(data.firstName, ";\n    \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ").concat(data.lastName || "Не указана", ";\n    \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(data.age, ";\n    \u0420\u043E\u0434\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434: ").concat(data.hometown, ";\n  ");
}
console.log(formattedUserData({
    firstName: "Амир",
    age: 25,
    hometown: "Грозный"
}));
