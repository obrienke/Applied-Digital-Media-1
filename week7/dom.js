let paraEl = document.getElementById("para1");
//paraEl.textContent = "<b>Paragraph 1 updated</b>";

document.getElementById("para1").innerHTML = "<b>Paragraph 1 updated</b>"


let paraEls = document.getElementsByClassName("paras");

paraEls[0].textContent = "Paragraph 2 updated"
paraEls[1].textContent = "Paragraph 3 updated"


let divEls = document.getElementsByTagName("div");

for(let i = 0; i < divEls.length; i++){
	divEls[i].textContent = (i + 1) + ". Div";
}
