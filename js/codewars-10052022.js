function fakeBin(x){
    return x.split('').map(value =>
        Number(value) < 5 ? '0' : '1').join('')
  }