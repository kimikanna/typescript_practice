// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.

function echo<T>(something: T): T {
  return something;
}

// 2. Создайте стрелочную функцию echo2 c
// аналогичным функционалом.

const echo2 = <T, >(something: T): T => {
return something;
};

console.log(echo(1));
console.log(echo("Hello 1"));

console.log(echo2(2));
console.log(echo2("Hello 2"));

export { };