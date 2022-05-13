function oddOrEven(array) {
    return array.reduce((previous, current) => previous + current, 0) % 2 === 0 ? "even" : 'odd'
 }