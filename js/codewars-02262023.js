function numberToPower(number, power){
    let summation = 1
    
    for (let i = 0; i < power; i++){
      summation *= number
    }
    
    return summation
  }