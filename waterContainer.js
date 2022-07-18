const waterContainer = (heights) => {
   let maxArea = 0, p1 = 0, p2 = heights.length - 1;
   console.log({ p1,p2,maxArea})
   while (p1 < p2) {
       console.log({p1, p2})
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height*width;
    console.log({height, width, area})
    maxArea = Math.max(maxArea, area);
    heights[p1] <= heights[p2] ? p1++ : p2--;

   }
   
   return maxArea;
}
/*
time: o(n^2);
space: o(1);
*/

height = [1,8,6,2,5,4,8,3,7]
console.log(waterContainer(height))

module.exports = { waterContainer }