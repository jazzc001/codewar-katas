const areTheyTheSame = (array1, array2) => {

    let newArray2 = array2.map((i) => Math.sqrt(i))
    
    let count = 0
    newArray2.forEach((i) => {
        if (array1.includes(i)) {
            count ++;
        }
    })
    if (count == array2.length) {
        return true
    } else {
        return false
    }
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(areTheyTheSame(a1, a2))
console.log(Math.sqrt(1))


module.exports = { areTheyTheSame };