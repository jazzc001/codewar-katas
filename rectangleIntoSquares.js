//codewar kata level 6

const sqInRect = (lng, wdth) => {
    
    let result;
    if (lng > wdth) {
        result = [wdth, lng-wdth]
    } else if (lng < wdth) {
        result = [lng, wdth-lng]
    } else {
        return null
    }
   
        
        function isBigger () {
            
            let lastTwo = result[result.length-2]
            let lastOne = result[result.length-1]
            let diff = lastTwo - lastOne
            console.log(diff)
            if ( diff > lastOne ) {
                result.push(lastOne, diff-lastOne)
            } else {
                result.push(diff, diff)
            }
        }
        isBigger()
        while ( (result[result.length-2] - result[result.length-1]) &&  (result[result.length -3] !== result[result.length-1])) {
            isBigger()
        }
        
       
 
    return result
}


console.log(sqInRect(200, 140))

module.exports = { sqInRect }