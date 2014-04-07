function ArrayAdditionI(arr) {
    arr.sort(function(a,b){return a-b})
    var largest = arr.pop()//first define largest
    k =0 //sets k to level 0
    v = 1 //sets v to 0?
    t = 0
    sum = 0;
    sum2 = 0;
    console.log("largest: "+largest)//LOG TEST
    console.log("arr: "+arr)//LOG TEST
    for (i=0;i<=arr.length-2;i++) {
        sum = arr[k]+arr[i+1]; // sets level 0 pairs e.g. 1+2, 1+3, 1+4
        
        console.log("i: "+i)
        console.log("sum: "+sum)//LOG TEST
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
