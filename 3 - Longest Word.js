function LongestWord(sen){
//first we define arr as an array containing each word in the sentence. The .match function uses a regular expression
//to identify strings of letters separated by anything that's not a letter. E.g. "welcome!tom hi" will become [welcome,tom,hi]
	arr = sen.match(/[a-zA-Z]+/g);
//use the sort method to sort the array by word length. NOTE that the sorting function uses b - a rather than a - b. This is critical.
//you may be tempted to use a-b, and then reverse() in order to have the longest word displayed first, but this will not give the correct answer
//because the problem specifically asks that if two words share the same length, return the FIRST one that appears in the sentence. Using a-b and then
//reversing the array will give you the last word with the longest length instead of the first word with the longest length.
	arr.sort(function(a,b){
		return b.length-a.length
	});
	return arr[0]
}

