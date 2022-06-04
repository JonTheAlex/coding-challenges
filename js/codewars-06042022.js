function stringy(size) {
    bits = ''
    for (let i = 1; i < size+1; i++){
      if(i % 2 !== 0){
        bits = bits + '1'
      } else {
        bits = bits + '0'
      }
    } 
    return bits
  }