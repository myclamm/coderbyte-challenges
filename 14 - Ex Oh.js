//Your first instinct may be to simply use str.match(regexp).length to find the number of x's and o's and,
//and then simply compare them, but that approach does not work because if no o's or no x's appear in the str,
// str.match(regexp) will return null, and trying to find the length of null will return an error

function ExOh(str) { 
//set up counters to tally how many x's and o's occur  
  xcounter = 0;
  ocounter = 0;
//iterate over every character one at a time. if a character equals "x", increase the xcounter by 1
//do the same for "o"
  for(i=0;i<str.length;i++){
    if(str[i]=="x"){
      xcounter ++
    };
    if(str[i]=="o"){
      ocounter ++
    };
  };
  return xcounter==ocounter
         
}