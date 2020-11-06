
//example 1 - basic function. Pass it no values, and it returns nothing.
function greet(){
  alert("Hello");	
}

//call greet function
greet();

//example 2 - pass a single value to a function
function greet1(x){
	alert("Hello "+x);
}

greet1("Kevin");

//example 3 - pass two values to a function
function greet2(x,y){
	alert("Hello "+x+""+y);
	alert(x + y);
}

greet2("Kevin", " O'Brien");

greet2(1,2);

//example 4 - pass 4 values to a function
function greet3(x,y,z,q){
	alert("Hello "+x+" "+y+" "+z+" "+q);
}

greet3("Kevin", "O'Brien", "GMIT", "Galway");

//example 5 - function that returns a string
function greet4(){
	return "Good Afternoon";
}

let msg = greet4();
alert(msg);

//example 6 - function that returns a number
function sum(x,y,z){
	return x + y + z;
}

let x = sum(3,6,9);
alert(x);

//example 7 - arrow function
let x1 = (x,y) => {return x + y;}

alert(x1(4,5)); 

//example 8 - global variables 
let var1 = 1;

function globalVars(){
	alert(var1);
}

globalVars();

//example 9 - local variables
function localVars(){
	let var2 = 2;
	let var1 = 4;
}

alert(var2); //check console for error - trying to access a local variable from the localVars function - var2.