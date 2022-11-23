let conv = 16193.57;
for(let i = 1; i <= 12; i++){
	document.write("<br>" + i + " bitcoin is worth " + (i * conv) + " euro");
	//document.write("<br>" + i + " bitcoin is worth " + (Math.round((i * conv) * 100.0) / 100.0) + " euro");
}