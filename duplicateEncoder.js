const duplicateEncode = (word) => {


    var count = {};
    const splitedWord = word.toLowerCase().split('')

    //option 1
    // splitedWord.forEach((s) => {
    //     count[s] = (count[s] || 0) + 1;
    // });

    //option 2
    splitedWord.forEach((s) => {
        count[s] ? count[s]++ : count[s] = 1;
        });

    console.log(count)
    console.log(splitedWord)

    
    const newWord = splitedWord.map((i) => {
        return count[i] === 1 ? '(' : ')';
    })
    return newWord.join('')
}

console.log(duplicateEncode('recede'))

module.exports = { duplicateEncode };