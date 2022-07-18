const run = (student_list) => {
    
    let pairingChecker = {}; 
    const pairingCheck = (i) => { pairingChecker[i] ? pairingChecker[i] += 1 : pairingChecker[i] = 1  }

    const findKeyByValue = (value, object) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    student_list.forEach(i => pairingCheck(i));
    let result = parseInt(findKeyByValue(1, pairingChecker));
    return result || null;
    
}

console.log(run([2,3,2]))

module.exports = { run };