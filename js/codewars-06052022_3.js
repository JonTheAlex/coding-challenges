function isNarcissistic(n) {
    len = n.toString().split('').length
    return (n.toString().split('').map(element => Math.pow(Number(element), len))
            .reduce((previous, current) => previous + current, 0)) === n ? true : false
  }