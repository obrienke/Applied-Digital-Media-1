alert("Hello JavaScript");
document.write("Hello JavaScript");

document.write("<h1>Hello JavaScript</h1>");
document.write("<h2>Hello JavaScript</h2>");

let orderedList = "<ol>";
orderedList += "<li>";
orderedList += "first";
orderedList += "</li>";
orderedList += "<li>";
orderedList += "second";
orderedList += "</li>";
orderedList += "</ol>";

document.getElementById("list").innerHTML = orderedList;

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let result = Number(num1) + Number(num2);

document.write("<h3>");
document.write(num1+" + "+num2+" = "+result);
document.write("</h3>");
