// Question 5

let dt = new Date();

let day = dt.getDay();

let hour = dt.getHours();
let minutes = dt.getMinutes();

let weekend = false;

//test
day = 3;

if(day == 0){
	weekend = true;
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
}else{
	weekend = true;
	day = "Saturday";
}

hour = 10
minutes = 25

let output = "It is " + hour + ":" + minutes + " and today is " + day;

if(weekend){
	output += "<br><br>It is the weekend"; 
}else{
	output += "<br><br>It is not the weekend"; 
}

document.write(output);
