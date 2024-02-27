/*code for exercise 5*/

function product(){
	let val1 = document.getElementById("val1").value;
	let val2 = document.getElementById("val2").value;
	let val3 = document.getElementById("val3").value;
	let answer = val1 * val2 * val3;
	
	alert(val1 + " * " + val2 + " * " + val3 + " = " +answer) ;
	
	let spanEl = document.getElementsByTagName("span");
	spanEl[0].textContent = val1;
	spanEl[1].textContent = val2;
	spanEl[2].textContent = val3;
	spanEl[3].textContent = answer;
}