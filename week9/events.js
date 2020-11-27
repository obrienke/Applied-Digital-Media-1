function htmlEventHandler(){
	alert('hello from html event handler');
}

let buttonEl = document.getElementById("b2");

buttonEl.onclick = DOMEventHandler;

function DOMEventHandler(){
	alert("hello from DOM event handler");
}

function eventListener(){
	alert("hello from event listener");
}

document.getElementById("b3").addEventListener("click",eventListener);