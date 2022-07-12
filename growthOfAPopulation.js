const nbYear = (p0, percent, aug, p) => {
    let currentPopulation = [p0];
    let y = 0
    for (let i = 0; currentPopulation[i] <= p; i++) {
        currentPopulation.push(currentPopulation[i]*(1+(percent/100)) + aug);
        y++;
    }

    return y;
   
}

console.log(nbYear(1500, 5, 100, 5000))

module.exports = {nbYear};