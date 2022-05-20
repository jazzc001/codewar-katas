const validSequence = (array, sequence) => {
    
    //logic
    let result = [];
    for (let i = 0; i < sequence.length; i++) {
        array.forEach((e) => {
            if (e == sequence[i]) {
                result.push(e);
            }
        })
    }
    console.log(result)
    
    //check 2 array are equal
    const arrayEquals = (a, b) =>  {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
    
    return arrayEquals(result, sequence);
}

array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];
console.log(validSequence(array, sequence))


module.exports = { validSequence }