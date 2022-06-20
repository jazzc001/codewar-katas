const whereIsMyParent = (dancingBrigade) => {
    const newDB = dancingBrigade.toLowerCase().split('').sort();
    console.log(newDB[1]!=newDB[0]);
    for (let i = 1; i < newDB.length; i++) {
        if(newDB[i].toLowerCase() != newDB[i-1].toLowerCase()) {
            newDB[i] = newDB[i].toUpperCase();
            console.log(newDB[i]);
        }
    }
    newDB[0] = newDB[0].toUpperCase();
    return newDB.join('');

}


console.log(whereIsMyParent("beeeEBb"))
module.exports = { whereIsMyParent }