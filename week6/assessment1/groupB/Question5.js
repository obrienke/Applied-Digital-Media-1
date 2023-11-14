/* Question 5 */

let salary = prompt("Enter Annual Gross Salary");
let tax = 0;

let d = new Date();

if(salary > 100000){
	tax = ((salary - 100000) * 0.5) + (70000 * 0.35) + (30000 * 0.25)
}else if(salary > 30000){
	tax = ((salary - 30000) * 0.35) + (30000 * 0.25)
}else{
	tax = salary * 0.25;
}


document.write("Date: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
document.write("<br><br>");
document.write("Gross Salary: " + salary);
document.write("<br><br>");
document.write("Tax: " + tax.toFixed(2));
document.write("<br><br>");
document.write("Net Salary: " + (salary - tax).toFixed(2));

