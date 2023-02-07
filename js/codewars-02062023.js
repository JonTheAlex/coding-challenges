//three params, 2 arrays and a function
//returns 1 array, with the function applied to it consisting of both input arrays
//zipWith(Math.pow, [10,10,10,10], [0,1,2,3]) => [1,10,100,1000]
//zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3]) => [0,2,4,6]
/*
    function zipWith(fn, a0 , a1){
        return ao.map(fn(ao, a1))
    }

*/

function zipWith(fn,a0,a1) {
    let len = 0
    result = []
    
    if (a0.length >= a1.length){
      len = a1.length
    } else{
      len = a0.length
    }
    
    
    for (let i = 0; i < len; i++){
      result.push(fn(a0[i],a1[i]))
    }
    
    return result
  }