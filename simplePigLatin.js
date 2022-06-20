const simplePigLatin = (str) => {
    const newStr =  str.split(' ')
    console.log(newStr[0][0])
    for (let i = 0; i < newStr.length;i++){
        newStr[i] = newStr[i].substring(1)+ newStr[i][0] + 'ay'
    }
    return newStr.join(' ')
};

console.log(simplePigLatin('Pig latin is cool'))

module.exports = { simplePigLatin };