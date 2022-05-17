function validParentheses(parens) {
    let count = 0
    for (let i = 0; i< parens.length; i++){
      if (parens.charAt(i) == '('){
        count ++;
      } else {
        count --;
      }
      if (count < 0) {
        return false
      }
    
  }
    if (count === 0) {
      return true
    } else {
      return false
    }
  
}

module.exports = {validParentheses};