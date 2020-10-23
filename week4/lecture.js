/*Week 4 Lecture Code

Chapter references in code below can be found at:
https://github.com/Sharique-Hasan/SaylaniBatch2-JavaScript/blob/master/A%20Smarter%20Way%20to%20Learn%20JavaScript.pdf


 This is a multiline comment
*/

// This is a single line comment

let x = 8;

// See chapter 13 for && ||
// See chapter 10 to 14 for if statements
if(x >= 5 && x <= 10){
  console.log("and ok");
}else{
  console.log("not ok");
}

x = 2;

if(x >= 5 || x <= 10){
  console.log("or ok");
}else{
  console.log("not ok");
}

// see chapter 39 and 40 for switch
switch(x){
  case 1: 
    console.log("It's 1");
	break;
  case 2: 
    console.log("It's 2");
	break;
  case 3: 
    console.log("It's 3");
	break;
  default:
    console.log("end");  
}

// see chapter 41
x = 1;
while(x < 5){
  console.log(x);
  x++;
}

// see chapter 18 to 20
for(let i = 1; i <= 10; i++){
  console.log(i);  
}

// using a sentinel when not sure how many times you want to loop
x = 1;
while(x != -1){
	x = Number(prompt("Enter number (-1 to quit)"));
	console.log(x);
}


