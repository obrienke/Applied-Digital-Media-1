function sentence(){
	let n = document.getElementById("name").value;
	let a = document.getElementById("age").value;
	let c = document.getElementById("course").value;
	
	let out = "Hello " + n + ". You are " + a + " years old. You study "+c;
	//console.log(out);
	document.getElementById("output").textContent = out;
}