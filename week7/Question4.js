document.getElementById("x").textContent = "This element was targeted for update by getElementById()";


let divEls = document.getElementsByClassName("y");
for(let i = 0; i < divEls.length; i++){
	divEls[i].textContent += "This element was targeted for update by getElementsByClassName()";
}