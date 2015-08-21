// Dynamically evaluate JavaScript-as-string in the browser
var counter = 0;
function injectCode(js){
  var iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox","allow-scripts allow-same-origin")
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  frames[frames.length - 1].document.write(
    "<script>"+js+"\n//@ sourceURL=debug"+counter+".js<\/script>"
  );
  
  setTimeout(function(){
    frames[frames.length - 1].document.clear();
    document.body.removeChild(iframe);
  }, 1000);
}

module.exports = {
  debug: function(code){
    code = "debugger;\n"+code;
    injectCode(code);
  }
}
