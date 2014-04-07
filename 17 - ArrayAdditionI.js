function ArrayAdditionI(arr) {
//First sort the array and define the largest number    
    arr.sort(function(a,b){return a-b})
    var largest = arr.pop()
    k =0
    v = 1 
    t = 0
    sum = 0;
    sum2 = 0;
    //for every number in the array except the last one, create a level 0 pair of arr[k]+arr[i]
    //if arr = [1,2,3,4] the initial pairs will be 1+2, then 1+3, etc. Pairs are stored in the sum variable
    for (i=0;i<=arr.length-2;i++) {
        sum = arr[k]+arr[i+1]; // sets level 0 pairs e.g. 1+2, 1+3, 1+4. K starts at zero

        if(sum==largest) { return true}; // tests level 0 pairs against largest
        while (v<=arr.length-2) {
            for (j=v+1;j<=arr.length-1;j++) {
                sum2 = sum +arr[j]   //sets level 1 pairs e.g. 1+2+3, 1+2+4
                if(sum2==largest) {return true} //tests level 1 pairs
            }   
            v=v+1;            //brings the level 1 pairs to the next level
            sum = sum+arr[v];       
        }
        if(i==arr.length-2) {k = k+1}; //shifts the level 0 pairs
        v = i+1; //shifts the level 1 pairs
    };
    return false
};
