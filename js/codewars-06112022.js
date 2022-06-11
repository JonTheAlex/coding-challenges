function squareSum(numbers){
    return numbers.reduce((previous, current) => previous += Math.pow(current, 2), 0)
  }