const validSequence = (array, sequence) => {
    
    //logic
    // let result = [];
    // for (let i = 0; i < sequence.length; i++) {
    //     array.forEach((e) => {
    //         if (e === sequence[i]) {
    //             return result.push(e);
    //         }
    //     })
    // }

    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length


    // console.log(result)
    
    // //check 2 array are equal
    // const arrayEquals = (a, b) =>  {
    //     return Array.isArray(a) &&
    //       Array.isArray(b) &&
    //       a.length === b.length &&
    //       a.every((val, index) => val === b[index]);
    //   }
    
    // return arrayEquals(result, sequence);
}

array = [1, 1, 1, 1, 1];
sequence = [1,1, 1];
console.log(validSequence(array, sequence))


module.exports = { validSequence }