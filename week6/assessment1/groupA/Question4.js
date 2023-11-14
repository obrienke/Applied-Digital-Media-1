/* Question 4 */

let qty = prompt("Please enter quantity");
let disc = "No";
let cost = 20;
let rate = 0.9;

let balance = cost * qty;
document.write("<table>")
document.write("<tr><td>Quantity:</td><td>" + qty + "</td></tr><tr><td>Cost:</td><td>" + balance + "</td></tr>");

if(qty >= 5){
	disc = "Yes";
	balance *= rate;
}

document.write("<tr><td>Discount Applied:</td><td>" + disc + "</td></tr><tr><td>Outstanding Balance:</td><td>" + balance + "</td></tr>");
document.write("</table>");