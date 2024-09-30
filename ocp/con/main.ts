import { AreaCalculator, Circle, Rectangle } from './shapes';

function main() { 
  const rectagle = new Rectangle(10, 20);
  const circle = new Circle(10);

  console.log(AreaCalculator.calculateArea(rectagle));
  console.log(AreaCalculator.calculateArea(circle));

}

main();