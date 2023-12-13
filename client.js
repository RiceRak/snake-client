// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // update function to handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });
  return conn;
};