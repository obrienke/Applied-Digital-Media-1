//alert("linked - ex1");

let item = prompt("Enter an item");


let divEl = document.getElementById("content");

divEl.innerHTML += "<li>"+item+"</li>";

let x = prompt("Enter a number");

x = Number(x);
//x = x * 1;
//x = parseInt(x)

alert("Result is " + (+x + 5));

document.write("Line 1 <br> Line 2");

alert("Line 1 \nLine 2")
