// html handler
function htmlHandler(){
	alert("HTML Event Handler");
}

//dom handler
var el = document.getElementById("b2");
el.onclick = DOMHandler; //no brackets, as don't want to run the function when code is being parsed

function DOMHandler(){
	alert("DOM Event Handler");	
}

//event listener
function eventListener(){
	alert("Event Listener");	
}

var elListen = document.getElementById("b3");
elListen.addEventListener("click",eventListener);
