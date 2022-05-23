function squareDigits(num){
    return Number(num.toString().split('').map(element =>
          Number(element)).map(element =>
              Math.pow(element,2)).join(''))
    }