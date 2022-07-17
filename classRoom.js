const run = (student_list) => {
    let array1 = {};

    student_list.forEach((i) => {
        array1[i] ? array1[i] += 1 : array1[i] = 1
    });
    let result = parseInt(Object.keys(array1).find(key => array1[key] === 1));
    return result;
    
}


module.exports = { run };