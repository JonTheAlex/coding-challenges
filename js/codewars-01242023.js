function addLength(str) {
    return str.split(' ').map(word => {
      return word + ' ' + word.length
    })
  }
  