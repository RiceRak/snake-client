# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers.

This is simply a multiplayer take on the genre.

## Server installation and Setup

- Before you can run this client, you will need to be running the server side, you can follow the instructions for installation [here](https://github.com/lighthouse-labs/snek-multiplayer/blob/master/README.md).

## Client installation and setup

```bash
git clone git@github.com:RiceRak/snake-client.git
cd snake-client
```
- Run the development snake client with the command below. Choose a three letter username. (Otherwise you will play with my gamertag 😘)
```bash
# Run via Node.js
node play.js "YOUR 3 LETTER NAME"
```

## How to play

- The goal is to eat and grow to become as big as possible without bumping into the _side walls_, or bumping into _ones self_, upon which you will be un-alived. ☠
- If you idle for too long, you will also be un-alived. ☠
- Your start should look like this
![Alt Text](https://postimg.cc/kB2YDK3v)
## Controls
### Movement
- w: Move up
- a: Move left
- s: Move down
- d: Move right
### Emotes
- q: QQ (cry)
- e: =D (happy)
### Restart after being un-alived
- ctrl + c: Quit client
```bash
# Run via Node.js again
node play.js "YOUR 3 LETTER NAME"
```