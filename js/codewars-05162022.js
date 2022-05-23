function dontGiveMeFive(start, end)
{
  let sum = 0
  for (let i = start; i < end + 1; i++){
    if (i.toString().split('').includes('5')){
      continue;
    } else {
      sum += 1;
    }
  }
  return sum
}