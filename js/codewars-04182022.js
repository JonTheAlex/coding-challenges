function doubleChar(str){
    newArr = []
    strArr = str.split('')

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < 2; j++){
            newArr.push(strArr[i])
        }
    }
    return newArr.join('')
}