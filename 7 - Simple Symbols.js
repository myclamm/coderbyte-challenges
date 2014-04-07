function SimpleSymbols(str) {
//iterate over every character in the string one by one  
  for(i=0;i<str.length;i++){
//if you come across a letter character, check if the character before it is a "+" and check if the
//character after it is a "+". If either one is not a +, return false.
    if(/[a-zA-Z]/.test(str[i])){
      if(str[i-1]!="+" || str[i+1]!="+"){return false};
    };
  };
  return true;         
};