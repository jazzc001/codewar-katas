const smallestDifference = (arrayOne, arrayTwo) => {
    const sortedArrayOne = arrayOne.sort((a, b) => a -b);
    const sortedArrayTwo = arrayTwo.sort((a, b) => a-b);

    console.log(sortedArrayOne)
    let potentialResults = [];
    sortedArrayOne.forEach((e) => {
        sortedArrayTwo.forEach((i) => {
            potentialResults.push([e+i, e, i])
        })
    })

    // for (let i = 0; i < sortedArrayOne.length; i++) {
    //     for (let j = 0; j < sortedArrayTwo.length;j++) {
    //         potentialResults.push([arrayOne[i]+arrayTwo[j], arrayOne[i], arrayTwo[j]])
    //     }
    // }
    return potentialResults;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));

module.exports = { smallestDifference }