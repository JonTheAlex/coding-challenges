function countPositivesSumNegatives(input) {
    return input && input.length ?  [input.filter(element => element > 0).length,
            input.filter(element => element < 0).reduce((previous, current) => previous += current, 0)] : []
    }