let rate = prompt("Enter exchange rate for euro to dollars:");


// Can implement this solution using a while loop or a for loop.
// Both while and for are shown here

document.write("Using a while loop: <br><br>");
let i = 1;
while(i <= 15){
	let usd = rate * i;
	document.write(i+" euro is "+usd+" dollars<br>");
	i++;
}

document.write("<br><br> Using a for loop: <br><br>");

for(let x = 1; x <= 15; x++){
	document.write(x+" euro is "+(x * rate)+" dollars<br>");
}