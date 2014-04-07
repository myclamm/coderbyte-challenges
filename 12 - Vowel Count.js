function VowelCount(str) { 
//This says find every character that equals either a,e,i,o,or u, and return them as values in an array.
//Then return the length of that array
  return str.match(/[aeiou]/g).length

}