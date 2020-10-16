let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");

let positive = 0;
let negative = 0;
let zero = 0;

if(num1 > 0){
	positive = positive + 1; 
}else if(num1 < 0){
	negative++;
}else{
	zero += 1;
}

if(num2 > 0){
	positive = positive + 1; 
}else if(num2 < 0){
	negative++;
}else{
	zero += 1;
}

if(num3 > 0){
	positive = positive + 1; 
}else if(num3 < 0){
	negative++;
}else{
	zero += 1;
}

console.log("Pos: "+positive);
console.log("Neg: "+negative);
console.log("Zero: "+zero);

let x = "<p>Zeros entered: "+zero+"</p>";
x += "<p>Postives entered: "+positive+"</p>";
x += "<p>Negatives entered: "+negative+"</p>";

document.getElementById("output").innerHTML = x;
