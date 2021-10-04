let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

// A number of ways of converting numbers stored as strings to numbers:

// 1. Just convert using a prefix + 
//let sum = +num1 + +num2;

//2. Convert using the Number function - A global function. Just pass it the value and it will
// return that value as a number.
let sum = Number(num1) + Number(num2);

//3. Use parseInt  function - similar to using number function
//let sum = parseInt(num1) + parseInt(num2);

//4. Convert the values to numbers by multiplying the values by 1.
//let sum = (num1 * 1) + (num2 * 1);

//Note: Just left line 11 uncommented. You can comment this out and uncomment the other lines
// 7, 14 and 17, one by one in order to test. Just leave one of these lines uncommented at 
// a time - 7, 11, 14 and 17.
document.write("result of adding num1 and num2 is: "+sum);

let sub = num1 - num2;
document.write("<br>result of subtracting num1 and num2 is: "+sub);

let mul = num1 * num2;
document.write("<br>result of multiplying num1 and num2 is: "+mul);

let div = num1 / num2;
document.write("<br>result of dividing num1 and num2 is: "+div);

let equation = (5 + 2) - ((4 * 3) / 2);
//5 + 2 - 4 * 3 / 2 - without brackets the operator precedence rules apply.
// Multiplication and Division before addition and subtraction. Calculate from
//left to right. Easier to use brackets then you control the rules.
document.write("<br>result of equation: "+equation);


// conditinal logic example - evaluate for true or false
// final else block will run if all other conditions evaulate to false
// if any of the conditions evaluate to true, then the code block after 
// that condition will run - code block is what is between the 
// curley braces{} after the condition. Only one code block will ever run
// in if/else/cascading if/else or nest if/else
let age = 19;

if(age == 18){
	alert("Age is 18");
}else if (age <= 18){
	alert("Age is over 18");
}else{
	alert("Age is under 18");
}


//date object - some useful methods for query date and time
//also contains methods for setting date and time.
let d = new Date();
console.log(d);
console.log(d.getDay());

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

//Math Object contains many useful methods and properties - see week 3 lecture notes for more details e.g. max function example:
console.log(Math.max(2, 200, 400, 10, 1)); // returns 400 - the max value
