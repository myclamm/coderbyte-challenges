function DivisionStringified(num1,num2) { 
//First, divide the 2 numbers and round it   
  var answer = Math.round(num1/num2);
//Split the number into an array of digits, and then reverse the digits so we can begin inserting
//commas after every 3 digits. If there are 3 or less digits no comma is inserted 
  var answer = answer.toString().split("").reverse()
    for(i=3;i<=answer.length-1;i+=4){
      answer.splice(i,0,",")
    };
//reverse the array back to normal, and join it back into a number
  return answer.reverse().join(""); 
         
}