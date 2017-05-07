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
