let x = 1;

while(x <= 5){
	alert("iteration "+x);
	x = x + 1;
}

//document.write method interprets html elements you pass to it
document.write("<p>This is paragraph</p><button>A button</button>");

/*target an element using the value assigned to its id attribute - refer to the html
the element is assigned to a variable and can be thought of as an object*/
let divEl = document.getElementById("div1");

/*write to the console. When the page is opened in a browser, 
hit the f12 key to see console*/
console.log(document.getElementById("div1").textContent);

/*using the variable divEl(see line 12) as a reference you can access
properties and methods associated with the element/object
in this case lets access the innerHTML property
This property stores any html contained within that element
you can assign any html to it and it will be displayed 
within that element on the web page*/ 
divEl.innerHTML= "<p>updated <i>text</i></p>";

//how to prompt a user to enter a value and assign the value entered by the user to a variable
let question = prompt("What is your name");
//output to the screen value entered by the user at the prompt
document.write("<p>"+question+"</p>");