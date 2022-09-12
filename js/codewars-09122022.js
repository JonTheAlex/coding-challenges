function vaporcode(string) {
    return string.split('').filter(letter => letter !== ' ').join('  ').toUpperCase()
  }