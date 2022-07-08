function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    return (n === 0 || m === 0) && (n > 0 || m > 0) ? NaN: Math.max(n,m) % Math.min(n,m)
  }