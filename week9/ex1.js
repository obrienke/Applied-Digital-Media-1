var array = [];
array[0] = 4;
array[1] = 3;
array[2] = 2;
array[3] = 1;

document.write("<p>Initial Array: <br></p>");
document.write(array);

delete array[1];

document.write("<p><br>Array after deleting second element: <br></p>");
document.write(array);

array.pop();
document.write("<p><br>Array after popping last element: <br></p>");
document.write(array);

array.push(1);
document.write("<p><br>Array after pushing element to end of array: <br></p>");
document.write(array);

array[1] = 3;
document.write("<p><br>Array after assigning value of 3 to second element of array: <br></p>");
document.write(array);

var array1 = array.splice(2,2);
document.write("<p><br>Contents of two arrays after splice: <br></p>");
document.write("First array: "+array);
document.write("<br>Second array: "+array1);

document.write("<p><br>Contents of two arrays after sort: <br></p>");
document.write("First array: "+array.sort());
document.write("<br>Second array: "+array1.sort());

var array2 = array.concat(array1);

document.write("<p><br>Contents of three arrays after concat: <br></p>");
document.write("First array: "+array.sort());
document.write("<br>Second array: "+array1.sort());
document.write("<br>Third array: "+array2.sort());
