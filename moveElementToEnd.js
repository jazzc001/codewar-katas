const moveElementToEnd = (array, toMove) => {
    let moving = []
    array.forEach((e) => {
        if ( e === toMove ) {
            moving.push(e)
            array.splice(array.indexOf(e), 1)
        };
    });
   return array.concat(moving)
};

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove))
module.exports = { moveElementToEnd }