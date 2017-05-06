
let payload = [0,1,3,-2,0,1,0,-3,2,3]; 

function solution(input){

    let depthOfPits = []; 
    for(let i=0;i<input.length -2; i++){
        let p = input[i]; 
        let q = input[i+1]; 
        let r = input[i+2]; 
     
        // is a pit 
        if(isPit(p,q,r)){
            // calc depth
           depthOfPits.push(depth(p,q,r)); 
        }
    }
    function isPit(p,q,r){
        return p>q && q<r; 
    }

    function depth(p,q,r){
        return Math.min((p-q), (r-q))
    }
    
    if(!depthOfPits.length) return -1; 

    return Math.max(...depthOfPits); 
}

solution(payload); 