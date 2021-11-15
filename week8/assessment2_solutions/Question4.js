let pEl = document.getElementsByTagName("p");

for(let i = 0; i < pEl.length; i++){
	if(i%2 == 0){
		pEl[i].style.color = "blue";
	}
	if(i%2 != 0){
		pEl[i].style.color = "green";
	}
}
