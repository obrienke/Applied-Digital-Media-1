document.getElementById("para1").innerHTML = "Paragraph 1";

let divEl = document.getElementsByClassName("divs");

let i = 0;

while(i < divEl.length){
	divEl[i].innerHTML = "div "+i;
	i++;
}