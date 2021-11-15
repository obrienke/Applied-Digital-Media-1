let miles = 0.62137119;
let km = 1;

document.write(km + " kilometre is " +(Math.round(miles*100.0)/100.0)+" miles <br>");
km++;

while(km <= 8){
	let result = Math.round((km * miles) * 100) / 100.0;
	document.write(km + " kilometres is " +result+" miles <br>");
	km++;
}