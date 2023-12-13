const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // confirm that client/user has connected to the game
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    //Send a name to the server
    conn.write("Name: RAK");
    conn.write("Move: up");
    
    setInterval(() => {
      conn.write("Move: up");} , 50
    );
   
  });
  
  // update function to handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });
  return conn;

};

// module.exports = connect;
module.exports = { 
  connect,
  }