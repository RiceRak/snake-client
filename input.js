let connection;

const handleUserInput = function (buffer) {
  const key = buffer.toString();
  
  
  if (key === '\u0003') {
    process.exit();
  }
  
  const w = "Move: up";
  const a = "Move: left";
  const s = "Move: down";
  const d = "Move: right";
  const q = "Say: QQ"
  const e = "Say: =D"

  if (key === 'w') {
    connection.write(w);
  }
  if (key === 'a') {
    connection.write(a);
  }
  if (key === 's') {
    connection.write(s);
  }
  if (key === 'd') {
    connection.write(d);
  }
  if (key === 'q') {
    connection.write(q);
  }
  if (key === 'e') {
    connection.write(e);
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