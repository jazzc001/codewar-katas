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
            
            if ( diff > lastOne ) {
                result.push(lastOne, diff-lastOne)
            } else {
                let times = lastOne/diff
               
                result.push(diff.repeat(times))
            }
        }
        isBigger()
        while ( (result[result.length-1] > 0) &&  (result[result.length -3] !== result[result.length-1])) {
            isBigger()
        }
        
       
 
    return result
}


console.log(sqInRect(13,12))

module.exports = { sqInRect }