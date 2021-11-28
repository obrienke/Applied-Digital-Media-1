/*code for exercise 5*/

function add(){
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;  
  let result = Number(x) + Number(y);
  document.getElementById("answer").textContent = result;
}

function key(){
  document.getElementById("key").innerHTML = event.key;
  if(event.key == "r"){
document.body.style.backgroundColor = "red"; 
  }else if (event.key == "g"){
document.body.style.backgroundColor = "green"; 
  }else if (event.key == "b"){
document.body.style.backgroundColor = "blue"; 
  }else{
document.body.style.backgroundColor = "white";  
  }   
}
