function SecondGreatLow(arr) { 
//sort the array in order  
  arr = arr.sort(function(a,b){
    return a-b
  });
//for this problem you have to remove duplicates  
  for(i=0;i<arr.length;i++){
    num = arr[i]
    for(j=0;j<arr.length;j++){
      if(num==arr[j] && j != i){arr.splice(j,1)};
    };
  };
//return the second lowest and second greatest
  return arr[1]+" "+arr[arr.length-2] 
         
}
