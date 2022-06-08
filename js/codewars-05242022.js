function consecutive(arr, a, b) {
    return ((arr.indexOf(a) === arr.indexOf(b) + 1) || (arr.indexOf(a) === arr.indexOf(b) - 1)) ? true : false
  }