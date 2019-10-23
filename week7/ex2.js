//exercise 2
let res = prompt("Enter exam result");

if(res > 84){
	document.write("<h3>Merit</h3>")
}else if(res > 39){
	document.write("<h3>Pass</h3>")
}else{
	document.write("<h3>Fail</h3>")	
}

//exercise 3
let i = 1;
while(i <= 10){
	if(i%3 == 0){
		document.write("<br>"+i);
	}
	i++;
}