const divCon = (x) => {
    let str = [];
    let num = [];
    x.forEach((i) => {
        typeof(i) == 'string' ? str.push(parseInt(i)) : num.push(i)
    })
  let sumOfStrings;
  let sumOfNumbers;
    str[0] == null ? sumOfStrings = 0: sumOfStrings = str.reduce((p, c) => p + c);
     num[0] == null ? sumOfNumbers = 0 : sumOfNumbers = num.reduce((p, c) => p + c);
    
    
 return sumOfNumbers - sumOfStrings
}

console.log(divCon([7,"0","0","0","1",8,6]))

module.exports = {divCon};