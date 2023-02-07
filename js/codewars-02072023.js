function hamming(a,b) {
	let ham = 0
  
  for (let i = 0; i < a.length; i++){
    if (a[i] != b[i]){
      ham = ham + 1
    }
    continue
  }
  return ham
}