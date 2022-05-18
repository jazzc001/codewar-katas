const duplicateEncode = (word) => {

    // const uniqueStr = [...new Set(word)];
    // console.log(uniqueStr);
    // let encodedStr = []
    // const splitedWord = word.split('')
    // console.log(splitedWord)
    // for (let i = 0; i < uniqueStr.length; i++) {
    //     if ( splitedWord.includes(splitedWord[i])) {
    //         encodedStr.push('(')
    //     } else {
    //         encodedStr.push(')')
    //     }
    // }
    // console.log(encodedStr)
    // return encodedStr.join()

    var count = {};
    const splitedWord = word.toLowerCase().split('')
    splitedWord.forEach(function(s) {
        count[s] = (count[s] || 0) + 1;
    });

    
    const newWord = splitedWord.map((i) => {
        return count[i] === 1 ? '(' : ')';
    })
    return newWord.join('')
}


module.exports = { duplicateEncode };