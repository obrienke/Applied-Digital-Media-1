/* Code to generate 4 lotto numbers from a range of 1 to 30 inclusive */
let number = 0;
let count = 1;

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;

while(count <= 4){
	number = Math.random() * (31 - 1) + 1
	number = Math.floor(number);
	
	// check to ensure same number is not selected twice. Each number must be unique
	if(num1 == number || num2 == number || num3 == number || num4 == number){
		continue; // exit current iteration of loop at this point, and return to condition on the loop - count <= 4
	}
	if(count == 1){
		num1 = number;
	}else if(count == 2){
		num2 = number;
	}else if(count == 3){
		num3 = number;
	}else{
		num4 = number;
	} 
	count++;
}

document.write("Lotto numbers: " + num1 + ", " + num2 + ", " + num3 + ", " + num4);
