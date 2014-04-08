function NumberAddition(str) { 
//use str.match(regexp) to isolate all instances of numbers and display them in an array. the 
// "+" symbol after the [0-9] tells .match to find groups of 1 or more [0-9] in a row. 
  var Arr = str.match(/[0-9]+/g);
  var num = 0;
//now just sum up the numbers.
  for (i=0;i<Arr.length;i++) {
      num += parseFloat(Arr[i]);
  }
  return num; 
         
}