function findShort(s){
    return s.split(' ').map(x => x.length).sort((a,b) => a - b)[0]
   }