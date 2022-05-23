const moveElementToEnd = (array, toMove) => {
    let moving = []
    let newArray = array.reduce((pre, cur) => {
        if (cur === toMove) {
            moving.push(cur)
            pre.splice(cur, -1)
        } else {
            pre.push(cur) 
        }
       
    return pre}, []);

    
   return newArray.concat(moving);
};

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove))
module.exports = { moveElementToEnd }