function CountingMinutesI(str){
 //split the time into time1 and time2   
	times = str.split("-");
    time1 = times[0];
	time2 = times[1];
//Define hours1, mins1, type1 by splitting
    hours1 = parseInt(time1.split(":")[0]);
    if(hours1==12){hours1=0}
    mins1 = parseInt(time1.split(":")[1].substr(0,2))
    type1 = time1.split(":")[1].substr(2,2)
//Assign a value to time1 depending on am or pm. val1 = the number of minutes after 12:00am
	if(type1=="am"){
        val1 = (hours1*60) + mins1
    };
    if(type1=="pm"){
        val1 = 720+(hours1*60) + mins1
    };
//Define hours2, mins2, type2 by splitting
    hours2 = parseInt(time2.split(":")[0]);
    if(hours2==12){hours2=0}
    mins2 = parseInt(time2.split(":")[1].substr(0,2));
    type2 = time2.split(":")[1].substr(2,2)
//Assign a value to time2 depending on am or pm. val2 = the number of minutes after 12:00am    
	if(type2=="am"){
        val2 = (hours2*60) + mins2;
    };
    if(type2=="pm"){
        val2 = 720 + (hours2*60) + mins2;
    };
	
//FINALLY if val2 is after val1, simply return the difference. E.g. 2:30pm - 1:00pm = 90 mins  
    if(val2>val1){
        return val2-val1
    };
//If val2 is before val1, you take a full days worth of minutes (1440) minus the difference between val2 and val1 
    return 1440- (val1-val2)
};