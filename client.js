const net = require('net');
const {IP, port} =  require('./constants');
const connect = () => {
  const conn = net.createConnection({
    IP,
    port
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server...");
  })
  conn.write("Name: Lt")


  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log(data);
  })
  return conn;
}

module.exports = {
  connect 
};