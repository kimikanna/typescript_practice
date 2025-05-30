function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Функция getPropertyValue принимает 2 аргумента:
// Объект и ключ свойства этого объекта, который
// необходимо вернуть. Типизируйте данную функцию
// таким образом чтобы код ниже вызвал ошибку только
// в том случае когда у объекта нет указанного
// свойства (второй вызов).

const car = {
  brand: "Ford",
  model: "Mustang",
  yearOfIssue: 1967,
  engine: "V8",
  hp: 115
};

console.log(getPropertyValue(car, "brand"));
// console.log(getPropertyValue(car, "nickname")); // Ошибка, т.к. свойства "nickname" не существует в car

export { };