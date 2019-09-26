
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");

let average = (num1 + num2 + num3)/3;
let largest = num1;
let smallest = num1;

if(num2 > num1 && num2 > num3){
  largest = num2;
}
if((num3 > num1)&&(num3 > num2)){
  largest = num3;
}
if((num2 < num1)&&(num2 < num3)){
  smallest = num2;
}
if((num3 < num1)&&(num3 < num2)){
  smallest = num3;
}
	  
alert("Numbers entered were "+num1+", "+num2+", and "+num3+
	  "\nlargest is "+largest+
	  "\nsmallest is "+smallest+
      "\naverage is "+average);
			
alert("Using Math Object"+
      "\nSmallest is: "+Math.min(num1, num2, num3)+
	  "\nLargest is: "+Math.max(num1, num2, num3));		
