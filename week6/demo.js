let x = document.getElementById("para1");
x.textContent = "Updated text for paragraph";

document.getElementById("para2").textContent = "Updated text for paragraph";

document.getElementById("para3").innerHTML = "<i>Word</i>";

let paraEl = document.getElementsByClassName("paras");


for(let i = 0; i < paraEl.length; i++){
	paraEl[i].innerHTML = "paragraph "+(i+1);
}

let divEl = document.getElementsByTagName("div");
for(let i = 0; i < divEl.length; i++){
	divEl[i].innerHTML = "div "+(i+1);
}



