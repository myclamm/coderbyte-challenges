function LetterCountI(str){
    arr = str.split(" ");        
//set highScore to zero. If a word has repeat letters, it's wordScore will reflect how many repeats it has. 
//If a word's score breaks the current wordScore record, then highScore gets updated to show the highest wordScore. 
//When highScore is updated, the corresponding word gets logged as "bestWord.   
    highScore = 0                 
    bestWord = -1
//Examine each word in arr, one at a time, so that each word can receive a wordScore. The highest wordScore becomes "highScore", which is stored above.
    for(i=0;i<arr.length;i++){
        wordScore = 0             
        word = arr[i]             
        k=0
//for each word, we check every letter one at a time, to see how many times it appears within the word. 
//If a letter gets repeated, tempScore increases by 1. If tempScore increases above wordScore(which starts at 0), 
//wordScore is updated to show tempScore. After each letter is examined, tempScore gets reset to 0, and if a subsequent 
//letter breaks tempScore's record, wordScore will get updated again. This way, wordScore will always reflect the most number of 
//repeated letters a single word contains. 
        while(k<word.length){      
            tempScore = 0;                    
            for(j=0;j<word.length;j++){  
                if(word[k]==word[j] && k != j){
                    tempScore ++
                };
            };
            if(tempScore>wordScore){
                wordScore = tempScore
            };
            k++        
        };
//after wordScore has been established for the word being examined, we check if it's higher than highScore, and if it is, 
//we update the highScore and the bestWord. Then, we move onto the next word in the array.
        if(wordScore>highScore){
            highScore=wordScore;
            bestWord = word;
        };

    };
//we've now gone through each word in the array, and highScore and bestWord have been updated to show the highest scoring word
    console.log( bestWord)
};
