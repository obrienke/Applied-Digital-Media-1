// Question 3

let x = prompt("What month is it?");

function correctMonth(x){
	let correct = false;
	if(x.match("December")||x.match("december")||x.match("DECEMBER")){
		correct = true;
	}
	return correct;
}

let result = correctMonth(x);

if(result){
	document.write("Correct, it is december");	
}else{
	document.write("Incorrect, it is december, not " + x);
}

 /*
 Create a function named correctMonth(x). This function can be passed a single value, x. The function should check whether this value is december and return the result. Use a prompt to ask a user to enter the month. Pass this value to the function, and then display the result returned by this function on the web page. See figure 3 below for example.
 */