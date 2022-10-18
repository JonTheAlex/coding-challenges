// return masked string
function maskify(cc) {
    let hash = ''
    for (let i = 0; i < cc.length-4; i++){
      hash += '#'
    }
    return hash + cc.slice(-4)
  }
  