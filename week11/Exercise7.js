let toDoList = ["task1","task2"];

let arrayOutput = "";

function add(){
	arrayOutput = "";
	let x = document.getElementById("item").value;
	toDoList.push(x);
	for(let i = 0; i < toDoList.length; i++){
		arrayOutput = arrayOutput + toDoList[i]+"<br/>";
	}
	document.getElementById("output").innerHTML = arrayOutput;
}