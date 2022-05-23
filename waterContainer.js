const waterContainer = (height) => {
    let largest = 0
    let largestIndex = 0
    height.forEach((i) => {
        if ( i > largest ) {
            largest = i
            largestIndex = height.indexOf(largest)
        };
    })
    // find the distance of the largest wiht others and corresponding values, store it in a hashmap
    let distance = []  //{value in height: distance}
    height.forEach((i) => {
        let len = Math.abs(height.indexOf(i) - largestIndex)
        distance.push(len* i)
        
    })
   return distance.sort((a, b) => a-b)[distance.length -1]
}

height = [1,8,6,2,5,4,8,3,7]
console.log(waterContainer(height))

module.exports = { waterContainer }