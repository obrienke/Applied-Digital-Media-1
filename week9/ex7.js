let numbers = [[1,2,3,4],[5,6,7,8]];

let output = "Values in array are: \n\n";

for(let i = 0; i < numbers.length; i++){
	for(let j = 0; j < numbers[i].length; j++){
		output += numbers[i][j];	
		//if(j == (numbers[i].length -1) && i == (numbers.length - 1)){
			//break;
		//}
			output += ", ";
		
	}
}

//alert(output);
alert(output.slice(0, (output.length-2)));
