function trim(str, size) {
  return size >= str.length ? str : 
    (str.length <= 3 && size < 3) ? str.slice(0,size) + '...':
      (str.length >= size && size > 3) ? str.slice(0,size-3) + '...':
        (str.length >= size && size === 3) ? str.slice(0,size) + '...':
          (str.length >= size && size <= 3) ? str.slice(0,size) + '...':
            str.slice(0,size)
}