function SeriesSum(n)
{
  let sum = 0;
  let a = 1
  for (let i = 0; i < n; i++){
    sum += 1/a
    a += 3;
  }
  return sum.toFixed(2);
}