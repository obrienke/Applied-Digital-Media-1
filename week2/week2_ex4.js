let table_html = "<table>";
table_html += "<tr>"; 
table_html += "<th>Company</th><th>Contact</th><th>Country</th>";
table_html += "</tr>";
table_html += "<tr>";
table_html += "<td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td>";
table_html += "</tr>";
table_html += "<tr>";
table_html += "<td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td>";
table_html += "</tr>";
table_html += "<tr>";
table_html += "<td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td>";
table_html += "</tr>";
table_html += "</table>";

console.log("Test");
console.log(table_html);

document.getElementById("element1").innerHTML = table_html;
