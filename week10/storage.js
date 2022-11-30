function storeDtls(){
	let x = document.getElementById("input1").value;
	sessionStorage.setItem("name", x);
}

function getDtls(){
	alert(sessionStorage.getItem("name"));
}

