let x = prompt("Enter a number");
let y = prompt("Enter another number");

let result = Number(x) + Number(y); // Number function converts value to a number value

// Alternatively, you could use any of the following approaches to convert values to number values
/*result = parseInt(x) + parseInt(y);
result = (x * 1) + (y * 1);
result = +x + +y;
*/

//open dev tools in browser (hit the F12 key) and select the console tab to see this output.
console.log(x + " + " + y + " = " + result);
console.log(x + " * " + y + " = " + (x * y));

console.log((4 + 3) * 5);

Math.max(2, 300, 4); // max function returns 300
Math.min(2, 300, 4); // max function returns 2

let age = prompt("Enter your age");

if(age == 18){
	console.log("You are 18");
}else if(age > 18){
	console.log("You are over 18");	
}else{
		console.log("You are under 18");
}

let d = new Date();

let month = d.getMonth() + 1;
if(month < 10){
	month = "0" + month;
}
let day = d.getDate();
if(day < 10){
	day = "0" + day;
}

let output = day + "/" + month + "/" + d.getFullYear();

document.getElementById("today").innerHTML = output;
