function testEven(n) {
    return !Number.isInteger(n) ? false : n % 2 === 0 ? true : false
}