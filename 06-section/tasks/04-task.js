"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPropertyValue(obj, key) {
    return obj[key];
}
// Функция getPropertyValue принимает 2 аргумента:
// Объект и ключ свойства этого объекта, который
// необходимо вернуть. Типизируйте данную функцию
// таким образом чтобы код ниже вызвал ошибку только
// в том случае когда у объекта нет указанного
// свойства (второй вызов).
var car = {
    brand: "Ford",
    model: "Mustang",
    yearOfIssue: 1967,
    engine: "V8",
    hp: 115
};
console.log(getPropertyValue(car, "brand"));
