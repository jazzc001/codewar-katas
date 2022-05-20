const nonConstructibleChange = (coins) => {

    // to get all combinations
    const allcombinations = [];
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j < coins.length; j++) {
            allcombinations.push(coins[i]+coins[j])
        }
    }

    // to get the unique combinations and sorted them out in ascending order
    // const uniqueCombinations = allcombinations.filter((value, index, self) => {self.indexOf(value) === index});
    const uniqueCombinations = [...new Set(allcombinations)].sort((a, b) => a-b);

    //find the earliest nonConstructible combinations
    let index = 0;
    while (index < allcombinations.length) {
        let nonConstructible = allcombinations[index] + 1
        if(allcombinations[index] != nonConstructible) return nonConstructible;
        index++;
        console.log(nonConstructible)
    }
    
    return 1;
}
const input = [5, 7, 1, 1, 2, 3, 22];
const expected = 20;
console.log(nonConstructibleChange(input))
module.exports = {nonConstructibleChange}