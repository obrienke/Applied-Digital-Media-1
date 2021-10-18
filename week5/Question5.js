let d = new Date();

let day = d.getDate();
if(day < 10){
	day = "0" + month;
}

let month = d.getMonth() + 1;
if(month < 10){
	month = "0" + month;
}

let year = d.getFullYear();
let hour = d.getHours();
if(hour < 10){
	hour = "0" + hour;
}

let minutes = d.getMinutes();
if(minutes < 10){
	minutes = "0" + minutes;
}

document.write(day+"/"+month+"/"+year);

document.write("<br><br>"+hour+":"+minutes);

let greet = "";

if(hour > 5 && hour < 12){
	greet = "Morning";
}else if(hour > 11 && hour < 17){
	greet = "Afternoon";
}else if(hour > 16 && hour < 21){
	greet = "Evening";
}else{
	greet = "Night";
}

document.write("<br><br>It is "+greet+" time");