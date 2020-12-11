// part a.
function basic(){
	document.write("Hello from basic function<br/>");
}

basic();

//part b.
function oneParamFunc(x){
	document.write("Value passed to function paramter is: "+x);
}

oneParamFunc(1.12);

//part c.
function threeParamFunc(param1, param2, y){
	document.write("<br/>Values passed to threeParamFunc are: "+param1+", "+param2+" and "+y);
}

threeParamFunc(true, 1.2);

//part d.
function returnFunc(){
	return "Hello from returnFunc";
}

let returnValue = returnFunc();

document.write("<br/>Value return from returnFunc is: "+returnFunc());

//part e.

let test = prompt("Enter some value");

function twoParamFuncReturns(x, y, z){
	return "Values passed into twoParamFuncReturns are: "+x+", "+y+" and "+z;
}

document.write("<br/>twoParamFuncReturns returns: "+twoParamFuncReturns(test,2,3));















