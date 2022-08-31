function getCount(str) {
    let count = 0
    str.split('').forEach(letter => {
      if ('aeiou'.includes(letter)){
        count++
      }
    })
    return count
  }