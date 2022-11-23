function htmlHandler(){
	alert('button click event using html event handler');
}

el = document.getElementById("button2");

el.onclick = domHandler; //no brackets, as don't want to run the function when browser is loading the web page

function domHandler(){
	alert('button click event using dom event handler');
}


elListen = document.getElementById("button3");
elListen.addEventListener("click", eventListen);

// Could use an anonymous (no name) function as the second parameter instead. This includes the code to run when the button is clicked.
//elListen.addEventListener("click", function(){alert("button click event using event listener");});
function eventListen(){
	alert('button click event using event listener');
}