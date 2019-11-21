let name = prompt("Enter name:");

// note equality operator used (==), and not =.
// Also that a string of text uses quotes("").
// If any value contains a character or characters it 
// must be in quotes.

if(name == "Kevin"){
	document.write("Hello "+name);
}else{
	document.write(name+", you are not Kevin");
}