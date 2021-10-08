let number1 = prompt("Enter a number");
let number2 = prompt("Enter another number");

let add = Number(number1) + Number(number2);
let product = Number(number1) * Number(number2);
let largest = Math.max(number1, number2);        

document.write("<h3>Numbers entered are "+number1+" and "+number2+".</h3>");
document.write("<h3>The largest of which is: "+largest+"</h3>");
document.write("<h3>"+number1+" + "+number2+" = "+add+".</h3>");
document.write("<h3>"+number1+" * "+number2+" = "+product+".</h3>");
