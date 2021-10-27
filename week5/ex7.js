let randomNum = Math.ceil(Math.random() * 100);
for(let i = 1; i <= 6; i++){
	var guess = Number(prompt("Guess " + i + ": Please enter a value between 1 to 100", ""));
	if (guess == randomNum) {
		alert("Good Guess. It was "+randomNum);
		break;
	}else{
		if(i == 6){
			break;
		}else{
			if(guess > randomNum){
				alert("Sorry, wrong number. Try again. Hint: It is lower than your current guess");
			}else{
				alert("Sorry, wrong number. Try again. Hint: It is higher than your current guess");
			}	
		}
	}
}
alert("game over");	