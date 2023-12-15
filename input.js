const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, SAY_CRY, SAY_HAPPY } = require("./constants");
let connection;

const handleUserInput = function (buffer) {
  const key = buffer.toString();
  

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(MOVE_UP);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT);
  }
  if (key === 'q') {
    connection.write(SAY_CRY);
  }
  if (key === 'e') {
    connection.write(SAY_HAPPY);
  }
  
};

const setupInput = function (conn) {
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
 }