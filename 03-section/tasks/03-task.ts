// 1. Типизируйте функцию calc

function calc(action: string, a: number, b: number): number {
  switch (action) {
    case "summ":
      return a + b;
    case "subtraction":
      return a - b;
    case "multiplication":
      return a * b;
    case "division":
      if (b === 0) return 0;
      return a / b;
    default:
      return a + b;
  }
}

// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action

enum CalcAction {
  Summ = "summ",
  Subtraction = "subtraction",
  Multiplication = "multiplication",
  Division = "division"
}

function calc2(action: CalcAction, a: number, b: number): number {
  switch (action) {
    case CalcAction.Summ:
      return a + b;
    case CalcAction.Subtraction:
      return a - b;
    case CalcAction.Multiplication:
      return a * b;
    case CalcAction.Division:
      if (b === 0) return 0;
      return a / b;
    default:
      return a + b;
  }
}

console.log(calc("summ", 4, 2));
console.log(calc2(CalcAction.Multiplication, 4, 2));
console.log(calc2(CalcAction.Division, 4, 0));

export { };