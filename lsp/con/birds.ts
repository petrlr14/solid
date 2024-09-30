abstract class Bird {
  abstract move(): void;
}

export class FlyingBird extends Bird { 
  move(): void {
    console.log('Bird is flying...');
  }
}

export class Penguin extends Bird {
  move(): void {
    console.log('Penguin is swimming...');
  }
}

export function makeBirdMove(bird: Bird) { 
  bird.move();
}
