function flyBy(lamps, drone){
    return ('o'.repeat(drone.length) + lamps.substr((drone.indexOf('T')+1))).slice(0, lamps.length)
  }