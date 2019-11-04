//exercise 4
function getSum(w,x,y,z){
	return w + x + y + z;
}

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));
let num4 = Number(prompt("Enter fourth number"));

let result = getSum(num1,num2,num3,num4);

document.write(num1+" + "+num2+" + "+num3+" + "+num4+" = "+result+"<br><br>");

//exercise 5

function square(number){
	return number * number;
}

for(let i = 1; i <= 10; i++){
	document.write("The square of "+i+" is "+square(i)+"<br>");
}
