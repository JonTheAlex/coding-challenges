function squareOrSquareRoot(array) {
    return array.map(element => 
      Number.isInteger(Math.sqrt(element)) ? Math.sqrt(element) : Math.pow(element,2)
    )
  }