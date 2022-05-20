const threeNumberSum = (array, target) => {
    array.sort((a, b) => a-b); //[-8, -6, 1, 2, 3,  5, 6, 12]
    for (let i = 0; i < array.length; i++) {
        let results = []
        let rightIndex = i+1
        let leftIndex = array.length -1
        while (rightIndex > leftIndex) {
            currnetSum = array[i] + array[rightIndex] + array[leftIndex];
            if (currnetSum === target) {
                results.push([array[i], array[rightIndex], array[leftIndex]])
                rightIndex++;
                leftIndex--;
            } else if (currnetSum > target) {
                rightIndex++;
            } else if (currnetSum < target) {
                leftIndex--;
            }
        }
    }

    console.log(results)
}
array = [12, 3, 1, 2, -6, 5, -8, 6] 
target = 0


console.log(threeNumberSum(array, target))
module.exports = { threeNumberSum }