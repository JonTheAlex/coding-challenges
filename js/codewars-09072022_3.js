function adjacentElementsProduct(array) {
    let maxProd = []
    for (let i = 0; i < array.length - 1; i++){
      maxProd.push(array[i] * array[i+1])
    }
    return maxProd.sort((a,b) => a - b).pop()
  }