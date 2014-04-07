function ABCheck(str) { 
//this says if you find any instance where "a" is proceeded by "any three characters" and then "b", return true
  return /a...b/.test(str)
 
}