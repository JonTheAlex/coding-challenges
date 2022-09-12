function well(x){
    return x.filter(word => word === 'good').length > 2 ? 'I smell a series!' :
      x.filter(word => word === 'good').length <= 2 && x.filter(word => word === 'good').length >= 1 ? 'Publish!' : 'Fail!'
  }