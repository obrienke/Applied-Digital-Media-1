// Question 2

let x = prompt("What day is it?");
if(x.match("Wednesday")||x.match("wednesday")||x.match("WEDNESDAY")){
	alert("Correct, it is Wednesday.")
}else{
	alert("Incorrect. It is Wednesday, not " + x);
}

 /*
 Use a prompt to ask a user what day of the week it is. Check the day entered is Wednesday. If it is, then print out the statement "Correct, it is Wednesday" using an alert. If it isn't, then print out out a message indicating it is not using an alert. For example, if the user enters "Friday" at the prompt, then an alert appears with the message "Incorrect. It is Wednesday, not Friday". See figure 2 below for example.
 */