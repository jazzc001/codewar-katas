const trap = (heights) => {
    // current water = Min(MaxL, MaxR) - cH

    //Solution 1
    let accWater = 0;

    for (let p1 = 0; p1 = heights.length; p1++) {
        let maxL = 0;
        let maxR = 0;
        for (let l = p1; l >= 0; l--) {
            maxL = Math.max(maxL, l);
        }

        for (let r = p1; r< heights.length; r++) {
            maxR = Math.max(maxR, r);
        }
        let currentWater = Math.min(maxL, maxR) - heights[p1];
        currentWater >= 0 ? accWater += currentWater : currentWater = 0;  
        
    }
    return accWater

    //Solution 2

    
};

/*
time: O(n^2) time
space: O(n) space
*/

console.log(trap([0,1,0,2]))

module.exports = {trap}