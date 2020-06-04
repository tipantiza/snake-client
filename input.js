let connection;

const setupInput = function(conn){
  connection = conn;
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
   } else if( data === "w"){
     connection.write("Move: up")
   } else if(data === "s"){
    connection.write("Move: down")
   } else if (data === "d"){
    connection.write("Move: right")
   } else if ( data === "a"){
    connection.write("Move: left")
   }
}

module.exports = {
  setupInput
}