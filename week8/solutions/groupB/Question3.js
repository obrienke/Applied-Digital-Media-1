let num1 = prompt("Enter value for num1");
let num2 = prompt("Enter value for num2");
let num3 = prompt("Enter value for num3");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

document.write(num3 + " - " + num2 + " * " + num1 + " + " + num3 + " = " + (num3 - num2 * num1 + num3));
