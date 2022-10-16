function XO(str) {
    let x = 0
    let o = 0
    str.toLowerCase().split('').forEach(letter => {
      if (letter === 'x'){
        x++
      } else if (letter === 'o'){
        o++
      } else {
        //Nothing
      }
    })
  return x === o
}