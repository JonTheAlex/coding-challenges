function barTriang(p1, p2, p3){
    let x0 = (p1[0]+p2[0]+p3[0])/3.0
    let y0 = (p1[1]+p2[1]+p3[1])/3.0
    
    return [parseFloat(x0.toFixed(4)), parseFloat(y0.toFixed(4))]
  }