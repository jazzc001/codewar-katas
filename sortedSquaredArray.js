const sortedSquaredArray = (array) => {
    return array.map((e) => e*e).sort((a, b) => a-b)
}
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sortedSquaredArray(array))

module.exports = { sortedSquaredArray }