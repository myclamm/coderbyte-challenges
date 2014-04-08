function SwapCase(str){
    arr = str.split("");
//Iterate over each letter one at a time
    for(i=0;i<arr.length;i++){
//if the letter is uppercase, splice it out and replace it with a lowercase version of itself
       if(/[A-Z]/.test(arr[i]))
           arr.splice(i,1,arr[i].toLowerCase())
//if the letter is lowercase, splice it out and replace it with an uppercase version of itself
       else if(/[a-z]/.test(arr[i]))
           arr.splice(i,1,arr[i].toUpperCase())
    };
    return arr.join("")
}