function sumMix(x){
    return x.map(element => Number(element)).reduce((previous, current) => previous += current,0)
  }