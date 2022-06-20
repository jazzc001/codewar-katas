const simplePigLatin = (str) => {
    const newStr =  str.split(' ')
    console.log(newStr[0][0])
    for (let i = 0; i < newStr.length;i++){
        newStr[i].concat(newStr[i][0])
    }
    return newStr
};

console.log(simplePigLatin('Pig latin is cool'))

module.exports = { simplePigLatin };