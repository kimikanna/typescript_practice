function colorToNumber(colors: string): number {
    const colorsDecoding: Record<string, number> = {
        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Purple: 7,
        Gray: 8,
        White: 9,
    }

    const result = colorsDecoding[colors] ?? -1;
    return result;
}

console.log(colorToNumber("Black")); // 0
console.log(colorToNumber("Orange")); // 3
console.log(colorToNumber("Pink")); // -1

export { };
