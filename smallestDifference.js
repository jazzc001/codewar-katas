const smallestDifference = (arrayOne, arrayTwo) => {
    const sortedArrayOne = arrayOne.sort((a, b) => a -b);// [ -1, 3, 5, 10, 20, 28 ]
    
    const sortedArrayTwo = arrayTwo.sort((a, b) => a-b); //[ 15, 17, 26, 134, 135 ]
    let potentialResults = {};
    sortedArrayOne.forEach((e) => {
        sortedArrayTwo.forEach((i) => {
            let minus = Math.abs(e - i);
            potentialResults[minus] = [e , i]
        })
    })

    const allKeys = []
    for (let key in potentialResults) {
        allKeys.push(key)
    }

    return potentialResults[allKeys[0]];


    //option 2
    // let aOneIdx = 0;
    // let aTwoIdx = 0;
    // while ( aOneIdx < sortedArrayOne.length) {
    //     while ( aTwoIdx < sortedArrayTwo.length) {
    //         let currentMinus = Math.abs(arrayOne[aOneIdx]-arrayTwo[aTwoIdx]);
    //         if (currentMinus < arrayTwo[aTwoIdx + 1]) {
    //             aOneIdx ++;
    //         } else if (currentMinus > arrayTwo[aTwoIdx + 1])
    //     }
    // }
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));

module.exports = { smallestDifference }