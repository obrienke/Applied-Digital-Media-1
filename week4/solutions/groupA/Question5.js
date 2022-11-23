// Question 5
let divEl = document.getElementById("ga");

let dt = new Date();

let month = dt.getMonth();

//test
//month = 3;

// set quarter
let quarter = "";    
if(month < 3){
	quarter = "first";
}else if(month < 6){
	quarter = "second";
}else if(month < 9){
	quarter = "third";
}else{
	quarter = "fourth";
}

// set month
if(month == 0){
	month = "Januray";
}else if(month == 1){
	month = "February";
}else if(month == 2){
	month = "March";
}else if(month == 3){
	month = "April";
}else if(month == 4){
	month = "May";
}else if(month == 5){
	month = "June";
}else if(month == 6){
	month = "July";
}else if(month == 7){
	month = "August";
}else if(month == 8){
	month = "September";
}else if(month == 9){
	month = "October";
}else if(month == 10){
	month = "November";
}else{
	month = "December";
}
	
let output = "It is the " + quarter + " quarter.";
output += "<br><br>" + month + ".";

divEl.innerHTML = output;
