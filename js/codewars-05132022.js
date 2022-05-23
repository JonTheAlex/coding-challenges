function formatDuration (seconds) {
    let year, day, hour, minute
    let str = ''
    
    if (seconds / 31536000 >= 1){
      year = Math.floor(seconds / 31536000)
      seconds = seconds % 31536000
    }
    if (seconds / 86400 >= 1){
      day =  Math.floor(seconds / 86400)
      seconds = seconds % 86400
    }
    if (seconds / 3600 >= 1){
        hour = Math.floor(seconds / 3600)
        seconds = seconds % 3600
    } if (seconds / 60 >= 1){
        minute = Math.floor(seconds / 60)
        seconds = seconds % 60
    }
  
    if (year > 1){
       str = `${year} years`
    }  else if (year === 1){
      str = `${year} years`
    }
  
    if (day > 1){
      str = str.concat(`, ${day} days`)
    }  else if (day === 1){
      str = str.concat(`, ${day} day`)
    }

    if (hour > 1){
        str = str.concat(`, ${hour} hours`)
      }  else if (hour === 1){
        str = str.concat(`, ${hour} hour`)
      }

    
    if (minute > 1){
      str = str.concat(`, ${minute} minutes`)
    }  else if (minute === 1){
      str = str.concat(`, ${minute} minute`)
    }
    
    if (seconds !== 0){
        if ((year > 0 || hour > 0 || day > 0 || minute > 0) && seconds > 0){
        str = str.concat(` and ${seconds} seconds`)
        } else if (seconds > 1){
        str = str.concat(`${seconds} seconds`)
        } else {
            str = str.concat(`${seconds} second`)
        }
    }

     
    if (str[0] === ','){
        str = str.slice(1)
    }

    return str.trim()
}