function numberJoy(n) {
    let sum =  n.toString().split('').reduce((accum, curr) => 
      accum += parseInt(curr), 0)
    
    let reverseSum = parseInt(sum.toString().split('').reverse().join(''))
    
    return (n % sum === 0 && sum * reverseSum === n) ? true : false
}