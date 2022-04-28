function rgb(r, g, b){
    hexArr = []
    for (let i = 0; i < arguments.length; i++){
      if (arguments[i] >= 255){
        hexArr.push('FF')
      } else if (arguments[i] <= 0){
        hexArr.push('00')
      } else {
        hexArr.push(arguments[i].toString(16).padStart(2,'0'))
      }
    }
    return hexArr.join('').toUpperCase()
  }