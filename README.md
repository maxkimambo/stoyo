## STOYO coding challenge 

#### Task 1
A non-negative integer array A of N integers is given. 
  ```
  A = [2, -4, 6, -3, 9]
  ```

You will notice that the answer to this task is -2 and not 1 as indicated in codility
because the absolute sum of the slice 2 + (-4) is -2 and not 2 as shown in the example 
Since -2 is smaller than 1 so its the minimum absolute sum of a given slice combination. 

You can follow the following output to see how computation was done, source code is in task1.js 

Another assumption made is that a min slice length is 2, otherwise the result is -4. 

```
slice >  [ 2, -4 ]
Running Min -2 Sum of slice:  -2
slice >  [ 2, -4, 6 ]
Running Min -2 Sum of slice:  4
slice >  [ 2, -4, 6, -3 ]
Running Min -2 Sum of slice:  1
slice >  [ 2, -4, 6, -3, 9 ]
Running Min -2 Sum of slice:  10
slice >  [ -4, 6 ]
Running Min -2 Sum of slice:  2
slice >  [ -4, 6, -3 ]
Running Min -2 Sum of slice:  -1
slice >  [ -4, 6, -3, 9 ]
Running Min -2 Sum of slice:  8
slice >  [ 6, -3 ]
Running Min -2 Sum of slice:  3
slice >  [ 6, -3, 9 ]
Running Min -2 Sum of slice:  12
slice >  [ -3, 9 ]
Running Min -2 Sum of slice:  6
Final result is : -2
```

#### Task 2
Given Array of integers [0,1,3,-2,0,1,0,-3,2,3], calculate the max pit depth for a triplet. 

Source code in task2.js

Example: 
Triplet (2, 3, 4) is one of pits in this array, because sequence [A[2], A[3]] is strictly decreasing (3 > −2) and sequence [A[3], A[4]] is strictly increasing (−2 < 0).  
Its depth is min{A[2] − A[3], A[4] − A[3]} = 2. Triplet (2, 3, 5) is another pit with depth 3. Triplet (5, 7, 8) is yet another pit with depth 4. There is no pit in this array deeper (i.e. having depth greater) than 4. Write a function: def solution(a) that, given a non-empty zero-indexed array A consisting of N integers, returns the depth of the deepest pit in array A. The function should return −1 if there are no pits in array A. For example, consider array A consisting of 10 elements such that:
 
 A[0] =  0
 A[1] =  1
 A[2] =  3
 A[3] = -2
 A[4] =  0
 A[5] =  1
 A[6] =  0
 A[7] = -3
 A[8] =  2
 A[9] =  3
 the function should return 4, as explained above. Assume that: N is an integer within the range [1..1,000,000]; each element of array A is an integer within the range [−100,000,000..100,000,000]. 
Elements of input arrays can be modified.

#### Solution output

```
Identified a triplet  0 -2 0 Depth:  2
Identified a triplet  0 -2 1 Depth:  2
Identified a triplet  0 -2 0 Depth:  2
Identified a triplet  0 -2 2 Depth:  2
Identified a triplet  0 -2 3 Depth:  2
Identified a triplet  1 -2 0 Depth:  2
Identified a triplet  1 -2 1 Depth:  3
Identified a triplet  1 -2 0 Depth:  2
Identified a triplet  1 -2 2 Depth:  3
Identified a triplet  1 -2 3 Depth:  3
Identified a triplet  3 -2 0 Depth:  2
Identified a triplet  3 -2 1 Depth:  3
Identified a triplet  3 -2 0 Depth:  2
Identified a triplet  3 -2 2 Depth:  4
Identified a triplet  3 -2 3 Depth:  5
Identified a triplet  -2 -3 2 Depth:  1
Identified a triplet  -2 -3 3 Depth:  1
Identified a triplet  0 -3 2 Depth:  3
Identified a triplet  0 -3 3 Depth:  3
Identified a triplet  1 -3 2 Depth:  4
Identified a triplet  1 -3 3 Depth:  4
Identified a triplet  0 -3 2 Depth:  3
Identified a triplet  0 -3 3 Depth:  3
Maximum pit depth found to be :  5
``` 

