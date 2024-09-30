import { Bird, Penguin } from './birds';

function main() { 
  const penguin = new Penguin();
  makeBirdFly(penguin);
}

function makeBirdFly (bird: Bird) { 
  bird.fly();
}

main();