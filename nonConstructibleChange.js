const nonConstructibleChange = (coins) => {

    //potential nonConstructibleCominations
    let fullCombinations = []
    for (let i = coins[0]; i < coins[coins.length-1]; i++) {
        fullCombinations.push(i)
    }
    
    //get the potential nonConstructible
    let potentialNonConstructible = fullCombinations.filter((self) => {
        return coins.indexOf(self) === -1;
    })
    console.log(potentialNonConstructible)
    return 1;
}
const input = [5, 7, 1, 1, 2, 3, 22];
const expected = 20;
console.log(nonConstructibleChange(input))
module.exports = {nonConstructibleChange}