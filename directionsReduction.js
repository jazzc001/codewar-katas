const directionsReduction = (arr) => {

    //logic for direction checking
    const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    let result = arr.reduce((acc, cur) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc), [])

    //checking unique values in array
    const unique = [...new Set(arr)]

    //checking 2 arrays are equal
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }


    if (arrayEquals(unique, arr)) {
        return arr
    } else { 
        return result
        
    }
    
    return []




    // const count = {}
    // arr.forEach((i) => {
    //     count[i] ? count[i]++ : count[i] = 1 ;
    // })
    // const direction = []
    // if (count.NORTH === count.SOUTH && count.WEST === count.EAST) {

    // }
}

// console.log(directionsReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
// console.log(directionsReduction(["NORTH", "WEST", "SOUTH", "EAST"]))

module.exports = { directionsReduction }