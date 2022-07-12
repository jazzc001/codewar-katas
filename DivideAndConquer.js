const divCon = (x) => {
    let str = [];
    let num = [];
    x.forEach((i) => {
        typeof(i) == 'string' ? str.push(parseInt(i)) : num.push(i)
    })
    let sumOfStrings = str.reduce((p, c) => p + c);
    let sumOfNumbers = num.reduce((p, c) => p + c);

    
 return sumOfNumbers - sumOfStrings
}

console.log(divCon([9, 3, '7', '3']))

module.exports = {divCon};