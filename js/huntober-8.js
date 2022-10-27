// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function characterConvert(word){
    return word.split('').map(text => {
      if (word.indexOf(text) === word.lastIndexOf(text)){
        text = '('
      } else {
        Text = ')'
      }
    }).join('')
  }
  
  console.log(characterConvert('din'), '(((') // ''((('
  console.log(characterConvert('recede'), '()()()') // '()()()'