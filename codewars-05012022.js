function goodVsEvil(good, evil){
    let goodWorth = calcWorth(good);
    let badWorth = calcWorth(evil);
    
    console.log(goodWorth)
    console.log(badWorth)
    
    if (goodWorth > badWorth){
      return 'Battle Result: Good triumphs over Evil'
    } else if (badWorth > goodWorth){
      return 'Battle Result: Evil eradicates all trace of Good'
    } else {
      return 'Battle Result: No victor on this battle field'
    }
  }
  
  function calcWorth(team){
    teamArr = team.split(' ')
    if (teamArr.length === 6){
      let worth = 0
      for (let i = 0; i < teamArr.length; i++){
        switch (i){
            case 0:
              worth += teamArr[i] * 1;
              break;
            case 1:
              worth += teamArr[i] * 2;
              break;
            case 2:
              worth += teamArr[i] * 3;
              break;
            case 3:
              worth += teamArr[i] * 3;
              break;
            case 4:
              worth += teamArr[i] * 4;
              break;
            case 5:
              worth += teamArr[i] * 10;
              break;
        }
      }
      return worth;
    } else {
      let worth = 0
      for (let i = 0; i < teamArr.length; i++){
        switch (i){
            case 0:
              worth += teamArr[i] * 1;
              break;
            case 1:
              worth += teamArr[i] * 2;
              break;
            case 2:
              worth += teamArr[i] * 2;
              break;
            case 3:
              worth += teamArr[i] * 2;
              break;
            case 4:
              worth += teamArr[i] * 3;
              break;
            case 5:
              worth += teamArr[i] * 5;
              break
            case 6:
              worth += teamArr[i] * 10;
              break
          }
        }
      return worth;
      }
    }
  
  