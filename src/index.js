// Dynamically evaluate JavaScript-as-string in the browser
function injectCode(js){
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.src  = 'data:text/javascript;charset=utf-8,'+escape(js);
  document.body.appendChild(e);
}

module.exports = {
  debug: function(code){
    code = "debugger;\n"+code;
    injectCode(code);
  }
}
