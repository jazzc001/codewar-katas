const monotonicArray = (array) => {
    let resultIdx = 0
    for (let i = 0; i< array.length; i++) {
        let arrayiAbs = Math.abs(array[i])
        let arrayiplus1Abs = Math.abs(array[i+1])
       if (arrayiAbs === arrayiplus1Abs) resultIdx++;

    }
    return resultIdx > 0
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
const expected = true;
console.log(monotonicArray(array))

module.exports = { monotonicArray }