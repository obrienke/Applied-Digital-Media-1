//alert("exercise 8");

var n = [[10, 20],[30, 40]];

var output = "<table border = '1'>";
for(var i = 0; i < 2; i++){
  output += "<tr>";
  for(var j = 0; j < 2; j++){
	output += "<td>"+n[i][j]+"</td>";  
  }
  output += "</tr>";
}
output += "</table>";

document.write(output);

var output = "<table border = '1'>";
output += "<tr>";
output += "<td>"+n[0][0]+"</td>";  
output += "<td>"+n[0][1]+"</td>";  
output += "</tr>";
output += "<tr>";
output += "<td>"+n[1][0]+"</td>";  
output += "<td>"+n[1][1]+"</td>";  
output += "</tr>";
output += "</table>";

document.write("<br>"+output);
