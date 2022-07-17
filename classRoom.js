const run = (student_list) => {
    let array1 = {};
    for (let i = 0; i < student_list.length; i++) {
        array1[student_list[i]] ? array1[student_list[i]] += 1 : array1[student_list[i]] = 1;

    }
    let result = parseInt(Object.keys(array1).find(key => array1[key] === 1));
    return result;
    
}

module.exports = { run };