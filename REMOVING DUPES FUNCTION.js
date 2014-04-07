//First, iterate over your array, one value at a time  
  for(i=0;i<arr.length;i++){	  
    num = arr[i];
//For each value in your array, check it against every other value in the array.
//If a duplicate is found, splice it out.
    for(j=0;j<arr.length;j++){
      if(num==arr[j] && j != i){arr.splice(j,1)};
    };
  };