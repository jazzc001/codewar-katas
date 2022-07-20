const trap = (heights) => {
    // current water = Min(MaxL, MaxR) - cH

    let maxL = 0;
    let maxR = 0;
    let cH = 0;
    let accWater = 0;

    for (let p1 = 0; p1 = heights.length; p1++) {
        for (let l = p1; l > 0; l--) {
            for (let r = p1; r< heights.length; r++) {
                maxL = Math.max(maxL, l);
                maxR = Math.max(maxR, r);
                cH = heights[p1];
                let currentWater = Math.min(maxL, maxR) - cH;
                currentWater < 0 ? currentWater = 0 : currentWater = currentWater;
                accWater += currentWater;
                maxL = 0;
                maxR = 0;
                cH = 0;

            }
        }
    }
}

module.exports = {trap}