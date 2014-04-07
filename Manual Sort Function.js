function sorter(arr){
    answer = []
//Iterate over the array, and push each value to "answer" one by one 
	for(i=0;i<arr.length;i++){
        answer.push(arr[i]);
//After pushing arr[i] to "answer", go through each value in "answer". If 
//you find a value that's greater than the arr[i] that was just pushed, you will
//cut arr[i] from the end of "answer" and insert it right before the larger value.
        for(j=0;j<answer.length;j++){
            if(answer[i]<answer[j]){
                answer.splice(j,0,answer.splice(i,1)[0])
            };
        };
    };
    console.log(answer)
};

sorter([5,4,3,3,2,9])