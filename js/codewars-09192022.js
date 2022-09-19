function modifyMultiply (str,loc,num) {
    return str.split(' ')[loc].concat('-').repeat(num).replace(/-+$/, '')
  } 