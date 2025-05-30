// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.

interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

console.log(getLength(['Я', 'люблю', 'Тинькофф']) === 3);
console.log(getLength('Я люблю Тинькофф') === 16);
// console.log(getLength(1027739642281)); // Ошибка, у number нет свойства length

export { };