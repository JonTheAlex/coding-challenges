function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let avg = classPoints.reduce((prevVal, currVal) => prevVal + currVal) / classPoints.length
    
    if (avg > yourPoints){
      return false;
    } else {
      return true;
    }
  }