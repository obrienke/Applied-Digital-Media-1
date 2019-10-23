//a.
function function1(){
	document.write("Hello from function 1");
}

//call the function
function1();

//b.
function function2(){
	document.write("<br>Hello from function 2");
}

//call the function
function2();

//c.
function function3(param1){
	document.write("<br>You passed me function3 a value of: "+param1);	
}

//call the function
function3(4);

//d.
function function4(param1, param2){
	document.write("<br>You passed me function4 a values of: "+param1+" and "+param2);
}

function4(10,"ten");

//e.
function function5(param1, param2, param3){
	document.write("<br>You passed me function5 a values of: "+param1+", "+param2+" and "+param3);
}

function5(10,20,30);

//f.
function function6(firstName, surname){
	document.write("<br>You passed me function6 the name: "+firstName+" "+surname);
}

function6("Kevin", "O'Brien");

//g.
let x = prompt("Enter your first name");
let y = prompt("Enter your surname");
function6(x, y);

//h.
function function7(){
	return 1000;
}

let number = function7();
document.write("<br>Function 7 returned a value of "+number);

//i.
function function8(x, y){
	return x + " " + y;
}

document.write("<br>Function 8: "+function8("John","Smith"));

//j.
function function9(x, y, z){
	return x + y + z;
}

let sum = function9(4,9,7);
document.write("<br>Result is: "+sum);