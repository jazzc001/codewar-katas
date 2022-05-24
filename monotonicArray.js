const monotonicArray = (array) => {
    let resultIdx = 0
    for (let i = 0; i< array.length; i++) {
        let arrayiAbs = Math.abs(array[i])
        let arrayiplus1Abs = Math.abs(array[i+1])
        let diff = Math.abs(arrayiplus1Abs - arrayiAbs)
        console.log(diff)
       if (diff === 1) resultIdx++;
       
    }
    return resultIdx >= 2
}

const array = [2, 2, 2, 1, 4, 5];
console.log(monotonicArray(array))

module.exports = { monotonicArray }