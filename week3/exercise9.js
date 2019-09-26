 var number1; 
 var number2;
 var number3;
 var negativeCount = 0; 
 var positiveCount = 0;
 var zeroCount = 0;

 number1 = prompt( "Enter first integer: " ); 
 number2 = prompt( "Enter second integer: " ); 
 number3 = prompt( "Enter third integer: " ); 
  
 if ( number1 == 0 )
    zeroCount = zeroCount + 1;

 if ( number1 > 0 )
    positiveCount = positiveCount + 1;

 if ( number1 < 0 )
    negativeCount = negativeCount + 1;

 if ( number2 == 0 )
    zeroCount = zeroCount + 1;

 if ( number2 > 0 )
    positiveCount = positiveCount + 1;

 if ( number2 < 0 )
    negativeCount = negativeCount + 1;

 if ( number3 == 0 )
    zeroCount = zeroCount + 1;

 if ( number3 > 0 )
    positiveCount = positiveCount + 1;

 if ( number3 < 0 )
    negativeCount = negativeCount + 1;

 var output = "<p>Zeroes entered: "+zeroCount+"</p>"+
		 "<p>Positive numbers entered: "+positiveCount+"</p>"+
		 "<p>Negative numbers entered: "+negativeCount+"</p>" ;
		 
 document.getElementById("d1").innerHTML = output;
