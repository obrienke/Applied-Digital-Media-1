document.getElementById("ca2").textContent = "Wednesday November 16";

let paraEls = document.getElementsByClassName("paras");
for(let i = 0; i < paraEls.length; i++){
	paraEls[i].textContent = "Paragraph " + (i + 1) + ": " + paraEls[i].textContent;
}
