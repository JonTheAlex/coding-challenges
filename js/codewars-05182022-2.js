function chain(input, fs) {
    fs.forEach(element => {
      input = element(input)
    })
     return input
   }