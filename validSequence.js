const validSequenc = (array, sequence) => {
    let result = [];
    for (let i = 0; i < sequence.length; i++) {
        array.forEach((e) => {
            if (e == sequence[i]) {
                result.push(e);
            }
        })
    }
    console.log(result)
}

array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];
validSequenc(array, sequence)


module.exports = { validSequenc }