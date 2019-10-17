
let table = "<table>";
table += "<tr><th>number</th><th>square</th><th>cube</th></tr>";

let i = 1;
while(i<=10){
	table += "<tr><td>"+i+"</td><td>"+Math.pow(i,2)+"</td><td>"+Math.pow(i,3)+"</td></tr>";
	i++;
}

table += "</table>";

document.getElementById("div1").innerHTML = table;