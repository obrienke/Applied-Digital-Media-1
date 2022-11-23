function greeting(){
	document.write("Welcome to the triangle<br><br>");
}

greeting();

let number = prompt("Enter a number from 2 to 10 for number of rows in a triangle you want to see on your screen");

function validator(number){
	let valid = false;
	if(number > 1 && number < 10){
		valid = true;
	}
	return valid;
}

if(validator(number)){
	let i = 0;
	let j = 0;
	for(let i = 0; i < number; i++){
		for(let j = 0; j <= i; j++){
			document.write(" *");
		}
		document.write("<br>");	
	}
}else{
	document.write("Number sepecified must be from 2 to 10. You entered the number " + number);
}
