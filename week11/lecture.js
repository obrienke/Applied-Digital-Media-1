let x = prompt("Enter name");


if(x == "Kevin"){
	document.write("<br/>Named entered was Kevin");
}else{
	document.write("<br/>Named entered was not Kevin");
}


document.write("<br>");

for(let i = 1; i <= 15; i++){
	document.write("<br> Line "+i);
}

document.write("<br>");

let counter = 1;
while(counter <= 7){
	document.write("<br> While Line "+counter);
	counter++;
}

document.write("<br>");

let do_counter = 1;
do {
	document.write("<br> Do While Line "+do_counter);
	do_counter++;
} while (do_counter <= 3);

document.write("<br>");

function add(num1, num2, num3){
	let result = num1 + num2 + num3;
	return result;
}

let addition = add(4, 75, 2);

document.write("<br>Result is: "+addition);

document.write("<br>");

document.write("<br>Array content: ");

let array = ["Test 1", "Test 2", 5, 56];

for(let i = 0; i < array.length; i++){
	document.write("<br/>"+array[i]);
}


function msg(){
	alert("Button clicked");
}
