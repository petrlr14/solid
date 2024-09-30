import {
  FlyingBird,
  Penguin,
  makeBirdMove
 } from './birds';

function main() { 
  const flyingBird = new FlyingBird();
  const penguin = new Penguin();
  makeBirdMove(flyingBird);
  makeBirdMove(penguin);
}

main();