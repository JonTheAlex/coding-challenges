function powersOfTwo(n){
    powers = []
    for (let i = 0; i <= n; i++){
      powers.push(Math.pow(2,i))
    }
    return powers
  }