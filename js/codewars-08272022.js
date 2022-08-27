function enough(cap, on, wait) {
    return cap >= (on + wait) ? 0 : -1*(cap - (on + wait))
  }