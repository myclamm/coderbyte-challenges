function isOdd(x){
  return x%2 != 0
}
function DashInsert(num) { 
  arr = num.toString().split("");
  for(i=1;i<arr.length;i++){
    if(isOdd(arr[i])&& isOdd(arr[i-1])&& arr[i]!="-" && arr[i-1]!="-" ){
      arr.splice(i,0,"-")
    };
  };

  return arr.join(""); 
         
}