document.getElementById("x").innerHTML = "<h2>This element was targeted for update by getElementById()</h2>";

let divEl = document.getElementsByClassName("y");

/*divEl[0].textContent += "This element was targeted for update by getElementsByClassName()";
divEl[1].textContent += "This element was targeted for update by getElementsByClassName()";
divEl[2].textContent += "This element was targeted for update by getElementsByClassName()";*/

for(let i = 0; i < divEl.length; i++){
	divEl[i].textContent += "This element was targeted for update by getElementsByClassName()";
}

