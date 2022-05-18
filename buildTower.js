const buildTower = (nFloors) => {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        tower.push(
            " ".repeat(nFloors - i - 1) + 
            "*".repeat((i * 2)+1) +
            " ".repeat(nFloors - i - 1)
        )

    }
    return tower

}

console.log(buildTower(5))

module.exports = {buildTower}