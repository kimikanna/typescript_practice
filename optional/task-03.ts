function countResistance(colors: string | string[]): string {
    const colorsDecoding: Record<string, number>= {
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

    if (!Array.isArray(colors)) {
        return `Resistance is: ${colorsDecoding[colors] ?? "Incorrect color"}`;
    }

    try {
        let resistance = "";
        for (const color of colors) {
            resistance += colorsDecoding[color].toString();
        }

        return `Resistance is: ${resistance}`;
    } catch {
        return "At least one of the colors are incorrect";
    };
}

console.log(countResistance(["Purple", "Black"])) // Resistance is: 70
console.log(countResistance(["Black", "Purple"])) // Resistance is: 07
console.log(countResistance(["White", "Gray", "Purple", "Blue", "Green"])) // Resistance is: 98765
console.log(countResistance("Yellow")) // Resistance is: 4
console.log(countResistance("Marshmallow")) // Resistance is: Incorrect color
console.log(countResistance(["Yellow", "Marshmallow"])) // At least one of the colors are incorrect


export { };