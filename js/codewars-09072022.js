stantonMeasure = (arr) => {
    return arr.filter(num => num === (arr.filter(num => num === 1).length)).length
  }