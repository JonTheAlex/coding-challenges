function grow(x){
    return x.reduce((previous, current) => previous *= current, 1)
  }