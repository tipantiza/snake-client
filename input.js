const setupInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handlerUserInput);
  return stdin;
}

const handlerUserInput = function(data) {
   if(data === '\u0003'){
    process.exit();
   }
}

module.exports = {
  setupInput
}