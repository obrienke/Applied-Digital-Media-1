/*code for exercise 5*/
let shoppingList = ["Bread", "Milk"];

//function to read items from array and add them to ordered list for display in div element
function oList(){
	let output = "<ol>";
	for(let i = 0; i < shoppingList.length; i++){
		output += "<li>"+shoppingList[i]+"</li>";
	}
	output += "</ol>";
	document.getElementById("output").innerHTML = output;
}

oList();

function add(){
	shoppingList.push(document.getElementById("item").value);
	document.getElementById("output").innerHTML = ""; // clear the order list from screen
	oList(); // rebuild the ordered list for display on screen.
}
