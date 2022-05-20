const nonConstructibleChange = (coins) => {
    const allcombinations = [];
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j < coins.length; j++) {
            allcombinations.push(coins[i]+coins[j])
        }
    }
    console.log(allcombinations)
    return 1;
}
const input = [5, 7, 1, 1, 2, 3, 22];
const expected = 20;
nonConstructibleChange(input)
module.exports = {nonConstructibleChange}