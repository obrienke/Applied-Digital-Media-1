/*
Discount rates:
1 to 5 apply 2% discount
6 to 10 apply 4% discount
More than 10 apply 10% discount

e.g. if qty entered is 14, then for 4 of the items apply 10% discount,
for 5 of the items (6 to 10), apply 4% discount, and for 5 of the items(1 to 5), 
apply 2% discount: Result is 133 (140 - all the discounts);	
*/

let qty = prompt("How many items");

let unit_cost = 10;
let total = 0;
let total1 = 0;
let total2 = 0;
let x = 0;

//console.log(qty)

if(qty > 10){
	x = qty - 10;
	let tenTotal = x * 10;
	
	total1 = (tenTotal  - (tenTotal * 0.1))
	qty = qty - x;
}

//console.log(qty)

if(qty > 5){
	x = qty - 5	
	let fiveTotal = x * 10;
	
	total2 = (fiveTotal  - (fiveTotal * 0.04))
	qty = qty - x;
}

//console.log(qty)

let oneTotal = qty * 10
let total3 = (oneTotal - (oneTotal * 0.02))

total = total1 + total2 + total3;

document.write("Total: " + total);