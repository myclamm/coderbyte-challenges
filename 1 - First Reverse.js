//Pretty straightforward. Split the str into an array, then reverse it, then join it back into a string.
function FirstReverse(str) { 
  str = str.split("")
  return str.reverse().join("");   
}
  