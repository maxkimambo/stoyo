

const payload = [2, -4, 6, -3, 9]; 

function solution(A){

    let runningMin = Number.MIN_VALUE; 
  
    process(A); 

    function process(Arr){
        if(!Arr.length) return; 
        
        for(let i=0; i< Arr.length; i++){
        // create slices 
        let B = Object.assign([], Arr); 
        const currentSlice = slicer(B, i); 
        if(currentSlice.length > 1){
            console.log('slice > ', currentSlice); 
            let sumOfSlice = sliceSum(currentSlice); 
            runningMin = Math.min(runningMin, sumOfSlice)
            console.log('Running Min', runningMin, 'Sum of slice: ', sumOfSlice); 
        }
        
   }
     Arr.shift(); // remove first element 
     process(Arr); 
    }
   
   function slicer(arr,count){
       return arr.splice(0, count +1); 
   }

   function sliceSum(slice){
       return slice.reduce((acc, current) => {
           return acc + current; 
       }); 
   }
   return runningMin; 
}

const result = solution(payload); 

console.log('Final result is :', result); 