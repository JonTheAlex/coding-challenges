function primeFactors(n){
  let primes = [];
  let instObj = {};
  let str = ''

  for (let i = 2; i <= n; i++){
    while(n % i === 0){
      primes.push(i);
      n = n / i;
    }
  }

  for (let prime of primes){
    if (instObj[prime]){
      instObj[prime] += 1;
    } else {
      instObj[prime] = 1;
    }
  }

  for (let key in instObj){
    if (instObj[key] > 1){
      str = str.concat(`(${key}**${instObj[key]})`)
    } else {
      str = str.concat(`(${key})`)
    }
  }
  return str;
}
