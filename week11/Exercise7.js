/*code for exercise 7*/
let toDoList = ["task1", "task2"];

for(let i = 0; i < toDoList.length; i++){
	document.getElementById("output").innerHTML += toDoList[i]+"<br>";
}

function add(){
	toDoList.push(document.getElementById("item").value);
	document.getElementById("output").innerHTML = "";
	for(let i = 0; i < toDoList.length; i++){
		document.getElementById("output").innerHTML += toDoList[i]+"<br>";
	}
}