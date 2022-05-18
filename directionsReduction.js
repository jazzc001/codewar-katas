const directionsReduction = (arr) => {
    // const countNS = 0
    // const countEW = 0

    // arr.forEach((i) => {
    //     if (arr[i] == 'NORTH') {
    //         countNS ++
    //     } else if (arr[i] == 'SOUTH') {
    //         countNS --
    //     } else if (arr[i] == 'EAST') {
    //         countEW ++
    //     } else if (arr[i] == 'WEST') {
    //         countEW --
    //     }
    // })

    // const result = [];
    const count = {}
    arr.forEach((i) => {
        count[i] ? count[i]++ : count[i] = 1 ;
    })
    
    if (count.NORTH === count.SOUTH && count.WEST === count.EAST) {

    }
}

console.log(directionsReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

module.exports = { directionsReduction }