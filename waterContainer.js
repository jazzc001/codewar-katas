const waterContainer = (height) => {
   let maxArea = 0;
   for (let i = 0; i< height.length; i++) {
       for (let j = i+1; j< height.length; j++) {
            let h = Math.min(height[i], height[j]);
            let w = j-i;
            let area = h*w;
            maxArea = Math.max(maxArea, area)

       }
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