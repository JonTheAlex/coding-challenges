function oddCount(n){
    odd = []
    for (let i = 1; i < n; i+=2){
      odd.push(i)
    }
    return odd.length
  }