const handleUserInput = function (buffer) {
  const key = buffer.toString();
  console.log(key);
  
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
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