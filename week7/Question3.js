let num1 = prompt("Enter number 1");
let num2 = prompt("Enter number 2");
let num3 = prompt("Enter number 3");
let num4 = prompt("Enter number 4");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);

function arithmetic(num1, num2, num3, num4){
	let result = num1 + num2 + num3 * num4;
	return result;
}

let x = arithmetic(num1, num2, num3, num4);
document.write("<h3>" + num1 + " + " + num2 + " + " + num3 + " * " + num4 + " = " + x + "</h3>");


