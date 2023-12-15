const IP = "localhost";
const PORT = 50541;

const MOVE_UP = "Move: up";
const MOVE_LEFT = "Move: left";
const MOVE_DOWN = "Move: down";
const MOVE_RIGHT = "Move: right";
const SAY_CRY = "Say: QQ";
const SAY_HAPPY = "Say: =D";

// made object for export so that its cleaner and easier to require.
const keyMap = {
  w: MOVE_UP,
  a: MOVE_LEFT,
  s: MOVE_DOWN,
  d: MOVE_RIGHT,
  q: SAY_CRY,
  e: SAY_HAPPY,
};

module.exports = {
  IP,
  PORT,
  keyMap,
};