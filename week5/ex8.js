
document.write("<ul>"); 
for(var i = 1; i < 3; i++){
  document.write("<li>Exercise "+i+"<ul>");
  for(var j = 1; j < 4; j++){
    document.write("<li>Set "+j+"</li>")
  }
  document.write("</ul></li>");
}
document.write("</ul>");  
