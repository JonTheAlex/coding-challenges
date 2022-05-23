function longest(s1, s2) {
    let newString = []
    s1.concat(s2).split('').forEach(element =>
      (!newString.includes(element))?newString.push(element):'none')
  
    return newString.sort().join('');                      
  }