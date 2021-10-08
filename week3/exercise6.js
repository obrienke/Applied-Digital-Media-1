let date = new Date();
let hour = date.getHours();
let day = date.getDay();

if(day == 0){
  day = "Sunday";
}else if(day == 1){
  day = "Monday";	  
}else if(day == 2){
  day = "Tuesday";	  
}else if(day == 3){
  day = "Wednesday";
}else if(day == 4){
  day = "Thursday";	  
}else if(day == 5){
  day = "Friday";	  
}else if(day == 6){
  day = "Saturday";
}	  

alert("It is hour "+hour+" on "+day+".");
