function welcome(){
	alert("Welcome to area calculator");
}

welcome();

let l = prompt("Enter length of rectangle");
let w = prompt("Enter width of rectangle");

function area(l,w){
	return l * w;
}

document.write("Area is: " + area(l,w) + "<br><br>");

let i = 0;
while(i < w){
	let j = 0;
	while(j < l){
		document.write(" *")
		j++;
	}
	document.write("<br>");
	i++;
}