function LetterCapitalize(str) { 
//Split the string into an array  
  arr = str.split(" ");
  answer = []
//create a new array "answer" and, for each word in the sentence, capitalize the first letter, concatenate it
//with the rest of the letters, and then push the new word into "answer"
//The end result should be a new array "answer" filled with the same words except every first letter is capitalized
  for(i=0;i<arr.length;i++){
    answer.push(arr[i].substr(0,1).toUpperCase()+arr[i].substr(1))
  };
  return answer.join(" "); 
         
}