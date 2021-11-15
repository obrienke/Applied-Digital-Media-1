function prime(number){
	let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }
	return isPrime;
}

let number = prompt("Enter a number");

let result = prime(number);

let pEl = document.getElementById("prime");

if(result){
	pEl.textContent = number + " is a prime number"; 
}else{
	pEl.textContent = number + " is NOT a prime number"; 	
}
