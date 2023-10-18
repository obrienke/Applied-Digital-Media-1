
let name = "Kevin";

let number = 3;
number = 4;
number = "Four";

let x = prompt("Enter a number");

document.write("Number entered is " + x);

if(x == 5){
	alert("Number entered was 5");
}else{
	alert("Number entered was NOT 5");
}

document.write("<br>2.4 when rounded is " + Math.round(2.4));
document.write("<br>2.5 when rounded is " + Math.round(2.5));
document.write("<br>2 to the power of 4 is " + Math.pow(2,4));

let d = new Date();

alert("Time is " + d.getHours() + ":" + d.getMinutes());
