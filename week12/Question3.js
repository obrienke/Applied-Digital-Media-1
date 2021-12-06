let number1 = prompt("Enter first number");
let number2 = prompt("Enter second number");

function sum(number1, number2){
	let result = +number1 + +number2;
	return result;
}

let x = sum(number1, number2);

document.write(number1 + " + " + number2 + " = " + x);