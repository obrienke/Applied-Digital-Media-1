let x = prompt("Enter a student id");

if(x == "G001223"){
	alert("Yes, your student id is G001223");
}else {
	alert("Yes, your student id is not G001223");
}

document.write("<br><br>While loop:");
// remember to test your code using breakpoints, 
// like shown in the video for Fridays online session - week 7

let i = 1;
while(i <= 3){
	document.write("<br>"+i);
	i = i + 1; //i += 1; i++;
}

document.write("<br><br>For loop:");

for(let x = 1; x <= 3; x++){
	document.write("<br>"+x);
}


function add(number1 ,number2, number3){
		let result = number1 + number2 + number3;
		return result;
}

let additionResult = add(3, 4, 5);

console.log(additionResult);


document.getElementById("test").innerHTML="<h1>TEST</h1>"

let divEls = document.getElementsByClassName("somedivs");

for(let i = 0; i < divEls.length; i++){
	divEls[i].textContent = "div "+i;
}



