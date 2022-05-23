const waterContainer = (height) => {
    let largest = 0
    height.forEach((i) => {
        if ( i > largest ) largest = i;
    })
    console.log(largest)
}

height = [1,8,6,2,5,4,8,3,7]
console.log(waterContainer(height))

module.exports = { waterContainer }