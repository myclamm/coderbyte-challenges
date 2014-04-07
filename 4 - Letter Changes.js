function LetterChanges(str){
//first, set up an index for referencing alphabetical order, make sure to put a after z
//so the program knows that a should come after z   
  lowercase = "abcdefghijklmnopqrstuvwxyza";
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZA";
  arr = str.split("")
//iterate over every letter. if it's lowercase check the lowercase index, if it's upercase check the
//uppercase index. Replace each letter with the letter that comes after it in the appropriate index.
//Finally, replace all vowels with uppercase versions of themselves using the .toUpperCase() method. 
  for(i=0;i<arr.length;i++){
	if(/[a-z]/.test(arr[i])){
		arr.splice(i,1,lowercase[lowercase.indexOf(arr[i])+1])
	};
    if(/[A-Z]/.test(arr[i])){
      arr.splice(i,1,uppercase[uppercase.indexOf(arr[i])+1])
    };
    if(/[aeiou]/.test(arr[i])){
      arr.splice(i,1,arr[i].toUpperCase())
    };
  };
  return arr.join("")
}
