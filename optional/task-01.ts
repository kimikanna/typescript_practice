function sharingCookies(name?: string): string {
    return `One for ${name || 'you'}, one for me.`
}

console.log(sharingCookies('John'));
console.log(sharingCookies());

export { };