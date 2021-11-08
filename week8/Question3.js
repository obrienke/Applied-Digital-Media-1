let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");
let num4 = prompt("Enter fourth number");

function arithmetic(value1, value2, value3, value4){
	return Number(value1) + Number(value2) + Number(value3) * Number(value4);
}

let result = arithmetic(num1, num2, num3, num4);

document.write(num1 + " + " + num2 + " + " + num3 + " * " + num4 + " = " + result);