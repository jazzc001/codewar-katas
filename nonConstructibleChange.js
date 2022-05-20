// O(nlogn) time, O(1)space

const nonConstructibleChange = (coins) => {

    
    coins.sort((a,b) => a-b); //sorting is O(nlogn) time, 
    
    let changes = 0;
    for (const coin of coins) {
        if (coin > changes + 1) return changes +1;
        changes += coin;
    }

    return changes + 1;
}
const input = [5, 7, 1, 1, 2, 3, 22];
const expected = 20;
console.log(nonConstructibleChange(input))
module.exports = {nonConstructibleChange}