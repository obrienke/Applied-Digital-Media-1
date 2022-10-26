
/* Example of using collections to put together a list structure in HTML.
 This list will appear in <div id="list"></div> in the html page. It will be
 the same structure as the list which appears under Shopping list heading. 
*/

// arrays used to store the list items
let y = ["Bread","Milk"];
let inner1 = [["wholemeal"], ["low fat"]];

// x variable used to assign the html to.
let x = "<ol>";

for(let i = 0; i < y.length; i++){
	x = x + "<li>" + y[i]; 
	x = x + "<ul>"
	for(let inner = 0; inner < inner1[i].length; inner++){
		x = x + "<li>" + inner1[i][inner] + "</li>"
	}
	x = x + "</ul>";
	x = x + "</li>"
}

x = x + "</ol>";

alert("HTML for shopping list: \n\n" + x);

document.getElementById("list").innerHTML = x;


function function1(){
	alert("first function");
}

function1();

function function2(x){
	alert("second function is passed a value of " + x);
}

function2(1);

function function3(x, y, z, kevin){
	alert("third function is passed the values:\n\n " + x + " " + y + " " + z + " " + kevin );
}

function3(1, 100, "test", 3.4);

function function4(){
	return 1000;
	alert("Test"); // will never run, as return on line before this means you have exited the function.
}

alert("function 4 returns " + function4());

function function5(x, y, z){
	return x + y + z;
}

alert("Pass values 100, 200 and 300 to function 5 and it returns \n\n" +function5(100, 200, 300));

let function6 = (x,y) => {return x - y;}

alert("function 6 is written as an arrow function, and it is passed the values 10 and 3. \n\nIt returns the result of subtracting these values:\n\n " + function6(10, 3));
