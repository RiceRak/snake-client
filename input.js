const { keyMap } = require("./constants");
let connection;

const handleUserInput = function(buffer) {
  const key = buffer.toString();
  if (key === '\u0003') {
    process.exit();
  }
  if (keyMap[key]) { // looking for a truthy or a falsey. If true, execute connection.write. Get used to this syntax.
    connection.write(keyMap[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setDefaultEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};