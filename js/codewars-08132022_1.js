function countSheeps(arrayOfSheep) {
  let val = 0;
  arrayOfSheep.forEach(element => {
    element === true ? val++ : val = val
  })
  return val
}