let furlong = 8;

let miles = 1;
document.write(miles + " mile is " + (miles * furlong) + " furlongs<br>");
miles++;
while(miles <= 8){
	document.write(miles + " miles is " + (miles * furlong) + " furlongs<br>");
	miles++;
}

miles = 1;
document.write("<br><br><br><br> For Loop:<br><br>");

document.write(miles + " mile is " + (miles * furlong) + " furlongs<br>");
for(miles = 2; miles <= 8; miles++){
	document.write(miles + " miles is " + (miles * furlong) + " furlongs<br>");
}


