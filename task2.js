
let payload = [0, 1, 3, -2, 0, 1, 0, -3, 2, 3];

function solution(input) {

    const resultingPitDepth = process(input);

    function process(arr, maxDepth = -1) {

        if (!arr.length) return maxDepth;
        let P = arr.shift();
        let Q;
        let R;
        for (let i = 0; i < arr.length; i++) {

            if (!Q) {
                // if we dont have q check for decreasing values
                if (isDecreasing(P, arr[i])) {
                    
                    Q = arr[i];
                }
            }

            // only when q is identified then look for R in the rest of the sequence
            if (Q) {
                if (isIncreasing(Q, arr[i])) {          
                    R = arr[i];
                    // calculate depth once the triplet has been identified. 
                    const pitDepth = depth(P, Q, R);
                    maxDepth = Math.max(maxDepth, pitDepth);
                    console.log('Identified a triplet ', P, Q, R, 'Depth: ', pitDepth);
                }
            }
        }
        return process(arr, maxDepth);
    }
    function isDecreasing(x, y) {
        return x > y;
    }
    function isIncreasing(x, y) {
        return x < y;
    }
    // determines if triplet is a pit
    function isPit(p, q, r) {
        return p > q && q < r;
    }
    // calculates pit depth of a triplet. 
    function depth(p, q, r) {
        return Math.min((p - q), (r - q))
    }
    return resultingPitDepth;
}

const result = solution(payload);

console.log('Maximum pit depth found to be : ', result); 