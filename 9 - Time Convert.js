function TimeConvert(num) {
//define mins as the leftover number of mins after you divide the total mins by 60 
  mins = num%60;
//define hours as total WHOLE hours within num 
  hours = Math.floor(num/60)
    return hours+":"+mins 
         
}