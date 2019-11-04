while(true){
	let guess = Number(prompt("Please enter a value between 1 to 10", ""));
	var randomNum = Math.ceil(Math.random() * 10);
	if (guess == randomNum) {
		alert("Good Guess. It was "+randomNum);
		break;
	}else{
		alert("Sorry, wrong number. It was "+randomNum+". Please try again.");
	}
}
