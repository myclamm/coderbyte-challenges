//First, define a function to get Mean 
function findMean(arr){
    sum = 0;
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i];
    };
    return sum/arr.length
};
//Now we define a function to get Mode
function findMode(arr){
//set highscore to keep track of which number appears the most times. If a number tops the highscore
//we change highscore and change answer to be that number 
    var highscore = 0;
    var answer = "";
//iterate over each number one at a time and evaluate its "numscore"
    for(i=0;i<arr.length;i++){
        numscore = 0;
//everytime a number gets repeated, we add 1 to its numscore 
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                numscore++;
            };
        };
//if the number's numscore beats the current highscore, we change the answer to be that number 
        if(numscore>highscore){
            highscore = numscore;
            answer = arr[i];
        };
//now we return back to the first loop and find the numscore of the next number         
    };
    return answer
};
//FINALLY check if Mean = Mode 
function MeanMode(arr){
    if((findMean(arr)==findMode(arr))==true)
      return 1;
    else return 0
};