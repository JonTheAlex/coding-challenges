function sumNoDuplicates(numList) {
    nums = []
    sum = 0
    
    for (let i = 0; i < numList.length; i++){
      if (nums[numList[i]]){
        nums[numList[i]] += 1
      } else {
        nums[numList[i]] = 1
      }
    }
    
    for (let key in nums){
      if (nums[key] === 1){
        sum += Number(key)
      }
    }
    return sum
  }