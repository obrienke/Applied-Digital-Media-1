//part a
function basic(){
	document.write("hello<br>");
}

basic();

//part b
function oneParamFunc(val1){
	document.write("Hello "+val1);
}

oneParamFunc("Valerie");

//part c
function threeParamFunc(param1, param2, param3){
	document.write("<br> "+param1+" "+param2+" "+param3); //include br tag to ensure output is on a seperate line
}

threeParamFunc("Mr","John","Doyle");

//part d
function returnFunc(){
	return "<br>Hello there";
}

//2 ways of calling the function and using the return value
let msg = returnFunc();
document.write(msg);
document.write(returnFunc());

//part e - modified to include three parameters - x, y, and z
function twoParamFuncReturns(x, y, z){
	return x + " " + y + " " + z;
}

document.write("<br>"+twoParamFuncReturns("Mr","John","Smith"));
