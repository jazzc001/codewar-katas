const waterContainer = (height) => {
    const array1 = [...new Set(height.sort((a, b) => a-b))];
    const highest = array1[array1.length - 1]
    console.log(height.indexOf(highest))
    const secondHighest = array1[array1.length - 2]
    console.log(height.indexOf(secondHighest))
    const len = Math.abs(height.indexOf(highest) - height.indexOf(secondHighest))
    return secondHighest * len
}

height = [1,8,6,2,5,4,8,3,7]
console.log(waterContainer(height))

module.exports = { waterContainer }