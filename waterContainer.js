const waterContainer = (height) => {
   let area  = [];
   for (let i = 0; i< height.length; i++) {
       for (let j = i+1; j< height.length; j++) {
            if (height[i] > height[j]) {
                area.push(height[j]*(j-i))
            } else {
                area.push(height[i]*(j-i));
            };
       }
   }
   let result = area.sort((a,b) => a-b)
   return result[result.length-1]
}

height = [1,8,6,2,5,4,8,3,7]
console.log(waterContainer(height))

module.exports = { waterContainer }