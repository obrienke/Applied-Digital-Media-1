function function1(){
	console.log("function 1")
}

function1();
function1();

function function2(x, y){
	console.log("function 2: " + x + " and " + y);
}

function2("Kevin", 1.2);
function2(1, true);

function function3(x, y){
	return x * y;
}

console.log("function 3: " + function3(2, 3));

let result = function3(4, 3);
console.log("function 3: " + result);

function pow(x, y){
	let res=x;
	for(let i = 1; i < y; i++){
		res = res * x;
	}
	return res;
}

console.log("pow: " + pow(3,2));

let function4 = (x, y) => {
	let res=x;
	for(let i = 1; i < y; i++){
		res = res * x;
	}
	return res;	
}

console.log("function 4:" + function4(3, 3));