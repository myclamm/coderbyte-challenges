function ArithGeo(arr) { 
//Set your arithmetic and geometric values. If it's arithmetic, the difference between every consecutive
//number should equal "arith". If it's geometric, the quotient between every consecutive number should equal "geo"
    arith = arr[1]-arr[0]
    geo = arr[1]/arr[0]
//Iterate through the array twice. The first time, check if every number passes the "arith" test. If they all do,
//return arith. If one doesn't follow "arith", then iterate over the array again, and this time check for "geo". If 
//they all pass, return geometric. If one of them does not pass, return -1
    for (i=0;i<arr.length-1;i++) {
        if(arr[i+1]-arr[i] != arith) {
            for (j=0;j<arr.length-1;j++){ 
                if(arr[j+1]/arr[j] != geo) { 
                    return -1
                }
            } return "Geometric"
        } 
    } return "Arithmetic"
}