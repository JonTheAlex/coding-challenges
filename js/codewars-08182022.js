function find_average(array) {
    return array.length === 0 ? 0 : (array.reduce((previous, current) => previous += current, 0)) / array.length
  }