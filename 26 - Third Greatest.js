function ThirdGreatest(strArr) { 
  answerArray = []
  for(i=0;i<strArr.length;i++){
    answerArray.push([strArr[i],strArr[i].length])
  };
  newArray = [answerArray[0]]
  for(j=1;j<answerArray.length;j++){
    if(answerArray[j][1]>newArray[j-1][1]){
      newArray.unshift(answerArray[j])
        }else{newArray.push(answerArray[j])};
  };
  // code goes here  
  return newArray[2][0]; 
         
}

//Much Simpler alternative:

function ThirdGreatest(strArr) { 
  strArr.sort(function(a,b){return b.length - a.length})
  return strArr[2]; 
         
}