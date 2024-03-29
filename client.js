const { IP, PORT } = require("./constants");
const net = require("net");

const arg = process.argv;
let playerName = "RAK";
if (arg.length > 2) {
  playerName = arg[2];
}

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write(`Name: ${playerName}`);
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });
  return conn;

};

module.exports = {
  connect,
};