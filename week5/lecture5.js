let paraEl = document.getElementById("para1");

console.log(paraEl);

paraEl.innerHTML = "This is a <b>paragraph</b>";

let divEls = document.getElementsByClassName("divs");

console.log(divEls);

divEls[0].textContent = "first div";


console.log(divEls.length);

let counter = 0;

while(counter < divEls.length){
	console.log("iteration: "+counter);
	divEls[counter].innerHTML = "<b>div "+(counter + 1)+"</b>";
	counter++;
}

let sectionEls = document.getElementsByTagName("section");
console.log(sectionEls);
sectionEls[1].textContent = "section 2";