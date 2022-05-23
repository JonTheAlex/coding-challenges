function solution(list){
    let temp = []
    let str = ''
    for (let i = 0; i < list.length; i++){
       if (list[i] === (list[i+1] - 1)){
           temp.push(list[i])
       } else {
           temp.push(list[i])
           if (temp.length > 2){
               str = str.concat(`${temp[0]}-${temp[temp.length-1]} `);
              temp = []
             }
            else if (temp.length === 2){
              str = str.concat(`${temp[0]},${temp[1]} `)
              temp = []
           } else {
               str = str.concat(`${temp[0]} `)
             temp = []
            }
        }
      } 
  return str.trim().split(' ').join(',')
}