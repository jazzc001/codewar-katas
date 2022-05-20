const threeNumberSum = (array, target) => {
    array.sort((a, b) => a-b); //[-8, -6, 1, 2, 3,  5, 6, 12]
    let results = []
    for (let i = 0; i < array.length -2; i++) {
        let leftIndex = i+1
        let rightIndex = array.length -1
        while (leftIndex < rightIndex) {
            currnetSum = array[i] + array[leftIndex]+ array[rightIndex] ;
            if (currnetSum === target) {
                results.push([array[i], array[rightIndex], array[leftIndex]].sort((a, b) => a -b))
                leftIndex++;
                rightIndex--;
            } else if (currnetSum < target) {
                leftIndex++;
            } else if (currnetSum > target) {
                rightIndex--;
            }
        }
    }

    return results;
}
array = [12, 3, 1, 2, -6, 5, -8, 6] 
target = 0


console.log(threeNumberSum(array, target))
module.exports = { threeNumberSum }