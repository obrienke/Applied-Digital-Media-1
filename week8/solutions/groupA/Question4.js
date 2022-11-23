document.getElementById("groupA").textContent = "Group A - Assessment 2";

let divEls = document.getElementsByTagName("div");
for(let i = 0; i < divEls.length; i++){
	divEls[i].textContent = divEls[i].textContent + " Div " +(i+1);
}