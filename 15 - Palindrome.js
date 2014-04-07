function Palindrome(str) { 
//First, use str.match(regexp) to remove all blank spaces from the string. The coderbyte problem ignores 
//blank spaces when evaluating palindromes.
  normal = str.match(/[a-zA-Z]/g);
//Now that the string has been reduced to only the characters, simply check of the reverse equals the normal
  return normal.join("") == normal.reverse().join("")
        
}