/* Question 5 */

let days = prompt("Enter number of days since fine was issued");
let tax = 0.23;
let disc = 0.9;
let fine = 80;
let penalty = 10;
let total = 0;
let d = new Date();

if(days <= 10){
	fine *= disc;
}else if(days > 20){
	fine += (days - 20) * penalty;
}

total = (fine * tax) + fine;

document.write("Date: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
document.write("<br><br>");
document.write("Fine issued " + days + " days ago");
document.write("<br><br>");
document.write("Fine: " + fine);
document.write("<br><br>");
document.write("Tax: " + (fine * tax).toFixed(2));
document.write("<br><br>");
document.write("Total: " + total.toFixed(2));
