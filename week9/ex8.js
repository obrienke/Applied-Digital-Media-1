
let numbers = [[10, 20], [30, 40]];

let output = "<table border='1'>";
for(let i = 0; i < numbers.length; i++){
	output += "<tr>";
	for(let j = 0; j < numbers[i].length; j++){
		output += "<td>"+numbers[i][j]+"</td>";
	}
	output += "</tr>";
}

output += "</table>";

document.write(output);
