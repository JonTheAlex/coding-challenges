function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((previous, current) => previous += current, 0);
}