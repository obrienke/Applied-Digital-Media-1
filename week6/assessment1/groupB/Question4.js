/* Question 4 */

let days = prompt("Please enter number of days fine is overdue");
let fine = 100;
let penalty = 5;

let balance = fine;

if(days > 0){
	balance += (penalty * days) ;
}

alert("Fine:                 " + fine + "\nDays Overdue:  " + days + "\nBalance:            " + balance);
