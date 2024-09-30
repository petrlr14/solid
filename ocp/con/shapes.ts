interface Shape { 
  area(): number;
}

export class Rectangle implements Shape {
  constructor(public width: number, public height: number) { }

  area(): number {
    return this.width * this.height;
  }

}

export class Circle implements Shape {
  constructor(public radius: number) { }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class AreaCalculator {
  static calculateArea(shape: Shape): number {
    return shape.area();
  }
}