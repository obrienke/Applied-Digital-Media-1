var array = ["Book", "Computer", "Shoe", "Chair"];

var term = prompt("Enter a search term: ");

if(array.indexOf(term) != -1){
	document.write("Yes, we have a "+array[array.indexOf(term)]+" in stock.");
}else{
	alert("No match was found.");
}



