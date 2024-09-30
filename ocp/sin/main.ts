import Rectangle, { AreaCalculator } from './rec';

function main() { 
  const rectangle = new Rectangle(10, 20);
  console.log(AreaCalculator.calculateArea(rectangle));
}

main()