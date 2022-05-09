function pigIt(str){
    return str.split(' ').map(element => {
      return element.slice(1,).concat(element.slice(0,1)).concat('ay')
    }).join(' ')
  }