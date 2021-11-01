// JavaScript to create a list with 3 items to display on a web page.
let output = "<ol>"

for(let i = 1; i <= 3; i++){
	output = output + "<li>Item " + i + "</li>"; 
}

output = output + "</ol>";

console.log(output);

document.write(output);
