function login(){
	let user = document.getElementById("un").value;
	let pw = document.getElementById("passc").value;
	sessionStorage.name = user; 
	sessionStorage.password1 = pw; 
	
	if(user == "Kevin" && pw == "test"){
		alert("login ok");
		window.location.href="page2.html";
	}else{
		alert("Login invalid");
	}
}