function getFullName(){
	let name = document.getElementById("firstname").value + " " + document.getElementById("surname").value; 
	document.getElementById("fullname").textContent = name;
}